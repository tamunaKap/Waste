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
})