//for loops
// for(let i = 0; i < 5; i++)
// {
//     console.log('in loop:', i);
// }

// console.log('Loop finished.');

// const names = ['john', 'james', 'peter'];

// for(let i = 0; i < names.length; i++)
// {
//     let html = `<div>${names[i]}</div>`;
//     console.log(html);
// }

//While loops
// let i = 3;
// const names = ['john', 'james', 'peter'];
// while(i < names.length)
// {
//     console.log(names[i]);
//     i++;
// }

//do while loops
// do
// {
//     console.log("Value of i is: ", i);
//     i++;
// }while(i < 5)

//if statements
// const age = 25;

// if(age > 20)
// {
//     console.log('You are over 20 years old.');
// }
// const ninjas = ['john', 'james', 'peter' , 'mark'];

// if(ninjas.length > 4)
// {
//     console.log("That's a lot of ninjas.");
// }

// const password = 'p@ss12';

// if(password.length >= 12 && password.includes('@'))
// {
//     console.log("That password is quite strong.");
// }
// else if(password.length >= 8 || password.includes('@') && password.length >= 5)
// {
//     console.log("That password is strong enough.");
// }
// else
// {
//     console.log("That password is not long enough.");
// }

//logical not(!)
// let user = false;

// if(!user)
// {
//    console.log("You must be logged in to continue.");
// }

//break and continue
// const scores = [5, 10, 15, 20, 25];

// for (let i = 0; i < scores.length; i++) 
// {
//     if(scores[i] === 10)
//     {
//         continue;
//     }

//    console.log("Your score is: ", scores[i]);  
   
//    if(scores[i] === 15) 
//    {
//        console.log("Break at 15.");
//        break;
//    }
// }

//switch statements
// const grade = 'P';

// switch (grade) 
// {
//     case 'A':
//         console.log('You got an A.');
//         break;
//     case 'B':
//         console.log('You got a B.');
//         break;
//     case 'C':
//         console.log('You got a C.');
//         break;
//     case 'D':
//         console.log('You got a D.');
//         break; 
//     case 'E':
//         console.log('You got an E.');
//         break;                
//     default:
//         console.log('Not a valid grade.')
//         break;
// }

//variables and block scope
const age = 30; //this variable has global scope

if(true) 
{
    const age = 40; //A variable can be declared again inside a code block if it was declared in a scope outside the current one.
    const name = 'shaun';
    console.log('Inside 1st block: ', age, name);
    
    if(true)
    {
        const age = 50; 
        console.log('Inside 2nd block: ', age);
        var test = 'hello'; //variables created using 'var' ignore block scope
    }
}

console.log('Outside code block: ', age, name, test);