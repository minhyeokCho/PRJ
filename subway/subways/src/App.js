
import { useCallback, useMemo, useRef, useState } from 'react';
import './App.css';
import CreateUser from './Todo/CreateUser';
import Test from './Todo/Test';
import TodoList from './Todo/TodoList';
import TodoListItem from './Todo/TodoListItem';
import TodoTemplate from './Todo/TodoTemplate';
import UserList from './Todo/UserList';

function countActiveUsers(users) {
	console.log('수를 세는중');
	return users.filter(user => user.active).length;
}

function App() {
	const nextId = useRef(4);

	const [users, setUsers] = useState([
		{
			id: 1,
			username: 'velopert',
			email: 'public.velopert@gmail.com',
			active:true
		},
		{
			id: 2,
			username: 'tester',
			email: 'tester@example.com',
			active:false
		},
		{
			id: 3,
			username: 'liz',
			email: 'liz@example.com',
			active:false
		}
	])


	const [inputs, setInputs] = useState({
		username:'', email:''
	});

	const {username, email} = inputs;
	const onChange = e => {
		const {name, value} = e.target;
		setInputs({
			...inputs,
			[name]:value
		})
	}

	//생성
	// const onCreate = () => {
	// 	const user = {
	// 		id:nextId.current,
	// 		username:username,
	// 		email:email
	// 	};
	// 	setUsers([...users,user])
	// 	setInputs({
	// 		username : '',
	// 		email:''
	// 	});

	// 	nextId.current += 1;
	// };

	const onCreate = useCallback(() => {
		const user = {
			id:nextId.current,
			username,
			email
		};
		setUsers([...users,user])
		setInputs({
			username : '',
			email:''
		});

		nextId.current += 1;
	}, [username, email])

	// 삭제
	// const onRemove = id => {
	// 	setUsers(users.filter(user => user.id !== id));
	// }

	const onRemove = useCallback(id => {
		setUsers(users => users.filter(user => user.id !== id));
	}, [])

	// 수정
	// const onToggle= id => {
	// 	setUsers(
	// 		users.map(user => user.id === id ? {...user, active: !user.active} : user)
	// 	)
	// }

	const onToggle = useCallback(id => {
		setUsers(
			users => users.map(user => user.id === id ? {...user, active: !user.active} : user)
		)
	}, [])

	const count = useMemo(() => countActiveUsers(users), [users]);

	return (
		<>
			<CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
			<UserList users={users} onRemove={onRemove} onToggle={onToggle} />
			<div> 사용자수 : {count} </div>
			<Test/>
		</>
	);
}

export default App;
