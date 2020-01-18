$(document).ready(function() {

  $(".survey").submit(function(event) {

    // getting values from form.
    var question_one = $("input:radio[name=question-one]:checked").val();

    var question_two = $("input:radio[name=question-two]:checked").val();
    
    var question_three = $("input:radio[name=question-three]:checked").val();

    var question_four = $("input:radio[name=question-four]:checked").val();

    var question_five = $("input:radio[name=question-five]:checked").val();

    var total = function(question1, question2, question3, question4, question5){ 
      return question1 + question2 + question3 + question4 + question5
    };

    var answer_total = ("total");

    console.log(total());

    event.preventDefault();
  });
});


// on submit (.click), alert "git ready to code!", show specific language class from the results from total value captured} 