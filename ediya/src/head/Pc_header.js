import React from 'react';
import { Link } from 'react-router-dom';
import Routers from "./Routers";

const Pc_header = () => {
	return (
		<section className="header">
			{/* <!-- 헤더상단영역 --> */}
			<div className="head_top">
				{/* <!-- 멤버십정보 --> */}
				<div className="top_inner">
					{/* <!-- 회원정보 --> */}
					<div className="user_info">
						<div className="mem_info_wrap">
							{/* <!-- 2022-12-07_수정 --> */}
							<p className="name">
								<a href="#none">이디야</a>님
							</p>
							{/* <!--// 2022-12-07_수정 --> */}

							{/* <!-- 툴팁 --> */}
							<div className="tooltip">
								{/* <!-- 2022-12-20_수정 --> */}
								<div className="state more">{/* <!-- 100이상인경우 className="more" 추가 --> */}
									<p className="txt">
										E-드림<em>99</em>
									</p>
								</div>
								<div className="state">
									<p className="txt">
										스탬프<em>50</em>
									</p>
								</div>
								<div className="state more">
									<p className="txt">
										쿠폰<em>99</em>
									</p>
								</div>
								<div className="state">
									<p className="txt">
										구독<em>90</em>
									</p>
								</div>
								<div className="state">
									<p className="txt">
										주문내역<em>1</em>
									</p>
								</div>
								{/* <!--// 2022-12-20_수정 --> */}
							</div>
							{/* <!--// 툴팁 --> */}
						</div>
						<p className="level"><span>WELCOME</span>등급</p>
					</div>
					{/* <!--// 회원정보 --> */}

					{/* <!-- 로그인전 --> */}
					{/* <!-- <div className="util_menu">
						<a href="#none">로그인</a>
						<a href="#none">회원가입</a>
						<a href="#none">매장찾기</a>
						<a href="#none">APP 다운로드</a>
						<a href="#none" target="_blank" className="mall">이디야몰</a>
					</div> --> */}
					{/* <!--// 로그인전 --> */}

					{/* <!-- 로그인후 --> */}
					<div className="util_menu">
						<a href="#none">로그아웃</a>
						<a href="#none">마이페이지</a>
						<a href="#none">매장찾기</a>
						<a href="#none">APP 다운로드</a>
						<a href="#none" target="_blank" className="mall">이디야몰</a>
					</div>
					{/* <!--// 로그인후 --> */}
				</div>
				{/* <!--// 멤버십정보 --> */}
			</div>
			{/* <!--// 헤더상단영역 --> */}

			{/* <!-- GNB영역 --> */}
			<div className="gnb_area">
				<div className="gnb_wrap">
					{/* <!-- 로고 --> */}
					<h1 className="logo">
						<Link to="/"><span className="blind">EDIYA COFFEE</span></Link>
					</h1>
					{/* <!--// 로고 --> */}

					{/* <!-- GNB --> */}
					<nav className="gnb">
						<ul>
							<li>
								<Link to="/svc_01" className="depth_01">맴버십 안내</Link>
							</li>
							<li>
								<Link to="/svc_02" className="depth_01">서비스 안내</Link>
							</li>
							<li className="current">{/* <!-- 메뉴 클릭시 className="current" 추가 --> */}
								<Link to="/evt_01" className="depth_01">이벤트</Link>
								<div className="sub_wrap">
									<ul>
										<li>
											<Link to="/evt_01" className="depth_02">진행중인 이벤트</Link>
										</li>
										<li>
											<a href="#none" className="depth_02">종료된 이벤트</a>
										</li>
									</ul>
								</div>
							</li>
							<li>
								<a href="#none" className="depth_01">고객지원</a>
								<div className="sub_wrap">
									<ul>
										<li>
											<a href="#none" className="depth_02">자주 하는 질문</a>{/* <!-- 2022-12-07_수정 --> */}
										</li>
										<li>
											<a href="#none" className="depth_02">1:1 문의</a>
										</li>
										<li>
											<a href="#none" className="depth_02">공지사항</a>
										</li>
										<li>
											<a href="#none" className="depth_02">이용약관</a>
										</li>
									</ul>
								</div>
							</li>
						</ul>
					</nav>
					{/* <!--// GNB --> */}
				</div>
			</div>

			<div className="gnb_bg"></div>
			{/* <!--// GNB영역 --> */}
		</section>
	);
};

export default Pc_header;