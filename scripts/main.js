/**
 * @fileoverview
 * Provides the JavaScript interactions for all pages.
 *
 * @author 
 * Dalton Julian
 */

/** namespace. */
var rhit = rhit || {};

rhit.facts = ["Fun Fact: I once broke my leg and didn't go to the hospital for three days.",
              "Fun Fact: I am left handed!",
              "Fun Fact: I'm on my way to having a minor in German!",
              "Fun Fact: The cake is a lie.",
              "Fun Fact: I have a black cat named Thompson!",
              "Fun Fact: My wallet is not safe in Red Lobster.",
              "Fun Fact: My childhood dream jobs included archaeologist and architect.",
              "Fun Fact: Orange is my favorite color!",
              "Fun Fact: The Lord of the Rings and The Hobbit is my favorite book series!",
              "Fun Fact: Scott Pilgrim vs. the World is one of my favorite movies!",
              "Fun Fact: Community and What We Do In The Shadows are some of my favorite shows!"];

/* Main */
/** function and class syntax examples */
rhit.main = function () {
	console.log("Ready");

    const factButton = document.querySelector("#factButton");
    factButton.onclick = (event) => {
        const fact = document.querySelector("#funFact");
        fact.innerHTML = rhit.facts[Math.floor(Math.random()*10)];
    }
};

rhit.main();
