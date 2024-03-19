//Javascript math quiz mannual//

//05/03/24
//Let us delcare variables:

let playing = false;
let timeRemaining;
let score;
let x;
let y;
let z;
let z1;
let randomChoice;

//Let us progam a reset button for the game:

document.getElementById("start-reset").onclick = function () {
    if (playing == true) {
        //if the player is playing will reloud.
        location.reload()
    } else{
        //if we are not true it will set the playing to true. And then hide the game-over id so we don't see it and show the time-remaining so we see how much time we have to finish the question.
        playing = true;
        hide("game-over");
        show("time-remaining");
        document.getElementById("start-reset").innerHTML = "Reset Game";
        score = 0;
        //Let us put it in the space we put in the html. This so that the score 0 is shown in the innerHTML.
        document.getElementById("score-value").innerHTML = score;
        //let us give timeRemaining a value of 60. This is because the players will have 60 seconds to put in their answers.
        timeRemaining = 60;
        //We need 2 functions. We will call the 1st one countDown and the other generateQA. This will allow us to generate questions and answers for the players.
        countDown();
        generateQA();
    }
};

//Let us create the countDown function.
function countDown() {
    //let us create a funtion expression.
    let countDown = setInterval(() => {
        //let us make sure our start time is > 0
        if (timeRemaining > 0) {
            timeRemaining--
            document.getElementById("time-remaining-value").innerHTML = timeRemaining;
        }else{
            stopCountdown();
            //Let us show game over.
            show("game-over");
            //Let's create a function that stops the countdown, it will be called 'stopCountdown'
            //Target start game and game-over
            //Assign the string to a p tag and br tag and end it with the score variable.
            document.getElementById("start-reset").innerHTML = "Start Game";
            document.getElementById("game-over").innerHTML = "<p>GAME OVER</p> <br>  <p>YOUR SCORE IS " + score + "</p>";
            playing = false;
        }
    }, 1000);
};

//Let us declare the stopCountdown.
function stopCountdown() {
    clearInterval(countDown);
};

//Let us declare the generateQA function//
function generateQA() {
    //let us generate a random number "x" and "y". We declared them earlier.
    x = Math.round(1 + Math.random()* 9); //Math.round & Math.random is a method with brackets.
    y = Math.round(1 + Math.random()* 9); //Math.round & Math.random is a method with brackets.
    z = x * y 

    //11/03/24
    //Let us target question in html
    document.getElementById("question").innerHTML = x + "&times;" + y;

    //we want to put the choices in the boxes.
    randomChoice = Math.round(1 + Math.random() * 3);

    //let us put the choices in the p.
    document.getElementById("box" + randomChoice).innerHTML = z;

    //let us create the wrong answers
    let wrongAnswers = [z];

    //let us create a loop.#
    for(var i = 1; i < 5; i++);{
        //we want to generat 3 wrong answers.
        //we are going to have different sections
        do{
            x = Math.round(1 + Math.random() * 9);
            y = Math.round(1 + Math.random() * 9);
            z1 = x * y;
        }
        while(wrongAnswers.indexOf(z1) > -1 )
        wrongAnswers.push(z1);
        //let us create a conditional statement
        if (i != randomChoice) {
            //let us target the boxes again.
            document.getElementById(`box${i}`).innerHTML = z1;
        }
    }


};

//let us check right wrong answers are clicked
for (var i = 1; i < 5; i++){

    //let us once more target the boxes
    document.getElementById(`box${i}`).onclick = function () {
        //let us check if the game is still on
        if (playing = true) {
            if (this.innerHTML == z) {
                //if the right answer is clicked
                //this shows what you will see in the website...
                show("correct");
                hide("wrong")
                setTimeout(function () {
                    //and this will clear the stuff so you can get on with the next question.
                    hide("correct");
                    hide("wrong");       
                }, 1000);
                score++
                //let us target the score-value
                document.getElementById("score-value").innerHTML = score;
                //let us call the function QA
                generateQA();
            } else {
                //if the wrong answer is clicked. 
                show("wrong")  
                hide("correct");
                setTimeout(function () {
                    hide("correct");
                    hide("wrong");       
                }, 1000);
            }
        }
    };
   
};

//We want to create a function that shows a html element
function show(id) {
    //let us target the id
    document.getElementById(id).style.display = "block";
}

//let us create a function for the hide{
function hide(id) {
    //let us target the id
    document.getElementById(id).style.display = "none";
}
//}
                                                                                                                           

//Hiding the answer attempt: fail
// if (show.game-over) {
//     hide.generateQA
    
// }


// Assignment 05/03/24 :Study the difference between setInterval and setTimeout in JavaScript
    //setTimeout schedules a single execution after a specified delay, while setInterval repeatedly executes a function with a fixed interval. setTimeout is used for one-time delays or scheduling a task in the future, while setInterval is suitable for recurring tasks.
    //The setTimeout() method is used to call a function after a certain period of time. The setInterval() Javascript method is used to call a function repeatedly at a specified interval of time. setTimeout() is cancelled by clearTimeout() method, and setInterval() is cancelled by clearInterval() method.

 