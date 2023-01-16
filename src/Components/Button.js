import React from 'react'

const Button = ({text,color,onAdd}) => {
  return (
    <div>
        <button onClick={onAdd} className='btn' style={{backgroundColor : color}} >{text}</button>
    </div>
  )
}



export default Button