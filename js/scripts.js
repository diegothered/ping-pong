var pingPong = [];
  for (var i = 1; i <= input ; i++) { //thought about doing i <= input
    if (i %3 === 0) {
      pingPong.push("ping");
    } else if (i %5 === 0) {
      pingPong.push("pong");
    } else if (i %15 ===0) {
      pingPong.push("ping-pong");
    } else {
      pingPong.push(i)
    };
  };

$(document).ready(function() {
  $("form#input").submit(funtion(event)); {
    event.preventDefault(); //added here because of leap-year website exercise
    var i = parseInt($("input#number").val());
    var result = pingPong.push(input);
    $("#result").text(result); //also want result to be placed in unordered list
  };
})
