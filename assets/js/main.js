document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function() {
            if(this.getAttribute('data-type') == 'submit') {
               alert('You Clicked Submit!');
            }  else {
                let gameType = this.getAttribute('data-type');
                alert(`You Cliked ${gameType}`);
            }
        });
    }

});

/**
 *  The Main game loop will be called when the script is first load
 *  After the user's answer has been preocessed
 */


function runGame() {
    
    //Create random numbers betwenn 1 and 25
    let num1 = Math.floor(Math.random() + 25 +1 );
    let num2 = Math.floor(Math.random() + 25 +1 );


}

runGame();

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {
    
}

