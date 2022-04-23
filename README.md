# code-quiz

This project is about creating a code quiz, with a choice of themes, a set of questions, and a high score board.

Original notes:

General Requirements

- Quiz should be timed??
- Quiz should have multiple choice questions??
- What is dynamic in JS
- Stores my high scores??

User Journey

- Page loads
- User is presented with Start button
- User clicks start button
- A timer starts to count down and you are presented with the first question
- When you are presented with a question you will have your multiple choice answers
- When user clicks on answer (li or button) then move to next question
- When I click on an answer, then the selected answer is validated against the correct answer (how do we store correct answer for a question rendered)
- If answer is correct go to next question
- If answer is wrong subtract time from remaining time and go to the next question
- Game Over Logic
  - When all questions are answered (track current question)
    OR
  - When remaining time reaches 0
- When you answer all questions stop the timer and record that as your score and render form

Form

- field for initials or full name
- a message stating your score
- submit the form

On form submission

- store your score in local storage

High Scores Page

- When page loads read all the scores from local storage
- Present the scores as a list with initials or full name and the score
- Also render 2 buttons: Go Back which takes you back to index.html; Clear highscores which clears your local storage
- When you load the page with no highscores render a message stating "No scores"
