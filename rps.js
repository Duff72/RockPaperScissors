class Player {
    constructor(name) {
        this.name = name;
    }

    getHand() {
        const hands = ['rock', 'paper', 'scissors'];
        const handVar = parseInt((Math.random() * 10) % 3);
        if (handVar === 0) {
            return hands[0];
        } else if (handVar === 1) {
            return hands[1];
        } else {
            return hands[2];
        }
    }
};




class Human {
constructor(name) {
    this.name = name;
}};





const hands = ['rock', 'paper', 'scissors'];


const computer = new Player('Computer');
const bob = new Player('Bob');
const bill = new Player('Bill');
let human = new Human('You');

const cpuResult = document.getElementsByClassName('cpuResult');
const humanResult = document.getElementsByClassName('humanResult');
function getHand(){
    handVar = parseInt((Math.random()*10)%3)
    if (handVar === 0) {
        return hands[0]
    } else if (handVar === 1) {
        return hands[1]
    } else {
        return hands[2]   
    }
};





// Define a function called playRound()
function playRound(player1, player2){
    // Takes two player objects as arguments
    // Gets hands from each
    let player1Hand = player1.getHand();
    let player2Hand = player2.getHand();
   

    

    //Determines the winner
   
    if (player1Hand === player2Hand) {
        console.log(`${player1.name} played ${player1Hand} and ${player2.name} played ${player2Hand}; It's a tie!`); //If its a tie, log the hands played and "it's a tie".
        cpuResult[0].innerText = `${player1.name} played ${player1Hand} and ${player2.name} played ${player2Hand}; It's a tie!`;
        roundWinner = null
        return roundWinner; //Returns the winner object (null if no winner)
    } else if (
        (player1Hand === 'rock' && player2Hand === 'scissors') ||
        (player1Hand === 'paper' && player2Hand === 'rock') ||
        (player1Hand === 'scissors' && player2Hand === 'paper')
    ) {
        console.log(`${player1.name} played ${player1Hand} and ${player2.name} played ${player2Hand}; ${player1.name} wins!`);  // Logs the hands played and name of the winner.
        cpuResult[0].innerText = `${player1.name} played ${player1Hand} and ${player2.name} played ${player2Hand}; ${player1.name} wins!`;
        document.getElementById('player1Wins').innerHTML++;
        roundWinner = player1
        return roundWinner; //Returns the winner object (null if no winner)
    } else {
        console.log(`${player1.name} played ${player1Hand} and ${player2.name} played ${player2Hand}; ${player2.name} wins!`);  // Logs the hands played and name of the winner.
        cpuResult[0].innerText = `${player1.name} played ${player1Hand} and ${player2.name} played ${player2Hand}; ${player2.name} wins!`;
        document.getElementById('player2Wins').innerHTML++;
        roundWinner = player2
        return roundWinner; //Returns the winner object (null if no winner)
    }};

function playRockVsCPU(human, computer){
        let humanHand = 'rock';
        let computerHand = computer.getHand();

       
        if (humanHand === computerHand) {
            console.log(`You played ${humanHand} and ${computer.name} played ${computerHand}; It's a tie!`); //If its a tie, log the hands played and "it's a tie".
            humanResult[0].innerText = `${human.name} played ${humanHand} and ${computer.name} played ${computerHand}; It's a tie!`;
            roundWinner = null
            return roundWinner; //Returns the winner object (null if no winner)
        } else if (
            (humanHand === 'rock' && computerHand === 'scissors') ||
            (humanHand === 'paper' && computerHand === 'rock') ||
            (humanHand === 'scissors' && computerHand === 'paper')
        ) {
            console.log(`You played ${humanHand} and ${computer.name} played ${computerHand}; ${human.name} wins!`);  // Logs the hands played and name of the winner.
            humanResult[0].innerText = `${human.name} played ${humanHand} and ${computer.name} played ${computerHand}; ${human.name} win!`;
            document.getElementById('humanWins').innerHTML++;
            roundWinner = human
            return roundWinner; //Returns the winner object (null if no winner)
        } else {
            console.log(`You played ${humanHand} and ${computer.name} played ${computerHand}; ${computer.name} wins!`);  // Logs the hands played and name of the winner.
            humanResult[0].innerText = `${human.name} played ${humanHand} and ${computer.name} played ${computerHand}; ${computer.name} wins!`;
            document.getElementById('computerWins').innerHTML++;
            roundWinner = computer
            return roundWinner; //Returns the winner object (null if no winner)
        }};

