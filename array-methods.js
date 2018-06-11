const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

/*let allPlanets = "";

planets.forEach(function (singleItem) {
    allPlanets = `${allPlanets} ${singleItem} `
})

document.getElementById("planets").innerHTML = allPlanets;*/

//this one was to practice taking javascript and formatting it
let allPlanets = "<ul>";

planets.forEach(function (singleItem) {
    allPlanets += `<li>${singleItem}</li>`
});
allPlanets += `</ul>`
const planetEl = document.getElementById("planets").innerHTML = allPlanets;




/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/


const capitalPlanet = planets.map(function (capitalized) {
 return capitalized.charAt(0).toUpperCase()+capitalized.slice(1);    
});
console.log(capitalPlanet);

planets.forEach(capitalized);

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/


// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]