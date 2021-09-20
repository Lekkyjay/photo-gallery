import { VscAdd } from "react-icons/vsc";
import { FC, FormEvent, SyntheticEvent, useRef, useState } from 'react';
import axios from 'axios'
import { Dim, Item } from "../Interfaces";

interface Props {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  setImages: React.Dispatch<React.SetStateAction<Item[]>>
}

const ModalOverlay: FC<Props> = ({ isOpen, setIsOpen, setImages }) => {
  const [fileName, setFileName] = useState('')
  // const [file, setFile] = useState<string | ArrayBuffer | null>(null)
  const [file, setFile] = useState<File | null>(null)
  // const [selectedFile, setSelectedFile] = useState<File>()
  const [imgPreview, setImgPreview] = useState()
  const [error, setError] = useState(false)
  const [imgDim, setImgDim] = useState<Dim | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const onChange = (e: SyntheticEvent) => {
    console.log('onchange called')
    const target = e.currentTarget as HTMLInputElement
    const selectedFile: File = (target.files as FileList)[0]
    // const x = getImgDimension(selectedFile)
    setFile(selectedFile)
    setFileName(selectedFile.name)
    // setImgDim(x)
    console.log(selectedFile)
    const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image/jpg']

    if (selectedFile && ALLOWED_TYPES.includes(selectedFile.type)) {      
      let reader = new FileReader()      
      reader.onloadend = () => {
        let image = new Image()
        image.src = reader.result as string
        image.onload = () => {
          const imgWidth  = image.naturalWidth
          const imgHeight = image.naturalHeight 
          // setImgDim({imgWidth, imgHeight})
          console.log('imgDim:', imgDim)
        }
      }    
      reader.readAsDataURL(selectedFile)    //reads file and triggers loadend when file read operation is finished
    } else {
      setError(true)
      console.log('selected file is not allowed')
    }
  }

  const getImgDimension = (file: File): Dim => {
    let imgWidth = ''
    let imgHeight = ''
    let reader = new FileReader()  
    // reader.readAsDataURL(file)    
    reader.onloadend = () => {
      let image = new Image()
      image.src = reader.result as string
      image.onload = () => {
        const imgWidth  = String(image.naturalWidth)
        const imgHeight = String(image.naturalHeight)         
        // setImgDim({imgWidth, imgHeight})
      }
    }
    reader.readAsDataURL(file)
    return { imgWidth, imgHeight }
  }

  const handleAddImage = () => {    
    inputRef.current?.click()
  }

  const handleClose = () => {
    setFile(null)
    setIsOpen(false)
    setFileName('')
    setImgDim(null)
  }

  const handleSave = async (e: FormEvent) => {
    //call api with axios
    //setImages
    // console.log('file:', file)
    e.preventDefault();
    // setImgDim(getImgDimension(file as File))
    console.log(imgDim)
    const formData = new FormData()
    formData.append('file', file as File)
    formData.append('imgHeight', imgDim?.imgHeight as string)
    formData.append('imgWidth', imgDim?.imgWidth as string)
    try {
      const res = await axios.post('http://localhost:5000/images/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
    } 
    catch (error) {
      console.log(error)
    }
    setFile(null)
    setIsOpen(false)
    setFileName('')
    setImgDim(null)
  }

  
  return (
    <div className="modal-overlay" style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="modal-content">
        <h3>New Image</h3>
        <input ref={inputRef} type="file" name="file"  style={{ display: 'none' }} onChange={onChange}/>                  
        
        <div className="add-image-box">
          <div className="add-image-icon" onClick={handleAddImage}>
            <VscAdd  />
          </div>            
          <p>
          <small>Only jpg or png</small>
          </p>
        </div>

        <div className="desc">
          <p>Description</p>
          <textarea name="desc" cols={40} rows={8}></textarea>
        </div>
        <div className="modal-footer">
          <small>By uploading an image, you accept our <span>Terms</span></small>
          <button className="modal-btn" onClick={handleSave} disabled={ file === null ? true : false }>Save</button>
        </div>
        <div className="modal-close" onClick={handleClose}>X</div>
      </div> 
    </div>
  )
}

export default ModalOverlay
