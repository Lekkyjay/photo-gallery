import React, { FC } from 'react'
import { Item } from '../App'

interface Props {
  image: Item
}

const Image: FC<Props> = ({ image }) => {
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
        <img src="./images/link.svg" className="item-link" alt="" />
      </div>      
    </div>
  )
}

export default Image
