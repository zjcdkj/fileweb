import { Client } from 'minio';

if (!process.env.MINIO_ENDPOINT || 
    !process.env.MINIO_ACCESS_KEY || 
    !process.env.MINIO_SECRET_KEY || 
    !process.env.MINIO_BUCKET_NAME) {
  throw new Error('MinIO 配置缺失');
}

export const minioClient = new Client({
  endPoint: process.env.MINIO_ENDPOINT,
  port: parseInt(process.env.MINIO_PORT || '9000'),
  useSSL: false,
  accessKey: process.env.MINIO_ACCESS_KEY,
  secretKey: process.env.MINIO_SECRET_KEY
});

export const BUCKET_NAME = process.env.MINIO_BUCKET_NAME;

// 确保 bucket 存在
export async function ensureBucket() {
  const exists = await minioClient.bucketExists(BUCKET_NAME);
  if (!exists) {
    await minioClient.makeBucket(BUCKET_NAME);
  }
}
