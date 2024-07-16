const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");


function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes"); //display the local storage item
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes",notesContainer.innerHTML);
}


createBtn.addEventListener("click",()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "./notes-app-img/images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img); //inputbox display inside the notesContainer 
    updateStorage();

})


notesContainer.addEventListener("click",(e)=>{ //it will store in the localstorage.
   if(e.target.tagName === "IMG"){
    e.target.parentElement.remove();
    updateStorage();
   }
   else if(e.target.tagName === "p"){
    notes = document.querySelectorAll(".input-box");
    notes.forEach(nt => {
        nt.onkeyup = function(){
        updateStorage();
        }
    })
   }
})



document.addEventListener("keydown", event => {  //for line breaking
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
