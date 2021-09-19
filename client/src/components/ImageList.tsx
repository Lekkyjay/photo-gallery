import { FC, useState } from "react"
import { VscAdd } from "react-icons/vsc";
import AddNew from "./AddNew"
import Image from "./Image"

interface Item {
  fileName: string,
  fileSize: number,
  imgWidth: number,
  imgHeight: number,
  imgDesc: string,
  imgData: string
}

interface Props {
  images: Item[]
}


const ImageList: FC = () => {
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
    console.log('Modal opened')
  }

  
  

  return (
    <>
      <div className="gallery">
        {/* <AddNew onClick={openModal}/> */}
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
