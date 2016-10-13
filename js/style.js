console.log("game!")

var wordBank = ["SHIP", "PIRATE", "AHOY", "RUM"]

var answer
var guess = document.querySelectorAll('.letter').innerHTML
var empty = ""
var win = false
var lose
var timer
var letter = document.querySelectorAll('.letter')
var pirate = document.querySelector('.materials.icons')
var counter =

document.getElementById("onward").addEventListener("click", theAnswer)

$('#welldone').hide();
$('#wrong').hide();
$("#reset").hide();

function setWord() {
  var index = Math.floor(Math.random() * wordBank.length);
  answer = wordBank[index].split('');
}

setWord();




function right() {
  $('#pirate').animate({left: '+=30px'}, 2000);
};

function down() {
  $('#pirate').animate({bottom: '-=700px'}, 5000)
};

function theAnswer() {

  for (var i = 0; i < answer.length; i ++){
    if (guess === answer[i]){
      console.log("its true")
      $("#onward").text('Nicely done Matey!!!')
      setTimeout(function () {
        $("#onward").text('Guess again!')
      }, 3000)
      $('#welldone').toggle(1000);
      setTimeout(function() {
        $('#welldone').hide()
      },3000)
      storage.correct.push(guess)
      winCheck();
      return true
    }
  }
  if(answer.indexOf(guess) < 0){
    $("#onward").text('Walk the plank!!')
        setTimeout(function () {
        $("#onward").text('Guess again!')
    }, 4000)
    right();
    $('#wrong').toggle(1000);
      setTimeout(function() {
        $('#wrong').hide()
      },3000)
    console.log("its false")
    storage.incorrect.push(guess)
     winCheck();
    return false

  }
}




var pickLetter = function() {
   $('.letter').on("click", function (evt){
    $(evt.target).fadeOut();
    guess = $(evt.target).text();
    // $('#screen').append(evt.target.innerHTML);
    theAnswer();
    console.log(evt.target.innerHTML);
    })

    }

pickLetter ();



var storage = {
  correct: [],
  incorrect: []
};

var lose = {guesses: ["0","1","2","3","4","5","6","7"]}


function winCheck() {
  if (storage.correct.length === answer.length){
    $('#textbox').text("winner!" + "   " + answer)
    $("#onward").remove();
    $("#reset").toggle();
     console.log("win")
  }
  if (storage.incorrect.length === lose.guesses.length){
    down();
    $('#textbox').text("Womp womp" + "   " + answer)
    $("#onward").remove();
    $("#reset").toggle();
    console.log("lose")
    return false
  }
}


winCheck();


function resetGame () {
  $("#reset").on("click").reset();
}










