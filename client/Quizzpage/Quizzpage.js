window.onload = function() { 
    const questionElement = document.getElementById("question")
   
    let num1 = Math.floor(Math.random() * 10) 
    let num2 = Math.floor(Math.random() * 10) 
    let correctAns = num1 * num2  
    
     questionElement.innerText = `What is ${num1} Multiplied by ${num2} ?`;

    const input = document.getElementById('inp'); 
    const answerbutton = document.getElementById("ans-but")
    const ScoreElement = document.getElementById("score")  
    const PlayAgainBut = document.getElementById("play-again")

   

 
    answerbutton.addEventListener('click',Mresult); 
    PlayAgainBut.addEventListener('click', PlayAgain)
     
    function Mresult () {   
        let score1 = 0 
        let UserAns = +input.value
          if(UserAns ===correctAns) { 
            score1++; 
            alert("correct")
          } 
          else {
            score1--; 
            alert("Incorrect")
          }
   
    ScoreElement.textContent = `Score : ${score1}`; 
    
} 

function PlayAgain () {
  Math.floor(Math.random() * 10)
}

  

} 
    

