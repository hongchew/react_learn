import { useState } from "react"
import "./styles.css"

export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])
  
  function handleSubmit(e) {
    e.preventDefault() //prevent page from refreshing
    setNewItem("")
    setTodos((curr) => { //if you want to use the new value you should pass a function, because setter functions will reset the entire state upon completion
      return [
        ...curr,
        {id: crypto.randomUUID(), title: newItem, completed: false}
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id) {
          return {...todo, completed}
        }
        return todo
      })
    })
  }

  function handleDelete(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return <>
    <form className="new-item-form" onSubmit={handleSubmit}>
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input 
        value={newItem} //setting the value to be the newItem from state
        onChange={e => setNewItem(e.target.value)} //setting newItem in state to be the changed input value so that it will display. Target refer to the element that triggered the event
        type="text" 
        id="item" 
      />
    </div>
    <button className="btn">Add</button>
  </form>
  <h1 className="header">To-do List </h1>
  <ul className="list">
    {todos.length === 0 && "No To-dos"}
    { //brackets run as js code
      //every item need an id so that react can update only the one with the right id
      todos.map(todo => {
        return (
          <li key={todo.id}> 
            <label>
              <input 
                type="checkbox" 
                checked={todo.completed} 
                onChange={e => toggleTodo(todo.id, e.target.checked)}
              />
              {todo.title}
            </label>
            <button 
              className="btn btn-danger" 
              onClick={() => handleDelete(todo.id)} 
            >
              Delete
            </button>
          </li>)
      })
    }

  </ul>
  </>

}

