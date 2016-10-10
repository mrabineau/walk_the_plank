console.log("game!")



var answer = ["S", "H", "I", "P"]
var answer2 = ["P", "I", "R", "A", "T", "E"]
var guess = ""
var win = false
var lose

document.getElementById("onward").addEventListener("click", theAnswer)

$("#onward").text('Take a guess matey')

$("#screen").on('keydown', function (e) {
  guess = String.fromCharCode(e.keyCode)

})


function theAnswer() {
  for (var i = 0; i < answer.length; i ++) {
  if (guess === answer[0]){
    console.log("its true")
    $("#onward").text('Nicely done Matey!!!')
    return true

  }

    if (guess !== answer[0]){
    console.log("its false")
    $("#onward").text('Walk the plank!!')
    return false

    }

    if (guess === null)
    console.log("its empty")

  }

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
