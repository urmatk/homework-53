import React, {useState} from 'react';
import './App.css';
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import Task from "./Task/Task";

function App() {
  const [newTask, setText] = useState([
      {text: 'work', key: 1123},
      {text: 'shopping', key: 15154},
      {text: 'car', key: 445454},
      {text: 'fly', key: 15217417},
  ]);

  const [textCreation, settextCreation] = useState('');
  const currentTask= (event: React.ChangeEvent<HTMLInputElement>) => {

      settextCreation(event.target.value);
  }

  const addTask = () => {
    const task =  {
        text: textCreation,
        key: 585985,
    }

    const newTaskCopy = [...newTask];
    newTaskCopy.push(task);
    setText(newTaskCopy);
  }


  return (
    <div className="App">
      <div className="blok">
          <AddTaskForm
              currentTasks = {event => currentTask(event)}
              onAddClick = {() => addTask()}
          />

          {newTask.map((person) => {
              return <Task
                  text={person.text}
                  key={person.key}
                  />
          })}

      </div>

    </div>

  );
}

export default App;
