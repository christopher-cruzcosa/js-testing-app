var mainContentLoc = document.getElementById("mainContent");
var mainButtonLoc = document.getElementById("mainButton");
var highScoresButtonLoc = document.getElementById("viewHighScores");

var sectionCount = 0;
var timerSeconds = 100;
var initials = "" ;
var score = 0;
var highScores = [];

function compareValues(key, order = 'asc') {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }
  
      const varA = (typeof a[key] === 'string')
        ? a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string')
        ? b[key].toUpperCase() : b[key];
  
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  };





function init() {
  var existingScores = JSON.parse(localStorage.getItem("highScoreList"));

  if(existingScores != null){
    highScores = existingScores;
  }
  console.log(highScores);
}



init();

function setTime() {
    var timerInterval = setInterval(function() {
      timerSeconds--;
      document.getElementById("countdown").textContent = ("Time: " + timerSeconds);
      if(timerSeconds < 1) {
        clearInterval(timerInterval);
        document.getElementById("countdown").value = 0;
        // document.getElementById("countdown").textContent = 0;

      };
      if(sectionCount === 5) {
        clearInterval(timerInterval);
        document.getElementById("countdown").value = timerSeconds;
        // document.getElementById("countdown").textContent = 0;
      }
    }, 1000);
};

var correctamundo = "";

var questions = ["Question 1 of 5: Inside which HTML element do we put the JavaScript?",
`Question 2 of 5: How do you write "Hello World" in an alert box?`,
"Question 3 of 5: Where is the correct place to insert a JavaScript?",
"Question 4 of 5: What is the correct syntax for referring to an external script called 'xxx.js'?",
'Question 5 of 5: How do you call a function named "myFunction"?']

var choices0 = ["<scripting>","<script>","<js>","<javascript>",1];
var choices1 = [`msgBox("Hello World");`,`msg("Hello World");`,
`alertBox("Hello World");`,`alert("Hello World");`,3]
var choices2 = [`Both the <head> section and the <body> section are correct`,
`The <head> section`,`The <body> section`,"None of the above",0]
var choices3 = [`<script src="xxx.js">`,
`<script name="xxx.js">`,`<script href="xxx.js">`,"None of the above",0]
var choices4 = [`call function myFunction()`,
`call myFunction()`,`myFunction()`,"None of the above",2]

mainButtonLoc.addEventListener("click",function() {
    setTime();
})

