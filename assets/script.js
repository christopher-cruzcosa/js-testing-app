var mainContentLoc = document.getElementById("mainContent");
var mainButtonLoc = document.getElementById("mainButton");

var sectionCount = -1;

var questions = ["Question 1 of 5: Inside which HTML element do we put the JavaScript?\n",
"Question 2 of 5: What is the correct JavaScript syntax to change the content of the HTML element below?\n\n<p id='demo'>This is a demonstration.</p>",
"Question 3 of 5: Where is the correct place to insert a JavaScript?",
"Question 4 of 5: What is the correct syntax for referring to an external script called 'xxx.js'?",
"Question 5 of 5: How do you write 'Hello World' in an alert box?"]

var choices1 = ["<scripting>","<script>","<js>","<javascript>",2];

mainButtonLoc.addEventListener("click", function(event){ 
    event.preventDefault();
    sectionCount++;
    console.log(sectionCount);
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
            newSpan.textContent = choices1[i];
            newSpan.style.backgroundColor = "#FF007C";
            newSpan.style.color = "#87FF2A";
            newSpan.id = ("question" + i);
            // var lineBreakE2 = document.createElement("DIV");
            // lineBreakE2.innerHTML = "<br>";
            // newP.appendChild(lineBreakE2);

            
        };

        document.getElementById("question0").addEventListener("click", function () {
            sectionCount++;
            
        })

        // document.addEventListener("click", function (event) {
        //     if (event.target.matches("#question1") || event.target.matches("#question2") || event.target.matches("#question3") || event.target.matches("#question4")) {
        //         alert("hey");
        //     } else {return};
        // });

        
    };
})
// //     else if (sectionCount === 2) {
// //         mainContentLoc.innerHTML = "";
// //         var node = document.createElement("H2");

// //         mainContentLoc.appendChild(node);
// //         node.textContent = questions[0];
// //         var linebreak = document.createElement("BR");
// //         mainContentLoc.appendChild(linebreak); 


// //         for (var i = 0; i < 4; i++) {
// //             var newP = document.createElement("P");
// //             newP.textContent = choices1[i];
// //             node.appendChild(newP);
// //             newP.style.backgroundColor = "#FF007C";
// //             newP.style.color = "#87FF2A";
// //             newP.id = ("question" + i);
// //         }

        
// //     }
// // });

// // if (sectionCount === 5) {location.reload();}

// // if (pageCount === 1) {
// //     var node = document.createElement("DIV");                 
// //     var textnode = document.createTextNode("Water");        
// //     mainContentLoc.innerHTML = "";
// //     mainContentLoc.appendChild(node);                             
// //     textContent = "Hello again, old friend"
// // }
// // else if (pageCount === 2) {
// //     mainContentLoc.innerHTML = "";

