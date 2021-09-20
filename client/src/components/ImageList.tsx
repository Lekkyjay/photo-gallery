import { FC, useState } from "react"
import { VscAdd } from "react-icons/vsc";
import { Item } from "../Interfaces";
import Image from "./Image"

interface Props {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  images: Item[]
}

const ImageList: FC<Props> = ({ isOpen, setIsOpen, images }) => {
  // const images = [
  //   {
  //     fileName: 'Apple',
  //     fileSize: 1220000,
  //     imgWidth: '1280',
  //     imgHeight: '1200',
  //     imgDesc: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content',
  //     imgData: './images/lime.svg',
  //     imgSource: 'localhost:3000',
  //     uploadedAt: new Date('2021-09-17T17:39:34.888+00:00')
  //   },
  //   {
  //     fileName: 'ApplOrange',
  //     fileSize: 1220000,
  //     imgWidth: '1280',
  //     imgHeight: '1200',
  //     imgDesc: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content',
  //     imgData: './images/lime.svg',
  //     imgSource: 'localhost:3000',
  //     uploadedAt: new Date('2021-09-17T17:39:34.888+00:00')
  //   },
  //   {
  //     fileName: 'Banana',
  //     fileSize: 1220000,
  //     imgWidth: '1280',
  //     imgHeight: '1200',
  //     imgDesc: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content',
  //     imgData: './images/lime.svg',
  //     imgSource: 'localhost:3000',
  //     uploadedAt: new Date('2021-09-17T17:39:34.888+00:00')
  //   },
  //   {
  //     fileName: 'Mongo',
  //     fileSize: 1220000,
  //     imgWidth: '1280',
  //     imgHeight: '1200',
  //     imgDesc: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content',
  //     imgData: './images/lime.svg',
  //     imgSource: 'localhost:3000',
  //     uploadedAt: new Date('2021-09-17T17:39:34.888+00:00')
  //   }
  // ]

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
        : <h3>No images to display</h3>
        }             
      </div>      
    </>
  )
}

export default ImageList
