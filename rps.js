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
            return 100; // flag for human win
        } else {
            return 1; // flag for bot win
        }
    }

}

function scissorsRock(flag,a,b){

    // switches human and bot places if bot is higher
    if(!flag){
        let temp = a;
        a = b;
        b = temp;
    }

    return a === 3 && b === 1; //expression to confirm scissors and rock relationship
}

const r = "rock";
const p = "paper";
const s = "scissors";

//screen timer display code goes here

const human = getHumanChoice(prompt("ROCK PAPER OR SCISSORS?"));
if(human === "fail"){
    alert("you lose by default cause you stoopid");
} else {
    const bot = getComputerChoice();
    const result = CalculateWin(human, bot);
    
    switch(result){
        case 1:
            alert("YOU LOSE");
            break;
        case 10:
            alert("TIE");
            break;
        case 100:
            alert("YOU WIN");
            break;
        default:
            alert("SOMETHING WENT HORRIBLY WRONG");
    }
}