import { FaCheckCircle } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id, task)}
    >
      <p className="task-title">
        {task.text}
        <FaCheckCircle
          style={{ color: "green", cursor: "pointer" }}
          onClick={() => onDelete(task.id, task)}
        />
      </p>
      <p>{task.day}</p>
      <p>{task.description}</p>
    </div>
  );
};

export default Task;
