const scoresLSKey = "highScores";

const getFromLS = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

const getScoresFromLS = () => {
  return getFromLS(scoresLSKey);
};

const renderNoScoresMessage = () => {
  //create section
  const section = document.createElement("section");
  section.setAttribute("class", "high-score-section wrapper");
  section.setAttribute("id", "high-score-section");

  //create h2
  const h2 = document.createElement("h2");
  h2.setAttribute("class", "title");
  h2.textContent = "Code Quiz - Table of High Scores";

  // create paragraph
  const p = document.createElement("div");
  p.setAttribute("class", "message-container");
  p.textContent =
    "There are no high scores recorded yet. Take the quiz to help populate the table!";

  //create the back button
  const aHome = document.createElement("a");
  aHome.setAttribute("class", "btn home-btn link");
  aHome.setAttribute("id", "home-btn");
  aHome.setAttribute("href", "./index.html");
  aHome.textContent = "Back to Home page";

  //append all divs to section
  section.append(h2, p, aHome);
  //append section to main
  main.append(section);
};

const getHighScores = (highScoresFromLS) => {
  //use array.sort function
  highScoresFromLS.sort((a, b) => b.score - a.score);
  return highScoresFromLS.slice(0, 5);
};

const renderHighScoresTable = (topHighScores) => {
  //create section
  const section = document.createElement("section");
  section.setAttribute("class", "high-score-section wrapper");
  section.setAttribute("id", "high-score-section");

  //create h2
  const h2 = document.createElement("h2");
  h2.setAttribute("class", "title");
  h2.textContent = "Code Quiz - Table of High Scores";
  // create paragraph
  const p = document.createElement("div");
  p.setAttribute("class", "message-container");
  p.textContent = "Can you find your name in this table of high scores?";
  // create small score table
  const table = document.createElement("table");
  table.setAttribute("class", "score-table");
  const header = document.createElement("tr");
  const headerData1 = document.createElement("th");
  headerData1.innerHTML = "Player's Name";
  const headerData2 = document.createElement("th");
  headerData2.innerHTML = "Score";
  header.append(headerData1, headerData2);
  table.appendChild(header);

  for (let i = 0; i < topHighScores.length; i += 1) {
    const row = document.createElement("tr");
    const rowData1 = document.createElement("td");
    rowData1.innerHTML = topHighScores[i].fullName;
    const rowData2 = document.createElement("td");
    rowData2.innerHTML = topHighScores[i].score;
    row.append(rowData1, rowData2);
    table.appendChild(row);
  }

  const aHome = document.createElement("a");
  aHome.setAttribute("class", "btn home-btn link");
  aHome.setAttribute("id", "home-btn");
  aHome.setAttribute("href", "./index.html");
  aHome.textContent = "Back to Home page";

  //append all divs to section
  section.append(h2, p, table, aHome);
  //append section to main
  main.append(section);
};

const onLoad = () => {
  // function to get array from local storage
  const highScoresFromLS = getScoresFromLS();

  // check if highscores exists in LS
  //if it doesn't exist, set an empty array and stringify as we set it
  if (highScoresFromLS.length === 0) {
    renderNoScoresMessage();
  } else {
    const topHighScores = getHighScores(highScoresFromLS);
    renderHighScoresTable(topHighScores);
  }
};

//set page load
window.addEventListener("load", onLoad);
