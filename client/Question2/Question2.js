
// window.onload = function () {
//     const qs2but = document.getElementById('question2-button') 
//     const qs2sc = document.getElementById('qs2-score') 

//     qs2but.addEventListener('click', result2); 
    
//     function result2 () { 
//         let score2 = 0
//         if(document.getElementById('correctans2').checked) { 
//             // alert("correct answer nigga")
//             score2++;
//           } 
//         else {
//             // alert("wrong answer nigga") 
//             score2--;
//         } 
//         qs2sc.textContent = `Score : ${score2}`;
//     } 
    
// } 

Template.QP.events ({
    'click .js-question2'() {
        $("#Q2Modal").modal("show")
    }
}) 