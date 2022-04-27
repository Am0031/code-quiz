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
let highScores = [];
const localStorageKey = "highScores";

const onLoad = () => {
  // function to initialise local storage
  //get info from local storage
  const highScoresFromLS = JSON.parse(localStorage.getItem(localStorageKey));
  console.log(highScoresFromLS);
  // check if highscores exists in LS
  //if it doesn't exist, set an empty array and stringify as we set it
  if (!highScoresFromLS) {
    localStorage.setItem(localStorageKey, JSON.stringify([]));
  }
  console.log(JSON.parse(localStorage.getItem(localStorageKey)));
};

const startTimer = () => {
  // declare variable for timer span
  const timerSpan = document.getElementById("timer-span");
  // declare function to execute every 1 sec
  const countdown = () => {
    // target timer span -> done outside of function
    //decrement timer value
    timerValue -= 1;
    //set text in timer span as new value
    timerSpan.textContent = timerValue;
    // check if quiz is complete
    if (quizComplete) {
      clearInterval(timerId);
      document.getElementById("timer-section").remove();
    } else {
      // check if timer reaches 0
      if (timerValue <= 0) {
        clearInterval(timerId);
        score = 0;
        document.getElementById("timer-section").remove();
        document.getElementById("question-section").remove();
        renderForm(score);
      }
    }
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

const handleFormSubmit = (event) => {
  event.stopPropagation();
  event.preventDefault();
  const currentTarget = event.currentTarget;
  // get value from input
  const initials = document.getElementById("input-field").value;
  console.log(initials);
  console.log(score);
  // check if empty then render error alert with message and status
  if (!initials) {
    alert("Please enter your initials to save your score");
  }
  // if not empty then create the score object
  else {
    if (score) {
      const newHighScore = {
        initials,
        score,
      };
      highScores = JSON.parse(localStorage.getItem(localStorageKey));
      console.log(highScores);
      // push new score object into array
      highScores.push(newHighScore);
      console.log(highScores);
      // push updated array to LS
      localStorage.setItem(localStorageKey, JSON.stringify(highScores));
    }
    // remove form section
    currentTarget.remove();
    // render quizComplete section
    renderQuizCompleteSection();
  }
};

const renderTimerSection = () => {
  // create section
  const timerSection = document.createElement("section");
  timerSection.setAttribute("class", "timer-section box-row");
  timerSection.setAttribute("id", "timer-section");

  // create div for theme name
  const timerDivTheme = document.createElement("div");
  const p1 = document.createElement("p");
  p1.setAttribute("class", "theme-display");
  p1.textContent = `Quiz - Theme : ${selectedTheme}`;
  timerDivTheme.append(p1);

  // create div for timer number
  const timerDivNum = document.createElement("div");
  timerDivNum.setAttribute("class", "timer-display box-row");
  const p2 = document.createElement("p");
  p2.setAttribute("class", "timer-item");
  p2.textContent = "Time remaining : ";
  const span = document.createElement("span");
  span.setAttribute("class", "timer-item");
  span.setAttribute("id", "timer-span");
  span.textContent = ` ${timerValue} `;

  // append divs to section
  timerDivNum.append(p2, span);
  timerSection.append(timerDivTheme, timerDivNum);
  // append section to main
  main.append(timerSection);

  //start the timer
  startTimer(timerValue);
};

const renderQuizCompleteSection = () => {
  // create section
  const endSection = document.createElement("section");
  endSection.setAttribute("class", "end-section wrapper");
  endSection.setAttribute("id", "end-section");
  // create h2
  const h2 = document.createElement("h2");
  h2.setAttribute("class", "title");
  h2.textContent = "Take the code quiz challenge again!";
  // create paragraph
  const p = document.createElement("p");
  p.setAttribute("class", "alert-container");
  p.textContent = "Thanks for taking the quiz. Do you want to try again?";
  //create links
  const aHome = document.createElement("a");
  aHome.setAttribute("class", "btn retry-btn link");
  aHome.setAttribute("id", "retry-btn");
  aHome.setAttribute("href", "./index.html");
  aHome.textContent = "Retry";
  const aScores = document.createElement("a");
  aScores.setAttribute("class", "btn scores-btn link");
  aScores.setAttribute("id", "scores-btn");
  aScores.setAttribute("href", "./scores.html");
  aScores.textContent = "Go to High Scores";

  // append children to section
  endSection.append(h2, p, aHome, aScores);
  // append section to main
  main.append(endSection);
};

const renderForm = () => {
  // create section
  const formSection = document.createElement("section");
  formSection.setAttribute("class", "form-section wrapper");
  formSection.setAttribute("id", "form-section");

  // create form
  const form = document.createElement("form");
  form.setAttribute("class", "form-container");
  form.setAttribute("id", "form-container");

  //create h2
  const h2 = document.createElement("h2");
  h2.setAttribute("class", "title");
  h2.textContent = "Let's save your score!";

  // create paragraph
  const alertDiv1 = document.createElement("div");
  alertDiv1.setAttribute("class", "alert-container");
  alertDiv1.innerHTML = `<p>Your result: </p>
  <p>You just took the ${selectedTheme} quiz and answered ${correctAnswers} questions correctly
  out of ${selectedQuestions.length}.</p>
  <p>You scored ${score}.</p>`;

  //create div for input label and text field
  const inputDiv = document.createElement("div");
  inputDiv.setAttribute("class", "input-container box-row");
  inputDiv.setAttribute("id", "input-container");
  const label1 = document.createElement("label");
  label1.setAttribute("class", "input-label");
  label1.setAttribute("for", "input");
  label1.textContent = "Enter your initials";
  const input = document.createElement("input");
  input.setAttribute("class", "input-field");
  input.setAttribute("id", "input-field");
  input.setAttribute("type", "text");
  input.setAttribute("aria-label", "enter your initials");
  inputDiv.append(label1, input);

  // create div for score label and text area containing score
  const scoreDiv = document.createElement("div");
  scoreDiv.setAttribute("class", "score-container box-row");
  scoreDiv.setAttribute("id", "score-container");
  const label2 = document.createElement("label");
  label2.setAttribute("class", "score-label");
  label2.setAttribute("for", "text-area");
  label2.textContent = "Your score";
  const scoreField = document.createElement("textArea");
  scoreField.setAttribute("class", "score-field");
  scoreField.setAttribute("id", "score-field");
  scoreField.setAttribute("aria-label", "your score");
  scoreField.setAttribute("readonly", true);
  scoreField.textContent = `${score}`;
  scoreDiv.append(label2, scoreField);

  // create div for submit button
  const buttonDiv = document.createElement("div");
  buttonDiv.setAttribute("class", "submit-button-container box-row");
  const submitButton = document.createElement("button");
  submitButton.setAttribute("class", "submit-btn btn");
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("id", "submit");
  submitButton.textContent = "Continue";
  buttonDiv.append(submitButton);

  // create div for displaying alert message regarding 0 score
  const alertDiv2 = document.createElement("div");
  alertDiv2.setAttribute("class", "alert-container");
  alertDiv2.textContent =
    "You need to score above 0 for your score to be saved in the high scores tables";
  //append all divs to form
  form.append(h2, alertDiv1, inputDiv, scoreDiv, buttonDiv, alertDiv2);
  //append form to form section
  formSection.append(form);
  // append form section to main
  main.append(formSection);
  // add submit event handler to form section
  formSection.addEventListener("submit", handleFormSubmit);
};

const handleQuestionClick = (event) => {
  event.stopPropagation();
  const currentTarget = event.currentTarget;
  const target = event.target;

  // act only if click is on list item
  if (target.tagName === "LI") {
    //get the answer from the user
    const selectedAnswer = target.getAttribute("data-index");

    //compare data index to correct index
    if (selectedAnswer == selectedQuestions[questionIndex].correctIndex) {
      //add 1 to the count of correct answers
      correctAnswers += 1;
    } else {
      timerValue -= 5;
    }

    //remove the current section displayed
    currentTarget.remove();
    //check where we are in list of question - if we are not at the last one
    if (questionIndex < selectedQuestions.length - 1) {
      // increase question index by 1
      questionIndex += 1;
      // render the next question
      renderQuestion(selectedQuestions[questionIndex]);
    }
    // if we are at the last question
    else {
      // save the score
      score = timerValue;
      quizComplete = true;
      // render the form section
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
  }
  //append children to question div
  questionDiv.append(h2, ul);

  // create status div
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
  // append children to status div
  statusDiv.append(progressBar, p);

  //append both divs to question section
  questionSection.append(questionDiv, statusDiv);

  //append question section to main
  main.append(questionSection);

  //add event listener on question section
  questionSection.addEventListener("click", handleQuestionClick);
};

const handleThemeClick = (event) => {
  //event.stopPropagation();
  const target = event.target;
  const currentTarget = event.currentTarget;

  // act only if click is on list item
  if (target.tagName === "LI") {
    // get the answer from the user
    selectedTheme = target.getAttribute("data-text");
    // create the array containing the questions matching the selected theme
    selectedQuestions = questions.filter(
      (question) => question.theme === selectedTheme
    );
    //set the time value according to the array length - 10s per question
    timerValue = 10 * selectedQuestions.length;

    // remove the current section displayed
    currentTarget.remove();
    // render the next relevant section
    renderTimerSection(timerValue);
    renderQuestion(selectedQuestions[questionIndex]);
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
  }
  //append children to theme div
  themeDiv.append(h2, ul);
  //append div to section
  themeSelection.append(themeDiv);
  //append section to main
  main.append(themeSelection);

  // add event listener on theme section
  themeSelection.addEventListener("click", handleThemeClick);
};

//main function - take quiz
const takeQuiz = () => {
  //render theme selection
  renderTheme();

  //choose theme --> from renderTheme goes to handleThemeClick

  //start questions --> from handleThemeClick goes to renderQuestion and renderTimer/startTimer

  //choose answer --> with event listener in renderQuestion goes to handleQuestionClick

  //validate answer --> in handleQuestionClick

  //continue quiz + continue validating answers
  // --> from handleQuestionClick goes to renderQuestion, and on click back to handleQuestionClick

  //move to form on quiz completion --> from handleQuestionClick goes to renderForm

  //submit score --> with submit event listener in renderForm goes to handleFormSubmit

  //go to quiz complete page --> from handleFormSubmit goes to renderQuizCompleteSection

  //retry --> link to home page
};

//set page load
window.addEventListener("load", onLoad);
// add event listener to start button
const startBtn = document.querySelector("#start-btn");
startBtn.addEventListener("click", takeQuiz);
// add document on load event listener
// add start button click event listener
