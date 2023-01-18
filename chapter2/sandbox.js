//strings
console.log('Hello, world');

// let email = 'jdoe@nbi.co.ke';
// console.log(email);

//string concatenation
let firstName = 'Brandon';
let lastName = 'Sanderson';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

//getting characters
console.log(fullName[2]);

//string length
console.log(fullName.length);

//string methods
console.log(fullName.toUpperCase());

let result = fullName.toLowerCase();
console.log(result, fullName);

// let index = email.indexOf('@');
// console.log(index);

//common string methods

//let result2 = email.lastIndexOf('e');
//let result2 = email.slice(1, 13);
//let result2 = email.substr(1,3);
//let result2 = email.replace('j', 'w');
//let result2 = email.replace('e', 'w'); 

//console.log(result2);

//numbers
let radius = 10;
const pi = 3.14;
console.log(radius, pi);

//math operators +, -, /, *, **, %
//console.log(10/2);
//let result3 = radius % 3;
//let result3 = pi * radius**2;

//order of operation - BIDMAS
let result3 = 5 * (10-3)**2;

//console.log(result3);
//let likes = 10;

//likes = likes + 1;
//likes++;
//likes--;
//likes += 10;
//likes -= 5;
//likes *= 2;
// likes /= 2;

// console.log(likes);

//NaN - not a number
//console.log(5/'hello');

// let result4 = 'This blog has '+likes+' likes.';
// console.log(result4);

//template strings
const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;

//concatenation way
// let result5 = 'The blog called '+ title + ' by ' + author + ' has ' + likes + ' likes.';
// console.log(result5);

//template string way
// let result5 = `The blog called ${title} by author ${author} has ${likes} likes.`;
// console.log(result5);

//creating html templates
// let html = `
// <h2>${title}</h2>
// <p>By ${author}.</p>
// <span>This blog has ${likes} likes.</span>
// `;

// console.log(html);

let ninjas = ['shaun', 'ryu', 'chun-li'];
// ninjas[1] = 'ken';
// console.log(ninjas[1]);

// let ages = [20, 25, 30, 35];
// console.log(ages[2]);

//Arrays in Javascript can store values of different types
// let random = ['shaun', 'ryu', 30, 20];
// console.log(random);
// console.log(ninjas.length);

//Array methods
// let result6 = ninjas.join(',');
//let result6 = ninjas.indexOf('chun-li');
//let result6 = ninjas.concat(['ken', 'crystal']);
// let result6 = ninjas.push('ken');
// result6 = ninjas.pop();

// console.log(result6);

//let age;//uninitialised variables get the value 'undefined'.
// let age = null;

// console.log(age, age+3, `the age is ${age}.`);
//booleans and comparisons
console.log(true, false);

//methods can return booleans
let email = 'luigi@ninja.co.uk';
let names = ['mario', 'luigi', 'toad'];
//let result7 = email.includes('!');
//let result7 = names.includes('bowser');
//console.log(result7);

// let age = 25;
// console.log(age==25);
// console.log(age==30);
// console.log(age!=30);
// console.log(age>20);
// console.log(age<20);
// console.log(age<=25);
// console.log(age>=25);

// let name = 'shaun';
// console.log(name == 'Shaun');
// console.log(name > 'crystal');
// console.log(name > 'Shaun');
// console.log(name > 'Crystal');

let age = 25;

//loose comparison.
// console.log(age==25);
// console.log(age=='25');
// console.log(age!=25);
// console.log(age!='25');

//strict comparison
// console.log(age===25);
// console.log(age==='25');
// console.log(age!==25);
// console.log(age!=='25');

//type conversion
let score = '100';
score = Number(score);
console.log(score + 1);
console.log(typeof(score));

// let result8 = Number('hello');
//let result8 = String(50);
//let result8 = Boolean(0);
let result8 = Boolean('');
console.log(result8, typeof(result8));