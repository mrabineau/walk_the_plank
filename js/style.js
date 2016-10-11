console.log("game!")

var wordBank = ["SHIP", "PIRATE", "BOOTY", "PEGLEG"]

// var answer = ["S", "H", "I", "P"]
// var answer2 = ["P", "I", "R", "A", "T", "E"]
var answer;
var guess = ""
var empty = ""
var win = false
var lose
var timer
var pirate = document.querySelector('.materials.icons')
document.getElementById("onward").addEventListener("click", theAnswer)

function setWord() {
  var index = Math.floor(Math.random() * wordBank.length);
  answer = wordBank[index].split('');
}

// var inOrderFunctionName = function() {
//   console.log("this function cannot be invoked above");
// }

// function hoistedFunction() {
//   console.log("this function can be invoked anywhere")
// }


$("body").on('keydown', function (e) {
  console.log(e.keyCode)
  guess = String.fromCharCode(e.keyCode)
  for (var i = 0; i < answer.length; i++) {
    if (answer[i] === guess) {
      console.log("it's here!");
      return;
    }
  }
  console.log("not there!")
})


// function movePirate() {
//   $("#pirate").style.top = 0;
//   S(pirate).style.right = 20;
// }

// movePirate();

function theAnswer() {
  for (var i = 0; i < answer.length; i ++){
    if (guess !== answer[i]){
      // $("#onward").text('Walk the plank!!')
      // setTimeout(function () {
      //     $("#onward").text('Guess again!!')
      // }, 2000)
      console.log("its false")
      return false
    }
  }
  if (guess === answer[i]) {
    console.log("its true")
  };
}

// theAnswer();

    // $("#onward").text('Nicely done Matey!!!')

    // setTimeout(function () {
    //   $("#onward").text('Guess again!')
    // }, 3000)


// function theAnswer2() {
//   for (var i = 0; i < answer.length; i ++) {
//     if (guess[0] !== answer2[0])
//       return false
//   }
// }

// theAnswer2();


// onclick function
