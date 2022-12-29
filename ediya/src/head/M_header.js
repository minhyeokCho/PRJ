import React from 'react';

const M_header = () => {
	return (
		<section className="m_header">
			{/* <!-- 로고 --> */}
			<h1 className="logo">
				<a href="#none"><span className="blind">EDIYA COFFEE</span></a>
			</h1>
			{/* <!--// 로고 --> */}

			{/* <!-- 햄버거버튼 --> */}
			<div className="gnb_ctrl">
				<button type="button" className="btn_nav">
					<span className="line"></span>
					<span className="line"></span>
					<span className="line"></span>
					<span className="blind">모바일 GNB메뉴 열기/닫기 버튼</span>
				</button>
			</div>
			{/* <!--// 햄버거버튼 --> */}

			{/* <!-- 모바일 GNB영역 --> */}
			<div className="m_gnb_area">
				{/* <!-- 유틸메뉴 --> */}
				<div className="m_util_menu">
					<a href="#none">로그아웃</a>
					<a href="#none">APP 다운로드</a>
				</div>
				{/* <!--// 유틸메뉴 --> */}

				{/* <!-- 모바일 GNB 스크롤영역 --> */}
				<div className="m_gnb_scroll">
					{/* <!-- 2022-12-15_수정 --> */}
					{/* <!-- 로그인전 --> */}
					<div className="m_logout">
						<p className="login_txt">로그인 하고 EDIYA만의<br/>풍부한 혜택을 누려보세요.</p>
					</div>
					{/* <!--// 로그인전 --> */}

					{/* <!-- 로그인후 --> */}
					<div className="m_login">
						{/* <!-- 레벨정보 --> */}
						<div className="user_info">
							{/* <!-- 프로필이미지 --> */}
							<div className="prf_img">
								<figure className="img">
									<img src="/assets/images/temp/temp_01.jpg" alt="" />
								</figure>
							</div>
							{/* <!--// 프로필이미지 --> */}

							{/* <!-- 레벨컨텐츠 --> */}
							<div className="lev_cotn">
								{/* <!-- 2022-12-14_수정 --> */}
								<p className="name">
									<a href="#none">이디야</a>님은
								</p>

								<p className="level"><span>WELCOME</span>등급입니다.</p>
								{/* <!--// 2022-12-14_수정 --> */}
							</div>
							{/* <!--// 레벨컨텐츠 --> */}
						</div>
						{/* <!--// 레벨정보 --> */}

						{/* <!-- 멤버십정보 --> */}
						{/* <!-- 2022-12-20_수정 --> */}
						<div className="mem_cotn">
							<div className="state more">{/* <!-- 100이상인경우 className="more" 추가 --> */}
								<p className="txt">E-드림</p>
								<span className="num">99</span>
							</div>
							<div className="state">
								<p className="txt">스탬프</p>
								<span className="num">20</span>
							</div>
							<div className="state more">
								<p className="txt">쿠폰</p>
								<span className="num">99</span>
							</div>
							<div className="state">
								<p className="txt">구독</p>
								<span className="num">9</span>
							</div>
							<div className="state">
								<p className="txt">주문내역</p>
								<span className="num">90</span>
							</div>
						</div>
						{/* <!--// 2022-12-20_수정 --> */}
						{/* <!--// 멤버십정보 --> */}
					</div>
					{/* <!--// 로그인후 --> */}
					{/* <!--// 2022-12-15_수정 --> */}

					{/* <!-- GNB --> */}
					<nav className="m_gnb_wrap">
						<div className="menu_wrap">
							<div className="sub_wrap">
								<a href="#none" className="menu_link">멤버십 안내</a>
							</div>
						</div>
						<div className="menu_wrap">
							<div className="sub_wrap">
								<a href="#none" className="menu_link">서비스 안내</a>
							</div>
						</div>
						<div className="menu_wrap">
							<a href="#none" className="menu_tit">이벤트</a>
							<div className="sub_wrap">
								<a href="#none" className="menu_link">진행중인 이벤트</a>
								<a href="#none" className="menu_link">종료된 이벤트</a>
							</div>
						</div>
						<div className="menu_wrap">
							<a href="#none" className="menu_tit">고객지원</a>
							<div className="sub_wrap">
								<a href="#none" className="menu_link">자주 하는 질문</a>{/* <!-- 2022-12-07_수정 --> */}
								<a href="#none" className="menu_link">공지사항</a>
								<a href="#none" className="menu_link">1:1 문의하기</a>
								<a href="#none" className="menu_link">1:1 문의내역</a>
								<a href="#none" className="menu_link">이용약관</a>{/* <!-- 2022-12-29_수정 --> */}
							</div>
						</div>
						<div className="menu_wrap">
							<a href="#none" className="menu_tit">마이페이지</a>
							<div className="sub_wrap">
								<a href="#none" className="menu_link">회원정보 수정</a>{/* <!-- 2022-12-14_수정 --> */}
							</div>
						</div>
					</nav>
					{/* <!--// GNB --> */}

					{/* <!-- 버튼 --> */}
					<div className="btn_wrap">
						<a href="#none" className="btn bg_gray h_40">{/* <!-- 버튼 비활성화 className="inactv" 추가 --> */}
							<span>매장찾기</span>
						</a>
						<a href="#none" className="btn main h_40">{/* <!-- 버튼 비활성화 className="inactv" 추가 --> */}
							<span>이디야몰</span>
						</a>
					</div>
					{/* <!--// 버튼 --> */}
				</div>
				{/* <!--// 모바일 GNB 스크롤영역 --> */}
			</div>
			{/* <!--// 모바일 GNB영역 --> */}
		</section>
	);
};

export default M_header;