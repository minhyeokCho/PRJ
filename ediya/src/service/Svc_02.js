import React from 'react';

const Svc_02 = () => {
	return (
		<div className="sub">
			{/* <!-- 타이틀 --> */}
			<div className="sub_tit_area">
				<h2 className="title">서비스 안내</h2>
				<p className="sub_txt">이디야멤버스 다양한 서비스를 소개합니다.</p>
			</div>
			{/* <!--// 타이틀 --> */}

			{/* <!-- 서비스안내 배너영역 --> */}
			<div className="svc_bnr">
				<p className="info_txt">이디야멤버스 회원이라면 누릴 수 있는 <br />모든 것을 안내드립니다.</p>
			</div>
			{/* <!--// 서비스안내 배너영역 --> */}

			{/* <!-- 서비스 목록 --> */}
			<div className="svc_li_wrap">
				{/* <!-- 1세트 --> */}
				<div className="svc_li">
					<div className="cotn">
						<div className="txt_area">
							<i className="i_svc evt"></i>
							<p className="num">1. 스탬프</p>
							<p className="svc_tit">이디야가 준비한 <em>풍부한 혜택</em>, 함께해요.</p>
							<p className="sub_txt">이디야에서 진행하는 다양한 이벤트 소식과 혜택을 편리하게 접하세요~! BLUE등급이 되시면 적립하신 스탬프를 다양한 혜택으로 교환하여 사용하실수 있습니다.</p>
						</div>
						<div className="img_wrap">
							<img src="../../assets/images/guide/svc_01.png" alt="" />
						</div>
					</div>
				</div>
				{/* <!--// 1세트 --> */}
				<div className="svc_li">
					<div className="cotn">
						<div className="txt_area">
							<i className="i_svc deliv"></i>
							<p className="num">2. 배달/픽업, 구독, 예약 </p>
							<p className="svc_tit"><em>다양해진 주문 서비스</em>를 이용해보세요.</p>
							<p className="sub_txt">새롭게 선보이는 배달/픽업/구독/예약 서비스를 통해 더욱 다양한 메뉴를 주문할 수 있어요.</p>
						</div>
						<div className="img_wrap">
							<img src="../../assets/images/guide/svc_02.png" alt="" />
						</div>
					</div>
				</div>
				<div className="svc_li">
					<div className="cotn">
						<div className="txt_area">
							<i className="i_svc stmp"></i>
							<p className="num">3. 이디야QR , 월렛</p>
							<p className="svc_tit"><em>결제</em>부터 <em>스탭프적립</em>, 쿠폰사용까지 <em>한번에</em></p>
							<p className="sub_txt">이디야 QR을 매장에서 보여주면 결제부터 스탬프 적립까지 한번에 가능해요. 기프트카드도 월렛에 등록하여 편리하게 사용해보세요.</p>
						</div>
						<div className="img_wrap">
							<img src="../../assets/images/guide/svc_03.png" alt="" />
						</div>
					</div>
				</div>
				<div className="svc_li">
					<div className="cotn">
						<div className="txt_area">
							<i className="i_svc story"></i>
							<p className="num">4. 이디야 스토리, E-QUEST</p>
							<p className="svc_tit"><em>신상품</em>과 <em>브랜드 소식</em>을 접하고 <em>리워드 혜택</em>도 받고</p>
							<p className="sub_txt">컨텐츠 영상을 시청하거나 퀴즈를 푸시는 고객분들께 선착순으로 스탬프 혜택을 드립니다.</p>
						</div>
						<div className="img_wrap">
							<img src="../../assets/images/guide/svc_04.png" alt="" />
						</div>
					</div>
				</div>
			</div>
			{/* <!--// 서비스 목록 --> */}
		</div>
	);
};

export default Svc_02;