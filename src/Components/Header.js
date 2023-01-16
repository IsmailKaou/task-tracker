import React from 'react'
import Button from './Button'
import {useLocation} from 'react-router-dom'

const Header = ({title ,onAdd ,showAddTask}) => {
  const location = useLocation()
  return (
    <div className='header' >
        <h1>{title}</h1>
        { location.pathname === '/' && <Button 
        text={`${showAddTask ? 'Close' : 'Add'}`} 
        color={`${showAddTask ? 'red' : 'green'}`} 
        onAdd = {onAdd} />}
    </div>
  )
}

export default Header