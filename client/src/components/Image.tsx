import { FC, useState } from 'react'
import { Item } from '../Interfaces'

interface Props {
  image: Item
}

const Image: FC<Props> = ({ image }) => {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy =() => {
    copyTextToClipboard(image.imgData)
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
    <div className="item">
      <img src={image.imgData} alt="" />
      <div className="item-overlay">
        <h3 className="item-title">Image name</h3>
        <ul className="item-list">
          <li>
            <span className="item-key">size:</span>
            <span>1.2MB</span>
          </li>
          <li>
            <span className="item-key">source:</span>
            <span>192.168.9.68</span>
          </li>
          <li>
            <span className="item-key">uploaded at:</span>
            <span>2020.02.18 14:15</span>
          </li>
          <li>
            <span className="item-key">dimensions:</span>
            <span>1280 x1200</span>
          </li>
        </ul>
        <div className="item-desc">
          <h3>Description</h3>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.
          </p>
        </div>
        {isCopied ? 
          <span className="item-link">Copied</span> :
          <img src="./images/link.svg" className="item-link" alt="" onClick={handleCopy}/>
        }
      </div>      
    </div>
  )
}

export default Image
