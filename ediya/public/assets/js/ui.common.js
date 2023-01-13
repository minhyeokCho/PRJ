/* 《 이디야 WEB 공통 스크립트 》 */

$(document).ready(function(){
	$('.gnb_wrap').length && gnbMenu(); //pc GNB 메뉴
	$('.m_header').length && mGnbMenu(); //Mobile GNB 메뉴
	$('.text_area').length && formTextArea(); //textarea
	$('.tab_menu').length && tabBtn(); //탭슬라이드
	$('.alert_pop').length && alertPop(); //알럿팝업
	$('.go_top').length && goTop(); //페이지상단이동
	$('.btn_tool').length && toolTip(); //툴팁버튼
	$('.evt_slide_wrap').length && evtSlide(); //이벤트슬라이드
	$('.evt_slide').length && evtMainSlide(); //메인:이벤트슬라이드
	$('.bnr_slide').length && bnrMainSlide(); //메인:베너슬라이드
	$('.pt_slide').length && ptSlide(); //이미지미리보기슬라이드
	$('.st_slide').length && storeSlide(); //매장이미지슬라이드
	$('.acc_group').length && accCotn(); //아코디언 컨텐츠
});

var ww = $(window).width();

$(window).on('resize', function() {
	ww = $(window).width();

	if(ww >= 768){
		$('body').css('overflow','')
	}else if(ww < 768){
		if($('.m_header').hasClass('active')){
			$('body').css('overflow','hidden')
		}
	}
});

function gnbMenu() { //pc GNB 메뉴
	var gnbMenu = $('.gnb > ul > li'),
		gnbBg = $('.gnb_bg'),
		header = $('#header');

	$('.depth_01').on('mouseover', function(){ //pc GNB 마우스이벤트
		var $this = $(this),
			subMenuH = $this.siblings('.sub_wrap').height();

		gnbMenu.removeClass('on');
		$this.closest('li').addClass('on');
		if($this.siblings('.sub_wrap').length !== 0){
			header.addClass('on');
			gnbBg.css('height', subMenuH);
		}else{
			header.removeClass('on');
			gnbBg.css('height', 0);
		}
	});

	$('.gnb').on('mouseleave', function(){ //pc GNB 마우스이벤트
		gnbMenu.removeClass('on');
		header.removeClass('on');
		gnbBg.css('height', 0);
	});

	$(window).on('scroll',function(){ //스크롤시 pc GNB 고정
		var scrollTop = $(window).scrollTop();
		if(scrollTop > 0){
			$('.header').addClass('active')
		}else{
			$('.header').removeClass('active')
		}
	});
}

function mGnbMenu() { //Mobile GNB 메뉴
	var gnbBtn = $('.btn_nav'),
		mHeader = $('.m_header')

	gnbBtn.on('click', function(){ //Mobile GNB 열기/닫기
		var $this = $(this)
		if(mHeader.hasClass('active')){
			$this.removeClass('active')
			mHeader.removeClass('active')
			$('body').css('overflow','')
		}else{
			$this.addClass('active')
			mHeader.addClass('active')
			$('body').css('overflow','hidden')
		}
	});

	$(window).on('scroll',function(){ //스크롤시 Mobile GNB 고정
		var scrollTop = $(window).scrollTop();
		if(scrollTop > 0){
			mHeader.addClass('on')
		}else{
			mHeader.removeClass('on')
		}
	});
}

function formTextArea(){ //textarea
	var textarea = $('.text_area textarea');
	textarea.focus(function(){
		var $this = $(this),
			target = $this.closest('.text_area');
		target.addClass('on');
	});
	textarea.focusout(function(){
		var $this = $(this),
			target = $this.closest('.text_area'),
			ltr = target.find('.ltr_len');
		target.removeClass('on');
		if($this.val().length > 0){
			ltr.addClass('on');
		}else{
			ltr.removeClass('on');
		}
	});
}

function tabBtn(){ //탭슬라이드
	$('.tab_menu').each(function(){
		var tabSlide = new Swiper('.tab_menu .swiper', {
			slidesPerView:'auto',
		});
	});
}

function dimShow(){ /* 딤드 show */
	$('body').addClass('dim');
}
function dimHide(){ /* 딤드 hide */
	$('body').removeClass('dim');
}

function alertPop(){ //알럿팝업
	$('.btn_alert').on('click', function(e){ /* 팝업열기 */
		e.preventDefault();
		var target = $(this).attr('open-alert-pop') || e;
		$('.alert_pop' + '.' + target).fadeIn(200);
		dimShow();
	});

	$('.closed').on('click', function(e){ /* 팝업닫기 */
		e.preventDefault();
		var target= $(this).closest('.alert_pop');
		target.fadeOut(200);
		setTimeout(dimHide, 150);
	});
}

function goTop(){ //페이지상단이동
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		if(scrollTop > 0){
			$('.go_top').addClass('active')
		}else{
			$('.go_top').removeClass('active')
		}
	});

	$('.go_top').on('click', function() {
		$('html, body').animate({
			scrollTop: 0
		}, 400);
		return false;
	});
}

