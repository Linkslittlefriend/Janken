function getComputerChoice(){
    return option = Math.floor(Math.random() * 3) + 1;
}

function getHumanChoice(choice){
        console.log("entered");
        console.log(choice);
        switch(choice){

            case "Rock":
                console.log("worked 1");
                human = 1;

            case "Paper":
                console.log("worked 2");
                human = 2;

            case "Scissors":
                console.log("worked 3");
                human = 3;

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

//scoreboard
let humanScore = 0;
let computerScore = 0;

alert("Today, you are going to play JANKEN. Click the button to play a move and the computer will pick as well.");

//for(game=0;game<5;game++){
    PlayBall();
//}

alert("FINITO. Score is.... " + humanScore + " for you.... and..." + computerScore + " for the BOT.");


function PlayBall(){
    console.log("entered playBALL");
    // shorthands
    const r = "rock";
    const p = "paper";
    const s = "scissors";
    
    let human;
    let holder;
    
    //screen timer display code goes here
    
    //const human = getHumanChoice(prompt("ROCK PAPER OR SCISSORS?"));
    
    const Btns = document.querySelectorAll("button");

    Btns.forEach((div) => {
        console.log(div);
        div.addEventListener("click", getHumanChoice(div.id));
    });

    if(human === "fail"){
        alert("you lose by default cause you stoopid");
    } else {
        if(human == undefined)
        {
            alert("I don't know how but you played undefined bro. ending game.");
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
                    alert("something went wrong");
            }
        }
        
        const statement = "you played " + holder[0] + " and your opponent played " + holder[1] + ".";
    
        switch(result){
            case 1:
                alert(statement + " YOU LOSE...");
                computerScore++;
                break;
            case 10:
                alert("Both of you played " + holder[0] + ". TIE.");
                humanScore++;
                computerScore++;
                break;
            case 100:
                alert(statement + " YOU WIN!!!");
                humanScore++;
                break;
            default:
                alert("SOMETHING WENT HORRIBLY WRONG");
        }
    }
}