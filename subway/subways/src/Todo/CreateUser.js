import React from 'react';

const CreateUser = ({username, email, onCreate, onChange}) => {

	return (
		<div>
			<input name='username' placeholder='계정명' onChange={onChange} value={username} />
			<input name='email' placeholder='이메일' value={email} onChange={onChange} />
			<button type="button" onClick={onCreate} >등록</button>
		</div>
	);
};

export default React.memo(CreateUser);