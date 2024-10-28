import mongoose, { Schema, Document } from 'mongoose';
import { IFolder } from '@/types/file';

const FolderSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  parentId: {
    type: Schema.Types.ObjectId,
    ref: 'Folder',
    default: null,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

export default mongoose.models.Folder || mongoose.model<IFolder & Document>('Folder', FolderSchema);
