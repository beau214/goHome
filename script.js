

let randomNumber = Math.floor(Math.random() * 101);
let playerName = [];
let playerGuess = [];
let diff = [];

function game(){
    
    
    let people = prompt("How many people want to leave?");
    for(let i = 1; i <= people; i++){
        playerName[i-1] = prompt("Enter name for player " + i + ":");
        playerGuess[i-1] = prompt("Player " + i + " guesses: ");
        
        while(playerGuess > 100 || playerGuess < 1){
            console.log("Number should be in range of 1 to 100");
            playerGuess[i-1] = prompt("Player " + i + " guesses: ");
        }
    }

    for(let i = 0; i < playerGuess.length; i++){
        // console.log(randomNumber + "-" + playerGuess[i])
        diff[i] = Math.abs(randomNumber - playerGuess[i]);
        // console.log(diff[i])
    }
    let winner = diff[0];
    let pos = 0;
    for(let i = 0; i < diff.length; i++){
        if(diff[i] < winner){
            // console.log("Name: " + playerName[i] +"Winner value: " + winner + " Diff value: " + diff[i]);
            winner = diff[i];
            pos = i;
        }
        // else{
        //     console.log("Name: " + playerName[i] +"Winner value: " + winner + " Diff value: " + diff[i]);
        // }
    }
    const para = document.createElement("div");
    const para2 = document.createElement("div");
    const node = document.createTextNode(playerName[pos] + " Wins!");
    const node2 = document.createTextNode("The number was " + randomNumber);
    para.appendChild(node);
    para2.appendChild(node2);
    const element = document.getElementById("playerGuesses");
    element.appendChild(para);
    element.appendChild(para2);
    
}
game()