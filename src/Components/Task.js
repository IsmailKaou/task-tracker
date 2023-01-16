import React from 'react'
import { FaTimes } from 'react-icons/fa'
const Task = ({task,OnClick,OnToggle}) => {
  return (
    <div  className={`task ${task.reminder === true ? 'reminder' : ''}`} onDoubleClick={() => OnToggle(task.id)}>
        <h3>
            {task.text}
            <FaTimes style={{
                color : 'red',
                cursor : 'pointer',
            }} onClick={() => OnClick(task.id)} /> 
        </h3>
        <p> {task.day} </p>
    </div>
  )
}

export default Task