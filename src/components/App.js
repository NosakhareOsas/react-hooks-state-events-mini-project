import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [displayCategory, setCategory] = useState(CATEGORIES[0])
  const [updateList, setList] = useState(TASKS)

  function handleSelect(newEvent){
    setCategory((initialCategory) => initialCategory = CATEGORIES.find(category => category === newEvent.target.name));
  }

  function onTaskFormSubmit(newItem){
    setList([...updateList, newItem])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleSelect = {handleSelect}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList TASKS = {updateList} display={displayCategory}/>
    </div>
  );
}

export default App;
