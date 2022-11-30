//onLoad function
$(function(){

    var currentMousePos = { x: -1, y: -1 };
        $(document).mousemove(function(event) {
            currentMousePos.x = event.pageX;
            currentMousePos.y = event.pageY;
        });


    //hide the start menu at the begining of the program
    $("div.tg").hide();
    $("div.windowBox").hide();






    //remove the "Copying Files ..." window after the user clicks on the "Cancel" button and stop the alert pop up function
    var i=0;
    $("buttonStyled").on('click',function(){
        $("body div.hide").siblings().eq(1).remove();
        an.stop();
    });

    $("fileButton").on('click',function(){
            $(document.getElementById("fileExplorer")).fadeIn(50);
            $("div.tg").fadeToggle(50);
            $("body div.hide").siblings().eq(1).remove();
        });

    $("internetButton").on('click',function(){
                $(document.getElementById("juneeventwebsite")).fadeIn(50);
                $("div.tg").fadeToggle(50);
                $("body div.hide").siblings().eq(1).remove();
            });

    $("solitaireButton").on('click',function(){
                    $(document.getElementById("solitaire")).fadeIn(50);
                    $("div.tg").fadeToggle(50);
                    $("body div.hide").siblings().eq(1).remove();
                });

    $("sweepButton").on('click',function(){
                        $(document.getElementById("minesweeper")).fadeIn(50);
                        $("div.tg").fadeToggle(50);
                        $("body div.hide").siblings().eq(1).remove();
                    });

    $("buttonClose").on('click',function(){
                $("div.tg").fadeToggle(50);
            });


    //automaticaly remove the "Copying Files ..." window after the alert pop up
    var an=$("div.rect .a").animate({width:'100%'},7500,function(){
        $(".hide").siblings().eq(1).remove();
    });


    /*change the the pourcentage color from black to white at 50%
    stop the incrementation when the pourcentage reach 100%
    */
    var clr = setInterval(function(){
        $(".prct").text(i+++"%");
        if(i==50){
            $(".prct").css({"color":"white"});
        }
        if(i==101){
            clearInterval(clr);
        }
        },75);





    //show and hide the start menu
    $('div.wnds').on('click',function(){
        $("div.tg").fadeToggle(50);
        startMenuEvent();
    });







});


