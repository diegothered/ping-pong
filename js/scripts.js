var calculate = function(number) {
  var pingPong = [];

  for (var i = 0; i <= number ; i++);

   if (i % 15 === 0) {
    pingPong.push("ping-pong");
  } else if (i % 5 === 0) {
    pingPong.push("pong");
  } else if (i % 3 ===0) {
    pingPong.push("ping");
  } else {
    pingPong.push(i);
  };

  return pingPong
};



$(document).ready(function() {

  $("form#input").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#number").val());
    var result = calculate(input);
    console.log(result);

    result.forEach(function(array) {
      $("#result").show(array);
    }) ;



  });
});