function playPaperVsCPU(human, computer){
            let humanHand = 'paper';
            let computerHand = computer.getHand();
    
           
            if (humanHand === computerHand) {
                console.log(`You played ${humanHand} and ${computer.name} played ${computerHand}; It's a tie!`); //If its a tie, log the hands played and "it's a tie".
                humanResult[0].innerText = `${human.name} played ${humanHand} and ${computer.name} played ${computerHand}; It's a tie!`;
                roundWinner = null
                return roundWinner; //Returns the winner object (null if no winner)
            } else if (
                (humanHand === 'rock' && computerHand === 'scissors') ||
                (humanHand === 'paper' && computerHand === 'rock') ||
                (humanHand === 'scissors' && computerHand === 'paper')
            ) {
                console.log(`You played ${humanHand} and ${computer.name} played ${computerHand}; ${human.name} wins!`);  // Logs the hands played and name of the winner.
                humanResult[0].innerText = `${human.name} played ${humanHand} and ${computer.name} played ${computerHand}; ${human.name} win!`;
                document.getElementById('humanWins').innerHTML++;
                roundWinner = human
                return roundWinner; //Returns the winner object (null if no winner)
            } else {
                console.log(`You played ${humanHand} and ${computer.name} played ${computerHand}; ${computer.name} wins!`);  // Logs the hands played and name of the winner.
                humanResult[0].innerText = `${human.name} played ${humanHand} and ${computer.name} played ${computerHand}; ${computer.name} wins!`;
                document.getElementById('computerWins').innerHTML++;
                roundWinner = computer
                return roundWinner; //Returns the winner object (null if no winner)
            }};
function playScissorsVsCPU(human, computer){
                let humanHand = 'scissors';
                let computerHand = computer.getHand();
        
               
                if (humanHand === computerHand) {
                    console.log(`You played ${humanHand} and ${computer.name} played ${computerHand}; It's a tie!`); //If its a tie, log the hands played and "it's a tie".
                    humanResult[0].innerText = `${human.name} played ${humanHand} and ${computer.name} played ${computerHand}; It's a tie!`;
                    roundWinner = null
                    return roundWinner; //Returns the winner object (null if no winner)
                } else if (
                    (humanHand === 'rock' && computerHand === 'scissors') ||
                    (humanHand === 'paper' && computerHand === 'rock') ||
                    (humanHand === 'scissors' && computerHand === 'paper')
                ) {
                    console.log(`You played ${humanHand} and ${computer.name} played ${computerHand}; ${human.name} wins!`);  // Logs the hands played and name of the winner.
                    humanResult[0].innerText = `You played ${humanHand} and ${computer.name} played ${computerHand}; ${human.name} win!`;
                    document.getElementById('humanWins').innerHTML++;
                    roundWinner = human
                    return roundWinner; //Returns the winner object (null if no winner)
                } else {
                    console.log(`You played ${humanHand} and ${computer.name} played ${computerHand}; ${computer.name} wins!`);  // Logs the hands played and name of the winner.
                    humanResult[0].innerText = `You played ${humanHand} and ${computer.name} played ${computerHand}; ${computer.name} wins!`;
                    document.getElementById('computerWins').innerHTML++;
                    roundWinner = computer
                    return roundWinner; //Returns the winner object (null if no winner)
                }};
    


    const playButton = document.getElementById('playButton');

    const rockButton = document.getElementById('rockButton');
    const paperButton = document.getElementById('paperButton');
    const scissorsButton = document.getElementById('scissorsButton');
    const resetButton = document.getElementById('reset');
    const resetButton2 = document.getElementById('reset2');
playButton.addEventListener('click', function() {
    playRound(bob, bill);
});

rockButton.addEventListener('click', function() {
    playRockVsCPU(human, computer);
});

paperButton.addEventListener('click', function() {
    playPaperVsCPU(human, computer);
});

scissorsButton.addEventListener('click', function() {
    playScissorsVsCPU(human, computer);
});
resetButton.addEventListener('click', function() {
    
    document.getElementById('player1Wins').innerHTML = 0;
    document.getElementById('player2Wins').innerHTML = 0;
    cpuResult[0].innerText = 'Click play!'
});
resetButton2.addEventListener('click', function() {
    document.getElementById('humanWins').innerHTML = 0;
    document.getElementById('computerWins').innerHTML = 0;
    humanResult[0].innerText = 'Choose your hand!'
});