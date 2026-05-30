console.log("Community Connect Loaded");

function showMessage(){
    alert("Explore our upcoming events!");
}

function registerEvent(eventName){
    alert("You selected: " + eventName);
}

function countChars(){

    let text =
    document.getElementById("message").value;

    document.getElementById("count").innerHTML =
    text.length;
}

document
.getElementById("registrationForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Registration Successful!");

    this.reset();

    document.getElementById("count").innerHTML = 0;
});

function getLocation(){

    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition(

            function(position){

                document.getElementById("location").innerHTML =
                    "Latitude: " +
                    position.coords.latitude +
                    "<br>Longitude: " +
                    position.coords.longitude;
            }

        );
    }
}

function searchEvents(){

    let input =
    document.getElementById("searchBox")
    .value
    .toLowerCase();

    let cards =
    document.querySelectorAll(".card");

    cards.forEach(function(card){

        let text =
        card.textContent.toLowerCase();

        if(text.includes(input)){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }

    });
}