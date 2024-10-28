import mongoose, { Schema, Document } from 'mongoose';

export interface IQuickAccess extends Document {
  userId: mongoose.Types.ObjectId;
  fileId?: mongoose.Types.ObjectId;
  folderId?: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const QuickAccessSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  fileId: {
    type: Schema.Types.ObjectId,
    ref: 'File',
  },
  folderId: {
    type: Schema.Types.ObjectId,
    ref: 'Folder',
  },
}, {
  timestamps: true,
});

// 确保每个用户的每个文件/文件夹只能添加一次
QuickAccessSchema.index({ userId: 1, fileId: 1 }, { unique: true, sparse: true });
QuickAccessSchema.index({ userId: 1, folderId: 1 }, { unique: true, sparse: true });

export default mongoose.models.QuickAccess || mongoose.model<IQuickAccess>('QuickAccess', QuickAccessSchema);
