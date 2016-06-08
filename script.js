$(document).ready(function(){
  var currentCardIndex = 0
  var flashCards = $(".flashCards");
  var seconds = 0;
  var start = $("#start");
  var userGuess;
  var arrowKeys = 0;
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
      question:"What is 7 x 8?",
      answer:"56"
    },
    {
      question:"Find the derivative of y = 2x^3 - 4x^2 + 3x - 5",
      answer:"6x^2-8x+3"
    }
  ];

  function displayQuestion(){
    $(".flashCard").html(cards[currentCardIndex].question);
  }

  function displayObjectOne(){
    $(".flashCard").html(cards[0].question);
  }

  function updateTime(){
    if (cards.length > 0){
        seconds++;
    }
    $("#timer").text(seconds);
  }

  function startTimer(){
    timerId = window.setInterval(updateTime, 1000);
  }

  function clearInput(){
    $(".input").val(" ");
  }

  $(document).on("keydown", function test(e){
    // var arrowKeys = 0;
    if (e.keyCode == '39'){ // Right arrow
      if (currentCardIndex < cards.length - 1){
        currentCardIndex += 1;
        displayQuestion();
      }
      // else if (arrowKeys == 1){
      //   currentCardIndex;
      //   return;
      // }
      else{
        return false;
      }
    }else if (e.keyCode == '37'){ // Left arrow
      if (currentCardIndex > 0){
        currentCardIndex -= 1;
        displayQuestion();
      }
      // else if (arrowKeys == 1){
      //   currentCardIndex;
      //   return;
      // }
      else{
        return false;
      }
    }
    start.on("click", function(){

      arrowKeys = 1;
    });
  });

  displayQuestion();

  $("#revealButton").on("click", function(){
    $(".flashCard").html(cards[currentCardIndex].answer);
  })

  start.on("click", function(){
    $(".userInput").css("visibility", "visible");
    $("#timer").css("visibility", "visible");
    $("#revealButton").css("visibility", "hidden");
    displayObjectOne();
  });

  start.on("click", startTimer);

  $("#guess").on("click", function(){
    var userGuess = $(".input").val();
    if (userGuess == cards[currentCardIndex].answer){
      if (currentCardIndex < cards.length - 1){
        alert("Correct!");
        currentCardIndex += 1;
        displayQuestion();
        clearInput();
      }
      else if (currentCardIndex == cards.length - 1){
        alert("Correct! Game over!");
        window.clearInterval(timerId);
      }
    }
    else{
      alert("Incorrect.");
      var splicedCard = cards.splice(currentCardIndex, 1);
      cards = cards.concat(splicedCard);
      displayQuestion();
      clearInput();
    }
  });


});
