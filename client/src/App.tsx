import { NONAME } from 'dns';
import { useRef, useState } from 'react';
import { VscAdd } from "react-icons/vsc";
import './App.css';
import AddNew from './components/AddNew';
import ImageList from './components/ImageList';
import Nav from './components/Nav';

export interface Item {
  fileName: string,
  fileSize: number,
  imgWidth: number,
  imgHeight: number,
  imgDesc: string,
  imgData: string
}

const App = () => {
  const [images, setImages] = useState<Item[]>([
    {
      fileName: 'Apple',
      fileSize: 1220000,
      imgWidth: 1280,
      imgHeight: 1200,
      imgDesc: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content',
      imgData: './images/lime.svg'
    },
    {
      fileName: 'ApplOrange',
      fileSize: 1220000,
      imgWidth: 1280,
      imgHeight: 1200,
      imgDesc: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content',
      imgData: './images/lime.svg'
    },
    {
      fileName: 'Banana',
      fileSize: 1220000,
      imgWidth: 1280,
      imgHeight: 1200,
      imgDesc: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content',
      imgData: './images/lime.svg'
    },
    {
      fileName: 'Mongo',
      fileSize: 1220000,
      imgWidth: 1280,
      imgHeight: 1200,
      imgDesc: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content',
      imgData: './images/lime.svg'
    }
  ])

  const inputRef = useRef<HTMLInputElement>(null)

  const handleAddImage = () => {
    console.log('icon clicked')
    inputRef.current?.click()
  }

  return (
    <div className="app">
      <Nav />
      <div className="container">        
        <h1 className="heading">Uploaded Images</h1>
        <ImageList />
      </div>

      <div className="add-image-modal-overlay">
        <div className="add-image-modal">
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
    </div>
  );
}

export default App;
