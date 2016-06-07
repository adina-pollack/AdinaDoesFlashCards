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
  if (e.keyCode == '39'){ // Right arrow
    if (currentCardIndex < cards.length - 1){
      currentCardIndex += 1;
      displayQuestion();
    }
    else{
      return false;
    }
  }else if (e.keyCode == '37'){ // Left arrow
    if (currentCardIndex > 0){
    currentCardIndex -= 1;
    displayQuestion();
    }
    else{
      return false;
    }
  }  
});

$("#revealButton").on("click", function(){
  $(".flashCard").html(cards[currentCardIndex].answer);
})


function displayQuestion(){
  $(".flashCard").html(cards[currentCardIndex].question);
}



displayQuestion();




});
