//object literals

let user = {
    name: 'John',
    age: 30,
    email: 'john@gmail.com',
    location: 'Berlin',
    blogs: [
        {title: "one", likes: 1},
        {title: "two", likes: 2}
    ],
    login: function(){
        console.log("The user has logged in.");
    },
    logout: function(){
        console.log("The user has logged out.");
    },
    logBlogs: function() {
        //console.log(this.blogs);
        console.log("This user has written the following blogs:");
        this.blogs.forEach(function(blog){
            console.log(blog.title, blog.likes);
        });
    }
};

// console.log(user);
// console.log(user.name);
// //user.age = 35;
// console.log(user.age); //Accessing object properties using dot notation
// console.log(user['email']); //Accessing object properties using square brackets
// user['name'] = 'Chun-li';
// console.log(user['name']);

// console.log(typeof user);

// user.login();
// user.logout();
//console.log(this);
//user.logBlogs();

//--Math object
// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);

// const area = 7.7;

// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// const random = Math.random();

// console.log(random);
// console.log(Math.round(random*100));

//Primitive values

// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`score one: ${scoreOne}`, `score two: ${scoreTwo}`);

// scoreOne = 100;

// console.log(`score one: ${scoreOne}`, `score two: ${scoreTwo}`);

//Reference values
//The following variables hold the same pointer.
userOne = {name: 'ryu', age: 30}; 
userTwo = userOne;

console.log(userOne, userTwo);
userOne.age = 40;

console.log(userOne, userTwo);