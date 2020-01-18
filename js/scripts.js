$(document).ready(function() {
  console.log('ready');
  $(".survey").submit(function(event) {
    console.log('hello');

    event.preventDefault();
  });
});


// on submit (.click), alert "git ready to code!", show specific language class from the results from total value captured} 