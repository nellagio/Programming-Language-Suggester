$(document).ready(function() {

  $(".survey").submit(function(event) {

    function show_alert() {
      alert("Git ready to code!");
    }
    
    // getting values from form.
    var question_one = $("input:radio[name=question_one]:checked").val();

    var question_two = $("input:radio[name=question_two]:checked").val();
    
    var question_three = $("input:radio[name=question_three]:checked").val();

    var question_four = $("input:radio[name=question_four]:checked").val();

    var question_five = $("input:radio[name=question_five]:checked").val();

    var total = 0;

    if (question_one === "true"){
      total = total + 1;
    }

    if (question_two === "true"){
      total = total + 1;
    }

    if (question_three === "true"){
      total = total + 1;
    }

    if (question_four === "true"){
      total = total + 1;
    }

    if (question_five === "true"){
      total = total + 1;
    }

    $(".answer_head").removeClass("none")

    $(".lan_name").addClass("none")

    if (total < 1) {
      $("#html").removeClass("none")
    }

    else if (total <= 2) {
      $("#javascript").removeClass("none")
    }

    else {
      $("#python").removeClass("none")
    }

    event.preventDefault();
  });
});