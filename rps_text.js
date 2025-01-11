function getComputerChoice(){
    return option = Math.floor(Math.random() * 3) + 1;
}

function getHumanChoice(human){
    for(i = 0;i < 10; i++){
        console.log(human);
        switch(human.toLowerCase()){

            case "rock":
            case "r":
            case "1":
                console.log("worked 1");
                return 1;

            case "paper":
            case "p":
            case "2":
                console.log("worked 2");
                return 2;

            case "scissors":
            case "s":
            case "3":
                console.log("worked 3");
                return 3;

            default:
                human = prompt("WRONG VALUE. TYPE \"1\" FOR ROCK \"2\" FOR PAPER \"3\" FOR SCISSORS, OR GET A BRAIN AND WRITE THE ACTUAL THING.");
        }
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

alert("Today, you are going to play JANKEN. its a 5 round game. You will be given a choice between 3 values. If you cant type letters, use 1, 2, or 3. Now....");

for(game=0;game<5;game++){
    PlayBall();
}

alert("FINITO. Score is.... " + humanScore + " for you.... and..." + computerScore + " for the BOT.");


function PlayBall(){

    // shorthands
    const r = "rock";
    const p = "paper";
    const s = "scissors";
    
    
    let holder;
    
    //screen timer display code goes here
    
    const human = getHumanChoice(prompt("ROCK PAPER OR SCISSORS?"));
    
    if(human === "fail"){
        alert("you lose by default cause you stoopid");
    } else {
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