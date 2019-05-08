import Profile from "./profile";  
const prof = new Profile();
const searchProfile = document.getElementById("searchProfile");


eventListeners();



function eventListeners(){
    searchProfile.addEventListener("keyup",function(e){
        prof.getProfile(e.target.value)
        .then(data => console.log(data.userJson[0]))
        .catch(error => console.log(error));
    })
}