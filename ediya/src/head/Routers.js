import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Svc_01 from './../service/Svc_01';
import Svc_02 from './../service/Svc_02';
import Main from './../Main';
import Evt_01 from '../event/Evt_01';

const Routers = () => {
	return (
		<Routes>
			<Route path="/" element={<Main/>} />
			<Route path="/svc_01" element={<Svc_01/>} />
			<Route path="/svc_02" element={<Svc_02/>} />
			<Route path="/evt_01" element={<Evt_01/>} />
		</Routes>
	);
};

export default Routers;