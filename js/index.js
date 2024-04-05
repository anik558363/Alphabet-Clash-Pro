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

function handelKeyboardKeyUpEvent(event){
    const playerPressed = event.key;

    // key player is expected to press
    const currentAlphabetElement = document.getElementById('current_alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();


    // check right or wrong key pressed

    if(playerPressed === expectedAlphabet){
        

        const currentScore = getTextElementValueById('current_score');

        const newScore = currentScore + 1;


        setValueByInnerText('current_score', newScore);
        


        // --------------------------------------
        // //-------> score update
        // // 1. get the current score
        // const currentScoreElement = findInt('current_score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);



        // // 2. increase the score by 1
        // const newScore = currentScore + 1;
        


        // // 3. show the update score
        // currentScoreElement.innerText = newScore;

        // -------------------------------------------

     


        // start a new round
        continueGame();
        removeBackgroundColorById(expectedAlphabet);

    }else{


        const currentLife = getTextElementValueById('current_life');

        const newLife = currentLife - 1;

        setValueByInnerText('current_life', newLife)


        if(newLife === 0){

            gameOver();

        }


        // ---------------------------------------
        // // 1.get the current life number
        // const currentLifeElement  = findInt('current_life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // // 2. reduce the current life number
        // const newLife = currentLife - 1;

        // // 3. display the updated life count
        // currentLifeElement.innerText = newLife;
        // -------------------------------------------

       
    }



}



document.addEventListener('keyup', handelKeyboardKeyUpEvent)



// -----------------------------------------------

function continueGame(){
    // step-1: generate a random alphabet
    const alphabet =  getARandomAlphabet();
    

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabet = document.getElementById('current_alphabet');
    currentAlphabet.innerText = alphabet;
    
    // set background color

    setBackgroundColorById(alphabet);

    
   
}

// ----------------------------------------------------

function play(){

    // hide everything show only the playground
    hideElementById('home_screen');
    hideElementById('final_score')
    showElementById('play_ground');


    // reset score and life
    setValueByInnerText('current_life', 5)
    setValueByInnerText('current_score', 0)

    // continue Game function
    continueGame();
}



function gameOver(){
    hideElementById('play_ground');
    showElementById('final_score');
}

