import { useState } from 'react'
import Tasks from './Tasks'
import Topbar from './Topbar'
import AddTask from './AddTask'

const Main = () => {

    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Watch football',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Play football',
            day: 'Feb 6th at 2:30pm',
            reminder: false,
        },
        {
            id: 3,
            text: 'Relax',
            day: 'Feb 12th at 9:30pm',
            reminder: true,
        },
    ])

    //Add Task
    const addTask = (task) => {
        //random number for id
        const id = Math.floor(Math.random() * 1000) + 1
        console.log(id)
        const newTask = {id, ...task}
        setTasks([...tasks, newTask])
    }

    //Delete Task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))    
    }

    //Toggle Reminder
    const toggleReminder = (id) => {
        setTasks(tasks.map((task) => task.id == id ?
         {...task, reminder: !task.reminder} : task))
    }

    return (
        <main >          
            <Topbar onAdd={() => setShowAddTask(!showAddTask)} showAdd= {showAddTask}/> 

            {showAddTask && <AddTask onAdd={addTask} />}

            {tasks.length > 0 ? 
                (<Tasks tasks={tasks} onDelete={deleteTask} onToggle = {toggleReminder} /> ) : ('No tasks To show')       
            }  

        </main>
    )
}

export default Main
