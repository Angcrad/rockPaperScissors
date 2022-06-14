let win=0;
let lose=0;
let tie=0;
let htmlStr="";
const rockBtn=document.getElementById("r");
const paperBtn=document.getElementById("p");
const scissorBtn=document.getElementById("s");
rockBtn.addEventListener("click",function()
    {
    game("r");
    }
    );
paperBtn.addEventListener("click",function()
    {
    game("p");
    }
    );
scissorBtn.addEventListener("click",function()
    {
    game("s");
    }
    );
function game(playerSelection)
{
    let computerSelection;
    let result=0;
    //for(let i=0;i<5;i++)
    //{
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
                document.getElementById("status").innerText="your "+playerSelection+" won against computer's "+computerSelection;
                document.getElementById("win").innerText="wins: "+(++win);
                break;
            case -1:
                document.getElementById("status").innerText="your "+playerSelection+" lost against computer's "+computerSelection;
                document.getElementById("lose").innerText="loses: "+(++lose);
                break;
            case 0:
                document.getElementById("status").innerText="your "+playerSelection+" tied with computer's "+computerSelection;
                document.getElementById("tie").innerText="ties: "+(++tie);
                break;
            default:
                console.log("invalid input: "+playerSelection);
                //i--;
                break;
        }
        htmlStr="";
        htmlStr+="<img id=\"pics\" src=\"./img/"+playerSelection+".png\">";
        htmlStr+="<img id=\"pics\" src=\"./img/r"+computerSelection+".png\">";
        document.getElementById("imgRes").innerHTML=htmlStr;
        if(win===5||lose===5)
        {
            anounceWinner(win,lose);
        }
        
        //console.log((4-i)+" plays left");
    //}
    /*result=win-lose;
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
    }*/
}
function anounceWinner(lwin,llose)
{
    let outString="you ";
    if(lwin>llose)
    {
        outString+="won";
    }
    else
    {
        outString+="lost";
    }
    outString+=(" "+win+"-"+lose+" with "+tie+" tie");
    if(tie!=1)
    {
        outString+="s";
    }
    win=0;
    lose=0;
    tie=0;
    alert(outString);
    document.getElementById("status").innerText="";
    document.getElementById("imgRes").innerHTML="";
    document.getElementById("win").innerText="wins: 0";
    document.getElementById("lose").innerText="loses: 0";
    document.getElementById("tie").innerText="ties: 0";
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
    