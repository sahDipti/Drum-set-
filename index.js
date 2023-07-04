
var numberOfButtons=document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfButtons;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function (){
        var buttonClicked=this.innerHTML;
        playSound(buttonClicked);
        buttonAnimation(buttonClicked);
    });
}

document.addEventListener("keydown",function(event){
    var keyVal=event.key;
    playSound(keyVal);
    buttonAnimation(keyVal);
})

function playSound(key){
    var audio;
        switch(key){
            case 'w':
                var audio=new Audio("sounds/crash.mp3");
                audio.play();
                break;
            case 'a':
                var audio=new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;
            case 's':
                var audio=new Audio("sounds/snare.mp3");
                audio.play();
                break;
            case 'd':
                var audio=new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
            case 'j':
                var audio=new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
            case 'k':
                var audio=new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
            case 'l':
                var audio=new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
            default: 
        }
}

function buttonAnimation(currKey){
    var activeButton = document.querySelector("."+currKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}


