export interface IFolder {
  _id: string;
  name: string;
  parentId: string | null;
  createdBy: string;
  path: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IFile {
  _id: string;
  name: string;
  originalName: string;
  size: number;
  type: string;
  extension: string;
  folderId: string | null;
  path: string;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface FileOperation {
  type: 'download' | 'delete' | 'move' | 'copy' | 'share';
  label: string;
  icon: any;
}
