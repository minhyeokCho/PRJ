$(document).ready(function(){
	$('.comt_inpt').length && commentInput(); //댓글등록 버튼 활성화
	$('.input_area').length && activeInput(); //인풋 활성화
	$('.main_slide').length && mainSlide(); //메인 슬라이드
	$('.sub_slide').length && subSlide(); //서브 슬라이드
	$('.tap_bar').length && popup(); //팝업 이벤트
	$('.btn_like').length && btnLike(); //좋아요버튼
});

function commentInput () { //댓글등록 버튼 활성화
	var input = $('.comt_inpt input');

	input.focus(function(){
		$('.btn_comt').addClass('active')
	})

	input.focusout(function(){
		var $this = $(this)

		if($this.val().length > 0){
			$('.btn_comt').addClass('active')
		}else{
			$('.btn_comt').removeClass('active')
		}
	})
}

function activeInput () { //인풋 활성화
	var input = $('.input_area');

	input.focus(function(){
		var $this = $(this)
		$this.addClass('active')
	})

	input.focusout(function(){
		var $this = $(this)

		if($this.val().length > 0){
			$this.addClass('active')
		}else{
			$this.removeClass('active')
		}
	})
}

function mainSlide () { //메인 슬라이드
	var mainSlide = new Swiper('.main_slide .swiper',{
		slidesPerView:'auto',
		spaceBetween: 20,
		navigation: {
			nextEl: '.btn_slide.next.main',
			prevEl: '.btn_slide.prev.main',
		},
	});
}

function subSlide () { //서브 슬라이드
	for(i = 0; i<=$('.sub_slide').length; i++){
		var contSlide = new Swiper('.slide_' + i + ' .swiper',{
			slidesPerView:'auto',
			spaceBetween: 10,
			navigation: {
				nextEl: '.slide_' + i + ' .btn_slide.next',
				prevEl: '.slide_' + i + ' .btn_slide.prev',
			},
		});
	}
}

function dimShow(){ /* 딤드 show */
	$("body").addClass("dim");
}
function dimHide(){ /* 딤드 hide */
	$("body").removeClass("dim");
}

function popup() { //팝업 이벤트
	$('.tap_bar .btn.search').on('click', function(e){
		var pop = $(".popup"),
			btn_tap = $('.tap_bar .btn');

		if($(this).hasClass('on')){
			btn_tap.removeClass('on')
			var target = $('#wrap').attr('current_page') || e;
			$('.tap_bar .btn' + '.' + target).addClass('on');
			pop.fadeOut(500).removeClass('on');
			dimHide();
		}else{
			btn_tap.removeClass('on')
			$(this).addClass('on');
			pop.fadeIn(50).addClass('on')
			dimShow();
		}
	});

	$(document).mouseup(function (e){ /* 닫기 */
		var pop = $(".popup")
			btn_tap = $('.tap_bar .btn');

		if($('.tap_bar .btn.search').has(e.target).length === 0 && pop.has(e.target).length === 0 && pop.hasClass("on")){
			btn_tap.removeClass('on')
			var target = $('#wrap').attr('current_page') || e;
			$('.tap_bar .btn' + '.' + target).addClass('on');
			pop.fadeOut(500).removeClass('on');
			dimHide();
		}
	});
}

function btnLike() { //좋아요버튼
	$('.btn_like').on('click', function() {
		$(this).toggleClass('on')
	})
}