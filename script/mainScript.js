$(function () {
    var rombCondition = true;
    $(".pyramidText").hide();
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene, {
        relativeInput: true,
        invertY: true,
        limitX: 10,
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


    $("#scene li:last-child").click(function () {
        $("#scene").hide();
        $("#pyramidromb #pyramidAnimation>figure").show();
        $("#pyramidromb #pyramidAnimation>figure img").animate({
            width: "100px",
            height: "100px"
        }, 100, function () {
            //$("#pyramidromb #pyramidAnimation>figure").css('-webkit-transform', 'rotate(180deg)');
            //$("#pyramidromb #pyramidAnimation>figure").css('-moz-transform', 'rotate(180deg)');
            //$("#pyramidromb #pyramidAnimation>figure").css('transform', 'rotate(180deg)');
            $("#pyramidAnimation").animate({
                top: "270px",
                left: "80px"
            });
            $("#romb").fadeIn(1000);
            //$(".information").hide();
        });

    });

    $("#pyramidAnimation > figure").click(function () {
        $(".rombArticles").hide();
        $("#romb").fadeOut();
        $("#pyramidAnimation").animate({
            top: "50%",
            left: "50%",
            "margin-top": "-250px",
            "margin-left": "-250px"
        }, 500, function () {
            //$("#pyramidromb .pyramidAnimation>figure").css('-webkit-transform', 'rotate(-180deg)');
            //$("#pyramidromb .pyramidAnimation>figure").css('-moz-transform', 'rotate(-180deg)');
            //$("#pyramidromb .pyramidAnimation>figure").css('transform', 'rotate(-180deg)');
            setTimeout(function () {
                $("#pyramidromb #pyramidAnimation>figure").hide();
                $("#scene").show();
                parallax = new Parallax(scene, {
                    relativeInput: true
                });
            }, 10);
            rombCondition = false;
            $("#rombAnimation").click();
            $(".information").show();
        });

    });

    $("#romb figure").click(function () {
        var rombArticlesId = $(this).data("target");
        $(".rombArticles article").hide();
        rombCondition = true;
        $("#romb").hide();
        $("#rombAnimation").show();
        $("#rombAnimation figure>img").animate({
            width: "100px",
            height: "100px"
        }, 100, function () {
            $("#rombAnimation").animate({
                top: "0",
                left: "0",
                "margin-top": "150px",
                "margin-left": "-170px"
            }, 10, function () {
                $("#" + rombArticlesId).show();
                $(".rombArticles").show();
            });
            $(".information").hide();
        });
    });

    $("#rombAnimation").click(function () {
        $(".rombArticles").hide();
        $("#rombAnimation").animate({
            top: "50%",
            left: "50%",
            "margin-top": "-200px",
            "margin-left": "-220px"
        }, 500, function () {

            $("#rombAnimation").hide();

            if (rombCondition) {
                $("#romb").show();
            }
            $(".information").show();
        });
    });

    $("#garb figure").draggable({
        cursor: 'move',
        revert: true
        //stop: handleDragStop
    });
    $("#town figure").droppable({
        drop: handleCardDrop
    });

    var correctCards = 0;
    function handleCardDrop(event, ui) {
        var canId = $(this).attr("id");
        var garbageTarget = ui.draggable.data('target');
        if (canId == garbageTarget) {
            ui.draggable.addClass('correct');
            ui.draggable.draggable('disable');
            ui.draggable.position({ of: $(this), my: 'left top', at: 'left top' });
            ui.draggable.draggable('option', 'revert', false);
            correctCards++;
        }
        if (correctCards == 11) {
            // alert("great");
        }

    }

    $(".rombArticles .glyphicon-remove").click(function () {
        $(".rombArticles").hide();
        rombCondition = true;
        $("#rombAnimation").click();
    });
})