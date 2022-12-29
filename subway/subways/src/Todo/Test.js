import React, { useRef, useState } from 'react';

const Modal = (props) => {
	return (
		<>
			<h3>{props.title[props.curt].tit} </h3>
			<p>{props.title[props.curt].date}</p>
		</>
	)
}

const Test = () => {
	const sortList = (title) => {
		var orderTit = [...title];
		orderTit.sort((a, b) => a.tit.toLowerCase() < b.tit.toLowerCase() ? -1 : 1);
		setTitle(orderTit)
	}
	const [title, setTitle] = useState([
		{
			id:0,
			tit:'EDIYA👍🏽',
			date:'20221022'
		},
		{
			id:1,
			tit:'CoFFEe📍',
			date:'20211222'
		},
		{
			id:2,
			tit:'StarBucks✏️',
			date:'19951022'
		},
		{
			id:3,
			tit:'coFFEE💡',
			date:'19200922'
		}
	]);

	const nexId = useRef(4)

	// const onAdd = () => {
	// 	const info = {
	// 		id:nexId.current,
	// 		tit,
	// 		date
	// 	}
	// 	setTitle([...title, info]);

	// 	nexId.current += 1;
	// }

	const [modal, setModal] = useState(false);
	const [curt, setCurt] = useState(3);
	const [inpt, setInpt] = useState('');

	const copyTxt = (i) => {
		console.log(title[i].tit);
	}

	return (
		<>
		1
			<ul>
				{
					title.map(title => (
						<li key={title.id}>
							<h2 onClick={() => {setCurt(title.id)}} >{title.tit}</h2>
							<p>{title.date}</p>
						</li>
					))
				}
			</ul>
			<button onClick={() => sortList(title)} >정렬</button>
			{/* <button onClick={() => {setModal(!modal)} } >modal</button>
			{
				modal === true ? <Modal/> : null
			} */}
			<Modal title={title} curt={curt} />

			<input onChange={(e) => {setInpt(e.target.value)} } />
			{/* <button onClick={() => onAdd()} ></button> */}
		</>
	);

};

export default Test;