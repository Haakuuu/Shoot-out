let message=document.querySelector(".desc")
let start=document.getElementById("start")
let med1=document.querySelector(".med1")
let med2=document.querySelector(".med2")
let p1w=document.querySelector(".p1w")
let p1l=document.querySelector(".p1l")
let p2w=document.querySelector(".p2w")
let p2l=document.querySelector(".p2l")
let num=document.querySelector(".num1")
let rounds=document.querySelector(".rounds")
let roundtitle=document.querySelector(".roundtitle")
let pIsAlive=true

// rounds.style.color="red"
    // start.style.background="green"
    // start.style.color="white"
// message.textContent=(round)+ rounds
start.addEventListener("click",function (){
    game()  
})
// console.log("pp")
function game(){
    

    if(med1.textContent===0||med2.textContent===0){
        gameover()
    }
    else if(pIsAlive===true && med1.textContent>0){
        start.textContent="🦹🏻‍♀️P1 SHOOT"
        // start.addEventListener("click",function (){
        let med=med1.textContent
        med1.textContent=med-random()
        // num.textContent=console.log(points)
        pIsAlive=false
        start.textContent="👨🏻‍💼P2 SHOOT"
        // rnds()
        // gameover()
        }
    else if(pIsAlive===false && med2.textContent>0){
        let meds=med2.textContent
        med2.textContent=meds-random()
        start.textContent=" 🦹🏻‍♀️P1 SHOOT"
        pIsAlive=true;
        // rnds()
        // gameover()
    }else{
        gameover()
    }
rnds()
gameover()
}
function random(){
   let ran=Math.floor(Math.random()*6);
   num.textContent=ran
   return ran
}

function rnds(){
    if(med1.textContent<=0){
        p1l.textContent=Number(p1l.textContent) + 1
        p2w.textContent=Number(p2w.textContent) + 1
        rounds.textContent=Number(rounds.textContent)+1

        // start()
       
        med1.textContent=100
        med2.textContent=100
        start.textContent="🦹🏻‍♀️P1 SHOOT"
        let med=med1.textContent
        med1.textContent=med-random()
        pIsAlive=false
        start.textContent="👨🏻‍💼P2 SHOOT"
        // start()
        // gameover()
    }else if(med2.textContent<=0){
        p2l.textContent=Number(p2l.textContent) + 1
        p1w.textContent=Number(p1w.textContent) + 1
        rounds.textContent=Number(rounds.textContent)+1
        // start()
     
        med1.textContent=100
        med2.textContent=100
        start.textContent="🦹🏻‍♀️P1 SHOOT"
        let med=med1.textContent
        med1.textContent=med-random()
        pIsAlive=false
        start.textContent="👨🏻‍💼P2 SHOOT"
        // start()
        // gameover()
    }
  
}
function gameover(){
    if((rounds.textContent>5||p1w.textContent>=3)||(rounds.textContent>5||p2w.textContent>=3)){
        message.textContent="❌ GAME OVER ❌"
        if(p1w.textContent>p2w){
            rounds.textContent="WINNER IS PLAYER 1 🏆 Youhoo!!"
        }else{
            rounds.textContent="WINNER IS PLAYER 2 🏆 Youhoo!!"
        }
        med1.textContent=100
        med2.textContent=100
        // rounds.textContent=winner()
        start.style.display="none";
       
    }
    
}
