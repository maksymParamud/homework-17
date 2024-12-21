$("#btn1").click(function (e) { 
    $("#box").animate({
        left: 300
    }, 500).animate({
        top: 200
    }).animate({
        left: 0
    }).animate({
        top: 65
    })
});

$("#btn2").click(function (e) { 
    $("#box").animate({
        left: 500
    }, 350).animate({
        top: 300,
        left: 600
    }, 500).animate({
        left: 300
    }).animate({
        top: 65,
        left: 500
    }, 500).animate({
        left: 0
    }, 350)
});

$("#btn3").click(function(e){
    if () {
        $("#box" == false).animate({
            height: 400,
            width: 400,
            opacity: 0.1
        }, 500)
    } else {
        $("#box").animate({
            height: 150,
            width: 150,
            opacity: 1
        }, 500)
    }
});