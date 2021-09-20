import { VscAdd } from "react-icons/vsc";
import { useRef } from 'react';

const ModalOverlay = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleAddImage = () => {
    console.log('icon clicked')
    inputRef.current?.click()
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>New Image</h3>
        <input ref={inputRef} type="file" name="file"  style={{ display: 'none' }} onChange={handleAddImage}/>          
        {/* <AddNew onClick={handleAddImage}/> */}
        
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
          <textarea name="desc" cols={40} rows={6}></textarea>
        </div>
      </div> 
    </div>
  )
}

export default ModalOverlay
