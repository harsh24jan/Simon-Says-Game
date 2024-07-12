let gameSeq=[];
let userSeq=[];

let btns=["yellow","red", "green","purple"];

let started=false;
let level=0;
let highestlevel=0;

let h2=document.querySelector("h2");
let div=document.querySelector(".header");

let h3=document.createElement("h3");
  h3.classList.add("h3");
    div.append(h3);


document.addEventListener("keypress", function()
{
    if(started==false)
    {
        // alert("game started");
        started=true;

        levelUp();

    }
});

function btnFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },250);
}
function userbtnFlash(btn)
{
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    },250);
}

function levelUp()

{
    userSeq=[];
    level++;
   h2.innerText=`Level ${level}`;

  let randIdx= Math.floor(Math.random()*3);
  let randColor=btns[randIdx];

  let randBtn=document.querySelector(`.${randColor}`);
   btnFlash(randBtn);
  gameSeq.push(randColor);
console.log(gameSeq);
}

function checkAns(idx)
{
   if(userSeq[idx]===gameSeq[idx])
   {
      if(userSeq.length==gameSeq.length)
      {
        setTimeout(levelUp,1000);
      }
   }

   else{
    h2.innerHTML=`Game Over! Your Score was <b>${level}</b><br>Press Any Key to Start!`;

if(level>highestlevel)
{
      highestlevel=level;
        h3.innerHTML = `Highest level is <b>${highestlevel}</b>`;
}
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";  
        },250);
     reset();
   }


}


function btnPress()
{
    let btn = this;
    userbtnFlash(btn);
  
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);

}


let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns)
{
    btn.addEventListener("click",btnPress);
}


function reset()
{
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}