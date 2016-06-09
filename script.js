$(document).ready(function(){
  var currentCardIndex = 0
  var flashCards = $(".flashCards");
  var seconds = 0;
  var minutes = 0;
  var start = $("#start");
  var userGuess;
  var numCorrect = 0;
  var gameHasStarted = false;
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
      question:"Find the derivative of <br>y = 2x^3 - 4x^2 + 3x - 5",
      answer:"6x^2-8x+3"
    },
    {
      question:"What is 7 x 8?",
      answer:"56"
    }
  ];

  function displayQuestion(){
    $(".flashCard").html(cards[currentCardIndex].question);
  }

  function displayObjectOne(){
    currentCardIndex = 0;
    $(".flashCard").html(cards[0].question);
  }

  function updateTime(){
    if (cards.length > 0){
      if (seconds < 59){
        seconds++;
      }
      else if (seconds >= 59){
        seconds = 0
        minutes += 1;

      }
    };
    $("#timer").text("Time: " + minutes + " " + "m" + " : " + seconds + " " + "s");
  }

  function startTimer(){
    timerId = window.setInterval(updateTime, 1000);
  }

  function updateCorrect(){
    $("#scoreBoard").text("Correct: " + numCorrect);
  }

  function resetCorrect(){
    numCorrect = 0;
    $("#scoreBoard").text("Correct: " + numCorrect);
  }

  function clearInput(){
    $(".input").val("");
  }

  function enterKey(e){
    console.log(e.keyCode);
    if(e.keyCode == '13'){
      return true;
    }
  };

  function resetTimer(){
    window.clearInterval(timerId)
    seconds = 0;
  }
  
  function checkAnswer(){
    var userGuess = $(".input").val();
    if (userGuess == cards[currentCardIndex].answer){
      if (currentCardIndex < cards.length - 1){
        alert("Correct!");
        currentCardIndex += 1;
        displayQuestion();
        clearInput();
        numCorrect += 1;
        updateCorrect();
      }
      else if (currentCardIndex == cards.length - 1){
        alert("Correct! Game over!");
        window.clearInterval(timerId);
        clearInput();
        numCorrect +=1;
        updateCorrect();
        $("#playAgain").css("visibility", "visible");
        playAgain();
      }
    }
    else{
      alert("Incorrect.");
      var splicedCard = cards.splice(currentCardIndex, 1);
      cards = cards.concat(splicedCard);
      displayQuestion();
      clearInput();
    }
  }

  function playAgain (){
    $("#playAgain").on("click", function(){
      $(".userInput").css("visibility", "hidden");
      $("#timer").css("visibility", "hidden");
      $("#revealButton").css("visibility", "visible");
      $("#scoreBoard").css("visibility", "hidden");
      displayObjectOne();
      gameHasStarted = false;
      resetTimer();
      resetCorrect();
      $("#playAgain").css("visibility", "hidden")
    })
  }

  $(document).on("keydown", function test(e){
    if (gameHasStarted) return;
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

  displayQuestion();

  $("#revealButton").on("click", function(){
    $(".flashCard").html(cards[currentCardIndex].answer);
  })

  start.on("click", function(){
    $(".userInput").css("visibility", "visible");
    $("#timer").css("visibility", "visible");
    $("#revealButton").css("visibility", "hidden");
    $("#scoreBoard").css("visibility", "visible");
    displayObjectOne();
    startTimer();
    gameHasStarted = true;
  });

  $("#guess").on("click", checkAnswer);
  $(".userInput").keypress(function(e){
    if (enterKey(e)){
      checkAnswer();
    };
  });

  function checkAnswer(){
    var userGuess = $(".input").val();
    if (userGuess == cards[currentCardIndex].answer){
      if (currentCardIndex < cards.length - 1){
        alert("Correct!");
        currentCardIndex += 1;
        displayQuestion();
        clearInput();
        numCorrect += 1;
        updateCorrect();
      }
      else if (currentCardIndex == cards.length - 1){
        alert("Correct! Game over!");
        window.clearInterval(timerId);
        clearInput();
        numCorrect +=1;
        updateCorrect();
        $("#playAgain").css("visibility", "visible");
        playAgain();
      }
    }
    else{
      alert("Incorrect.");
      var splicedCard = cards.splice(currentCardIndex, 1);
      cards = cards.concat(splicedCard);
      displayQuestion();
      clearInput();
    }
  }
});
