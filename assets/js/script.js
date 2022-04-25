// global declarations
const themes = ["html", "css", "javascript", "jquery"];

const questions = [
  {
    theme: "html",
    text: " What does the acronym HTML stand for?",
    options: [
      "HyperText Markup Language",
      "HyperText Machine Language",
      "HyperText and links Markup Language",
      "None of these",
    ],
    correctIndex: 0,
  },
  {
    theme: "html",
    text: "The correct sequence of HTML tags for starting a web page is : ",
    options: [
      "Head, Title, HTML, Body",
      "HTML, Body, Title, Head",
      "HTML, Head, Title, Body",
      "HTML, Head, Body, Title ",
    ],
    correctIndex: 2,
  },
  {
    theme: "html",
    text: "Which element is responsible for introducing an empty line in HTML?",
    options: ["<pre>", "<a>", "<b>", "<br>"],
    correctIndex: 3,
  },
  {
    theme: "html",
    text: "How to insert an image in HTML?",
    options: [
      '<img href = "jtp.png" /> ',
      '<img url = "jtp.png" /> ',
      '<img link = "jtp.png" /> ',
      '<img src = "jtp.png" />',
    ],
    correctIndex: 3,
  },
  {
    theme: "css",
    text: "What does the acronym CSS stand for?",
    options: [
      "Cascade style sheets",
      "Color and style sheets",
      "Cascading style sheets",
      "Collection of styles sheets",
    ],
    correctIndex: 2,
  },
  {
    theme: "css",
    text:
      "Which of the following is the correct syntax for referring the external style sheet?",
    options: [
      "<style src = example.css>",
      '<style src = "example.css" >',
      "<stylesheet> example.css </stylesheet>",
      '<link rel="stylesheet" type="text/css" href="example.css">',
    ],
    correctIndex: 3,
  },
  {
    theme: "css",
    text:
      "The property in CSS used to change the background color of an element is : ",
    options: ["color", "bgcolor", "background-color", "background-style"],
    correctIndex: 2,
  },
  {
    theme: "css",
    text:
      "Which of the following is the correct syntax to display the hyperlinks without any underline?",
    options: [
      "a {text-decoration : underline;}",
      "a {decoration : no-underline;}",
      "a {text-decoration : none;}",
      "a {text-underline : none;}",
    ],
    correctIndex: 2,
  },
  {
    theme: "javascript",
    text: "Which type of language is Javascript?",
    options: [
      "a weakly typed language",
      "a strongly typed language",
      "a mixed-type language",
      "none of the above",
    ],
    correctIndex: 0,
  },
  {
    theme: "javascript",
    text:
      "Which of the following variables takes precedence over the others if the names are the same?",
    options: [
      "The global variable",
      "The local variable",
      "The two of the above",
      "None of the above",
    ],
    correctIndex: 1,
  },
  {
    theme: "javascript",
    text: "Which of the following type of a variable is volatile?",
    options: [
      "Mutable variable",
      "Dynamic variable",
      "Volatile variable",
      "Immutable variable",
    ],
    correctIndex: 1,
  },
  {
    theme: "javascript",
    text:
      "In JavaScript, which one of the following is not considered as an error?",
    options: [
      "Syntax error",
      "Missing of semicolons",
      "Division by zero",
      "Missing of Bracket",
    ],
    correctIndex: 2,
  },
  {
    theme: "javascript",
    text: "In JavaScript the x===y statement implies that:",
    options: [
      "Both x and y are equal in value, type and reference address as well.",
      "Both x and y are equal in value only.",
      "Both x and y are equal in the value and data type.",
      "x and y are not the same at all.",
    ],
    correctIndex: 2,
  },
  {
    theme: "jquery",
    text: "jQuery is a : ",
    options: [
      "JavaScript method",
      "JavaScript library",
      "JSON library",
      "PHP method",
    ],
    correctIndex: 1,
  },
  {
    theme: "jquery",
    text: "Which of the following sign is used as a shortcut for jQuery?",
    options: ["the % sign", "the & sign", "the $ sign", "the @ sign"],
    correctIndex: 2,
  },
];
let selectedQuestions = [];
let questionIndex = 0;
let timerValue = 10 * questions.length;
let quizComplete = false;

