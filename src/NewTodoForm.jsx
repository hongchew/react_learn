import { useState } from 'react';

export function NewTodoForm(props) {
	const [newItem, setNewItem] = useState('');

	function handleSubmit(e) {
		e.preventDefault(); //prevent page from refreshing
		if (newItem === '') return;

		props.onSubmit(newItem);
		setNewItem('');
	}

	return (
		<form className='new-item-form' onSubmit={handleSubmit}>
			<div className='form-row'>
				<label htmlFor='item'>New Item</label>
				<input
					value={newItem} //setting the value to be the newItem from state
					onChange={(e) => setNewItem(e.target.value)} //setting newItem in state to be the changed input value so that it will display. Target refer to the element that triggered the event
					type='text'
					id='item'
				/>
			</div>
			<button className='btn'>Add</button>
		</form>
	);
}
