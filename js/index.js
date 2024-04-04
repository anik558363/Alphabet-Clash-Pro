// function play() {
//     //step-1: hide the home screen. to hide the screen add the class hidden to the home section 

//     const home_screen = document.getElementById('home_screen');
//     home_screen.classList.add('hidden')



//     // show the playground
//     const playGround = document.getElementById('play_ground');
//     playGround.classList.remove('hidden');

// }

// -----------------------------------------------

function continueGame(){

}



function play(){
    hideElementById('home_screen');
    showElementById('play_ground');
    continueGame();
}