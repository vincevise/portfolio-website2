import React, { ReactNode } from 'react'

type Props = {
    children:ReactNode;
    title?:string
}

const InputContainerStyle = ({children, title= " input"}: Props) => {
  return (
    <div className='input-container-style border borde-gray-200 bg-white shadow contianer-border-style-sm relative'>
      <div className='absolute top-4 left-4 '>{title}</div>
        <div className='w-full h-full max-w-lg mx-auto flex items-center justify-center'>
            {children}
        </div>
    </div>
  )
}

export default InputContainerStyle