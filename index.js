
for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

}
//function to play sound for corresponding input character
function playSound(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log(this.innerHTML+" triggered an error. Default case executed.");
            break;
    }
    
}
//event Listener that finds the key property of event of keydown, which is the key pressed, and passes it to playSound()
document.addEventListener("keydown",function(event){
    playSound(event.key.toLowerCase());
    buttonAnimation(event.key.toLowerCase());
})

function handleClick() {
    //this.setAttribute("style","color:white");
    playSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
}
function buttonAnimation(key){
    var activeButton = document.querySelector("."+key);
    //add a highlighting look
    activeButton.classList.add("pressed");
    //use 500ms delay, then remove the pressed class to return element back to original look
    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);
}

function showInstructions(){
    document.querySelector(".instructions .how").classList.toggle("hide");
    if(document.querySelector(".instructions button").innerHTML === "Hide Instructions"){
        document.querySelector(".instructions button").innerHTML = "Show Instructions";
    }else{
        document.querySelector(".instructions button").innerHTML = "Hide Instructions";        
    }
    document.querySelector(".instructions button").classList.add("pressed");
    //use 500ms delay, then remove the pressed class to return element back to original look
    setTimeout(() => {
        document.querySelector(".instructions button").classList.remove("pressed");
    }, 100);
}