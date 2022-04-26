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
let selectedTheme = "";
let selectedQuestions = [];
let questionIndex = 0;
let timerValue = 10 * selectedQuestions.length;
let correctAnswers = 0;
let quizComplete = false;
let score = 0;
const highScores = [];

const onLoad = () => {
  // function to initialise local storage
  //get info from local storage
  const highScoresFromLS = JSON.parse(localStorage.getItem(highScores));
  console.log(highScoresFromLS);
  // check if highscores exists in LS
  //if it doesn't exist, set an empty array and stringify as we set it
  if (!highScoresFromLS) {
    localStorage.setItem("highScores", JSON.stringify([]));
  }
};

// const removeSection = (target) => {
//   const section = document.getElementById(target);
//   section.remove();
// };
const timerSpan = document.getElementById("timer-span");

const startTimer = () => {
  // declare function to execute every 1 sec
  const countdown = () => {
    // target timer span -> outside of function
    //decrement timer value
    timerValue -= 1;

    //set text as new value
    timerSpan.textContent = timerValue;
    // check if timer reaches 0
    if (timerValue === 0) {
      clearInterval(timerId);
      renderForm();
    }
    // if quizComplete is true then stop timer
  };

  // setInterval of 1000ms (1s)
  const timerId = setInterval(countdown, 1000);
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
  // create section
  const timerSection = document.createElement("section");
  timerSection.setAttribute("class", "timer-section box-row");
  timerSection.setAttribute("id", "timer-section");
  const timerDivTheme = document.createElement("div");
  const p1 = document.createElement("p");
  p1.setAttribute("class", "theme-display");
  p1.textContent = `Quiz - Theme : ${selectedTheme}`;
  timerDivTheme.append(p1);

  const timerDivNum = document.createElement("div");
  timerDivNum.setAttribute("class", "timer-display box-row");
  const p2 = document.createElement("p");
  p2.setAttribute("class", "timer-item");
  p2.textContent = "Time remaining : ";
  const span = document.createElement("span");
  span.setAttribute("class", "timer-item");
  span.setAttribute("id", "timer-span");
  span.textContent = ` ${timerValue} `;
  // append section to main
  timerDivNum.append(p2, span);
  timerSection.append(timerDivTheme, timerDivNum);
  main.append(timerSection);
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

const handleQuestionClick = (event) => {
  event.stopPropagation();
  const currentTarget = event.currentTarget;
  console.log(currentTarget.tagName);

  const target = event.target;
  console.log(target.tagName);
  if (target.tagName === "LI") {
    //get the answer from the user
    const selectedAnswer = target.getAttribute("data-index");
    console.log(selectedAnswer);
    //compare data index to correct index
    console.log(selectedQuestions[questionIndex].correctIndex);
    if (selectedAnswer == selectedQuestions[questionIndex].correctIndex) {
      //add 1 to the count of correct answers
      correctAnswers += 1;
      console.log(correctAnswers);
    }
    //else, do nothing
    currentTarget.remove();
    //increase question index by 1 + go to the next question
    if (questionIndex < selectedQuestions.length - 1) {
      questionIndex += 1;
      renderQuestion(selectedQuestions[questionIndex]);
    } else {
      score = timerValue;
      renderForm(score);
    }
  }
};

const renderQuestion = (question) => {
  //render question section

  //create section
  const questionSection = document.createElement("section");
  questionSection.setAttribute("class", "question-section wrapper");
  questionSection.setAttribute("id", "question-section");
  //create div
  const questionDiv = document.createElement("div");
  questionDiv.setAttribute("class", "question-container");
  questionDiv.setAttribute("id", "question-container");
  //create h2
  const h2 = document.createElement("h2");
  h2.setAttribute("class", "title");
  h2.textContent = question.text;
  //create ul
  const ul = document.createElement("ul");
  ul.setAttribute("class", "list");
  //for each theme create li and append to ul
  for (let i = 0; i < question.options.length; i += 1) {
    const li = document.createElement("li");
    li.setAttribute("class", "list-item btn");
    li.setAttribute("data-index", i);
    li.textContent = question.options[i];
    ul.appendChild(li);
    console.log(li);
  }
  //append children to section
  questionDiv.append(h2, ul);

  const statusDiv = document.createElement("div");
  statusDiv.setAttribute("class", "status-container");
  const progressBar = document.createElement("progress");
  progressBar.setAttribute("class", "progress-bar");
  progressBar.setAttribute("id", "progress-bar");
  progressBar.setAttribute("max", selectedQuestions.length);
  progressBar.setAttribute("value", questionIndex);
  const p = document.createElement("p");
  p.setAttribute("class", "correct-status");
  p.setAttribute("id", "correct-status");
  p.textContent = `Correct answers : ${correctAnswers} / ${progressBar.max}`;
  statusDiv.append(progressBar, p);

  //append both divs to question section
  questionSection.append(questionDiv, statusDiv);

  //append question section to main
  main.append(questionSection);

  //add event listener on div
  questionSection.addEventListener("click", handleQuestionClick);
};

const handleThemeClick = (event) => {
  //event.stopPropagation();
  const target = event.target;
  const currentTarget = event.currentTarget;
  console.log(currentTarget);
  console.log(target);

  if (target.tagName === "LI") {
    //get the answer from the user
    selectedTheme = target.getAttribute("data-text");
    selectedQuestions = questions.filter(
      (question) => question.theme === selectedTheme
    );
    timerValue = 10 * selectedQuestions.length;
    console.log(selectedQuestions);
    console.log(timerValue);

    //remove the current section displayed
    currentTarget.remove();
    //calls the function to render the relevant section
    renderTimerSection(timerValue);
    renderQuestion(selectedQuestions[questionIndex]);
    //go to the next section - question section
  }
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

  //const section = document.getElementById(themeDiv);
  themeSelection.addEventListener("click", handleThemeClick);
};

//main function - take quiz
const takeQuiz = () => {
  //render theme selection
  renderTheme();

  //choose theme

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

//set page load
window.addEventListener("load", onLoad);
// add event listener to start button
const startBtn = document.querySelector("#start-btn");
startBtn.addEventListener("click", takeQuiz);
// add document on load event listener
// add start button click event listener
