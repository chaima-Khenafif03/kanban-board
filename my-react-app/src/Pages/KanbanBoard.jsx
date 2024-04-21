import { useState } from 'react';
import './KanbanBoard.css';
import { Link } from 'react-router-dom';

const KanbanBoard = () => {
  const [tasks, setTasks] = useState({
    todo: [
      { id: 1, content: 'Get groceries😁', timestamp: new Date() },
      { id: 2, content: 'Feed the dogs', timestamp: new Date() },
      { id: 3, content: 'Mow the lawn😃', timestamp: new Date() },
    ],
    doing: [{ id: 4, content: 'Binge 80 hours of Game of Thrones😃', timestamp: new Date() },
    { id: 5, content: 'Mow the lawn💙', timestamp: new Date() , },
    { id: 6, content: 'Mow the lawn😁', timestamp: new Date() }],
    done: [
      {
        id: 7,
        content: 'Watch video of a man raising a grocery store lobster as a pet',
        timestamp: new Date(),
      },
      { id: 8, content: 'AZERTYUI 💙', timestamp: new Date() },
      { id: 9, content: 'QSDFGHJKL', timestamp: new Date() },
      { id: 10, content: 'WXCVBN?./😁', timestamp: new Date() },
    ],
  });

  const handleAddTask = (e, targetLane) => {
    e.preventDefault();
    const input = e.target.elements.taskInput;
    const value = input.value.trim();

    if (!value) return;

    const newTask = { id: Date.now(), content: value, timestamp: new Date() };

    setTasks((prevTasks) => ({
      ...prevTasks,
      [targetLane]: [...prevTasks[targetLane], newTask],
    }));

    input.value = '';
  };

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('text/plain', id.toString());
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetLane) => {
    e.preventDefault();
    const taskId = parseInt(e.dataTransfer.getData('text/plain'), 10);
    const task = tasks[targetLane].find((t) => t.id === taskId);

    if (!task) return;

    const updatedTasks = {
      ...tasks,
      todo: tasks.todo.filter((t) => t.id !== taskId),
      doing: tasks.doing.filter((t) => t.id !== taskId),
      done: tasks.done.filter((t) => t.id !== taskId),
    };

    updatedTasks[targetLane] = [...updatedTasks[targetLane], task];
    setTasks(updatedTasks);
  };

  const handleTaskDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleTaskDrop = (e, targetLane) => {
    e.preventDefault();
    const taskId = parseInt(e.dataTransfer.getData('text/plain'), 10);
    const fromLane = e.dataTransfer.getData('fromLane');

    const task = tasks[fromLane].find((t) => t.id === taskId);

    if (!task || fromLane === targetLane) return;

    const updatedTasks = {
      ...tasks,
      [fromLane]: tasks[fromLane].filter((t) => t.id !== taskId),
      [targetLane]: [...tasks[targetLane], task],
    };

    setTasks(updatedTasks);
  };

  return (
    <div>
      <div className="boardd">
      <form onSubmit={(e) => handleAddTask(e, 'todo')} id="todo-form">
      
      </form>

      <div className="lanes">
        <div className="swim-lane" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'todo')}>
          <h3 className="heading">TODO</h3>
          {tasks.todo.map((task) => (
            <p
              key={task.id}
              className="task"
              draggable="true"
              onDragStart={(e) => handleDragStart(e, task.id)}
              onDragOver={handleTaskDragOver}
              onDrop={(e) => handleTaskDrop(e, 'todo')}
            >
              {task.content}
              <span className="timestamp">{task.timestamp.toLocaleString()}</span>
            </p>
          ))}
          <Link to="/Task" id="add-card-btn" className='add-card'> <button>Add Card</button>  </Link>
        </div>

        {/* Repeat similar structure for other swim lanes */}
        <div className="swim-lane" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'doing')}>
          <h3 className="heading">Doing</h3>
          {tasks.doing.map((task) => (
            <p
              key={task.id}
              className="task"
              draggable="true"
              onDragStart={(e) => handleDragStart(e, task.id)}
              onDragOver={handleTaskDragOver}
              onDrop={(e) => handleTaskDrop(e, 'doing')}
            >
              {task.content}
              <span className="timestamp">{task.timestamp.toLocaleString()}</span>
            </p>
          ))}
          <Link to="/Task" id="add-card-btn" className='add-card'> <button>Add Card</button>  </Link>
        </div>

        <div className="swim-lane" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'done')}>
          <h3 className="heading">Done</h3>
          {tasks.done.map((task) => (
            <p
              key={task.id}
              className="task"
              draggable="true"
              onDragStart={(e) => handleDragStart(e, task.id)}
              onDragOver={handleTaskDragOver}
              onDrop={(e) => handleTaskDrop(e, 'done')}
            >
              {task.content}
              <span className="timestamp">{task.timestamp.toLocaleString()}</span>
            </p>
          ))}
          <Link to="/Task" id="add-card-btn" className='add-card'> <button>Add Card</button>  </Link>
        </div>
      </div>
    </div>
    </div>
  );
    
};

export default KanbanBoard;
