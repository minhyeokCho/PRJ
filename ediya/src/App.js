import React from 'react';
import Footer from './head/Footer';
import M_header from './head/M_header';
import Pc_header from './head/Pc_header';
import Routers from './head/Routers';

const App = () => {

	// title 변경

	return (
		<>
			<div id="wrap" className="main">{/* [메인class="main"] */}
				{/* 헤더 */}
				<header id="header">
					<Pc_header/>
					<M_header/>
				</header>
				{/*// 헤더 */}

				{/* #container */}
				<div id="container">
					<div id="contents">
						<Routers/>
					</div>
				</div>
				{/*// #container */}

				{/* footer */}
				<Footer/>
				{/*// footer */}
			</div>
		</>
	);
};

export default App;