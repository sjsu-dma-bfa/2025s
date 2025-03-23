// used in artist page
// grab json data


var artist = "test";
var index = 0;

// Get a reference to the button
const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");

// Add an event handler for the click event
leftButton.addEventListener("click", function () {
    index -= 1;
    
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Adds smooth scrolling effect
    });
    setTimeout(function() {
        fetchPeopleData();
    }, 1000);
});
rightButton.addEventListener("click", function () {
    index += 1; 
    
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Adds smooth scrolling effect
    });
    setTimeout(function() {
        fetchPeopleData();
    }, 1000);
})





const params = new URLSearchParams(window.location.search);

if (params.has('artist')) {
    artist = params.get('artist');
}
if(params.has("index")){
    index = params.get("index");
}

function fetchPeopleData(){
    fetch("../json/test.json")
        .then(repsonse => {
            if(!repsonse.ok) {
                throw new Error("Failed to get response");
            }

            return repsonse.json();
        })
        .then(data => {
            updatePage(data);
        })
}

function updatePage(data){

    if(index >= data.Artist.length){
        index = 0;
    }
    else if(index < 0){
        index = data.Artist.length-1;
    }

    if(document.getElementById("artImage") !== null && document.getElementById("artImage").id !== ""){
            
        newImage = document.getElementById("artImage").remove();
    }

    // Project Title
    document.getElementById('title').innerHTML = data.Artist[index].title;

    // Artist Name
    document.getElementById('name').innerHTML = data.Artist[index].name;

    document.getElementById('profile_pic').src = "../images/" + data.Artist[index].profilePicture;

    // Artist Statement
    document.getElementById('statement').innerHTML = data.Artist[index].statement;

    // Artist Biography
    document.getElementById('bio').innerHTML = data.Artist[index].biography;

    // Artist Project Display
    const imgFile = "../images/" + String(data.Artist[index].display);

    //document.getElementById("artkwork").innerHTML += '<img src="/images/light-mascot-1.png" alt="testing">';

    if(imgFile.toLocaleLowerCase().endsWith('.png') || imgFile.toLocaleLowerCase().endsWith('.jpg') || imgFile.toLocaleLowerCase().endsWith('.jpeg') ){
        



    
        const newImage = new Image()
        newImage.src = imgFile;
        newImage.classList.add("artwork");
        newImage.id = "artImage"
        document.getElementById("artwork").appendChild(newImage);
    

        
        newImage.onload = function() {
            const width = newImage.naturalWidth;
            const height = newImage.naturalHeight;

            if (height >= width) {
                console.log('The image is Tall or Square.');
                newImage.classList.add("tall");
            } 
            else {
                console.log('The image is Wide');
                newImage.classList.add("wide");
            }
        }

    }
    
}

fetchPeopleData();
