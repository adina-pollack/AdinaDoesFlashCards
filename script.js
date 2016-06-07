$(document).ready(function(){
var currentCardIndex = 0
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
];
$(document).on("keydown", function(e){
  console.log(currentCardIndex)
  if (e.keyCode == '39'){ // Right arrow
    currentCardIndex += 1;
    $(".flashCards").html(cards[currentCardIndex].question);
    // currentCardIndex.next().html(cards[i].question);
  }else if (e.keyCode == '37'){ // Left arrow
    currentCardIndex -= 1;
    $(".flashCards").html(cards[currentCardIndex].question);
  };
});

$("#revealButton").on("click", function(){
  $(".flashCards").html(cards[currentCardIndex].answer);
})

//     var cardIndex = $("cards[i]");
//     var keycode = (event.keyCode ? event.keyCode : event.which);
//     if (e.keyCode == '39'){
//       cardIndex.next().html(cards[i].question);
//     }else if (e.keyCode == '37'){
//       cardIndex.prev().html(cards[i].question);
//     };
//     $(".flashCards").keypress(function(e){
// }

function displayFront(){
  $(".flashCards").html(cards[0].question);
}



displayFront();




});
