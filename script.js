$(document).ready(function(){
var flashCards = $(".flashCards");
var cards = [
      {
        question:"What is 4 + 5?",
        answer:"9"
      },
      {
        question:"What is 3 x 8?",
        answer:"24"
      },
      {
        question:"What is 9 x 4?",
        answer:"36"
      },
      {
        question:"What is 18 + 12?",
        answer:"30"
      },
      {
        question:"What is 7 x 8?",
        answer:"56"
      },
      {
        question:"Find the derivative of y = 2x^3 - 4x^2 + 3x - 5",
        answer:"6x^2 - 8x + 3"
      }
    ]

  function displayFront(){
    $(".flashCards").html(cards[0].question);
  }

  function displayBack(){
    $("#revealButton").on("click", function(){
      $(".flashCards").html(cards[0].answer);
    })
  }

function arrowKeys(){
  for (var i = 0; i < cards.length; i++){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (e.keyCode == '39'){
      $(cards[i]).next().html(cards[i].question)
    }
    else if (e.keyCode == '37'){
      $(cards[i]).prev().html(cards[i].question);
    }
  }
}

$(".flashCards").keypress(function(e){
  arrowkeys();
});


displayFront();
displayBack();



});
