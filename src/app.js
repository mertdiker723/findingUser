import Profile from "./profile";  
import UI from"./ui";

const prof = new Profile();
const ui = new UI();

const searchProfile = document.getElementById("searchProfile");


eventListeners();



function eventListeners(){
    searchProfile.addEventListener("keyup",writeIt);
}


function writeIt(e){
    ui.clearIt();
    if(e.target.value.trim() !== ''){
        prof.getProfile(e.target.value)
        .then(data => {
            if(e.target.value.length === 0){
                console.log("yok");
            }        
            else{
                ui.writeAllProfile(data.userJson[0]);
                ui.writeAllTodos(data.todoJson);
            }
           
        })
        .catch(error => ui.showAlert());
    }
 
}