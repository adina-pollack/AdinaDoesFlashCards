# AdinaDoesFlashCards

## User Stories
- User should see instructions and first card when page loads.
- User should be able to scroll through all cards/answers to study before game.
- When user clicks "start", they will be required to answer first card before moving to the next.
- When user answers a card correctly, user should see the count of correct answers.
- User should be able to see how long it takes to answer all questions correctly.

## Technologies Used
- on.click event listeners used to attribute css, start the timer, prevent scrolling through cards, compare user input to answers and move to the next card.
- on.keydown event listeners used to scroll the cards left/right.
- Function declarations used for timer setup, for specifying what text to appear on the page, for specifying the current index in the array, input value, etc. to be called later.
- .splice() & .concat() were used to remove an incorrectly answered question from the array and move it to the end.
- css visibility attribute used to hide/make visible certain elements
- setInterval() / clearInterval() were used for making the timer operate and then stop.

## Approach
I approached this project by first thinking about the actual point of flashcards. From there I thought about how that could translate online. I started small, piece by piece making sure things worked and adding more functionality as I went. Once I had the functionality I wanted, I worked on the design aspects and thought about what else I could do to add value.
