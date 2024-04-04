// function play() {
//     //step-1: hide the home screen. to hide the screen add the class hidden to the home section 

//     const home_screen = document.getElementById('home_screen');
//     home_screen.classList.add('hidden')



//     // show the playground
//     const playGround = document.getElementById('play_ground');
//     playGround.classList.remove('hidden');

// }

// -----------------------------------------------


// capture keyboard key press

document.addEventListener('keyup', function handleKeyboardButtonPress(event){

    const playerPressed = event.key;

    const currentAlphabet = document.getElementById('current_alphabet').innerText.toLowerCase();

    if(playerPressed === currentAlphabet){


        

        continueGame();
        removeBackgroundColorById(currentAlphabet);
    }else{
        
    }

})


// -----------------------------------------------

function continueGame(){
    // step-1: generate a random alphabet
    const alphabet =  getARandomAlphabet();
    console.log(alphabet);


    // set randomly generated alphabet to the screen (show it)
    const currentAlphabet = document.getElementById('current_alphabet');
    currentAlphabet.innerText = alphabet;
    
    // set background color

    setBackgroundColorById(alphabet);

    
   
}

// ----------------------------------------------------

function play(){
    hideElementById('home_screen');
    showElementById('play_ground');
    continueGame();
}