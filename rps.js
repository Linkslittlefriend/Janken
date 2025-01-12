function getComputerChoice(){
    return option = Math.floor(Math.random() * 3) + 1;
}

function getHumanChoice(choice){
        console.log("entered");
        console.log(choice);
        switch(choice.toLowerCase()){

            case "rock":
                console.log("worked 1");
                return human = 1;
            case "paper":
                console.log("worked 2");
                return human = 2;
            case "scissors":
                console.log("worked 3");
                return human = 3;

            default:
                human = prompt("Something wrong happened. type 1 for rock, 2 for paper, 3 for scissors.");
        }

    return "fail";
}

function CalculateWin(hum, bot){
    
    console.log("human is "+ hum +" and bot is " + bot);
    if(hum === bot){
        console.log("entered tie: " + hum + " " + bot);
        return 10 // flag for tie
    } else {
        console.log("entered else: " + hum + " " + bot);
        const flag = hum > bot;
        if(scissorsRock(flag, hum, bot)){
            return 1; // flag for bot win
        } else {
            return 100; // flag for human win
        }
    }

}

function scissorsRock(flag,a,b){

    // conditional that activates when bot is higher
    if(!flag){
        return !(a === 1 && b === 3);  // expression to confirm scissors and rock relationship, returns the inverse bool result to switch previous conditional relationship
    }

    return (a === 3 && b === 1); // expression to confirm scissors and rock relationship
}

function newGame(){
    humanScore = 0;
    computerScore = 0;
    gameover = false;

    GUIscore.textContent = humanScore + " - " + computerScore;
    GUItext.textContent = "WELCOME TO JANKEN. The rules are simple. You click one of the three buttons above, and fight a CPU. First to 5 wins.";
}

function setResetButton(){
    const resetbtn = document.createElement("button");

    resetbtn.classList.add("UI");
    resetbtn.setAttribute("id", "reset");
    resetbtn.textContent = "PLAY AGAIN";

    const parent = document.querySelector(".container");
    const scorechild = document.querySelector("#score");
    parent.replaceChild(resetbtn,scorechild);

    resetbtn.addEventListener("click", () => {
        newGame();
        parent.replaceChild(scorechild,resetbtn);
    });
}

//scoreboard
let humanScore = 0;
let computerScore = 0;
let gameover = false;

//UI Elements
const GUItext = document.querySelector("#announcements");
const GUIscore = document.querySelector("#score");

newGame();

const Btns = document.querySelectorAll(".btn button");

    Btns.forEach((button) => {
        button.addEventListener("click", () => PlayBall(button.id));
    });


function PlayBall(btnClick){
    console.log(btnClick);
    // shorthands
    const r = "rock";
    const p = "paper";
    const s = "scissors";

    const human = getHumanChoice(btnClick);
    let holder;
    
    //screen timer display code goes here
    
    //const human = getHumanChoice(prompt("ROCK PAPER OR SCISSORS?"));
    
    if(human === "fail" || gameover){
        GUItext.textContent = "Nah, you can't do that.";
    } else {
        if(human == undefined)
        {
            GUItext.textContent = "I don't know how but you played undefined bro. ending game.";
            return 0;
        }
        const bot = getComputerChoice();
        const result = CalculateWin(human, bot);
    
        holder = [human,bot];
    
        for(i=0;i<2;i++){
            switch(holder[i]){
                case 1:
                    holder[i] = r;
                    break;
                case 2:
                    holder[i] = p;
                    break;
                case 3:
                    holder[i] = s;
                    break;
                default:
                    GUItext.textContent ="something went wrong";
            }
        }
        
        const statement = "you played " + holder[0] + " and your opponent played " + holder[1] + ".";
    
        switch(result){
            case 1:
                GUItext.textContent = statement + " YOU LOSE...";
                computerScore++;
                console.log("the current score is " + humanScore + " - " + computerScore);
                break;
            case 10:
                GUItext.textContent = "Both of you played " + holder[0] + ". TIE.";
                humanScore++;
                computerScore++;
                console.log("the current score is " + humanScore + " - " + computerScore);
                break;
            case 100:
                GUItext.textContent = statement + " YOU WIN!!!";
                humanScore++;
                console.log("the current score is " + humanScore + " - " + computerScore);
                break;
            default:
                GUItext.textContent = "SOMETHING WENT HORRIBLY WRONG";
        }
        
        GUIscore.textContent = humanScore + " - " + computerScore;

        if(humanScore === 5 || computerScore === 5){
            if(human === 5 && computerScore === 5){
                GUItext.innerHTML = "DRAW. Boring...Play again?<br>Final Score: " + humanScore + " - " + computerScore;
            } else 
            if(computerScore === 5){
                GUItext.innerHTML = "YOU LOST.....Time to take revenge?<br>Final Score: " + humanScore + " - " + computerScore;
            } else {
                GUItext.innerHTML = "YOU WON!!!! Replay to assert dominance?<br>Final Score: " + humanScore + " - " + computerScore;
            }
            setResetButton();
            gameover = true;
        }

    }
}