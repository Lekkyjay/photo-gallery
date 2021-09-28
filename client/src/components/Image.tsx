import { FC, useState } from 'react'
import { Item } from '../Interfaces'

interface Props {
  image: Item
}

const Image: FC<Props> = ({ image }) => {
  const [isCopied, setIsCopied] = useState(false)

  let arrayBuffer = Buffer.from( image.imgData )
  let blob = new Blob( [ arrayBuffer ], { type: image.imgType } )
  let imageUrl = URL.createObjectURL(blob)
  console.log('imageUrl:', imageUrl)

  const handleCopy =() => {
    copyTextToClipboard(imageUrl)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const copyTextToClipboard = async (text: string) => {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }

  return (
    <div className="item image">
      <img src={ imageUrl } alt="gallery image" />
      <div className="item-overlay">
        <h3 className="item-title">{image.fileName}</h3>
        <ul className="item-list">
          <li>
            <span className="item-key">size:</span>
            <span>{(image.fileSize/(1024*1024)).toFixed(2)} MB</span>
          </li>
          <li>
            <span className="item-key">source:</span>
            <span>{image.imgSource}</span>
          </li>
          <li>
            <span className="item-key">uploaded at:</span>
            <span>{new Date(image.uploadedAt).toDateString()}</span>
          </li>
          <li>
            <span className="item-key">dimensions:</span>
            <span>{image.imgWidth} x {image.imgHeight}</span>
          </li>
        </ul>
        <div className="item-desc">
          <h3>Description</h3>
          <p>{image.imgDesc}</p>
        </div>
        {isCopied 
        ? <span className="item-link">Copied</span> 
        : <img src="./images/link.svg" className="item-link" alt="" onClick={handleCopy}/>
        }
      </div>      
    </div>
  )
}

export default Image
