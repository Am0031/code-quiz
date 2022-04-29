# Code quiz

This project is about creating a code quiz, with a choice of themes, a set of questions, and a high score board.

Deployed URL:

Github repository:

## Technologies

For this quiz, the technologies used are:

- HTML for general page structure
- CSS for general styling of the page
- Javascript for functionality of the page,
- HTML DOM for removal/creation of elements,
- Use of local storage

## Steps followed to develop this code quiz

Below is a list of the steps in the order they were taken:

- general definition of the project : what is the format of the quiz and how should it run?
- setting up the wireframe of the project to establish a clear view of the structure of the page
- applying styling to the page to establish a consistent style across all sections of the page, and cater for responsiveness of the page (using media query)
- using javascript to add functionality :
  - move through the sections to display (remove the current section and render the new section)
  - read the user's interactions to record answers and work out score
  - interact with local storage to record score and work out high scores
- check happy path and also other situations (timer runs out, user leaves name field blank)
- once code is functional, review the code for refactoring possibilities

## Screenshots of the project

## General description of the project

The quiz offers a choice of coding related themes. When the user starts the quiz, the first step os for them to pick a theme, they are then presented with a few multiple choice questions relating to that theme.
The quiz has a countdown feature. The starting number for the countdown is automatically determined by the number of questions in that theme. When the user gives a wrong answer, time is taken off the remaining timer value. The final score is the remaining timer value at the end of the quiz. At the end of the quiz, the user is presented with a form where they add their name so that their score can be recorded. If the user has a score of 0, it cannot be recorded. All recorded scores are sorted and displayed on a separate page in a high scores table.

## Setting up the wireframe

## CSS styling

## Javascript functionalities

### Moving through the sections

### Reading the user's interactions

### Recording the score

### Interacting with local storage

### Other scenarios

## Refactoring

## Possible additional features
