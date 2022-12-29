import React from 'react';

const Svc_01 = () => {
	return (
		<div className="sub">
			{/* {/* <!--타이틀 --> */}
			<div className="sub_tit_area">
				<h2 className="title">멤버십 안내</h2>
				<p className="sub_txt">새로워진 이디야멤버스를 만나보세요.</p>
			</div>
			{/* <!--// 타이틀 --> */}

			{/* {/* <!--멤버십안내 배너영역 --> */}
			<div className="membership_bnr">
				<div className="txt_area">
					<h3 className="tit">EDIYA 멤버십 등급 및 혜택을 안내드립니다.</h3>
					<div className="sub_txt">
						<p className="value">WELCOME - WHITE - BLUE</p>
						<p className="txt">등급에 따른 혜택을 확인해보세요.</p>
					</div>
				</div>
				<div className="img_wrap">
					<img src="../../assets/images/guide/membership_card.png" alt="" />
				</div>
			</div >
			{/* <!--// 멤버십안내 배너영역 --> */}

			{/* {/* <!--등급별 혜택 안내 --> */}
			<div className="level_info wd_auto">
				<div className="info_box">
					<div className="tit_wrap">
						<div className="txt_area">
							<h3 className="level">WELCOME</h3>
							<p className="condition">회원 신규 가입 시</p>
						</div>
						<div className="img_area">
							<img src="../../assets/images/guide/icon_level_01.svg" alt="" />
						</div>
					</div>
					<div className="benefit_area">
						<p className="tit">신규 가입 혜택 제공</p>
						<p className="txt">신상품 음료 할인쿠폰</p>
						<p className="txt">이디야카드 최초 등록/충전 시 혜택 제공</p>
					</div>
					<p className="emp_msg">※ 상시 혜택이 아닌 이벤트 기간에 한하여 진행됩니다.</p>
				</div>
				<div className="info_box">
					<div className="tit_wrap">
						<div className="txt_area">
							<h3 className="level">WHITE</h3>
							<p className="condition">스탬프 <em>5</em>개 이상 적립 시</p>
						</div>
						<div className="img_area">
							<img src="../../assets/images/guide/icon_level_02.svg" alt="" />
						</div>
					</div>
					<div className="benefit_area">
						<p className="tit">WHITE 승급시 혜택제공</p>
						<p className="txt">신상품 & Q커머스 할인쿠폰 5매</p>
					</div>
					<p className="emp_msg">※ WHITE 할인쿠폰은 최초 승급시에 한하여 지급됩니다.</p>
				</div>
				<div className="info_box">
					<div className="tit_wrap">
						<div className="txt_area">
							<h3 className="level">BLUE</h3>
							<p className="condition">스탬프 <em>20</em>개 이상 적립 시</p>
						</div>
						<div className="img_area">
							<img src="../../assets/images/guide/icon_level_03.svg" alt="" />
						</div>
					</div>
					<div className="benefit_area">
						<p className="tit">BLUE 승급시 혜택 제공</p>
						<p className="txt">신상품 & Q커머스 할인쿠폰 10매</p>
						<p className="txt">멤버스 적립시마다 스탬프 제공<br/>(적립된 스탬프로 아메리카노 교환가능)</p>
					</div>
					<div className="benefit_area">
						<p className="tit">BLUE 등급 전용 이벤트 참여</p>
					</div>
				</div>
			</div>
			{/* <!--// 등급별 혜택 안내 --> */}

			{/* {/* <!--이용안내 --> */}
			<div className="guide_sec ">
				<h3 className="tit">이용안내</h3>
				<p className="emp_msg">※ 회원 전용 프로모션은 운영에 따라 변경될 수 있습니다.</p>
				{/* {/* <!--이용안내 목록 --> */}
				<div className="guide_wrap">
					{/* {/* <!--1세트 --> */}
					<div className="use_box">
						<div className="img_wrap">
							<img src="../../assets/images/guide/icon_guide_01.svg" alt="" />
						</div>
						<div className="txt_area">
							<p className="g_tit">스탬프 유효기간</p>
							<p className="sub_txt">스탬프 유효기간은 스탬프별 <br/>1년입니다.</p>
						</div>
					</div>
					{/* <!--// 1세트 --> */}
					<div className="use_box">
						<div className="img_wrap">
							<img src="../../assets/images/guide/icon_guide_02.svg" alt="" />
						</div>
						<div className="txt_area">
							<p className="g_tit">등급상승</p>
							<p className="sub_txt">승급조건 충족 시 익일부터 <br/>적용됩니다.</p>
						</div>
					</div>
					<div className="use_box">
						<div className="img_wrap">
							<img src="../../assets/images/guide/icon_guide_03.svg" alt="" />
						</div>
						<div className="txt_area">
							<p className="g_tit">등급기간</p>
							<p className="sub_txt">승급 일자로부터 1년간<br/>유효합니다.</p>
						</div>
					</div>
					<div className="use_box">
						<div className="img_wrap">
							<img src="../../assets/images/guide/icon_guide_04.svg" alt="" />
						</div>
						<div className="txt_area">
							<p className="g_tit">등급변경</p>
							<p className="sub_txt">1년간 등급 유지 후 승급조건에 <br />해당하는 등급으로 변경됩니다.</p>
						</div>
					</div>
				</div>
				{/* {/* <!--이용안내 목록 --> */}
			</div>
			{/* <!--// 이용안내 --> */}
		</div>
	);
};

export default Svc_01;