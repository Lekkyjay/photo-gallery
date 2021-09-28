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
  const [error, setError] = useState(false)

  useEffect(() => {
    getImages()
  }, [])

  const getImages = async () => {
    try {
      setError(false)
      const res = await axios.get('/images')
      setImages(res.data)
      console.log('results:', res.data)      
    } catch (error) {
      setError(true)
      console.log('Something totally broke', error)
    }
  }

  return (
    <div className="app">
      <Nav />
      <div className="container">        
        <h1 className="heading">Uploaded Images</h1>
        {error 
          ? <h3>Error</h3>
          : <ImageList isOpen={isOpen} setIsOpen={setIsOpen} images={images} />
        }        
      </div>
      <ModalOverlay isOpen={isOpen} setIsOpen={setIsOpen} setImages={setImages} />
    </div>
  );
}

export default App;
