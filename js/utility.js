function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}

// -----------------------------------------------

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

// ------------------------------------------------

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

// --------------------------------------------------

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');

}

// ---------------------------------------------------

function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];

    return alphabet;

}


// -------------------------------------------------



function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const elementNumber = parseInt(elementText);

    return elementNumber;
}



// -------------------------------------


function setValueByInnerText(elementId, value){
    const element = document.getElementById(elementId);

    element.innerText = value;
}


// ------------------------------------


function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}


// -------------------------------------------------


// function findInt(elementId){
//     const element = document.getElementById(elementId);
//     return element;
// }

// -------------------------------------






// function getARandomAlphabet(){
//     // get or create an alphabet array
//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
//     const alphabets = alphabetString.split('');


//     // get a random index between 0 - 25

//     const randomNumber = Math.random()*25;
//     const index = Math.round(randomNumber);

//     const alphabet = alphabets[index];
//     alphabet;

//     return alphabet;

// }