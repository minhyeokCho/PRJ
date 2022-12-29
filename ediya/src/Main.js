import React from 'react';
// import './assets/css/main.css'

const Main = () => {
	return (
		<>
			{/* <!-- 메인베너 --> */}
			<div className="sec_bnr">
				<div className="cotn">
					{/* <!-- 베너슬라이드 --> */}
					<div className="main_bnr_wrap">
						<div className="bnr_slide swiper">
							<div className="swiper-wrapper">
								{/* <!-- 1세트 --> */}
								<div className="bnr_group swiper-slide">
									{/* <!-- 텍스트영역 --> */}
									<div className="txt_area">
										<p className="tit">새롭게 달라진 <strong>EDIYA 멤버십</strong><br/><strong>등급</strong> 및 <strong>혜택</strong>을 한눈에</p>
										<p className="txt">새로워진 이디야멤버스를 만나보세요.</p>
									</div>
									{/* <!--// 텍스트영역 --> */}

									{/* <!-- 이미지영역 --> */}
									<div className="img_area">
										<figure className="img">
											<img src="../../assets/images/main/bnr_mem_01.png" alt="메인 베너 이미지"/>
										</figure>
									</div>
									{/* <!--// 이미지영역 --> */}

									<a href="#none" className="go_view"><span className="blind">멤버십안내바로가기</span></a>
								</div>
								{/* <!--// 1세트 --> */}
								<div className="bnr_group swiper-slide">
									<div className="txt_area">
										<p className="tit">새롭게 달라진 <strong>EDIYA 멤버십</strong><br/><strong>등급</strong> 및 <strong>혜택</strong>을 한눈에2번</p>
										<p className="txt">새로워진 이디야멤버스를 만나보세요.</p>
									</div>
									<div className="img_area">
										<figure className="img">
											<img src="../../assets/images/main/bnr_mem_01.png" alt="메인 베너 이미지"/>
										</figure>
									</div>
									<a href="#none" className="go_view"><span className="blind">멤버십안내바로가기</span></a>
								</div>
								<div className="bnr_group swiper-slide">
									<div className="txt_area">
										<p className="tit">새롭게 달라진 <strong>EDIYA 멤버십</strong><br/><strong>등급</strong> 및 <strong>혜택</strong>을 한눈에3번</p>
										<p className="txt">새로워진 이디야멤버스를 만나보세요.</p>
									</div>
									<div className="img_area">
										<figure className="img">
											<img src="../../assets/images/main/bnr_mem_01.png" alt="메인 베너 이미지"/>
										</figure>
									</div>
									<a href="#none" className="go_view"><span className="blind">멤버십안내바로가기</span></a>
								</div>
								<div className="bnr_group swiper-slide">
									<div className="txt_area">
										<p className="tit">새롭게 달라진 <strong>EDIYA 멤버십</strong><br/><strong>등급</strong> 및 <strong>혜택</strong>을 한눈에5번</p>
										<p className="txt">새로워진 이디야멤버스를 만나보세요.</p>
									</div>
									<div className="img_area">
										<figure className="img">
											<img src="../../assets/images/main/bnr_mem_01.png" alt="메인 베너 이미지"/>
										</figure>
									</div>
									<a href="#none" className="go_view"><span className="blind">멤버십안내바로가기</span></a>
								</div>
							</div>

							{/* <!-- 인디케이터 --> */}
							<div className="indi_wrap">
								<div className="prog_bar"></div>{/* <!-- progressbar --> */}
								{/* <!-- paging --> */}
								<div className="slide_paging">
									<span className="active"></span>
									<span>/</span>
									<span className="tot"></span>
								</div>
								{/* <!--// paging --> */}

								{/* <!-- 정지/재생 --> */}
								<button type="button" className="btn_pause">
									<span className="blind">슬라이드정지버튼</span>
								</button>
								{/* <!--// 정지/재생 --> */}
							</div>
							{/* <!--// 인디케이터 --> */}
						</div>
					</div>
					{/* <!--// 베너슬라이드 --> */}

					{/* <!-- 스크롤 --> */}
					<div className="scr">
						<span>SCROLL</span>
						<i className="i_scr"></i>
					</div>
					{/* <!--// 스크롤 --> */}
				</div>
			</div>
			{/* <!--// 메인베너 --> */}

			{/* <!-- 서비스안내 --> */}
			<section className="sec_svc">
				<div className="cotn">
					{/* <!-- 타이틀영역 --> */}
					<div className="sec_tit" data-aos="fade-up" data-aos-duration="900">
						<p className="menu">서비스안내</p>
						<h2 className="tit">이디야멤버스 회원이라면<br/>누릴 수 있는 모든 것</h2>
					</div>
					{/* <!--// 타이틀영역 --> */}

					<div className="svc_area">
						<div className="svc_wrap cotn_r">
							{/* <!-- 이미지영역 --> */}
							<div className="img_area" data-aos="fade-up" data-aos-duration="900" data-aos-offset="250">
								<img src="../../assets/images/main/svc_01.png"/>
							</div>
							{/* <!--// 이미지영역 --> */}

							{/* <!-- 텍스트영역 --> */}
							<div className="txt_area" data-aos="fade-up" data-aos-duration="900" data-aos-offset="300">
								<i className="i_svc evt"></i>
								<p className="tit">이디야가 준비한 <strong>풍부한</strong> <strong>혜택</strong>, 함께해요.</p>
								<p className="txt">이디야에서 진행하는 다양한 이벤트 소식과 혜택을 편리하게 접하세요~! BLUE등급이 되시면 적립하신 스탬프를 다양한 혜택으로 교환하여 사용하실수 있습니다.</p>
								<a href="#none" className="btn_txt"><span>자세히보기</span></a>
							</div>
							{/* <!--// 텍스트영역 --> */}
						</div>
						<div className="svc_wrap cotn_l">
							{/* <!-- 이미지영역 --> */}
							<div className="img_area" data-aos="fade-up" data-aos-duration="900" data-aos-offset="250">
								<img src="../../assets/images/main/svc_02.png"/>
							</div>
							{/* <!--// 이미지영역 --> */}

							{/* <!-- 텍스트영역 --> */}
							<div className="txt_area" data-aos="fade-up" data-aos-duration="900" data-aos-offset="300">
								<i className="i_svc deliv"></i>
								<p className="tit"><strong>다양해진 주문 서비스</strong>를 이용해보세요.</p>
								<p className="txt">새롭게 선보이는 배달/픽업/구독/예약 서비스를 통해 더욱 다양한 메뉴를 주문할 수 있어요.</p>
								<a href="#none" className="btn_txt"><span>자세히보기</span></a>

							</div>
							{/* <!--// 텍스트영역 --> */}
						</div>
						<div className="svc_wrap cotn_r">
							{/* <!-- 이미지영역 --> */}
							<div className="img_area" data-aos="fade-up" data-aos-duration="900" data-aos-offset="250">
								<img src="../../assets/images/main/svc_03.png"/>
							</div>
							{/* <!--// 이미지영역 --> */}

							{/* <!-- 텍스트영역 --> */}
							<div className="txt_area" data-aos="fade-up" data-aos-duration="900" data-aos-offset="300">
								<i className="i_svc stmp"></i>
								<p className="tit"><strong>결제</strong>부터 <strong>스탬프적립</strong>, 쿠폰사용까지 <strong>한번에</strong></p>
								<p className="txt">이디야 QR 만 보여주면 매장에서 결제부터 스탬프 적립까지 가능해요. 이젠 기프트카드도 월렛에 등록하여 편하게 주문해보세요.</p>
								<a href="#none" className="btn_txt"><span>자세히보기</span></a>
							</div>
							{/* <!--// 텍스트영역 --> */}
						</div>
						<div className="svc_wrap cotn_l">
							{/* <!-- 이미지영역 --> */}
							<div className="img_area" data-aos="fade-up" data-aos-duration="900" data-aos-offset="250">
								<img src="../../assets/images/main/svc_04.png"/>
							</div>
							{/* <!--// 이미지영역 --> */}

							{/* <!-- 텍스트영역 --> */}
							<div className="txt_area" data-aos="fade-up" data-aos-duration="900" data-aos-offset="300">
								<i className="i_svc story"></i>
								<p className="tit"><strong>신상품</strong>과 <strong>브랜드소식</strong>을 접하고 <strong>리워드 혜택</strong>도 받고</p>
								<p className="txt">컨텐츠 영상을 시청하거나 퀴즈를 푸시는 고객분들께 선착순으로 스탬프혜택을 드립니다.</p>
								<a href="#none" className="btn_txt"><span>자세히보기</span></a>
							</div>
							{/* <!--// 텍스트영역 --> */}
						</div>
					</div>
				</div>
			</section>
			{/* <!--// 서비스안내 --> */}

			{/* <!-- 이벤트 --> */}
			<section className="sec_evt">
				<div className="cotn">
					{/* <!-- 타이틀영역 --> */}
					<div className="sec_tit">
						<p className="menu">이벤트</p>
						<h2 className="tit">이디야가 드리는 혜택</h2>
						<p className="noti_txt">* 참여 및 혜택은 모두 APP 을 통해서 받으실 수 있습니다.</p>

						{/* <!-- 슬라이드버튼 --> */}
						<div className="sw_btn_wrap">
							<div className="btn_slide prev"></div>

							{/* <!-- 정지/재생 --> */}
							<button type="button" className="btn_slide pause">
								<span className="blind">슬라이드정지버튼</span>
							</button>
							{/* <!--// 정지/재생 --> */}

							<div className="btn_slide next"></div>

							{/* <!-- 전체보기 --> */}
							<div className="btn_all">
								<a href="#none" className="btn">
									<span>전체보기</span>
									<i className="i_arr"></i>
								</a>
							</div>
							{/* <!--// 전체보기 --> */}
						</div>
						{/* <!--// 슬라이드버튼 --> */}
					</div>
					{/* <!--// 타이틀영역 --> */}

					{/* <!-- 이벤트슬라이드 --> */}
					<div className="evt_slide_wrap">
						<div className="evt_slide swiper">
							<div className="swiper-wrapper">
								{/* <!-- 1세트 --> */}
								<div className="evt_wrap on_dim swiper-slide">{/* <!-- 참여완료 dim노출시 className="on_dim"추가 --> */}
									{/* <!-- 이미지영역 --> */}
									<div className="img_area">
										<figure className="img">
											<img src="../../assets/images/temp/temp_08.jpg"/>
										</figure>

										{/* <!-- 2022-12-26_수정 --> */}
										{/* <!-- 상태라벨 --> */}
										<div className="flag_wrap">
											<p className="flag eq">E-QUEST</p>{/* <!-- 상태라벨:E-QUEST --> */}
											<p className="flag new">NEW</p>{/* <!-- 상태라벨:NEW --> */}
											<p className="flag reward">스탬프</p>{/* <!-- 상태라벨:스탬프 --> */}
											<p className="flag reward">쿠폰</p>{/* <!-- 상태라벨:쿠폰 --> */}
											<p className="flag reward">경품</p>{/* <!-- 상태라벨:경품 --> */}
										</div>
										{/* <!--// 상태라벨 --> */}

										{/* <!-- 딤드 --> */}
										<div className="state">
											<p className="txt">참여한 이벤트입니다.</p>
										</div>
										{/* <!-- 딤드 --> */}
										{/* <!--// 2022-12-26_수정 --> */}
									</div>
									{/* <!--// 이미지영역 --> */}

									{/* <!-- 텍스트영역 --> */}
									<div className="txt_area">
										<p className="tit">Funky Fresh, 2023 다이어리 E-드림 프로모션 먹고 쓰는 흑임자, '그레이 필기구 굿즈 세트' 프로모션</p>
										<p className="date">2022.11.07 ~ 2022.11.14</p>
									</div>
									{/* <!--// 텍스트영역 --> */}

									<a href="#none" className="go_view"><span className="blind">이벤트바로가기</span></a>
								</div>
								{/* <!--// 1세트 --> */}
								<div className="evt_wrap swiper-slide">
									<div className="img_area">
										<figure className="img">
											<img src="../../assets/images/temp/temp_03.jpg"/>
										</figure>
										<div className="flag_wrap">
											<p className="flag reward">스탬프</p>
											<p className="flag reward">쿠폰</p>
											<p className="flag reward">경품</p>
										</div>
										<div className="state">
											<p className="txt">참여한 이벤트입니다.</p>
										</div>
									</div>
									<div className="txt_area">
										<p className="tit">Funky Fresh, 2023 다이어리 E-드림 프로모션</p>
										<p className="date">2022.11.07 ~ 2022.11.14</p>
									</div>
									<a href="#none" className="go_view"><span className="blind">이벤트바로가기</span></a>
								</div>
								<div className="evt_wrap swiper-slide">
									<div className="img_area">
										<figure className="img">
											<img src="../../assets/images/temp/temp_04.jpg"/>
										</figure>
										<div className="flag_wrap">
											<p className="flag reward">스탬프</p>
											<p className="flag reward">쿠폰</p>
											<p className="flag reward">경품</p>
										</div>
										<div className="state">
											<p className="txt">참여한 이벤트입니다.</p>
										</div>
									</div>
									<div className="txt_area">
										<p className="tit">Funky Fresh, 2023 다이어리 E-드림 프로모션</p>
										<p className="date">2022.11.07 ~ 2022.11.14</p>
									</div>
									<a href="#none" className="go_view"><span className="blind">이벤트바로가기</span></a>
								</div>
								<div className="evt_wrap swiper-slide">
									<div className="img_area">
										<figure className="img">
											<img src="../../assets/images/temp/temp_05.jpg"/>
										</figure>
										<div className="flag_wrap">
											<p className="flag eq">E-QUEST</p>
											<p className="flag new">NEW</p>
										</div>
										<div className="state">
											<p className="txt">참여한 이벤트입니다.</p>
										</div>
									</div>
									<div className="txt_area">
										<p className="tit">Funky Fresh, 2023 다이어리 E-드림 프로모션</p>
										<p className="date">2022.11.07 ~ 2022.11.14</p>
									</div>
									<a href="#none" className="go_view"><span className="blind">이벤트바로가기</span></a>
								</div>
								<div className="evt_wrap swiper-slide">
									<div className="img_area">
										<figure className="img">
											<img src="../../assets/images/temp/temp_06.jpg"/>
										</figure>
										<div className="flag_wrap">
											<p className="flag eq">E-QUEST</p>
											<p className="flag new">NEW</p>
										</div>
										<div className="state">
											<p className="txt">참여한 이벤트입니다.</p>
										</div>
									</div>
									<div className="txt_area">
										<p className="tit">Funky Fresh, 2023 다이어리 E-드림 프로모션</p>
										<p className="date">2022.11.07 ~ 2022.11.14</p>
									</div>
									<a href="#none" className="go_view"><span className="blind">이벤트바로가기</span></a>
								</div>
							</div>
						</div>
					</div>
					{/* <!--// 이벤트슬라이드 --> */}
				</div>
			</section>
			{/* <!--// 이벤트 --> */}

			{/* <!-- 공지사항 --> */}
			<section className="sec_noti">
				<div className="cotn">
					{/* <!-- 타이틀영역 --> */}
					<div className="sec_tit">
						<p className="menu">공지사항</p>
						<h2 className="tit">News &amp; Notice</h2>

						{/* <!-- 전체보기 --> */}
						<div className="btn_all">
							<a href="#none" className="btn">
								<span>전체보기</span>
								<i className="i_arr"></i>
							</a>
						</div>
						{/* <!--// 전체보기 --> */}
					</div>
					{/* <!--// 타이틀영역 --> */}

					{/* <!-- 공지사항목록 --> */}
					<div className="noti_list">
						<div className="list fix">{/* <!-- 고정공지사항 : className="fix" 추가 --> */}
							<p className="tit">[이디야멤버스] 개인정보 처리방침 및 위치기반 서비스 이용약관 변경 공지 22년도 하반기 메이트 희망기금 지급 안내</p>
							<p className="date">2022.06.21</p>
							<a href="#none" className="go_view"><span className="blind">게시판상세이동</span></a>
						</div>
						<div className="list">
							<p className="tit">22년도 하반기 메이트 희망기금 지급 안내 하반기 메이트 희망기금</p>
							<p className="date">2022.06.21</p>
							<a href="#none" className="go_view"><span className="blind">게시판상세이동</span></a>
						</div>
						<div className="list">
							<p className="tit">22년도 하반기 메이트 희망기금 지급 안내</p>
							<p className="date">2022.06.21</p>
							<a href="#none" className="go_view"><span className="blind">게시판상세이동</span></a>
						</div>
					</div>
					{/* <!--// 공지사항목록 --> */}
				</div>
			</section>
			{/* <!--// 공지사항 --> */}

			{/* <!-- 고객지원 --> */}
			<section className="sec_cs">
				<div className="cotn">
					{/* <!-- 타이틀영역 --> */}
					<div className="sec_tit">
						<p className="menu">고객지원</p>
						<h2 className="tit">도움이 필요하신가요?</h2>
						<p className="txt">고객지원 서비스를 통해 문의해주세요.</p>
					</div>
					{/* <!--// 타이틀영역 --> */}

					{/* <!-- 고객센터정보 --> */}
					<div className="cs_info">
						<p className="contact">고객센터 02-543-6467</p>
						<p className="sb_tit">&#8251; 09:00 ~ 18:00 (주말/공휴일 휴무)</p>
					</div>
					{/* <!--// 고객센터정보 --> */}

					{/* <!-- 버튼 --> */}
					<div className="btn_wrap">
						<a href="#none" className="btn">
							<span>자주 하는 질문</span>
						</a>
						<a href="#none" className="btn">
							<span>1:1 문의하기</span>
						</a>
						<a href="#none" className="btn">
							<span>1:1 문의내역</span>
						</a>
					</div>
					{/* <!--// 버튼 --> */}
				</div>
			</section>
			{/* <!--// 고객지원 --> */}
		</>
	);
};

export default Main;