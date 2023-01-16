import PropTypes from 'prop-types'

import React from 'react'
import Task from './Task'
const Tasks = ({ tasks, OnClick, OnToggle }) => {
  return (
    <div>
      {tasks.map(task => <Task key={task.id} task={task} OnClick={OnClick} OnToggle={OnToggle} />)}
    </div>
  )
}

// prototype criterea must exist
Task.prototype = {
  OnClick: PropTypes.func,
}

export default Tasks