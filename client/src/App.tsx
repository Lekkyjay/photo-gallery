import { useState } from 'react';
import './App.css';
import ImageList from './components/ImageList';
import ModalOverlay from './components/ModalOverlay';
import Nav from './components/Nav';

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="app">
      <Nav />
      <div className="container">        
        <h1 className="heading">Uploaded Images</h1>
        <ImageList isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <ModalOverlay isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default App;
