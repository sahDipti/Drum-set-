
var numberOfButtons=document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfButtons;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function (){
        var buttonClicked=this.innerHTML;
        var audio;
        switch(buttonClicked){
            case 'w':
                audio=new Audio("sounds/crash.mp3");
                break;
            case 'a':
                audio=new Audio("sounds/kick-bass.mp3");
                break;
            case 's':
                audio=new Audio("sounds/snare.mp3");
                break;
            case 'd':
                audio=new Audio("sounds/tom-4.mp3");
                break;
            case 'j':
                audio=new Audio("sounds/tom-3.mp3");
                break;
            case 'k':
                audio=new Audio("sounds/tom-2.mp3");
                break;
            default: 
                audio=new Audio("sounds/tom-1.mp3");
        }
        audio.play();
    });
}
