Template.QP.events ({
    'click .js-question3'() {
        $("#Q3Modal").modal("show")
    }
}) 

// window.onload = function () {
//     const q3button = document.getElementById('question3-button') 
//     const q3ScoreElement = document.getElementById('qs3-score');
//     q3button.addEventListener('click',reult3); 
//     function reult3 () {
//         let score3 = 0 
//         if(document.getElementById('correctans3').checked) {
//             score3++; 
//             alert("Good Job!"); 
//         } 
//         else {
//             score3--; 
//             alert("Wrong Again")
//         }
//         q3ScoreElement.textContent = `Score : ${score3}`
//     }
// }