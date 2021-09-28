import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import ImageList from './components/ImageList';
import ModalOverlay from './components/ModalOverlay';
import Nav from './components/Nav';
import { Item } from './Interfaces';

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [images, setImages] = useState<Item[]>([])

  useEffect(() => {
    getImages()
  }, [])

  const getImages = async () => {
    try {
      const res = await axios.get('/images')
      setImages(res.data)
      console.log('results:', res.data)      
    } catch (error) {
      console.log('Something totally broke')
    }
  }

  return (
    <div className="app">
      <Nav />
      <div className="container">        
        <h1 className="heading">Uploaded Images</h1>
        <ImageList isOpen={isOpen} setIsOpen={setIsOpen} images={images} />
      </div>
      <ModalOverlay isOpen={isOpen} setIsOpen={setIsOpen} setImages={setImages} />
    </div>
  );
}

export default App;
