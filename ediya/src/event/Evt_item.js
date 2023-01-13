import React from 'react';
import Evt_DB from './Evt_DB'

const Evt_item = () => {
	return (
		<>
			{
				Evt_DB.map((item, index) => {
					return (
						<div className={item.dim ? "evt_wrap on_dim" : "evt_wrap"} key={index}>{/* <!-- 참여완료 dim노출시 className="on_dim"추가 --> */}
							{/* <!-- 이미지영역 --> */}
							<div className="img_area">
								<figure className="img">
									<img src={item.image}/>
								</figure>

								{/* <!-- 딤드 --> */}
								<div className="state">
									<p className="txt">참여한 이벤트입니다.</p>
								</div>
								{/* <!-- 딤드 --> */}
							</div>
							{/* <!--// 이미지영역 --> */}

							{/* <!-- 텍스트영역 --> */}
							<div className="txt_area">
								<p className="tit">{item.title}</p>
								<p className="date">{item.date}</p>
							</div>
							{/* <!--// 텍스트영역 --> */}

							<a href="#none" className="go_view"><span className="blind">이벤트바로가기</span></a>
						</div>
					)
				})
			}
		</>
	);
};

export default Evt_item;