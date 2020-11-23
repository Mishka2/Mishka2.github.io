// Animation
(function($) {          
    $(document).ready(function(){  
        $('#menu').hide();       
        $(window).scroll(function(){         
            if ($(this).scrollTop() > 400) {
                $('#menu').fadeIn(500);
                if ($(this).scrollTop() > 1000) {
                    $('#assistive_technology_block').animate({left: '1500px'},  {duration: 1100});
                }
                if ($(this).scrollTop() > 1150) {
                    $('#mobile_apps_block').animate({right: '1500px'},  {duration: 1100});
                }
                if ($(this).scrollTop() > 1300) {
                    $('#game_dev_block').animate({left: '1500px'},  {duration: 1100});
                }

                
            } else {
                $('#menu').fadeOut(500);
            }
        });


    });



    // $(document).ready(function(){
    //     $("#assistive_technology_block").mouseover(function(){ $(this).find("#assistive_technology_block").animate({left: '+=150px',width: '+=9000px'})});
    //     $("#assistive_technology_block").mouseout(function(){ $(this).find("#assistive_technology_block").animate({height: '+=150px',width: '+=90px'})});
    // });



})(jQuery);


function mouseOverMobile() {
    document.getElementById("mobile_apps_block").style.width = "30%";
    document.getElementById("mobile_apps_block").style.height = "20%";
    document.getElementById("mobile_apps_block").style.margin = "-10px";
   
    document.getElementById("game_dev_block").style.marginLeft = "-15px";
    document.getElementById("game_dev_block").style.marginTop = "35px";
}

function mouseOutMobile() {
    console.log("AHhh")
    jQuery(function($) {
        $("#mobile_apps_block").css("width","25%");
        $("#mobile_apps_block").css("height","15%");
        $("#mobile_apps_block").css("margin","15px");

        $("#game_dev_block").css("margin","15px");
        
    }); 
}

function mouseOverAss() {
    document.getElementById("assistive_technology_block").style.width = "30%";
    document.getElementById("assistive_technology_block").style.height = "20%";
    document.getElementById("assistive_technology_block").style.margin = "-10px";

    document.getElementById("game_dev_block").style.marginLeft = "25px";
    document.getElementById("game_dev_block").style.marginTop = "35px";
}

function mouseOutAss() {
    jQuery(function($) {
        $("#assistive_technology_block").css("width","25%");
        $("#assistive_technology_block").css("height","15%");
        $("#assistive_technology_block").css("margin","15px");

        $("#game_dev_block").css("margin","15px");
    }); 
}

function mouseOverGame() {
    document.getElementById("game_dev_block").style.width = "30%";
    document.getElementById("game_dev_block").style.height = "20%";
    document.getElementById("game_dev_block").style.margin = "-10px";

    document.getElementById("assistive_technology_block").style.marginLeft = "-5px";
    document.getElementById("assistive_technology_block").style.marginTop = "-5px";

    document.getElementById("mobile_apps_block").style.marginRight = "-50px";
    document.getElementById("mobile_apps_block").style.marginTop = "-25px";
}

function mouseOutGame() {
    jQuery(function($) {
        $("#game_dev_block").css("width","25%");
        $("#game_dev_block").css("height","15%");
        $("#game_dev_block").css("margin","15px");

        $("#assistive_technology_block").css("margin","15px");

        $("#mobile_apps_block").css("margin","15px");
    }); 
}



// Get the modal
var modalAss = document.getElementById("myModalAssis");
var modalMobile = document.getElementById("myModalMobile");
var modalGame = document.getElementById("myModalGame");

// Get the button that opens the modal
var btnAss = document.getElementById("assistive_technology_block");
var btnMobile = document.getElementById("mobile_apps_block");
var btnGame = document.getElementById("game_dev_block");

// Get the <span> element that closes the modal
var spanAss = document.getElementsByClassName("closeAss")[0];
var spanMobile = document.getElementsByClassName("closeMobile")[0];
var spanGame = document.getElementsByClassName("closeGame")[0];

// When the user clicks the button, open the modal 
btnAss.onclick = function() {
    modalAss.style.display = "block";
}
btnMobile.onclick = function() {
    modalMobile.style.display = "block";
}
btnGame.onclick = function() {
    modalGame.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanAss.onclick = function() {
    modalAss.style.display = "none";
}
spanMobile.onclick = function() {
    modalMobile.style.display = "none";
}
spanGame.onclick = function() {
    modalGame.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalAss) {
        modalAss.style.display = "none";
    }
    if (event.target == modalMobile) {
        modalMobile.style.display = "none";
    }
    if (event.target == modalGame) {
        modalGame.style.display = "none";
    }
}








