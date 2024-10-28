import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';
import { minioClient, BUCKET_NAME, ensureBucket } from '@/lib/minio/client';
import { connectDB } from '@/lib/db/connect';
import File from '@/models/File';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

// 解析 multipart/form-data
async function parseMultipartForm(request: Request) {
  const formData = await request.formData();
  const file = formData.get('file') as File;
  const folderId = formData.get('folderId') as string;
  
  if (!file) {
    throw new Error('No file uploaded');
  }

  return { file, folderId };
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: '未授权' }, { status: 401 });
    }

    // 解析上传的文件
    const { file, folderId } = await parseMultipartForm(request);
    const buffer = Buffer.from(await file.arrayBuffer());
    
    // 生成文件信息
    const originalName = file.name;
    const extension = path.extname(originalName).toLowerCase().slice(1);
    const uniqueFileName = `${uuidv4()}.${extension}`;
    const filePath = `${session.user.id}/${folderId || 'root'}/${uniqueFileName}`;

    // 确保 bucket 存在
    await ensureBucket();

    // 上传到 MinIO
    await minioClient.putObject(
      BUCKET_NAME,
      filePath,
      buffer,
      buffer.length,
      {
        'Content-Type': file.type,
      }
    );

    // 连接数据库
    await connectDB();

    // 创建文件记录
    const fileDoc = new File({
      name: originalName,
      originalName,
      size: buffer.length,
      type: file.type,
      extension,
      folderId: folderId || null,
      path: filePath,
      createdBy: session.user.id,
    });

    await fileDoc.save();

    // 返回单个文件对象而不是数组
    return NextResponse.json({
      message: '文件上传成功',
      file: fileDoc
    }, { status: 201 });

  } catch (error) {
    console.error('文件上传错误:', error);
    return NextResponse.json(
      { message: '文件上传失败' },
      { status: 500 }
    );
  }
}

export const config = {
  api: {
    bodyParser: false,
    responseLimit: false,
  },
};
