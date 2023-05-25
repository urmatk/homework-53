import React, {useState} from 'react';
import './App.css';
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import Task from "./Task/Task";
import {nanoid} from "nanoid";


function App() {
  const [newTask, setText] = useState([
      {text: 'work', key: nanoid()},
      {text: 'shopping', key: nanoid()},
      {text: 'car', key: nanoid()},
      {text: 'fly', key: nanoid()},
  ]);

    const removeTask = (key: string) => {
        const newTaskCopy = [...newTask];
        const index = newTask.findIndex(Task => Task.key === key);
        newTaskCopy.splice(index, 1);
        setText(newTaskCopy);
    };

  const [textCreation, settextCreation] = useState('');
  const currentTask= (event: React.ChangeEvent<HTMLInputElement>) => {
      settextCreation(event.target.value);
  }

  const addTask = () => {
    const task =  {
        text: textCreation,
        key: nanoid(),
    }

    const newTaskCopy = [...newTask];
    if(task.text.length > 0) {
        newTaskCopy.push(task);
        setText(newTaskCopy);
    } else {
        alert('Введите задачу')
    }

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
                  onRemoveTask={() => removeTask(person.key)}
                  />
          })}
      </div>
    </div>

  );
}

export default App;
