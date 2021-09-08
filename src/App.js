import React, {useState} from "react";

import Region from "./Components/region/region";
import ListItem from './Components/list/list';
import NewTaskInput from './Components/list/newtask';

import "./App.scss";

const App = () => {
  const [tasks, setTasks] = useState([]);

  function addNewTask(task) {
    const itemsCopy = Array.from(tasks);
    itemsCopy.push({id: tasks.length, value: task});
    setTasks(itemsCopy);
  }

  function updateTask({target}, index) {
    const itemsCopy = Array.from(tasks);
    itemsCopy.splice(index, 1, { id: index, value: target.value });
    setTasks(itemsCopy);
  }

  function deleteTask(index) {
    const itemsCopy = Array.from(tasks);
    itemsCopy.splice(index, 1);
    setTasks(itemsCopy);
  }

    return(
      <div className="main">
      <div className="header">
      <h1 className="title-list">Make your list of countries</h1>
      <NewTaskInput onSubmit={addNewTask} />
      {tasks.map(({id, value}, index) => (
        <ListItem
        key={id}
        value={value}
        onChange={(event) => updateTask(event, index)}
        onDelete={() => deleteTask(index)}
        />
      ))}
      </div>
        <Region />
      </div>
  )
};

export default App;