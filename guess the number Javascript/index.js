let randomNumber = parseInt((Math.random()*100)+1);
var button = document.getElementById("button-vl")
var input = document.getElementById("input-vl");
let count = 5;

function calculate() {
    input = document.getElementById("input-vl");
    console.log(randomNumber);
    console.log(input.value);

    if (count == 0) {
        document.getElementById("result").innerHTML = `<p>Game over ${randomNumber} is the correct number</p>`;
        input.setAttribute('disabled', '');
        document.getElementById("button-vl").textContent = "Start again";

        document.getElementById('button-vl').onclick = function() {
            startGame();
         };
    }
    else if(randomNumber == input.value) {
        document.getElementById("result").innerHTML = `<p>${randomNumber} is the correct guess</p>`;
        //input.value = '';
        input.setAttribute('disabled', '');
        document.getElementById("button-vl").textContent = "Start again";

        document.getElementById('button-vl').onclick = function() {
            startGame();
         };
    } 
    else if(input.value > randomNumber) {
        count--;
        document.getElementById("result").innerHTML = `<p> your guess is higher than the number: Guess left ${count}</p>`;
        //input.value = '';
    }
    else if (input.value < randomNumber) {
        count--;
        document.getElementById("result").innerHTML = `<p> your guess is smaller than number: Guess left ${count}</p>`;
        //input.value = '';
    }
}

function startGame() {
    count = 5;
     randomNumber = parseInt((Math.random()*100)+1);
     document.getElementById("input-vl").disabled = false;
     button.textContent = "Enter";
     document.getElementById('button-vl').onclick = function() {
        calculate();
     };
}