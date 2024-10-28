import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../auth/[...nextauth]/route';
import { minioClient, BUCKET_NAME } from '@/lib/minio/client';
import { connectDB } from '@/lib/db/connect';
import File from '@/models/File';

// 解码文件名
function decodeFileName(encodedName: string): string {
  return Buffer.from(encodedName, 'base64').toString();
}

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: '未授权' }, { status: 401 });
    }

    await connectDB();

    // 获取文件信息
    const file = await File.findById(params.id);
    if (!file) {
      return NextResponse.json({ message: '文件不存在' }, { status: 404 });
    }

    // 验证权限（只能下载自己的文件，除非是管理员）
    if (file.createdBy.toString() !== session.user.id && session.user.role !== 'admin') {
      return NextResponse.json({ message: '无权访问此文件' }, { status: 403 });
    }

    // 从 MinIO 获取文件
    const fileStream = await minioClient.getObject(BUCKET_NAME, file.path);
    const fileBuffer = await streamToBuffer(fileStream);

    // 设置响应头，使用原始文件名
    const headers = new Headers();
    headers.set('Content-Type', file.type);
    headers.set('Content-Disposition', `attachment; filename*=UTF-8''${encodeURIComponent(file.originalName)}`);
    headers.set('Content-Length', file.size.toString());

    return new NextResponse(fileBuffer, {
      status: 200,
      headers,
    });

  } catch (error) {
    console.error('文件下载错误:', error);
    return NextResponse.json(
      { message: '文件下载失败' },
      { status: 500 }
    );
  }
}

// 辅助函数：将流转换为 Buffer
async function streamToBuffer(stream: NodeJS.ReadableStream): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    stream.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
    stream.on('error', (err) => reject(err));
    stream.on('end', () => resolve(Buffer.concat(chunks)));
  });
}
