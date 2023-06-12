export function ToDoItem({ id, completed, title, handleDelete, toggleTodo }) {
	return (
		<li>
			<label>
				<input
					type='checkbox'
					checked={completed}
					onChange={(e) => toggleTodo(id, e.target.checked)}
				/>
				{title}
			</label>
			<button className='btn btn-danger' onClick={() => handleDelete(id)}>
				Delete
			</button>
		</li>
	);
}
