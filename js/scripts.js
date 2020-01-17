$(document).ready(function() {
 var questions = 
 var score = 0;
   prompt: "What do t"

   for(var i=0; i < questions.length; i++)
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
      score++;
      alert("Correct!");
    }else {
      alert("wrong!");
    }
}
alert("you got " + score + "/") + questions.length);