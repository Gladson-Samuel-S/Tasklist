import { useState, useEffect } from "react";
import Tasks from "./Tasks";
import Topbar from "./Topbar";
import AddTask from "./AddTask";
import firebase from "../firebase/firebase";
import { useAuth } from "../contexts/AuthContext";

const Main = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [execTwice, setExecTwice] = useState(false);
  const { currentUser } = useAuth();

  //Fetching Tasks from database
  useEffect(() => {
    //checking If it is unmounted or not
    let unmounted = false;
    //Database Reference
    const db = firebase.database().ref(currentUser.uid);
    //Collecting data from database and setting the state
    db.orderByChild("completed")
      .equalTo(false)
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
  }, [execTwice]);

  //Add Task
  const addTask = (task) => {
    //Database Reference
    const dbAddTask = firebase.database().ref(currentUser.uid);
    const taskId = Math.floor(Math.random() * 10000) + 1;
    const newTask = { taskId, ...task };
    dbAddTask.push(newTask);
    setExecTwice(!execTwice);
    setTasks([...tasks, newTask]);
    // window.location.reload();
  };

  // console.log(tasks);

  //Delete Task
  const deleteTask = (id, todo) => {
    //Database Reference
    // const db = firebase.database().ref("Tasks").child(id);
    // db.remove();
    const db = firebase.database().ref(currentUser.uid).child(id);
    db.update({
      completed: !todo.completed,
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle Reminder
  const toggleReminder = (id, todo) => {
    //Database Reference
    const db = firebase.database().ref(currentUser.uid).child(id);
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
      <Topbar
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />

      {showAddTask && <AddTask onAdd={addTask} />}

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks To show"
      )}
    </main>
  );
};

export default Main;
