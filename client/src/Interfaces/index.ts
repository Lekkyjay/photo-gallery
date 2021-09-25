export interface Item {
  fileName: string,
  fileSize: number,
  imgWidth: string,
  imgHeight: string,
  imgDesc: string,
  imgType: string,
  imgSource: string,
  uploadedAt: Date,
  imgData: string
}

export interface Dim {
  imgWidth: string
  imgHeight: string
}