import { ToDoItem } from "./ToDoItem"

export function ToDoList({todos, handleDelete, toggleTodo}) {

    return (
    <ul className="list">
        {todos.length === 0 && "No To-dos"}
        { //brackets run as js code
          //every item need an id so that react can update only the one with the right id
          todos.map(todo => {
            return (
             <ToDoItem 
                key={todo.id} 
                {...todo}
                handleDelete={handleDelete} 
                toggleTodo={toggleTodo}
             />)
            }
          )
        }
    </ul>
    )
}