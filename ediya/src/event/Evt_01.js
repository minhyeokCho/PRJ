import React from 'react';

const Evt_01 = () => {
	return (
		<div className="sub">
			<div className="wd_auto">
				{/* <!-- 타이틀 --> */}
				<div className="sub_tit_area">
					<h2 className="title">이벤트</h2>
					<p className="sub_txt">EDIYA 에서 준비한 특별한 이벤트를 참여하고 혜택을 받아보세요.</p>
				</div>
				{/* <!--// 타이틀 --> */}

				{/* <!-- 라인탭 --> */}
				<div className="tab_menu line">
					{/* <!-- 1세트 --> */}
					<div className="btn_tab on">{/* <!-- 활성화 : className="on" 추가 --> */}
						<a href="#none">
							<span>진행중인 이벤트</span>
						</a>
					</div>
					{/* <!--// 1세트 --> */}
					<div className="btn_tab">
						<a href="#none">
							<span>종료된 이벤트</span>
						</a>
					</div>
				</div>
				{/* <!--// 라인탭 --> */}

				{/* <!-- 이벤트목록있는경우 --> */}
				<div className="event_list">
					{/* <!-- 이벤트슬라이드 --> */}
					<div className="evt_slide_wrap">
						{/* <!-- 텍스트슬라이드 --> */}
						<div className="evt_txt_slide">
							<div className="txt_slide swiper">
								<div className="swiper-wrapper">
									{/* <!-- 1세트 --> */}
									<div className="txt_group swiper-slide">
										<div className="cotn">
											<p className="tit">이디야커피 X BC페이북 결제 프로모션 1번</p>
											<p className="date">2022.11.07 ~ 2022.11.16</p>
										</div>
										<a href="#none" className="go_view"><span className="blind">이벤트바로가기</span></a>
									</div>
									{/* <!--// 1세트 --> */}
									<div className="txt_group swiper-slide">
										<div className="cotn">
											<p className="tit">Funky Fresh, 2023 다이어리 E-드림 프로모션 2번</p>
											<p className="date">2032.11.07 ~ 2022.11.16</p>
										</div>
										<a href="#none" className="go_view"><span className="blind">이벤트바로가기</span></a>
									</div>
									<div className="txt_group swiper-slide">
										<div className="cotn">
											<p className="tit">이디야커피 X BC페이북 결제 프로모션 3번</p>
											<p className="date">2042.11.07 ~ 2022.11.16</p>
										</div>
										<a href="#none" className="go_view"><span className="blind">이벤트바로가기</span></a>
									</div>
									<div className="txt_group swiper-slide">
										<div className="cotn">
											<p className="tit">Funky Fresh, 2023 다이어리 E-드림 프로모션 4번</p>
											<p className="date">2032.11.07 ~ 2022.11.16</p>
										</div>
										<a href="#none" className="go_view"><span className="blind">이벤트바로가기</span></a>
									</div>
									<div className="txt_group swiper-slide">
										<div className="cotn">
											<p className="tit">이디야커피 X BC페이북 결제 프로모션 5번</p>
											<p className="date">2042.11.07 ~ 2022.11.16</p>
										</div>
										<a href="#none" className="go_view"><span className="blind">이벤트바로가기</span></a>
									</div>
								</div>

								<p className="noti_txt">* 참여 및 혜택은 모두 APP 을 통해서 받으실 수 있습니다.</p>

								<div className="btn_arrow prev"></div>
								<div className="btn_arrow next"></div>
							</div>
						</div>
						{/* <!--// 텍스트슬라이드 --> */}

						{/* <!-- 이미지슬라이드 --> */}
						<div className="evt_img_slide">
							<div className="img_slide swiper">
								<div className="swiper-wrapper">
									{/* <!-- 1세트 --> */}
									<div className="img_group swiper-slide">
										<div className="cotn">
											{/* <!-- 이미지 --> */}
											<div className="img_area">
												<figure className="img">
													<img src="../../assets/images/temp/temp_07.jpg"/>
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
												{/* <!--// 2022-12-26_수정 --> */}
											</div>
											{/* <!--// 이미지 --> */}

											{/* <!-- 텍스트영역:모바일노출 --> */}
											<div className="txt_area">
												<p className="tit">이디야커피 X BC페이북 결제 프로모션 1번</p>
												<p className="date">2042.11.07 ~ 2022.11.16</p>
											</div>
											{/* <!--// 텍스트영역:모바일노출 --> */}
										</div>
										<a href="#none" className="go_view"><span className="blind">이벤트바로가기</span></a>
									</div>
									{/* <!--// 1세트 --> */}
									<div className="img_group swiper-slide">
										<div className="cotn">
											<div className="img_area">
												<figure className="img">
													<img src="../../assets/images/temp/temp_08.jpg"/>
												</figure>
												<div className="flag_wrap">
													<p className="flag eq">E-QUEST</p>
												</div>
											</div>
											<div className="txt_area">
												<p className="tit">이디야커피 X BC페이북 결제 프로모션 2번</p>
												<p className="date">2042.11.07 ~ 2022.11.16</p>
											</div>
										</div>
										<a href="#none" className="go_view"><span className="blind">이벤트바로가기</span></a>
									</div>
									<div className="img_group swiper-slide">
										<div className="cotn">
											<div className="img_area">
												<figure className="img">
													<img src="../../assets/images/temp/temp_09.jpg"/>
												</figure>
												<div className="flag_wrap">
													<p className="flag new">NEW</p>
												</div>
											</div>
											<div className="txt_area">
												<p className="tit">이디야커피 X BC페이북 결제 프로모션 3번</p>
												<p className="date">2042.11.07 ~ 2022.11.16</p>
											</div>
										</div>
										<a href="#none" className="go_view"><span className="blind">이벤트바로가기</span></a>
									</div>
									<div className="img_group swiper-slide">
										<div className="cotn">
											<div className="img_area">
												<figure className="img">
													<img src="../../assets/images/temp/temp_07.jpg"/>
												</figure>
												<div className="flag_wrap">
													<p className="flag eq">E-QUEST</p>
												</div>
											</div>
											<div className="txt_area">
												<p className="tit">이디야커피 X BC페이북 결제 프로모션 4번</p>
												<p className="date">2042.11.07 ~ 2022.11.16</p>
											</div>
										</div>
										<a href="#none" className="go_view"><span className="blind">이벤트바로가기</span></a>
									</div>
									<div className="img_group swiper-slide">
										<div className="cotn">
											<div className="img_area">
												<figure className="img">
													<img src="../../assets/images/temp/temp_08.jpg"/>
												</figure>
												<div className="flag_wrap">
													<p className="flag new">NEW</p>
												</div>
											</div>
											<div className="txt_area">
												<p className="tit">이디야커피 X BC페이북 결제 프로모션 5번</p>
												<p className="date">2042.11.07 ~ 2022.11.16</p>
											</div>
										</div>
										<a href="#none" className="go_view"><span className="blind">이벤트바로가기</span></a>
									</div>
								</div>
								<div className="img_paging"></div>{/* <!-- 페이징 --> */}
							</div>
						</div>
						{/* <!--// 이미지슬라이드 --> */}
					</div>
					{/* <!--// 이벤트슬라이드 --> */}

					<hr className="div_gap" />

					{/* <!-- 이벤트목록 --> */}
					<div className="evt_list">
						{/* <!-- 1세트 --> */}
						<div className="evt_wrap on_dim">{/* <!-- 참여완료 dim노출시 className="on_dim"추가 --> */}
							{/* <!-- 이미지영역 --> */}
							<div className="img_area">
								<figure className="img">
									<img src="../../assets/images/temp/temp_02.jpg"/>
								</figure>

								{/* <!-- 상태라벨 --> */}
								<div className="flag_wrap">
									<p className="flag eq">E-QUEST</p>{/* <!-- 상태라벨:E-QUEST --> */}
									<p className="flag new">NEW</p>{/* <!-- 상태라벨:NEW --> */}
									<p className="flag reward">스탬프</p>{/* <!-- 상태라벨:스탬프 --> */}
								</div>
								{/* <!--// 상태라벨 --> */}

								{/* <!-- 딤드 --> */}
								<div className="state">
									<p className="txt">참여한 이벤트입니다.</p>
								</div>
								{/* <!-- 딤드 --> */}
							</div>
							{/* <!--// 이미지영역 --> */}

							{/* <!-- 텍스트영역 --> */}
							<div className="txt_area">
								<p className="tit">Funky Fresh, 2023 다이어리 E-드림 프로모션</p>
								<p className="date">2022.11.07 ~ 2022.11.14</p>
							</div>
							{/* <!--// 텍스트영역 --> */}

							<a href="#none" className="go_view"><span className="blind">이벤트바로가기</span></a>
						</div>
						{/* <!--// 1세트 --> */}
						<div className="evt_wrap">
							<div className="img_area">
								<figure className="img">
									<img src="../../assets/images/temp/temp_03.jpg"/>
								</figure>
								<div className="flag_wrap">
									<p className="flag reward">스탬프</p>
								</div>
								<div className="state">
									<p className="txt">참여한 이벤트입니다.</p>
								</div>
							</div>
							<div className="txt_area">
								<p className="tit">감성 미니가전 턴테이블 스피커 프로모션 당첨자 발표 감성 스피커 프로모션 당첨자 발표</p>
								<p className="date">2022.11.07 ~ 2022.11.14</p>
							</div>
							<a href="#none" className="go_view"><span className="blind">이벤트바로가기</span></a>
						</div>
						<div className="evt_wrap">
							<div className="img_area">
								<figure className="img">
									<img src="../../assets/images/temp/temp_04.jpg"/>
								</figure>
								<div className="flag_wrap">
									<p className="flag reward">스탬프</p>
								</div>
								<div className="state">
									<p className="txt">참여한 이벤트입니다.</p>
								</div>
							</div>
							<div className="txt_area">
								<p className="tit">이디야커피 X BC페이북 결제 프로모션</p>
								<p className="date">2022.11.07 ~ 2022.11.14</p>
							</div>
							<a href="#none" className="go_view"><span className="blind">이벤트바로가기</span></a>
						</div>
						<div className="evt_wrap">
							<div className="img_area">
								<figure className="img">
									<img src="../../assets/images/temp/temp_05.jpg"/>
								</figure>
								<div className="flag_wrap">
									<p className="flag eq">E-QUEST</p>
								</div>
								<div className="state">
									<p className="txt">참여한 이벤트입니다.</p>
								</div>
							</div>
							<div className="txt_area">
								<p className="tit">이디야커피 X BC페이북 결제 프로모션</p>
								<p className="date">2022.11.07 ~ 2022.11.14</p>
							</div>
							<a href="#none" className="go_view"><span className="blind">이벤트바로가기</span></a>
						</div>
						<div className="evt_wrap">
							<div className="img_area">
								<figure className="img">
									<img src="../../assets/images/temp/temp_06.jpg"/>
								</figure>
								<div className="flag_wrap">
									<p className="flag eq">E-QUEST</p>
								</div>
								<div className="state">
									<p className="txt">참여한 이벤트입니다.</p>
								</div>
							</div>
							<div className="txt_area">
								<p className="tit">이디야커피 X BC페이북 결제 프로모션</p>
								<p className="date">2022.11.07 ~ 2022.11.14</p>
							</div>
							<a href="#none" className="go_view"><span className="blind">이벤트바로가기</span></a>
						</div>
						<div className="evt_wrap">
							<div className="img_area">
								<figure className="img">
									<img src="../../assets/images/temp/temp_02.jpg"/>
								</figure>
								<div className="flag_wrap">
									<p className="flag eq">E-QUEST</p>
								</div>
								<div className="state">
									<p className="txt">참여한 이벤트입니다.</p>
								</div>
							</div>
							<div className="txt_area">
								<p className="tit">이디야커피 X BC페이북 결제 프로모션</p>
								<p className="date">2022.11.07 ~ 2022.11.14</p>
							</div>
							<a href="#none" className="go_view"><span className="blind">이벤트바로가기</span></a>
						</div>
						<div className="evt_wrap">
							<div className="img_area">
								<figure className="img">
									<img src="../../assets/images/temp/temp_04.jpg"/>
								</figure>
								<div className="flag_wrap">
									<p className="flag reward">스탬프</p>
								</div>
								<div className="state">
									<p className="txt">참여한 이벤트입니다.</p>
								</div>
							</div>
							<div className="txt_area">
								<p className="tit">이디야커피 X BC페이북 결제 프로모션</p>
								<p className="date">2022.11.07 ~ 2022.11.14</p>
							</div>
							<a href="#none" className="go_view"><span className="blind">이벤트바로가기</span></a>
						</div>
						<div className="evt_wrap">
							<div className="img_area">
								<figure className="img">
									<img src="../../assets/images/temp/temp_03.jpg"/>
								</figure>
								<div className="flag_wrap">
									<p className="flag reward">스탬프</p>
								</div>
								<div className="state">
									<p className="txt">참여한 이벤트입니다.</p>
								</div>
							</div>
							<div className="txt_area">
								<p className="tit">이디야커피 X BC페이북 결제 프로모션</p>
								<p className="date">2022.11.07 ~ 2022.11.14</p>
							</div>
							<a href="#none" className="go_view"><span className="blind">이벤트바로가기</span></a>
						</div>
						<div className="evt_wrap">
							<div className="img_area">
								<figure className="img">
									<img src="../../assets/images/temp/temp_06.jpg"/>
								</figure>
								<div className="flag_wrap">
									<p className="flag eq">E-QUEST</p>
								</div>
								<div className="state">
									<p className="txt">참여한 이벤트입니다.</p>
								</div>
							</div>
							<div className="txt_area">
								<p className="tit">이디야커피 X BC페이북 결제 프로모션</p>
								<p className="date">2022.11.07 ~ 2022.11.14</p>
							</div>
							<a href="#none" className="go_view"><span className="blind">이벤트바로가기</span></a>
						</div>
						<div className="evt_wrap">
							<div className="img_area">
								<figure className="img">
									<img src="../../assets/images/temp/temp_05.jpg"/>
								</figure>
								<div className="flag_wrap">
									<p className="flag eq">E-QUEST</p>
								</div>
								<div className="state">
									<p className="txt">참여한 이벤트입니다.</p>
								</div>
							</div>
							<div className="txt_area">
								<p className="tit">이디야커피 X BC페이북 결제 프로모션</p>
								<p className="date">2022.11.07 ~ 2022.11.14</p>
							</div>
							<a href="#none" className="go_view"><span className="blind">이벤트바로가기</span></a>
						</div>
					</div>
					{/* <!--// 이벤트목록 --> */}

					{/* <!-- paging --> */}
					<div className="paging">
						<a href="#none" className="i_16 arr_left prev"></a>
						<a href="#none" className="on">1</a>{/* <!-- 현재페이지className="on"추가 --> */}
						<a href="#none">2</a>
						<a href="#none">3</a>
						<a href="#none">4</a>
						<a href="#none">5</a>
						<i className="i_ellipsis"></i>
						<a href="#none">10</a>
						<a href="#none" className="i_16 arr_right next"></a>
					</div>
					{/* <!--// paging --> */}

					{/* <!-- 더보기버튼 --> */}
					<div className="btn_wrap btn_more">
						<a href="#none" className="btn bdr_gray">
							<span>더보기</span>
						</a>
					</div>
					{/* <!--// 더보기버튼 --> */}
				</div>
				{/* <!--// 이벤트목록있는경우 --> */}

				{/* <!-- 데이터없음 --> */}
				<div className="data_none">
					<div className="cotn">
						<p>진행중인 이벤트가 없습니다.</p>
					</div>
				</div>
				{/* <!--// 데이터없음 --> */}
			</div>
		</div>
	);
};

export default Evt_01;