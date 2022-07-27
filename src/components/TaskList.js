import React from "react";
import Task from "./Task";
import {nanoid} from "nanoid"

function TaskList({TASKS, display}) {

  const toDisplay = TASKS.filter(task => task.category === display);
  
  return (
    <div className="tasks">
      
      {display === 'All' ? 
        TASKS.map(task => <Task key={nanoid(5)} text = {task.text} category={task.category}/>)  
        : 
        toDisplay.map(task => <Task key={nanoid(5)} text = {task.text} category={task.category}/>)}
    </div>
  );
}

export default TaskList;
