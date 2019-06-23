var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (var index = 0; index < numbers.length; index += 1) {
        if (number % 3 ==== 0) {
            return true;

$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    var pingPong  = parseInt($("input#number").val());
    var result = numbers(number);
    $("#result").text(result);
  });
});
