"use client"
import {useState} from "react";

export default function List() {
  const vazio = '';

  const [task, setTask] = useState(vazio);
  const [taskList, setTaskList] = useState([]);
  const addTask = () => {

    if (task.trim() !== '') {
      setTaskList([...taskList, task]);
      setTask(vazio);
    } else{
      alert("Digite algo!")
    }
  }

  return (
      <div>
        <h3>To do list</h3>
       <div>
        <input
        type="text" placeholder="Digite uma tarefa"value={task}onChange={(param) => setTask(param.target.value)}/>
        <button onClick={addTask}>Cadastrar</button>
        </div>
      {
        taskList.map((task, index) => (
          <div key={index}>
            <p>#{index} - <span>{task}</span></p>
          </div>
        ))
      }
      </div>
  )
}


