import './App.css';
import ImageList from './components/ImageList';
import ModalOverlay from './components/ModalOverlay';
import Nav from './components/Nav';

const App = () => {

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
