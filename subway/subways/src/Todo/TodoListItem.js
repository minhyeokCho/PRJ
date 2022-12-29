import React from 'react';

const TodoListItem = ({todo}) => {
	const {id, text, checked} = todo;
	return (
		<li className='TodoListItem'>
			<div className=''>
				<div className='text'>{text}</div>
			</div>
		</li>
	);
};

export default TodoListItem;