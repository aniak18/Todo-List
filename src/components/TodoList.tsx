
import React, { useState } from 'react';
import Task from './Task';
import { v4 as uuidv4 } from 'uuid';
import './TodoList.css';

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<{ id: string; text: string }[]>([]);
  const [newTaskText, setNewTaskText] = useState<string>('');

  const addTask = () => {
    if (newTaskText.trim() !== '') {
      setTasks([...tasks, { id: uuidv4(), text: newTaskText }]);
      setNewTaskText('');
    }
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h2>TODO LIST</h2>
      <input
        type="text"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={deleteTask} />
      ))}
    </div>
  );
};

export default TodoList;
