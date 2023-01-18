//functions
// function greet()
// {
//     console.log("Hello there.");
// }

//function expression
// const speak = function(){
//     console.log('Good day!');
// };

// greet();
// speak();

//arguments and parameters
// const speak = function(name = 'John', time = 'night'){
//     console.log(`Good ${time} ${name}`);
// };

// speak("James", "morning");
// speak("Peter");
// speak();

//returning values
// const calcArea = function(radius){
//     return 3.14 * radius**2;    
// }

// const area = calcArea(5);
// console.log(area);

//arrow functions
// const calcArea = (radius) =>{
//     return 3.14 * radius**2;    
// };

// const area = calcArea(5);
// console.log("Area is ", area);

//callback functions
// const myFunc = (callbackFunc)=>{
//     let value = 50;
//     callbackFunc(value);
// };

// myFunc(function(value){
//     console.log(value);
// });

//callback function example in forEach

// let people = ['James', 'Peter', 'John', 'Andrew', 'Paul'];

// people.forEach(function(person, index){
//     console.log(index, person);
// });

// const logPerson = function(person, index){
//     console.log(`${index} - hello ${person}`);  
// };

// let people = ['James', 'Peter', 'John', 'Andrew', 'Paul'];

// people.forEach(logPerson);

const ul = document.querySelector(".people");
let people = ['James', 'Peter', 'John', 'Andrew', 'Paul'];
let html = ``;

people.forEach(function(person){
    //create html template for each person.
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);

ul.innerHTML = html;