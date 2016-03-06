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
        $("#pyramid #pyramidAnimation>figure").show();
        $("#pyramid #pyramidAnimation>figure img").animate({
            width: "100px",
            height: "100px"
        }, 100, function () {
            $("#pyramid #pyramidAnimation>figure").css('-webkit-transform', 'rotate(180deg)');
            $("#pyramid #pyramidAnimation>figure").css('-moz-transform', 'rotate(180deg)');
            $("#pyramid #pyramidAnimation>figure").css('transform', 'rotate(180deg)');
            $("#pyramidAnimation").animate({
                top: "270px",
                left: "80px"
            });
        });

    });

    $("#pyramidAnimation > figure").click(function () {
        $("#pyramidAnimation").animate({
            top: "50%",
            left: "50%",
            "margin-top": "-250px",
            "margin-left": "-250px"
        }, 500, function () {
            $("#pyramid .pyramidAnimation>figure").css('-webkit-transform', 'rotate(-180deg)');
            $("#pyramid .pyramidAnimation>figure").css('-moz-transform', 'rotate(-180deg)');
            $("#pyramid .pyramidAnimation>figure").css('transform', 'rotate(-180deg)');
            setTimeout(function () {
                $("#pyramid #pyramidAnimation>figure").hide();
                $("#scene").show();
                parallax = new Parallax(scene, {
                    relativeInput: true
                });
            }, 100);
        });


    });
})