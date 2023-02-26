Template.QP.events({
    'click .js-question1'() {
        $("#Q1Modal").modal("show")
    }
   
})   

window.onload = function () {
  const q1butElement = document.getElementById('q1-button'); 
  const qs1sc = document.getElementById('qs1-score');
  
  q1butElement.addEventListener('click', Result2); 

  function Result2 () { 
    
    if(document.getElementById('cans1').checked) { 
      score1++;
      alert("Correct Answer")
    } 
    // else { 
    //   score1--;
    //   alert("Wrong Answer Coon")
    // } 
    qs1sc.textContent = `Score : ${score1}`;
  }

    
} 
