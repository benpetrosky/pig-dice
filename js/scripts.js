var randomNumber = function(){

  var diceArray = [1,2,3,4,5,6];
  var rNumber = diceArray[Math.floor(Math.random() * diceArray.length)];
  return rNumber;
}



$(function() {

var runningTotal = 0;
$("#form-one").submit(function(event){
  event.preventDefault();

  // var userTurn = 0;
  var userTurn = randomNumber();

  runningTotal += userTurn;
  if (userTurn === 1)
  {
    runningTotal = 0;
    alert("Your turn is over you greedy pig!")
  }
  $("#userTurn").text(userTurn);
  $("#runningTotal").text(runningTotal);

// var updateTotal = runningTotal;
// console.log(updateTotal);
  var total = (heldTotal += runningTotal);
  var heldTotal = [runningTotal];
$("#updateTotal").click(function() {
  var streak = [runningTotal];
  console.log(streak);
  $("#runningTotal").text(runningTotal - runningTotal);
    heldTotal.toString();
  console.log(heldTotal.toString());

  // var heldTotal += runningTotal;
  $("#total").text(heldTotal);
    var total = (updateTotal += runningTotal);
  });
});
});







  // // var add = function(userTurn, runningTotal) {
  // //   return userTurn += runningTotal;
  // //   console.log(add)
  // };
