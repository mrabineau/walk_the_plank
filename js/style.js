console.log("game!")


var answer = ["S", "H", "I", "P"]
var answer2 = ["P", "I", "R", "A", "T", "E"]
var guess = ["R"]

function theAnswer() {
  for (var i = 0; i < answer.length; i ++) {
    if (guess[0] !== answer[0])
    return false
  }

  if (guess[0] === answer[0])
    return


}

theAnswer();

function theAnswer2 () {
  for (var i = 0; i < answer.length; i ++) {
    if (guess[0] !== answer2[0])
      return false
  }
}

theAnswer2();


// onclick function
