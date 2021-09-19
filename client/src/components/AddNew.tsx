import React, { FC } from 'react'
import { VscAdd } from "react-icons/vsc";

interface Props {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const AddNew: FC<Props> = ({onClick}) => {
  return (
    <div className="item open-modal" onClick={onClick}>
      <VscAdd />
    </div>
  )
}

export default AddNew
