//js document

//comando fixa menu

const tela=$(window).height()//pega a altura em px no navegador
$(window).scroll(function(){
    if($(this).scrollTop()>tela-60){
        $("nav").addClass("fixamenu")
    }else{
        $("nav").removeClass("fixamenu")
    }
//habilidades
    if($(this).scrollTop()>2*tela){
    $(".html").addClass("animahtml")
    $(".css").addClass("animacss")
    $(".jquery").addClass("animajquery")
    $(".front").addClass("animafront")
    $(".photo").addClass("animaphoto")
    $(".ai").addClass("animaai")
}
if($(this).scrollTop() < 2*tela || $(this).scrollTop()> 2.5*tela){
    $(".html").removeClass("animahtml")
    $(".css").removeClass("animacss")
    $(".jquery").removeClass("animajquery")
    $(".front").removeClass("animafront")
    $(".photo").removeClass("animaphoto")
    $(".ai").removeClass("animaai")
}
})

//galeria

$(function(){
    $(".galeria").slick({
        slidesToShow: 3,
        autoplay:true,
        dots: true
    })

   $(".galeria").magnificPopup({
  delegate: 'a',
  type: 'image',
  zoom:{
    enabled:true,
    duration: 500
  },
  gallery:{
    enabled:true}
    });
})