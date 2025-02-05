const boxes1 = document.querySelectorAll(".child");
const erasebutton = document.getElementById("erase-btn")
const inputs = document.getElementById("my-input")
// const color = "red"

erasebutton.onclick = () => {
  color = "white";
}

let isMouseClicked = false;

document.onmousedown = () => {
    console.log("mouse clicked")
    isMouseClicked = true ;
}

//onmouseup
document.onmouseup = () => {
    isMouseClicked = false
}

for (let i = 0 ; i <= 64; i++) {
    boxes1[i].onmouseenter = () => {
        if(isMouseClicked === true){
            
            boxes1[i].style.backgroundColor = color;
        }
    }
}

function setcolor(){
//    const userChoice = prompt("Enter color")
 const userChoice = inputs.value ;
   color = userChoice ;

}