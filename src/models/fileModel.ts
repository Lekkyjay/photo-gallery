import mongoose, { Document } from "mongoose";

interface IFile extends Document {
  fileName: string,
  fileSize: string,
  imgWidth: number,
  imgHeight: number,
  imgDesc: string,
  imgData: Buffer
}

const FileSchema = new mongoose.Schema(
  {
    fileName: { type: String, required: true },
    fileSize: { type: String, required: true },
    imgWidth: { type: Number, required: true },
    imgHeight: { type: Number, required: true },
    imgDesc: { type: String, required: true },
    imgData: { type: Buffer, contentType: String }
  }
);

const File = mongoose.model<IFile>("File", FileSchema);

export default File;