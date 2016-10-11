console.log("game!")



var answer = ["S", "H", "I", "P"]
var answer2 = ["P", "I", "R", "A", "T", "E"]
var guess = ""
var empty = ""
var win = false
var lose
var timer
var pirate = document.querySelector('.materials.icons')
document.getElementById("onward").addEventListener("click", theAnswer)


$("#screen").on('keydown', function (e) {
  guess = String.fromCharCode(e.keyCode)

})


// function movePirate() {
//   $(pirate).style.top = 0;
//   S(pirate).style.right = 20;
// }

// movePirate();

function theAnswer() {
  for (var i = 0; i < answer.length; i ++){
    if (guess !== answer[0]){
    // $("#onward").text('Walk the plank!!')
    // setTimeout(function () {
    //     $("#onward").text('Guess again!!')
    // }, 2000)

    console.log("its false")
    return false

    }


    }


   if (guess === answer[0]) {

    console.log("its true")
    $("#onward").text('Nicely done Matey!!!')

    setTimeout(function () {
        $("#onward").text('Guess again!')
    }, 3000)

    }
}

theAnswer();



function theAnswer2() {
  for (var i = 0; i < answer.length; i ++) {
    if (guess[0] !== answer2[0])
      return false
  }
}

theAnswer2();


// onclick function
