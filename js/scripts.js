var pingPong = [];
var input = parseInt($("input#number").val()); //added this in order to define input
  for (var i = 1; i <= input ; i++) {
     if (i %3 === 0) {
      pingPong.push("ping");
    } else if (i %5 === 0) {
      pingPong.push("pong");
    } else if (i %15 ===0) {
      pingPong.push("ping-pong");
    } else {
      pingPong.push(i);
    }; //still not sure when to return
  };

$(document).ready(function() {
  $("form#input").submit(funtion(event) { //syntax error here but not sure why
    event.preventDefault();
    var input = parseInt($("input#number").val());
    var result = pingPong.push(input);
    $("#result").text(result); //also want result to be placed in unordered list
  });
});
