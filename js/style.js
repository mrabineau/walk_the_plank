console.log("game!")

var wordBank = ["SHIP", "PIRATE", "AHOY", "RUM", "PLANK", "SHARK", "WRECK", "POLYNESIA", "SEA", "OCEAN"]

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
$("#sad").hide();
$("#disco").hide();

function setWord() {
  var index = Math.floor(Math.random() * wordBank.length);
  answer = wordBank[index].split('');
}

setWord();




function right() {
  $('#pirate').animate({left: '+=30px'}, 2000);
};

function down() {
  $('#pirate').animate({bottom: '-=1000px'}, 5000)
};

function theAnswer() {

  for (var i = 0; i < answer.length; i ++){
    if (guess === answer[i]){
      console.log("its true")
      $("#onward").text('Nicely done Matey!!!')
      setTimeout(function () {
        $("#onward").text('Guess again!')
      }, 4000)
      $('#welldone').toggle(2000);
      setTimeout(function() {
        $('#welldone').fadeOut(2000)
      },2000)
      storage.correct.push(guess)
      $("#textbox").text(storage.correct)
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
    $('#wrong').toggle(2000);
      setTimeout(function() {
        $('#wrong').fadeOut(2000)
      },2000);
    console.log("its false")
    storage.incorrect.push(guess)
    $("#incorrect").text(storage.incorrect)
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
    // $("#reset").toggle();
     $("#disco").toggle();
     $('#welldone').remove();
     console.log("win")
  }
  if (storage.incorrect.length === lose.guesses.length){
    down();
    $('#wrong').remove();
    $('#textbox').text("Womp womp" + "   " + answer)
    $("#onward").remove();
    // $("#reset").toggle();
    $("#sad").toggle();
    console.log("lose")
    return false
  }
}


winCheck();


function resetGame () {
  $("#reset").on("click").reset();
}










