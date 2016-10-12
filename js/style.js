console.log("game!")

var wordBank = ["SHIP", "PIRATE", "BOOTY", "PEGLEG"]

var answer
var guess = document.querySelector('#screen').innerHTML
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

function setWord() {
  var index = Math.floor(Math.random() * wordBank.length);
  answer = wordBank[index].split('');
}

setWord();




function right() {
  $('#pirate').animate({left: '+=30px'}, 2000);
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
      return true
      }
    }

      if(guess !== answer[0]){
      $("#onward").text('Walk the plank!!')
          setTimeout(function () {
          $("#onward").text('Guess again!')
      }, 4000)
      $("#onward").text('Delete ye shameful guess!!')
      right();
      $('#wrong').toggle(1000);
        setTimeout(function() {
          $('#wrong').hide()
        },3000)
      console.log("its false")
      return false

      }
}




var pickLetter = function() {
   $('.letter').on("click", function (evt){
    $(evt.target).fadeOut();
    guess = $(evt.target).text();
    $('#screen').append(evt.target.innerHTML);
    console.log(evt.target.innerHTML);
    })
  }

pickLetter ();


//move this to pickLetter();

$(".letter").on('click', function (e) {
  guess = $(e.target).text();
  theAnswer();

})

//$('.letter').fadeIn()











