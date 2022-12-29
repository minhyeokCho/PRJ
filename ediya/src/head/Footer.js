import React from 'react';

const Footer = () => {
	return (
		<div>
			<footer id="footer">
				<div className="cotn">
					{/* {/* <!--foot링크 --> */}
					<div className="fnb">
						{/* {/* <!--약관링크 --> */}
						<div className="foot_link">
							<div className="link_wrap">
								<a href="#none">회원 이용약관</a>
								<a href="#none">서비스 이용약관</a>
							</div>
							<div className="link_wrap">
								<a href="#none" className="privacy">개인정보처리방침</a>
								<a href="#none">위치기반서비스 이용약관</a>
							</div>
						</div>
						{/* <!--// 약관링크 --> */}

						{/* {/* <!--sns --> */}
						<div className="sns">
							<a href="#none" className="insta">
								<span className="blind">instagram</span>
							</a>
							<a href="#none" className="ytb">
								<span className="blind">youtube</span>
							</a>
							<a href="#none" className="fb">
								<span className="blind">facebook</span>
							</a>
						</div>
						{/* <!--// sns --> */}
					</div>
					{/* <!--// foot링크 --> */}

					{/* {/* <!--기본정보 --> */}
					<div className="corp_info">
						<h2 className="logo">
							<figure className="img">
								<img src="./assets/images/common/footer_logo.svg" alt="EDIYA COFFEE" />
							</figure>
						</h2>
						<div className="info_wrap">
							<div className="txt_cotn">
								<div className="txt">
									<address>서울특별시 강남구 논현로 636 이디야빌딩(서울특별시 강남구 논현동 221-17)</address>
									<p>TEL : 02-543-6467</p>
									<p>FAX : 02-543-7191</p>
								</div>
								<div className="txt">
									<p>사업자등록번호 : 107-86-16302</p>
									<p>통신판매업 신고 : 강남 제 002519호</p>
									<p>대표이사 : 문창기</p>
								</div>
								<div className="txt">
									<p className="copyright">&#9426; 2023 EDIYA COFFEE COMPANY.ALL RIGHTS RESERVED</p>
								</div>
							</div>
							<div className="ccm">
								<figure className="img">
									<img src="./assets/images/common/footer_ccm.svg" alt="국내 커피업계 최초 소비자중심경영 인증" />
								</figure>
							</div>
						</div>
					</div>
					{/* <!--// 기본정보 --> */}

					{/* {/* <!--탑버튼 --> */}
					<div className="go_top">
						<a href="#none"><span className="blind">상단으로 이동</span></a>
					</div>
					{/* <!--// 탑버튼 --> */}
				</div>
			</footer>
		</div>
	);
};

export default Footer;