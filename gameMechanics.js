//To iterate the argument number with interval of 300 milliseconds until a message is displayed
function countdown(num,a,b) {
    //Iterates the value until the value greater than 1
    let int = setInterval(function() {
        document.getElementById('game').innerHTML = num ;
        (num--) || clearInterval(int);
        document.getElementById('result').innerHTML = "";
    },300);
    let afterCount = setTimeout(function() {
        document.getElementById('game').innerHTML = a + " X " + b;
        let result;
        if (a === b) {
            result = "It's a Tie!";
        }
        else if ((a == "Rock" && b == "Scissor") || (a == "Paper" && b == "Rock") ||
        (a == "Scissor" && b == "Paper")) {
            result = "You win!";
        }
        else {
            result = "You lost!"
        }
        document.getElementById('result').innerHTML = result;
        },num*300 + 300);
}

const choices = document.querySelectorAll(".choice");

choices.forEach((choice) =>{
    choice.addEventListener("click", function() {
        const pChoice = this.textContent;
        const cChoices = ["Rock","Paper","Scissor"];
        const cpu = cChoices[Math.floor(Math.random()*3)];
        countdown(3,pChoice,cpu);
    });
});
