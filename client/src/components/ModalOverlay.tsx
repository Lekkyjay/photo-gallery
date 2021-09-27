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
  const [file, setFile] = useState<File | null>(null)
  const [imgType, setImgType] = useState<string>('')
  const [imgPreview, setImgPreview] = useState<string>('')
  const [imgDesc, setImgDesc] = useState('')
  const [error, setError] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)  

  const onChange = (e: SyntheticEvent) => {
    console.log('onchange called')
    const target = e.currentTarget as HTMLInputElement
    const selectedFile: File = (target.files as FileList)[0]
    const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image/jpg']    

    if (selectedFile && ALLOWED_TYPES.includes(selectedFile.type)) {      
      setFile(selectedFile)
      setImgType(selectedFile.type)
      console.log(selectedFile)

      let reader = new FileReader()      
      reader.readAsDataURL(selectedFile) 
      reader.onloadend = () => {
      setImgPreview(reader.result as string)
      }    
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

  const reset = () => {
    setFile(null)
    setIsOpen(false)
    setImgDesc('')
    setImgPreview('')
    setError(false)
  }

  const handleAddImage = () => {    
    inputRef.current?.click()
  }

  const handleClose = () => {
    reset()
  }

  const handleSave = async (e: FormEvent) => {
    e.preventDefault();
    const imgDim = await getImgDimension(file as File)
    const formData = new FormData()
    formData.append('file', file as File)
    formData.append('imgType', imgType)
    formData.append('imgHeight', imgDim?.imgHeight as string)
    formData.append('imgWidth', imgDim?.imgWidth as string)
    formData.append('imgDesc', imgDesc)
    try {
      const res = await axios.post('http://localhost:5000/images/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      window.location.reload()
    } 
    catch (error) {
      console.log(error)
    }
    reset()
  }

  
  return (
    <div className="modal-overlay" style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="modal-content">
        <h3>New Image</h3>
        <input ref={inputRef} type="file" name="file"  style={{ display: 'none' }} onChange={onChange}/>                  
        
        <div className="add-image-box">
          <div className="add-image-icon" onClick={handleAddImage}>
            {imgPreview ? <img src={imgPreview} width="100px" /> : <VscAdd  />}
          </div>            
          <p>
          <small style={{ color: error ? 'red' : 'inherit'}}>Only jpg or png</small>
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
