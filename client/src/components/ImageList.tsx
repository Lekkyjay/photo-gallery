import { FC } from "react"
import { VscAdd } from "react-icons/vsc";
import { Item } from "../Interfaces";
import Image from "./Image"

interface Props {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  images: Item[]
}

const ImageList: FC<Props> = ({ isOpen, setIsOpen, images }) => {

  const openModal = () => {
    setIsOpen(true)
  }  

  return (
    <>
      <div className="gallery">
        <div className="item open-modal" onClick={openModal}>
          <VscAdd />
        </div>

        {images.length > 0 
        ? images.map((image, index) => (<Image key={index} image={image}/>)) 
        : <h3>Loading images to display ...</h3>
        }             
      </div>      
    </>
  )
}

export default ImageList
