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
});
rightButton.addEventListener("click", function () {
    index += 1; 
    
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Adds smooth scrolling effect
    });
})



const newImage = document.getElementById("artwork")


function updatePage(){

    console.log(newImage.naturalHeight + " x " + newImage.naturalWidth)

    if(newImage.naturalHeight >= newImage.naturalWidth) {
        newImage.classList.add("tall");
    }
    else{
        newImage.classList.add("wide");
    }

    
    
}

updatePage()
