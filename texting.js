

function startText() {
    src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
    document.body.style.backgroundColor = "#afebf0";
    sendJSON();
    // alert("Success!");
    // document.getElementById("p1").innerHTML = "New text!";
  }


function sendJSON(){ 
  let result = document.querySelector("p1"); 
  let name = document.querySelector('#name'); 
  let email = document.querySelector('#email'); 
      
  // Creating a XHR object 
  let xhr = new XMLHttpRequest(); 
  let url = "http://0.0.0.0:5000"; 

  // open a connection 
  xhr.open("POST", url, true); 

  // Converting JSON data to string 
  var data = JSON.stringify({ "name": "michelle", "email": "emaillll" }); 

  // Sending data with the request 
  xhr.send(data); 



  var request = new XMLHttpRequest();

  var username = document.getElementById("myText").value;

  request.open('GET', "http://0.0.0.0:5000/" + username, true);
  request.onreadystatechange = function() {
        console.log(this.responseText);
        document.getElementById("p1").innerHTML =  "Text: " + this.responseText;
    
  };
  request.send();


} 
