$(".mainSlider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true
});
 $(window).on("scroll",function(){
    if($(window).scrollTop() > 300 ){
        $("#header").addClass("fixed")
    }
    else{
            $("#header").removeClass("fixed")
    }
})
// $(window).on("scroll",function(){
//     if($(window).scrollTop() > 1000 ){
//         $(".lin").css({"width":"20%"})
//     }
//     if($(window).scrollTop() > 1000 ){
//         $(".lin::before").css({"width":"20%"})
//     }
//     if($(window).scrollTop() > 1000 ){
//         $(".lin::before").css({"width":"20%"})
//     }
//     if($(window).scrollTop() > 1000 ){
//         $(".lin::before").css({"width":"20%"})
//     }
//     if($(window).scrollTop() > 1000 ){
//         $(".lin::before").css({"width":"20%"})
//     }
//     if($(window).scrollTop() > 1000 ){
//         $(".lin::before").css({"width":"20%"})
//     }
// })
 
    //  hov=$(".co").find( "ul li:first-child"),
    // hov.hide(),
    // $(".co").children().hover(
    //     function(){$(this).find( "li:first-child").css({"transition":"0.3s linear" }).show()}, 
    //     function(){$(this).find( "li:first-child").hide()}
    //     )    

    
