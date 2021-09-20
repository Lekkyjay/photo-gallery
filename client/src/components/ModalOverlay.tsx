import { VscAdd } from "react-icons/vsc";
import { FC, useRef } from 'react';

interface Props {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalOverlay: FC<Props> = ({ isOpen, setIsOpen }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleAddImage = () => {
    console.log('icon clicked')
    inputRef.current?.click()
  }

  return (
    <div className="modal-overlay" style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="modal-content">
        <h3>New Image</h3>
        <input ref={inputRef} type="file" name="file"  style={{ display: 'none' }} onChange={handleAddImage}/>                  
        
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
          <button className="modal-btn">Save</button>
        </div>
        <div className="modal-close" onClick={()=>setIsOpen(false)}>X</div>
      </div> 
    </div>
  )
}

export default ModalOverlay
