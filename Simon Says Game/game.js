let gameseq=[];
let userseq=[];
let btns=["yellow","red","purple","green"]
let h2=document.querySelector("h2");
let started=false;
let level=0;
const sound1= new Audio('game-start.mp3')
const sound2= new Audio('button press.mp3')
const sound3= new Audio('game-over.mp3')
document.addEventListener("keypress", function(){
   if(started==false)
   {
        console.log("Game started");
        started=true;
        sound1.play()
   }
   levelup()
})
function gameflash(btn)
{
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250)
}
function userflash(btn)
{
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250)
}
function levelup()
{
    userseq = [];
    level++;
    h2.innerText=`level ${level}`
    let randidx=Math.floor(Math.random()*3)
    let randclr=btns[randidx];
    let randbtn=document.querySelector(`.${randclr}`);
    gameseq.push(randclr);
    console.log(gameseq)
    gameflash(randbtn);
}

function checkans(idx)
{
    if(gameseq[idx]===userseq[idx])
    {
        if(gameseq.length==userseq.length)
        {
            setTimeout(levelup,1000)
        }
        console.log("same value")
    }
    else
    {
        
        h2.innerHTML=`Game Over <br> Your score was <b> ${level}</b> <br> Press any key to start again`
        document.querySelector("body").style.backgroundColor="red"
        setTimeout(function()
             {
                document.querySelector("body").style.backgroundColor="white"
             },150)
             sound3.play()
        reset()
    }
}
 
function btnpress()
{
    let btn=this
    sound2.play()
   /* console.log(this)*/
    userflash(btn)

    let usercolr=btn.getAttribute("id");
    userseq.push(usercolr)

    checkans(userseq.length-1);

}
let albtns=document.querySelectorAll(".btn1");
for(btn of albtns)
{
    btn.addEventListener("click",btnpress)
}

function reset()
{
    
    started=false
    gameseq=[]
    userseq=[]
    level=0
}