jQuery(document).ready(function(){
    
$('.nav > li').mouseover(function(){
        $(this).find('.menu1').stop().slideDown(200);   
    }).mouseout(function(){
        $(this).find('.menu1').stop().slideUp(200);
    });
    
});
imgslide(); //페이지가 로딩될때 함수를 실행합니다

function imgslide(){

  $val = $(".headimg").attr("val"); //현재 이미지 번호를 가져옵니다

  $mx = $(".headimg").attr("mx"); //총 이미지 개수를 가져옵니다

	$(".slide"+$val).hide(); //현재 이미지를 사라지게 합니다.

	if( $val == $mx ){ $val = 1; } //현재이미지가 마지막 번호라면 1번으로 되돌립니다.

	else{ $val++; } //마지막 번호가 아니라면 카운트를 증가시켜줍니다

	$(".slide"+$val).fadeIn(500); //변경된 번호의 이미지영역을 나타나게 합니다.괄호 안에 숫자는 페이드인 되는 시간을 나타냅니다.

	$(".headimg").attr('val',$val); //변경된 이미지영역의 번호를 부여합니다.

	setTimeout('imgslide()',1000); //1초 뒤에 다시 함수를 호출합니다.(숫자값 1000당 1초)

}