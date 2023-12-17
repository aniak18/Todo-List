
import React from 'react';

interface TaskProps {
  task: { id: string; text: string };
  onDelete: (id: string) => void;
}

const Task: React.FC<TaskProps> = ({ task, onDelete }) => {
  return (
    <div>
      <span>{task.text}</span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