mainContentLoc.addEventListener("click", function(event){
    event.preventDefault();
    event.stopPropagation();
    if (sectionCount === 0) {
        mainContentLoc.innerHTML = "";
        var node = document.createElement("H2");
        mainContentLoc.appendChild(node);
        node.textContent = questions[0];
        var lineBreakE1 = document.createElement("DIV");
        node.appendChild(lineBreakE1);
        lineBreakE1.innerHTML = "<br>";
        for (var i = 0; i < 4; i++) {
            var newP = document.createElement("p");
            node.appendChild(newP);
            var newSpan = document.createElement("span");
            newP.appendChild(newSpan);
            newSpan.textContent = choices0[i];
            newSpan.style.backgroundColor = "#FF007C";
            newSpan.style.color = "#87FF2A";
            newSpan.id = ("question" + i);            
        };
    };

    if (sectionCount === 1) {
        if (eval("choices" + (sectionCount-1)).indexOf(event.target.textContent) != choices0[4]) {
            timerSeconds -= 10;
            correctamundo = false;
        } else {
            correctamundo = true;
        };
        mainContentLoc.innerHTML = "";
        var node = document.createElement("H2");
        mainContentLoc.appendChild(node);
        node.textContent = questions[1];
        var lineBreakE1 = document.createElement("DIV");
        node.appendChild(lineBreakE1);
        lineBreakE1.innerHTML = "<br>";
        for (var i = 0; i < 4; i++) {
            var newP = document.createElement("p");
            node.appendChild(newP);
            var newSpan = document.createElement("span");
            newP.appendChild(newSpan);
            newSpan.textContent = choices1[i];
            newSpan.style.backgroundColor = "#FF007C";
            newSpan.style.color = "#87FF2A";
            newSpan.id = ("question" + i);            
        };
        if (correctamundo === true) {
            var newPE2 = document.createElement("P");
            newPE2.style.borderTop = "thick solid #0000FF";
            newPE2.textContent = "That was correct!";
            newPE2.style.textAlign = "center";
            node.appendChild(newPE2);
        } else if (correctamundo === false) {
            var newPE2 = document.createElement("P");
            newPE2.style.borderTop = "thick solid #0000FF";
            newPE2.textContent = "That was wrong!";
            newPE2.style.textAlign = "center";
            node.appendChild(newPE2);
        } else {
            return};
    };

    if (sectionCount === 2) {
        if (choices1.indexOf(event.target.textContent) != choices1[4]) {
            timerSeconds -= 10;
            correctamundo = false;
        } else {
            correctamundo = true;
        };
        mainContentLoc.innerHTML = "";
        var node = document.createElement("H2");
        mainContentLoc.appendChild(node);
        node.textContent = questions[2];
        var lineBreakE1 = document.createElement("DIV");
        node.appendChild(lineBreakE1);
        lineBreakE1.innerHTML = "<br>";
        for (var i = 0; i < 4; i++) {
            var newP = document.createElement("p");
            node.appendChild(newP);
            var newSpan = document.createElement("span");
            newP.appendChild(newSpan);
            newSpan.textContent = choices2[i];
            newSpan.style.backgroundColor = "#FF007C";
            newSpan.style.color = "#87FF2A";
            newSpan.id = ("question" + i);            
        };
        if (correctamundo === true) {
            var newPE2 = document.createElement("P");
            newPE2.style.borderTop = "thick solid #0000FF";
            newPE2.textContent = "That was correct!";
            newPE2.style.textAlign = "center";
            node.appendChild(newPE2);
        } else if (correctamundo === false) {
            var newPE2 = document.createElement("P");
            newPE2.style.borderTop = "thick solid #0000FF";
            newPE2.textContent = "That was wrong!";
            newPE2.style.textAlign = "center";
            node.appendChild(newPE2);
        } else {
            return};
    };

    if (sectionCount === 3) {
        if (choices2.indexOf(event.target.textContent) != choices2[4]) {
            timerSeconds -= 10;
            correctamundo = false;
        } else {
            correctamundo = true;
        };
        mainContentLoc.innerHTML = "";
        var node = document.createElement("H2");
        mainContentLoc.appendChild(node);
        node.textContent = questions[3];
        var lineBreakE1 = document.createElement("DIV");
        node.appendChild(lineBreakE1);
        lineBreakE1.innerHTML = "<br>";
        for (var i = 0; i < 4; i++) {
            var newP = document.createElement("p");
            node.appendChild(newP);
            var newSpan = document.createElement("span");
            newP.appendChild(newSpan);
            newSpan.textContent = choices3[i];
            newSpan.style.backgroundColor = "#FF007C";
            newSpan.style.color = "#87FF2A";
            newSpan.id = ("question" + i);            
        };
        if (correctamundo === true) {
            var newPE2 = document.createElement("P");
            newPE2.style.borderTop = "thick solid #0000FF";
            newPE2.textContent = "That was correct!";
            newPE2.style.textAlign = "center";
            node.appendChild(newPE2);
        } else if (correctamundo === false) {
            var newPE2 = document.createElement("P");
            newPE2.style.borderTop = "thick solid #0000FF";
            newPE2.textContent = "That was wrong!";
            newPE2.style.textAlign = "center";
            node.appendChild(newPE2);
        } else {
            return};
    };

    if (sectionCount === 4) {
        if (choices3.indexOf(event.target.textContent) != choices3[4]) {
            timerSeconds -= 10;
            correctamundo = false;
        } else {
            correctamundo = true;
        };
        mainContentLoc.innerHTML = "";
        var node = document.createElement("H2");
        mainContentLoc.appendChild(node);
        node.textContent = questions[4];
        var lineBreakE1 = document.createElement("DIV");
        node.appendChild(lineBreakE1);
        lineBreakE1.innerHTML = "<br>";
        for (var i = 0; i < 4; i++) {
            var newP = document.createElement("p");
            node.appendChild(newP);
            var newSpan = document.createElement("span");
            newP.appendChild(newSpan);
            newSpan.textContent = choices4[i];
            newSpan.style.backgroundColor = "#FF007C";
            newSpan.style.color = "#87FF2A";
            newSpan.id = ("question" + i);            
        };
        if (correctamundo === true) {
            var newPE2 = document.createElement("P");
            newPE2.style.borderTop = "thick solid #0000FF";
            newPE2.textContent = "That was correct!";
            newPE2.style.textAlign = "center";
            node.appendChild(newPE2);
        } else if (correctamundo === false) {
            var newPE2 = document.createElement("P");
            newPE2.style.borderTop = "thick solid #0000FF";
            newPE2.textContent = "That was wrong!";
            newPE2.style.textAlign = "center";
            node.appendChild(newPE2);
        } else {
            return};
    };

    if (sectionCount === 5) {
        if (choices4.indexOf(event.target.textContent) != choices4[4]) {
            timerSeconds -= 10;
            correctamundo = false;
            score = timerSeconds;
        } else {
            correctamundo = true;
            score = timerSeconds;
        };

        mainContentLoc.innerHTML = "";
        var node = document.createElement("H2");
        mainContentLoc.appendChild(node);
        node.textContent = "   Good Job and all done!";
        var lineBreakE1 = document.createElement("DIV");
        node.appendChild(lineBreakE1);
        lineBreakE1.innerHTML = "<br>";
        var newPE3 = document.createElement("P");
        newPE3.textContent = "   Your final score is: " + score;
        node.appendChild(newPE3);
        var newDivE3 = document.createElement("DIV");
        node.appendChild(newDivE3);
        var newSpanE3 = document.createElement("span");
        newDivE3.appendChild(newSpanE3);
        newSpanE3.textContent = "Type your initials: ";
        var inputE3 = document.createElement("INPUT");
        inputE3.setAttribute("type", "text");
        inputE3.id = "initialsField";
        newDivE3.appendChild(inputE3);
        var buttonE3 = document.createElement("BUTTON");
        buttonE3.textContent = "Submit";
        newDivE3.appendChild(buttonE3)
        buttonE3.id = "buttonFinal";
    };

    if (event.target.id === "buttonFinal") {
        initials = document.getElementById("initialsField").value;
        var newScore = {
            scoreValue: score,
            initialsValue: initials 
        };
        highScores.push(newScore);
        localStorage.setItem("highScoreList", JSON.stringify(highScores));
        mainContentLoc.innerHTML = "";
        var node = document.createElement("H2");
        mainContentLoc.appendChild(node);
        node.textContent = "High Scores";
        var lineBreakE1 = document.createElement("DIV");
        node.appendChild(lineBreakE1);
        lineBreakE1.innerHTML = "<br>";
        for (var i = 0; i < highScores.sort(compareValues('scoreValue', 'desc')).length; i++) {
            var newP = document.createElement("p");
            node.appendChild(newP);
            newP.textContent = (i+1) + ") " + highScores.sort(compareValues('scoreValue','desc'))[i].scoreValue + " - " + highScores.sort(compareValues('scoreValue', 'desc'))[i].initialsValue;
            newP.style.backgroundColor = "#87FF2A";
            newP.style.color = "#FF007C";
        };
        var highScoreButton = document.createElement("BUTTON");
        highScoreButton.setAttribute("type","button");
        highScoreButton.setAttribute("class","btn btn-success");
        highScoreButton.textContent = "Done";
        highScoreButton.id = "goAwayFromScoresButton";
        node.appendChild(highScoreButton);
    };

    if (event.target.id === "goAwayFromScoresButton") {
        location.reload();
    };

    sectionCount++;
});


