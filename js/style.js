console.log("game!")


var answer = ["S", "H", "I", "P"]
var answer2 = ["P", "I", "R", "A", "T", "E"]
// var guess = document.querySelector('#screen').textContent;
var guess = ""
var win = false
var lose

$("#screen").on('keydown', function (e) {
  // console.log(e.keyCode)
  guess = String.fromCharCode(e.keyCode)

})


function theAnswer() {
  for (var i = 0; i < answer.length; i ++) {
  if (guess === answer[0])
    return true


  document.querySelector("#screen").textContent = guess

  }

    if (guess !== answer[0])
    // this.remove(guess"0")


}



theAnswer();
// guess[0].onkyepress=function()

function theAnswer2() {
  for (var i = 0; i < answer.length; i ++) {
    if (guess[0] !== answer2[0])
      return false
  }
}

theAnswer2();


// onclick function
