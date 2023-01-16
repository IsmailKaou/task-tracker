import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";
import Footer from "./Components/Footer";
import About from "./Components/About";

function App() {

  const [showAddTask, setshowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  })

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }

  // DELETE
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' })

    setTasks(tasks.filter(task => task.id !== id));
  }

  // UPDATE
  const toggleReminder = async (id) => {
    const tasktoToggle = await fetchTask(id)

    const updTask = { ...tasktoToggle, reminder: !tasktoToggle.reminder }

    const res = fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updTask)
    })

    const data = await res.json()

    setTasks(tasks.map(task => task.id === id ? task = { ...task, reminder: data.reminder } : task))
  }

  // ADD
  const addTask = async (task) => {
    // const id = Math.floor(Math.random() * 10000) +1 ;
    // const newTask = {id , ...task}
    // setTasks([...tasks, newTask])

    const res = await fetch(`http://localhost:5000/tasks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },

      body: JSON.stringify(task) // we sending task as JSON
    })

    const data = await res.json()
    //data is the new task that we just add 
    setTasks([...tasks, data])
  }




  return (
    <BrowserRouter>
      <div className="Container">
        <Header title="Task List" onAdd={() => setshowAddTask(!showAddTask)} showAddTask={showAddTask} />

        <Routes>
          <Route path='/' element={
            <>
              {/* Add form */}
              {showAddTask && <AddTask onAdd={addTask} />}

              {/* Tasks List */}
              {tasks.length > 0 ? <Tasks tasks={tasks} OnClick={deleteTask} OnToggle={toggleReminder} /> : "No tasks to display"}
            </>
          } />

          <Route path='/About' element={<About />}></Route>
        </Routes>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