function toolTip(){ //툴팁버튼
	$('.btn_tool').on('click', function(e){
		e.preventDefault();

		var tip = $(this).closest('.tooltip_wrap');

		if(tip.hasClass('on')){ /* 열기 */
			tip.removeClass('on');
		}else{
			$('.tooltip_wrap').removeClass('on');
			tip.addClass('on');
		}
	});

	$(document).mouseup(function (e){ /* 닫기 */
		var tip = $('.tooltip_wrap');
		if(tip.has(e.target).length === 0 && tip.hasClass('on')){
			tip.removeClass('on');
		}
	});
}

function evtSlide(){ //이벤트슬라이드
	var evtTxtSlide = new Swiper('.txt_slide', { /* 텍스트슬라이드 */
		slidesPerView:'auto',
		loop: true,
		loopAdditionalSlides : 1,
		observer: true,
		observeParents: true,
		navigation: {
			nextEl: '.btn_arrow.next',
			prevEl: '.btn_arrow.prev',
		},
		speed : 300,
	});

	var evtImgSlide = new Swiper('.img_slide', { /* 이미지슬라이드 */
		slidesPerView:'auto',
		spaceBetween: 16,
		loop: true,
		loopAdditionalSlides : 1,
		speed : 300,
		pagination: {
			el: '.img_paging',
			type: 'bullets'
		},
		breakpoints:{
			768: {
				spaceBetween: 20,
			},
		}
	});

	evtTxtSlide.controller.control = evtImgSlide;
	evtImgSlide.controller.control = evtTxtSlide;
}

function evtMainSlide(){ //메인:이벤트슬라이드
	var evtSlide = new Swiper('.evt_slide', {
		slidesPerView:'auto',
		spaceBetween: 8,
		loop: true,
		loopAdditionalSlides : 1,
		speed : 500,
		centeredSlides: true,
		observer: true,
		observeParents: true,
		navigation: {
			nextEl: '.btn_slide.next',
			prevEl: '.btn_slide.prev',
		},
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		breakpoints:{
			768: {
				spaceBetween: 22,
			},
		}
	});

	var num = 0;
	$('.pause').on('click',function(){ //정지&재생 버튼
		if(num == 0){
			$('.pause').addClass('on');
			evtSlide.autoplay.stop();
			num = 1;
		}else{
			$('.pause').removeClass('on');
			evtSlide.autoplay.start();
			num = 0;
		}
		return false;
	});
}

function bnrMainSlide(){ //메인:베너슬라이드
	var paging = $('.bnr_slide .slide_paging');
	var bnrSlide = new Swiper('.bnr_slide', {
		slidesPerView:1,
		loop: true,
		speed : 500,
		observer: true,
		observeParents: true,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.prog_bar',
			type : 'progressbar'
		},
		on: {
			beforeInit: function (){
				var tot = $('.bnr_slide .bnr_group').length;
				paging.find('.tot').text(tot);
			},
			activeIndexChange: function (){
				paging.find('.active').text(this.realIndex + 1);
			}
		}
	});

	var num = 0;
	$('.btn_pause').on('click',function(){ //정지&재생 버튼
		if(num == 0){
			$('.btn_pause').addClass('on');
			bnrSlide.autoplay.stop();
			num = 1;
		}else{
			$('.btn_pause').removeClass('on');
			bnrSlide.autoplay.start();
			num = 0;
		}
	});
}

function ptSlide(){ //이미지미리보기슬라이드
	var option = {};
	if($('.pt_slide .img_wrap').length == 1){ /* 이미지 1개일 경우 */
		option = {
			slidesPerView:1,
		}
		$('.btn_arrow').css('display','none');
	}else{
		option = {
			slidesPerView:1,
			loop:true,
			navigation: {
				nextEl: '.btn_arrow.next',
				prevEl: '.btn_arrow.prev',
			},
		}
	}
	var ptSlide = new Swiper('.pt_slide', option)
}

function storeSlide(){ //매장이미지슬라이드
	var option = {};
	if($('.st_slide .store_pt').length <= 1){ /* 이미지 1개일 경우 */
		option = {
			slidesPerView:1,
			watchOverflow:true,
			pagination: {
				el: '.img_paging',
				type: 'bullets'
			},
		}
		$('.btn_arrow').css('display','none');
	}else{
		option = {
			slidesPerView:1,
			loop:true,
			navigation: {
				nextEl: '.btn_arrow.next',
				prevEl: '.btn_arrow.prev',
			},
			pagination: {
				el: '.st_paging',
				type: 'bullets'
			},
		}
	}
	var ptSlide = new Swiper('.st_slide', option)
}

function accCotn(){ //아코디언 컨텐츠 UI
	$('.acc_group .view_fix .ctrl_trg').on('click',function(){
		var $this = $(this),
			accWrap = $this.closest('.acc_group'),
			openCotn = accWrap.find('.open_cotn');

		if(accWrap.hasClass('on')){
			accWrap.removeClass('on');
			openCotn.stop().slideUp(300);
		}else{
			$('.acc_group').removeClass('on');
			$('.open_cotn').slideUp(300);
			accWrap.addClass('on');
			openCotn.stop().slideDown(300);
		}
	});

	$('.acc_group').each(function() { //열린상태
		if($(this).hasClass('on')){
			$(this).find('.open_cotn').css('display', 'block');
		}
	});
}