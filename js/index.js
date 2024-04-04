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

    
        // 1. get the current score
        const currentScoreElement = document.getElementById('current_score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);


        // 2. increase the score by 1
        const newScore = currentScore + 1;

        // 3. show the update score
        currentScoreElement.innerText = newScore;

        // console.log(currentScore);


         
 
         console.log(true);

        continueGame();
        removeBackgroundColorById(currentAlphabet);
    }else{


        // 1.
        const currentLifElement = document.getElementById('current_life');
        const currentLifText = currentLifElement.innerText;
        const currentLife = parseInt(currentLifText);
        
        // 2.
        const newLife = currentLife - 1;

        // 3.
        currentLifElement.innerText = newLife;


        
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