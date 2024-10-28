import mongoose, { Schema, Document } from 'mongoose';

export interface IShare extends Document {
  fileId: mongoose.Types.ObjectId;
  folderId?: mongoose.Types.ObjectId;
  createdBy: mongoose.Types.ObjectId;
  code: string;
  expiresAt?: Date;
  password?: string;
  accessCount: number;
  createdAt: Date;
  updatedAt: Date;
}

const ShareSchema = new Schema({
  fileId: {
    type: Schema.Types.ObjectId,
    ref: 'File',
    required: true,
  },
  folderId: {
    type: Schema.Types.ObjectId,
    ref: 'Folder',
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  code: {
    type: String,
    required: true,
    unique: true,
  },
  expiresAt: {
    type: Date,
  },
  password: {
    type: String,
  },
  accessCount: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});

export default mongoose.models.Share || mongoose.model<IShare>('Share', ShareSchema);
