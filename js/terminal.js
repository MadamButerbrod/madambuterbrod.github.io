$(".trm_li_btn").on("click", function() {
    $(".fadable").removeClass("fade");
    $(".fadable").stop().css("opacity", "1").animate({
        opacity: 0.60,
    }, 10000);
})