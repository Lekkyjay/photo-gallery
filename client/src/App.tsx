import { useState } from 'react';
import './App.css';
import ImageList from './components/ImageList';
import ModalOverlay from './components/ModalOverlay';
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

  return (
    <div className="app">
      <Nav />
      <div className="container">        
        <h1 className="heading">Uploaded Images</h1>
        <ImageList />
      </div>
      <ModalOverlay />      
    </div>
  );
}

export default App;
