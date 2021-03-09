import { useState, useEffect } from "react";
import Tasks from "./Tasks";
import Topbar from "./Topbar";
import AddTask from "./AddTask";
import firebase from "../firebase/firebase";

const CompletedTasks = () => {
  //   const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    //checking If it is unmounted or not
    let unmounted = false;
    //Database Reference
    const db = firebase.database().ref("Tasks");
    //Collecting data from database and setting the state
    db.orderByChild("completed")
      .equalTo(true)
      .on("value", (snapshot) => {
        const dbFetchTasks = snapshot.val();
        const dbTasks = [];
        for (let id in dbFetchTasks) {
          dbTasks.push({ id, ...dbFetchTasks[id] });
        }
        if (!unmounted) {
          setTasks(dbTasks);
        }
      });

    //if the tasks are successfully fetched set unmounted = true
    return () => {
      unmounted = true;
    };
  }, []);

  //Add Task
  //   const addTask = (task) => {
  //     //Database Reference
  //     const dbAddTask = firebase.database().ref("Tasks");
  //     const taskId = Math.floor(Math.random() * 10000) + 1;
  //     const newTask = { taskId, ...task };
  //     dbAddTask.push(newTask);
  //     setExecTwice(!execTwice);
  //     setTasks([...tasks, newTask]);
  //     // window.location.reload();
  //   };

  console.log(tasks);

  //Delete Task
  const deleteTask = (id) => {
    //Database Reference
    const db = firebase.database().ref("Tasks").child(id);
    db.remove();
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle Reminder
  const toggleReminder = (id, todo) => {
    //Database Reference
    const db = firebase.database().ref("Tasks").child(id);
    db.update({
      reminder: !todo.reminder,
    });
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <main>
      {/* <Topbar
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />

      {showAddTask && <AddTask onAdd={addTask} />} */}

      <h3 style={{ marginBottom: "30px" }}>Completed Tasks</h3>

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks To show"
      )}
    </main>
  );
};

export default CompletedTasks;
