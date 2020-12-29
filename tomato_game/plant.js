var curr_tomato_level = 0;
var curr_tomato_width = 20;
var score = 0;

var increment = 1;
var min_left = 20;

function startGame(){
    setInterval(grow_tomato, 50);
    // grow_tomato();
}

function grow_tomato(){
    var tomato = document.getElementById("tomato");
    var tomato_holder = document.getElementById("tomato_holder");
    

    if (curr_tomato_level == 0){
        tomato.style.visibility = "visible";
    } else {
        if (curr_tomato_width >= 120){
            reset_tomato();
        }
        else if (curr_tomato_width >= 80){
            console.log("level: " + curr_tomato_level)
            tomato.src="red.png";
        }
        else if (curr_tomato_width >= 30){
            tomato.src="green.png";
        }

        curr_tomato_width = curr_tomato_width + increment;
        var new_width = curr_tomato_width.toString(10) + "%";
        tomato.style.width = new_width;
    }
    curr_tomato_level++;

}

function reset_tomato(){
    //reset
    curr_tomato_level = -1;
    curr_tomato_width= 20;
    tomato.src="flower.png"
    tomato.style.visibility = "hidden";

    var new_top = (getRandomInt(6)*10).toString(10) + "%";
    var new_left = (getRandomInt(5)*10 + min_left).toString(10) + "%";
    tomato_holder.style.top = new_top;
    tomato_holder.style.left = new_left;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function clickedTomato(){
    if (curr_tomato_level > 60){
        score = score + 10;
        document.getElementById('score').innerHTML = "score: " + score.toString(10);
        reset_tomato();
    }
}
  

