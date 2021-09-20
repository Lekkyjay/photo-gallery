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
  const [file, setFile] = useState<File | null>(null)
  const [imgPreview, setImgPreview] = useState()
  const [imgDesc, setImgDesc] = useState('')
  const [error, setError] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const textRef = useRef<HTMLTextAreaElement>(null)

  const onChange = (e: SyntheticEvent) => {
    console.log('onchange called')
    const target = e.currentTarget as HTMLInputElement
    const selectedFile: File = (target.files as FileList)[0]
    setFile(selectedFile)
    setFileName(selectedFile.name)
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
        }
      }    
      reader.readAsDataURL(selectedFile) 
    } else {
      setError(true)
      console.log('selected file is not allowed')
    }
  }  

  const getImgDimension = (file: File) => {
    return new Promise<Dim>((resolve, reject) => {
      let reader = new FileReader()  
      reader.readAsDataURL(file)    
      reader.onloadend = () => {
        let image = new Image()
        image.src = reader.result as string
        image.onload = () => {
          const imgWidth  = String(image.naturalWidth)
          const imgHeight = String(image.naturalHeight)                   
          resolve({imgWidth, imgHeight})
        }        
      }
      reader.onerror = () => {
        reject(Error('getImageDimension failed'))
      }
    })
  }

  const handleAddImage = () => {    
    inputRef.current?.click()
  }

  const handleClose = () => {
    setFile(null)
    setIsOpen(false)
    setFileName('')
  }

  const handleSave = async (e: FormEvent) => {
    e.preventDefault();
    const imgDim = await getImgDimension(file as File)
    const formData = new FormData()
    formData.append('file', file as File)
    formData.append('imgHeight', imgDim?.imgHeight as string)
    formData.append('imgWidth', imgDim?.imgWidth as string)
    formData.append('imgDesc', imgDesc)
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
    setImgDesc('')
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
          <textarea onChange={e=>setImgDesc(e.target.value)} value={imgDesc} name="desc" cols={40} rows={8}></textarea>
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
