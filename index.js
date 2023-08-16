var numberofdrum=document.querySelectorAll(".drum").length;
//console.log(numberofdrum);
for(var i=0;i<numberofdrum;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(event){
        var innerHtml=this.innerHTML;
        //console.log(event);
        makeSound(innerHtml);
        buttonAnimation(innerHtml);
    });
}

//var audio=new Audio("./sounds/tom-1.mp3");
//audio.play();

document.addEventListener("keydown",function(event){
    var key=event.key;
    //console.log(key);
    makeSound(key);
    buttonAnimation(key);

});    

function makeSound(key){
    switch (key) {
        case 'w':
            var audio1=new Audio("./sounds/crash.mp3");
            audio1.play();
            break;
        case 'a':
            var audio2=new Audio("./sounds/kick-bass.mp3");
            audio2.play();
            break;
        case 's':
            var audio3=new Audio("./sounds/snare.mp3");
            audio3.play();
            break;    
        case 'd':
            var tom1=new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case 'j':
            var tom2=new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break; 
        case 'k':
            var tom3=new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break; 
        case 'l':
            var tom4=new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        default:
            console.log("error");                  
    }
}

function buttonAnimation(currentKey){
    var activation=document.querySelector("."+currentKey);
    activation.classList.add("pressed");
    setTimeout(function(){
        activation.classList.remove("pressed");
    },100);
}