// const para  = document.querySelector('div.error'); //Gets a single element
// console.log(para);

// const paras = document.querySelectorAll('p'); //Returns a Nodelist which resembles an array but isn't one.
// const errors = document.querySelectorAll('.error');

// paras.forEach(function(para){
//     console.log(para);
// });

//console.log(paras[2]);

// console.log(errors);

//querySelector and querySelectorAll are the two best elements to query for elements from the DOM.

//get an element by Id
// const title = document.getElementById('page-title');
// console.log(title);

//get elements by their class name
// const errors = document.getElementsByClassName('error'); //Returns an HTML collection.
// console.log(errors);
// console.log(errors[0]);

//get elements by their tag name
// const paras = document.getElementsByTagName('p'); //Returns an HTML collection.
// console.log(paras);
// console.log(paras[1]);

//const para = document.querySelector('p');
//console.log(para.innerText);
//para.innerText += 'Ninjas are awesome!';

// const paras = document.querySelectorAll('p');

// paras.forEach(function(para){
//    console.log(para.innerText);
//    para.innerText += ' new text.'; 
// });

//const content = document.querySelector('.content');
//console.log(content.innerHTML);
//content.innerHTML += '<h2>This is a new h2.</h2>';

// const people = ['mario', 'luigi', 'yoshi'];

// people.forEach(function(person){
//     content.innerHTML += `<p>${person}</p>`;
// });
// const link = document.querySelector('a');
// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.thenetninja.co.uk');
// link.innerText = 'The NetNinja website.';

// const mssg = document.querySelector('p');

// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class', 'success');
// mssg.setAttribute('style', 'color:green;');

//Modifying the attributes of a selected element
//const title = document.querySelector('h1');
//title.setAttribute('style', 'margin: 50px');
// console.log(title.style.color);

// title.style.margin = '50px';
// title.style.color = 'crimson';
// title.style.fontSize = '50px';

// title.style.margin = '';

// const content = document.querySelector('p');
// console.log(content.classList); //Returns DOMTokenList
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

const paras = document.querySelectorAll('p');

paras.forEach(function(para){
    if(para.textContent.includes('error'))
    {
        para.classList.add('error');
    }

    if(para.textContent.includes('success'))
    {
        para.classList.add('success');
    }
});

const title = document.querySelector('.title');

title.classList.toggle('test');
title.classList.toggle('test');