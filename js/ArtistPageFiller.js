// used in artist page
// grab json data


var artist = "test";
var index = 0;



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
    document.getElementById('name').innerHTML = data.Artist[index].name;
    console.log(data.Artist[index].statement);
    document.getElementById('bio').innerHTML = data.Artist[index].statement;

    const imgFile = "../images/" + String(data.Artist[index].image);
    console.log(imgFile);

    //document.getElementById("artkwork").innerHTML += '<img src="/images/light-mascot-1.png" alt="testing">';

    if(imgFile.toLocaleLowerCase().endsWith('.png') || imgFile.toLocaleLowerCase().endsWith('.jpg') || imgFile.toLocaleLowerCase().endsWith('.jpeg') ){
        
        // const newImage = new Image()
        // newImage.scr = "../images/light-mascot-1.png"
        // newImage.style.width = "50%";
        // document.getElementById("artwork").appendChild(newImage);
        
        const newImage = new Image()
        newImage.src = imgFile;
        newImage.style.width = "50%";
        document.getElementById("artwork").appendChild(newImage);
        
        

    }
    
}

fetchPeopleData();
