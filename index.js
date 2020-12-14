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


})(jQuery);






// Get the modal
var proj1 = document.getElementById("myModal1");
var proj2 = document.getElementById("myModal2");
var proj3 = document.getElementById("myModal3");
var proj4 = document.getElementById("myModal4");
var proj5 = document.getElementById("myModal5");
var proj6 = document.getElementById("myModal6");
var proj7 = document.getElementById("myModal7");
var proj8 = document.getElementById("myModal8");

// Get the button that opens the modal
var proj1_button = document.getElementById("proj4_description");
var proj2_button = document.getElementById("proj5_description");
var proj3_button = document.getElementById("proj8_description");
var proj4_button = document.getElementById("proj6_description");
var proj5_button = document.getElementById("proj7_description");
var proj6_button = document.getElementById("proj2_description");
var proj7_button = document.getElementById("proj1_description");
var proj8_button = document.getElementById("proj3_description");



// Get the <span> element that closes the modal
var span0 = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close")[1];
var span2 = document.getElementsByClassName("close")[2];
var span3 = document.getElementsByClassName("close")[3];
var span4 = document.getElementsByClassName("close")[4];
var span5 = document.getElementsByClassName("close")[5];
var span6 = document.getElementsByClassName("close")[6];
var span7 = document.getElementsByClassName("close")[7];



// Get the modal
var asml_modal = document.getElementById("asml_modal");
var robot_modal = document.getElementById("robot_modal");
var wpi_modal = document.getElementById("wpi_modal");

// Get the button that opens the modal
var asml = document.getElementById("exp1_description");
var robot = document.getElementById("exp2_description");
var wpi = document.getElementById("exp3_description");

// Get the <span> element that closes the modal
var span_asml = document.getElementsByClassName("close1")[0];
var span_robot = document.getElementsByClassName("close2")[0];
var span_wpi = document.getElementsByClassName("close3")[0];

// When the user clicks on the button, open the modal
asml.onclick = function() {
    asml_modal.style.display = "block";
}

robot.onclick = function() {
    robot_modal.style.display = "block";
}

wpi.onclick = function() {
    wpi_modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span_asml.onclick = function() {
    asml_modal.style.display = "none";
}

span_robot.onclick = function() {
    robot_modal.style.display = "none";
}

span_robot.onclick = function() {
    wpi_modal.style.display = "none";
}





// When the user clicks on the button, open the modal
proj1_button.onclick = function() {
    proj1.style.display = "block";
}

proj2_button.onclick = function() {
    proj2.style.display = "block";
}

proj3_button.onclick = function() {
    proj3.style.display = "block";
}

proj4_button.onclick = function() {
    proj4.style.display = "block";
}

proj5_button.onclick = function() {
    proj5.style.display = "block";
}

proj6_button.onclick = function() {
    proj6.style.display = "block";
}

proj7_button.onclick = function() {
    proj7.style.display = "block";
}

proj8_button.onclick = function() {
    proj8.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span0.onclick = function() {
    proj1.style.display = "none";
}

span1.onclick = function() {
    proj2.style.display = "none";
}

span2.onclick = function() {
    proj3.style.display = "none";
}

span3.onclick = function() {
    proj4.style.display = "none";
}

span4.onclick = function() {
    proj5.style.display = "none";
}

span5.onclick = function() {
    proj6.style.display = "none";
}

span6.onclick = function() {
    proj7.style.display = "none";
}

span7.onclick = function() {
    proj8.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == proj1) {
        proj1.style.display = "none";
    }
    if (event.target == proj2) {
        proj2.style.display = "none";
    }

    if (event.target == proj3) {
        proj3.style.display = "none";
    }

    if (event.target == proj4) {
        proj4.style.display = "none";
    }

    if (event.target == proj5) {
        proj5.style.display = "none";
    }

    if (event.target == proj6) {
        proj6.style.display = "none";
    }

    if (event.target == proj7) {
        proj7.style.display = "none";
    }

    if (event.target == proj8) {
        proj8.style.display = "none";
    }

    if (event.target == asml_modal) {
        asml_modal.style.display = "none";
    }

    if (event.target == robot_modal) {
        robot_modal.style.display = "none";
    }

    if (event.target == wpi_modal) {
        wpi_modal.style.display = "none";
    }
}




