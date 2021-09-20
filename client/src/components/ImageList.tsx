import { FC, useState } from "react"
import { VscAdd } from "react-icons/vsc";
import Image from "./Image"
import { Item } from '../Interfaces/Item'

interface Props {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ImageList: FC<Props> = ({ isOpen, setIsOpen }) => {
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

  const openModal = () => {
    setIsOpen(true)
  }  

  return (
    <>
      <div className="gallery">
        <div className="item open-modal" onClick={openModal}>
          <VscAdd />
        </div>
        {images.map((image, index) => (
          <Image image={image}/>
        ))}             
      </div>      
    </>
  )
}

export default ImageList