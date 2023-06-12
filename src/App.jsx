import { useState } from 'react';
import './styles.css';
import { NewTodoForm } from './NewTodoForm';
import { ToDoList } from './ToDoList';

export default function App() {
	const [todos, setTodos] = useState([]);

	function addTodo(title) {
		setTodos((curr) => {
			//if you want to use the new value you should pass a function, because setter functions will reset the entire state upon completion
			return [
				...curr,
				{ id: crypto.randomUUID(), title: title, completed: false },
			];
		});
	}

	function toggleTodo(id, completed) {
		setTodos((currentTodos) => {
			return currentTodos.map((todo) => {
				if (todo.id === id) {
					return { ...todo, completed };
				}
				return todo;
			});
		});
	}

	function handleDelete(id) {
		setTodos((currentTodos) => {
			return currentTodos.filter((todo) => todo.id !== id);
		});
	}

	return (
		<>
			<NewTodoForm onSubmit={addTodo} />
			<h1 className='header'>To-do List </h1>
			<ToDoList
				todos={todos}
				handleDelete={handleDelete}
				toggleTodo={toggleTodo}
			/>
		</>
	);
}
