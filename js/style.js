console.log("game!")

var wordBank = ["SHIP", "PIRATE", "BOOTY", "PEGLEG"]

var answer;
var guess = ""
var empty = ""
var win = false
var lose
var timer
var letter = document.querySelectorAll('.letter')
var pirate = document.querySelector('.materials.icons')

document.getElementById("onward").addEventListener("click", theAnswer)


function setWord() {
  var index = Math.floor(Math.random() * wordBank.length);
  answer = wordBank[index].split('');
}

setWord();



function pickLetter () {
  var character = $('.letter').on("click", function (evt){
    $(evt.target).fadeOut();
    $('#screen').append(evt.target.innerHTML);
    console.log(evt.target.innerHTML);
  })

};

pickLetter ();



$("#letter").on('click', function (e) {
  console.log(e.keydown)
   guess = String.prototype.charAt(e.click)
  for (var i = 0; i < answer.length; i++) {
    if (answer[i] === guess) {
      console.log("it's here!");
      return true;
    }
  }
  console.log("not there!")
})



function theAnswer() {
  for (var i = 0; i < answer.length; i ++){
    if (guess !== answer[i]){
      console.log("its false")
      return false
    }
  }
  if (guess === answer[i]) {
    console.log("its true")
  };
}

theAnswer();









      // var answer = ["S", "H", "I", "P"]
      // var answer2 = ["P", "I", "R", "A", "T", "E"]

      // function movePirate() {
      //   $("#pirate").style.top = 0;
      //   S(pirate).style.right = 20;
      // }

      // movePirate();

      // $("#onward").text('Walk the plank!!')
      // setTimeout(function () {
      //     $("#onward").text('Guess again!!')
      // }, 2000)
    // $("#onward").text('Nicely done Matey!!!')

    // setTimeout(function () {
    //   $("#onward").text('Guess again!')
    // }, 3000)


    // var inOrderFunctionName = function() {
    //   console.log("this function cannot be invoked above");
    // }

    // function hoistedFunction() {
    //   console.log("this function can be invoked anywhere")
    // }