highScoresButtonLoc.addEventListener("click", function(event){

    event.preventDefault();
    event.stopPropagation();
    mainContentLoc.innerHTML = "";
        var node = document.createElement("H2");
        mainContentLoc.appendChild(node);
        node.textContent = "High Scores";
        var lineBreakE1 = document.createElement("DIV");
        node.appendChild(lineBreakE1);
        lineBreakE1.innerHTML = "<br>";
        for (var i = 0; i < highScores.sort(compareValues('scoreValue', 'desc')).length; i++) {
            var newP = document.createElement("p");
            node.appendChild(newP);
            newP.textContent = (i+1) + ") " + highScores.sort(compareValues('scoreValue','desc'))[i].scoreValue + " - " + highScores.sort(compareValues('scoreValue', 'desc'))[i].initialsValue;
            newP.style.backgroundColor = "#87FF2A";
            newP.style.color = "#FF007C";
        };
        var highScoreButton = document.createElement("BUTTON");
        highScoreButton.setAttribute("type","button");
        highScoreButton.setAttribute("class","btn btn-success");
        highScoreButton.textContent = "Done";
        highScoreButton.id = "goAwayFromScoresButton";
        node.appendChild(highScoreButton);
});

document.getElementById("goAwayFromScoresButton").addEventListener("click", function(event){
    event.preventDefault();
    event.stopPropagation();
    mainContentLoc.innerHTML = "";
    location.reload();
});
