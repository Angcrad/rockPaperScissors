game();
function game()
{
    let playerSelection;
    let computerSelection;
    let win=0;
    let lose=0;
    let tie=0;
    let result=0;
    for(let i=0;i<5;i++)
    {
        playerSelection = prompt("rock/paper/scissors?: ").toLowerCase();
        switch(playerSelection)
        {
            case "r":
                playerSelection="rock";
                break;
            case "p":
                playerSelection="paper";
                break;
            case "s":
                playerSelection="scissors";
                break;
        }
        computerSelection=computerPlay();
        switch(playRound(playerSelection,computerSelection))
        {
            case 1:
                console.log("your "+playerSelection+" won against computer's "+computerSelection)
                win++;
                break;
            case -1:
                console.log("your "+playerSelection+" lost against computer's "+computerSelection)
                lose++;
                break;
            case 0:
                console.log("your "+playerSelection+" tied with computer's "+computerSelection)
                tie++;
                break;
            default:
                console.log("invalid input: "+playerSelection);
                i--;
        }
        console.log((4-i)+" plays left");
    }
    result=win-lose;
    if(result===0)
    {
        console.log("it's a tie");
    }
    else if(result>0)
    {
        console.log("you won "+win+"-"+lose);
    }
    else if(result<0)
    {
        console.log("you lost "+win+"-"+lose);
    }
}
function computerPlay()
{
    switch(getRandomInt(3))
    {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}
function playRound(playerSelection, computerSelection)
{
    if(playerSelection)
    {
        switch(playerSelection)
        {
            case "rock":
                switch(computerSelection)
                {
                    case "rock":
                        return 0;
                    case "paper":
                        return -1;
                    case "scissors":
                        return 1;
                }
                break;
            case "paper":
                switch(computerSelection)
                {
                    case "rock":
                        return 1;
                    case "paper":
                        return 0;
                    case "scissors":
                        return -1;
                }
                break;
            case "scissors":
                switch(computerSelection)
                {
                    case "rock":
                        return -1;
                    case "paper":
                        return 1;
                    case "scissors":
                        return 0;
                }
                break;
            default:
                return "error";
        }
    }
    return "error";
}
function getRandomInt(max)
    {
        return Math.floor(Math.random() * max);
    }