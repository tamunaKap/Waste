$(function () {

    $(".pyramidText").hide();
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene, {
        relativeInput: true
    });
    $(".scene li").click(function () {
        var target = $(this).data("target");
        $("#" + target).fadeIn();
    });
    $(".pyramidText .glyphicon-remove").click(function () {
        $(this).parent(".pyramidText").hide();
    });

    $(".introduction .glyphicon-remove").click(function () {
        $(".introduction").hide();
    });

    $(".information").click(function () {
        $(".introduction").fadeIn();
    });

    //$("#scene li:last-child").click(function() {
    //    $('html,body').animate({
    //        scrollTop: $("section:nth-child(2)").offset().top
    //    },
    //    'slow');
    //});

    $("#scene li:last-child").click(function () {
        $("#scene").hide();
        $("#pyramid >figure").show();
        $("#pyramid >figure img").animate({
            width: "100px",
            height: "100px"
        }, {
            step: function () {
                setTimeout(function () {
                    $("#pyramid >figure").css('-webkit-transform', 'rotate(180deg)');
                    $("#pyramid >figure").css('-moz-transform', 'rotate(180deg)');
                    $("#pyramid >figure").css('transform', 'rotate(180deg)');
                    $("#pyramid >figure").animate({
                        top: "20px",
                        left: "20px"
                    });

                }, 300);
            }
        }, 2500);

    });
})