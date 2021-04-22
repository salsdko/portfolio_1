//한개 나오는 메뉴 (css에서 서브에 display를 none으로 둬야 새로고침시 서브메뉴가 보이지 않는다)

$("nav > ul.gnb > li").mouseover(function(){
    $(this).find("ul.sub").stop().slideDown(200);
});
$("nav > ul.gnb > li").mouseout(function(){
    $(this).find("ul.sub").stop().slideUp(200);
});



//메뉴부분 전체

//$("nav > ul > li").mouseover(function(){
//    $("ul.sub").stop().slideDown(200);
//});
//$("nav > ul > li").mouseout(function(){
//    $("ul.sub").stop().slideUp(200);
//});



//메뉴부분 브라우저 전체

//$("nav > ul > li").mouseover(function(){
//    $(".nav_bg, ul.sub").stop().slideDown(200);
//});
//$("nav > ul > li").mouseout(function(){
//    $(".nav_bg, ul.sub").stop().slideUp(200);
//});



//탭메뉴 공지사항 갤러리

// $(".cont_1 h2").click(function () {
//     $(".cont_1 h2,.cont_1 ul").removeClass("on");
//     $(this).addClass("on");
//     $(this).next("ul").addClass("on");
//  });

// 탑버튼
$(function(){

    $('.go_top').click(function(e){
       e.preventDefault();
       $('html,body').stop().animate({scrollTop:0},300); 
    });

});



// contents_wrap_4 마우스오버 효과(갯수 많을때 한번에 바꾸기)

// $('.cont_4').each(function() {

//     var nowImg = $(this).find('img');  //호버한 부분의 img파일 찾기
//     var srcName = nowImg.attr('src');  //호버한 부분의 이미지 주소값 src가지고오기
//     var newSrc = srcName.substring(0, srcName.lastIndexOf('.'));
//     //.png , .jpg 와같이 파일명 자르기. 뒤에서부터 시작해서 '.'점있는 곳 까지 컷! 
  
//    //호버이벤트
//     $(this).hover(function() { 
//       $(this).find('img').attr('src', newSrc+ '_on.' + /[^.]+$/.exec('src','img/contents/cont_6_1_on.jpg')); //hover시 _on붙이기
//     }, function() {
//       $(this).find('img').attr('src', newSrc + '.' + /[^.]+$/.exec('src','img/contents/cont_6_1.jpg')); //hover시 _on 때기
//     });