const onLoad = () => {
  // initialise local storage
  //get info from local storage
  // check if highscores exists in LS
  //if it doesn't exist, set an empty array and stringify as we set it
  //if it exists, do nothing
};

// const removeSection = (target) => {
//   const section = document.getElementById(target);
//   section.remove();
// };

const startTimer = () => {
  // declare function to execute every 1 sec
  const countdown = () => {
    // decrement timer value
    // if quizComplete is true then stop timer
    // check if timer reaches 0
    // if true render game over
  };

  // setInterval of 1000ms (1s)
};

const validateAnswer = () => {
  // get answer clicked from user
  // get the correct answer for question
  // compare the 2 answers
  // if incorrect subtract 5 seconds from timerValue
  // if incorrect render error alert with message and status
  // if correct render success alert with message and status
  // set timeout for 500ms and then go to next question
  // if question is last question set quizComplete to true and then render form
  // if question is not last question then increment question index and render next question
};

const handleThemeClick = (event) => {
  //event.stopPropagation();
  const target = event.target;
  const currentTarget = event.currentTarget;
  console.log(currentTarget);
  console.log(target);

  if (target.tagName === "LI") {
    //get the answer from the user
    const selectedTheme = target.getAttribute("data-text");
    console.log(selectedTheme);
    selectedQuestions = questions.filter(
      (question) => question.theme === selectedTheme
    );
    console.log(selectedQuestions);

    //go to the next section - question section
  }
};

const handleFormSubmit = () => {
  // get value from input
  // check if empty then render error alert with message and status
  // if not empty then create the score object
  // {
  //   fullName: "Bob Smith",
  //   score: 25
  // }
  // push score object to LS
  // render quizCompleteSection
};

const renderTimerSection = () => {
  // use HTML as guide and build in JS
  // append section to main
};

const renderQuestionSection = () => {
  // use HTML as guide and build in JS
  // append section to main
  // add click event listener on #question-section
};

const renderGameOver = () => {
  // use HTML as guide and build in JS
  // append section to main
};

const renderAlert = (message, status) => {
  // use HTML as guide and build in JS
  // append div to #question-section
};

const renderForm = () => {
  // use HTML as guide and build in JS
  // append section to main
  // add submit event handler to form
};

const renderQuizCompleteSection = () => {
  // use HTML as guide and build in JS
  // append section to main
};

const renderTheme = () => {
  //remove start section
  const startSection = document.getElementById("start-section");
  startSection.remove();

  //render theme section

  //create section
  const themeSelection = document.createElement("section");
  themeSelection.setAttribute("class", "theme-selection wrapper");
  themeSelection.setAttribute("id", "theme-selection");
  //create div
  const themeDiv = document.createElement("div");
  themeDiv.setAttribute("class", "theme-container");
  themeDiv.setAttribute("id", "theme-container");
  //create h2
  const h2 = document.createElement("h2");
  h2.setAttribute("class", "title");
  h2.textContent = "Pick a theme for your quiz";
  //create ul
  const ul = document.createElement("ul");
  ul.setAttribute("class", "list");
  //for each theme create li and append to ul
  for (let i = 0; i < themes.length; i += 1) {
    const li = document.createElement("li");
    li.setAttribute("class", "theme-item btn");
    li.setAttribute("data-text", themes[i]);
    li.setAttribute("id", themes[i]);
    li.textContent = themes[i];
    ul.appendChild(li);
    console.log(li);
  }
  //append children to section
  themeDiv.append(h2, ul);
  themeSelection.append(themeDiv);
  //append section to main
  main.append(themeSelection);

  //add event listener to the section
  const themeSection = document.getElementById("theme-container");
  themeSection.addEventListener("click", handleThemeClick);
};

const startQuiz = () => {
  // remove theme section
  // start timer
  // render timer section
  // render question section
};

//main function - take quiz
const takeQuiz = () => {
  //choose theme
  const theme = renderTheme();
  //start quiz
  //const quizScore = startQuiz(theme, questions);

  //validate answer
  //continue quiz + continue validating answers
  //move to score page on quiz completion
  //const score = renderForm(quizScore);

  //submit score
  //submitForm(score, input);

  //go back to the home page
  //goToHome();
};

// add event listener to start button
const startBtn = document.querySelector("#start-btn");
startBtn.addEventListener("click", takeQuiz);
// add document on load event listener
// add start button click event listener
