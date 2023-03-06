// Async javascript
// callbacks -> promises
//fixing callbacks with promises

// States of a promise:
// pending
// fulfilled
// rejected

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => reject(Error('Promise failed.')), 1000);  
// });

// promise
//   .then(value => console.log(value))
//   .catch(error => console.error(error))
//   .finally(() => console.log('done'));

// const promise = new Promise((resolve, reject) => {
//    navigator.geolocation.getCurrentPosition(resolve, reject); 
// });

// promise
//   .then(position => console.log(position))
//   .catch(error => console.error(error))
//   .finally(() => console.log('done'));

//function sleep(ms){
//    return new Promise(resolve => setTimeout(resolve,ms));
// }
// async function displayAfterThree(){
//     console.log("Hello Akash!");
//     for(let i=0; i<=10;i++){
//        await sleep(3000)
//         console.log("Thankyou for waiting for 3 seconds...")
//     }
// }
// displayAfterThree()


// API - Application Programming Interface: software to communicate with other software
// API - helpful service
// REST API

// CRUD 
// create POST
// read GET
// update PUT / PATCH
// delete DELETE

// http://jsonplaceholder.typicode.com/posts
// JSON - JavaScript Object Notation
// fetch(url)

// http://jsonplaceholder.typicode.com/posts
// JSON - JavaScript Object Notation
// fetch(url)
// jsonplaceholder.typicode.com

// GET /posts/1 - single blog post
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => response.json())
//   .then(data => console.log(data))

// const blogPost = {
//     title: "cool blog",
//     body: "jasf;ljafjs;",
//     userId: 1
// }
// fetch('https://jsonplaceholder.typicode.com/posts',{
//     method: "POST",
//     headers:{
//         'Content-Type': 'application/json'
//         },
//     body: JSON.stringify(blogPost)
// })
//     .then(response => response.json())
//     .then(data => console.log(data))

// const blogPost = {
//     title: "cool blog",
//     body: "asldfjafjlasfdjlkasfdk",
//     userId: 1
// }
// fetch('https://jsonplaceholder.typicode.com/pots',{
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(blogPost)
// })
//     .then(response => {
//         if(!response.ok){
//             throw new Error(response.status)
//         }
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error(error))    //main.js:98 
//                                              //Error: 404

//weather-api fetching
// const fetchingInProgress = fetch("https://goweather.herokuapp.com/weather/Chicago")
//     .then(response => response.json())
//     .then(data => console.log(data))


// Challenge: 
// The JSON Placeholder API has /users endpoint, 
// just like the one we saw in the tutorial for /posts
// Get the user with ID 3 and log their name and company they work for.
// Handle errors if something does not quite work. 

// Here's the endpoint: https://jsonplaceholder.typicode.com/users/3
// fetch("https://jsonplaceholder.typicode.com/users/3")
//     .then(response => {
//         if(!response.ok){
//             throw new Error(response.status)
//         }
//         return response.json()
//         })
//     .then(data => {
//         // console.log(data)
//         console.log(`"${data.name}" works for "${data.company.name}"`)
//         })
//     .catch(error => console.error(error))

//async-await
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response=> response.json())
//     .then(data=> console.log(data))
//converting 128-130 to async-await to more readable code
// async function getResponse(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//     const data = await response.json()
//     console.log(data)
// }
// getResponse()

// function getBlogPost(){
//     const promise = new Promise((resolve,reject)=>{
//         setTimeout(()=>resolve('blog post'),2000)
//     })
//     promise
//         .then(value=>console.log(value))
//         .finally(()=>console.log('done'))
// }
// getBlogPost()
//turning getgetBlogPost() to async await function
// async function getBlogPost(){
//     const promise = new Promise((resolve,reject)=>{
//         setTimeout(()=>resolve('blog post'),2000)
//     })
//     const result = await promise
//         console.log(result);
//         console.log('done')
//         // .then(value=>console.log(value))
//         // .finally(()=>console.log('done'))
// }
// getBlogPost()

// const response = fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => response.json())
//   .then(data => console.log(data));
// converting 161-163 to async-await 
// async function fetchData(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     const data = await response.json()
//     console.log(data)
// }
// fetchData()

//Catching Errors with async-await
// async function runAsync(){
//     await Promise.reject()
//     console.log('hi')
// }
// runAsync()          //main.js:176 Uncaught (in promise) undefined

//      =>try and catch is an helpful way handling errors in async code
//        because its helpful for handling syncronous code as well that 
//        aren't caught untill runtime when the code is executed. 

// async function runAsync(){
//     try{
//         await Promise.reject(Error('Oops'))          //await keyword is the only thing that converts 
//     }                                                //rejected thing into catchable error.
//     catch(error){
//         console.error(error)
//     }
//     console.log('hi')
// }
// runAsync()          //main.js:189 Error: Oops
                       //at runAsync (main.js:185:30)
                       //main.js:192 hi

// async function runAsync() {
//     try { 
//         await Promise.resolve('hello world'); 
//         null.someProperty = true; 
//     } catch (error) {
//         console.error(error); 
//     }  
//     }
// runAsync()          //main.js:201 TypeError: Cannot set properties of null (setting 'someProperty')  

// async function runAsync() {
//     return await Promise.reject(Error('Oops')); 
//   } 
//   runAsync().catch(error => console.error(error));  

// async function getGitUser(){
//     try{
//     const response = await fetch('https://api.github.com/users/laksjdflasjfdlkjadfjk');
//     if(!response.ok){
//         throw new Error(response.status)
//     }
//     }
//     catch(error){
//         alert(error.message)
//         console.error(error)
//     }
// }
// getGitUser()            //Error: 404

// Challenge: 
// Rewrite the GET API call from the previous challenge using async-await


// Challenge: 
// fetch('https://jsonplaceholder.typicode.com/users/3')
//   .then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);  
//       }
      
//       return response.json()
//   })
//   .then(person => console.log(`${person.name} works for ${person.company.name}`))
//   .catch(err => console.error(err))
  
// async function getUser(){
//     try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users/3')
//     const data = await response.json()
//     console.log(`${data.name} works for ${data.company.name}`)
//     if(!response.ok){
//       throw new Error(response.status) 
//     }
    
//     }
//     catch(err){
//       console.error(err)
//     } 
// }
// getUser()

//19Feb 2023
/*

this: reference to an object

4 Rules to 'this'. How is it called?

1) in the global context (global object, undefined in strict mode)
2) as a method on an object (object on left side of dot)
3) as a constructor function or class constructor (the instance itself with new)
4) as a DOM event handler (the element itself)

*/

// function whatIsThis() {
// //   console.log(this);
//  this.something = 2;
//  console.log(something);
// }

// whatIsThis();

// const user = {
//   first: 'Reed',
//   last: 'Barger',
//   greetUser() {
//     console.log(`Hi, ${this.first} ${this.last}`);  
//   }  
// }

// const userInfo = {
//   title: "Programmer",
//   user: {
//      first: 'Reed',
//      last: 'Barger',
//      greetUser() {
//       console.log(`Hi, ${this.first} ${this.last} ${this.title}`);  
//      }   
//   }  
// }

// userInfo.user.greetUser()

// class User {
//   constructor(first, age) {
//     this.first = first;
//     this.age = age;  
//   }  
  
//   getAge() {
//     console.log(`${this.first}'s age is ${this.age}`);  
//   }
// }

// const user = new User('Bob', 24);
// user.getAge();

// function User(first, age) {
//   this.first = first;
//   this.age = age;
// }

// User.prototype.getAge = function() {
//   console.log(`${this.first}'s age is ${this.age}`);  
// }

// const user2 = new User('jane', 25);
// user2.getAge();

// const button = document.createElement('button');
// button.textContent = "Click";
// document.body.appendChild(button);

// button.addEventListener('click', function() {
//   console.log(this);
// })

// call(), apply(), bind()

// const user = {
//   name: "Reed",
//   title: "Programmer"  
// }

// function printBio(city, country) {
//   console.log(`${this.name} is a ${this.title} in ${city}, ${country}`);
// }

// printBio.bind(user,'London', 'England');
// printBio.apply(user, ['London', 'England']);


// const user = {
//   name: "Reed",
//   title: "Programmer"  
// }

// function printUser() {
//   console.log(`${this.name} is a ${this.title}`);
// }

// const userDescription = printUser.bind(user);

// const user2 = {
//   name: "Doug",
//   title: "Entrepreneur"  
// }

// printUser.bind(user2)

// userDescription();

// const user = {
//   first: 'Bob',
//   fn() {
//      console.log(this.first); 
//   },
//   arrowFn: () => {
//     console.log(this.first);  
//   }
// }

// user.arrowFn();

//27 Feb 2023
//REACT started...

//ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root"))
//ReactDOM.render(
//     <ul><li>Thing 1</li><li>Thing 2</li></ul>,
//     document.getElementById("root")
// )

// function Navbar() {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <a className="navbar-brand" href="#">Navbar</a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav mr-auto">
//                 <li className="nav-item active">
//                     <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#">Link</a>
//                 </li>
//                 <li className="nav-item dropdown">
//                     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                     Dropdown
//                     </a>
//                     <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                     <a className="dropdown-item" href="#">Action</a>
//                     <a className="dropdown-item" href="#">Another action</a>
//                     <div className="dropdown-divider"></div>
//                     <a className="dropdown-item" href="#">Something else here</a>
//                     </div>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link disabled" href="#">Disabled</a>
//                 </li>
//                 </ul>
//                 <form className="form-inline my-2 my-lg-0">
//                     <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//                     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//                 </form>
//             </div>
//         </nav>
//     )
// }

// // Challenge: Create your own custom React component!
// // Call it "MainContent", and have it return a simple
// // h1 element that says "I'm learning React!"

// // Afterward, render it below the Navbar (which
// // you can do inside the ReactDOM.render call below)
// function MainContent(){
//     return (
//         <h1>I'm learning React!</h1>
//     )
// }

// ReactDOM.render(
//     <div>
//         <Navbar />
//         <MainContent />
        
//     </div>,
//     document.getElementById("root")
// )

//28Feb2023
//Essential concepts of javascript

//   export { getDate, year };
// import { getDate, year as currentYear } from './utils/date.js';

// export default function getDate() {
//     const year = new Date().getFullYear();
//     const date = `${new Date()}, year: ${year}`;  
//     return date;
//   }
// import getDateNow from './utils/date.js';


// STATE MANAGEMENT
// state - data to be managed in app
// state -> status

// class App {
//     constructor() {
//       this.state = {
//          isAuth: false,
//          error: ''  
//       };  
        
//       this.checkAuth();
//       this.render();
//       // this.$userMessage = document.getElementById("user-message");
//     }
  
//     checkAuth() {
//       const user = false;
//       if (user) {
//         this.state = { ...this.state, isAuth: true };
//       //   this.$userMessage.textContent = "Welcome back!";
//       } else {
//         this.state = { ...this.state, error: "You must sign in!" };
//       //   this.$userMessage.textContent = "You must sign in!";
//       //   this.$userMessage.style.color = "red";
//       }
//     }
  
//     render() {
//       const { isAuth, error } = this.state; 
        
//       document.getElementById("root").innerHTML = `
//         <div style="color: ${error && 'red'}">
//           ${isAuth ? 'Welcome back!' : error}
//         </div>
//       `;
//     }
//   }
  
//   new App();


//REDUCERS

//// reducers - helps us manage app state
// (state, action) => newState;

// function counterReducer(state, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { ...state, count: state.count + 1 }; 
//     case 'DECREMENT':  
//       return { ...state, count: state.count - 1 }; 
//     default:
//       return state;
//   }  
// }

// counterReducer(0, { type: 'INCREMENT' }); // 1
// const result = counterReducer(1, { type: 'DECREMENT' }); // 0
// console.log(result === 0);

// const initialUser = {
//     name: 'Mark',
//     email: 'mark@gmail.com'  
//   };
  
//   function userReducer(state, action) {
//     switch (action.type) {
//        case "CHANGE_NAME":
//          return { ...state, name: action.payload.name };
//        case "CHANGE_EMAIL":
//          return { ...state, email: action.payload.email };
//        default:
//          return state; 
//     }  
//   }
  
//   const result = userReducer(initialUser, { type: 'CHANGE_EMAIL', payload: { email: 'mark@compuserve.com' } });
//   console.log(result.email === 'mark@compuserve.com');
  // action.payload.name;
  // { type: 'CHANGE_EMAIL', payload: { email: 'joe@gmail.com' } }

  
  //Avoid Imperative, Write Declarative Code:
  // Imperative - code for a computer / declarative - code for people
// const people = ['Doug', 'Fred', 'Jane'];
// const invitations = [];

// for (let i = 0; i < people.length; i++) {
//     invitations[i] = `Hi ${people[i]}, come to my party!`;
// }

// const invitations = people.map(person => `Hi ${person}, come to my party!`);
// console.log(invitations);
// people.forEach(person =>invitations.push(` Hi, ${person} you are invited!`));

// people.forEach((person,per,p,q) => {console.log(person,per,p,q)});
// ›Doug,0,["Doug", "Fred", "Jane"],undefined
// ›Fred,1,["Doug", "Fred", "Jane"],undefined
// ›Jane,2,["Doug", "Fred", "Jane"],undefined


// 1. Why do we need to `import React from "react"` in our files?
// React is what defines JSX

// 2. If I were to console.log(page) in index.js, what would show up?
// A JavaScript object. React elements that describe what React should
// eventually add to the real DOM for us.

// 3. What's wrong with this code:
// ```
// const page = (
//     <h1>Hello</h1>
//     <p>This is my website!</p>
// )
// ```
// We need our JSX to be nested under a single parent element

// 4. What does it mean for something to be "declarative" instead of "imperative"?
// Declarative means I can tell the computer WHAT to do 
// and expect it to handle the details. Imperative means I need
// to tell it HOW to do each step.

// 5. What does it mean for something to be "composable"?
// We have small pieces that we can put together to make something
// larger/greater than the individual pieces.

// import React from "react"
// import ReactDOM from "react-dom"

// const renderElement = (
//     <div className="challenge-content">
//         <img src="./react-logo.png" width="40px"/>
//         <h1>Fun facts about React</h1>
//         <ul>
//         <li>Was first released in 2013</li>
//         <li>Was originally created by Jordan Walke</li>
//         <li>Has well over 100k stars on Github</li>
//         <li>Is maintained by facebook</li>
//         <li>Powers of thousands of enterprise app,including mobile apps</li>
//         </ul>
//     </div>
// )
// ReactDOM.render(renderElement,document.getElementById("root"))

//import React from "react"
// import ReactDOM from "react-dom"

// const renderElement = (
//     <div className="challenge-content">
//         <img src="./react-logo.png" width="40px"/>
//         <h1>Fun facts about React</h1>
//         <ul>
//         <li>Was first released in 2013</li>
//         <li>Was originally created by Jordan Walke</li>
//         <li>Has well over 100k stars on Github</li>
//         <li>Is maintained by facebook</li>
//         <li>Powers of thousands of enterprise app,including mobile apps</li>
//         </ul>
//     </div>
// )
// ReactDOM.render(renderElement,document.getElementById("root"))

// function ElementsExpense(props){
//   // const date = new Date().toLocaleDateString('en-us', {day:"numeric" , month:"short" , year:"numeric"});
//   // const title = "Television";
//   // const price = "35.45";
//   console.log(props)
//   return (
//       <div className="expense-component">
//           <div className="expense-component-box">
//               <div className="expense-date">
//                   <h3>{props.date}</h3>
//               </div>   
//               <div className="expense-title">
//                   <h3>{props.title}</h3>
//               </div>
//               <div className="expense-price">
//                   <h3>${props.price}</h3>
//               </div>
//           </div>
//       </div>
//   )
// }

// export default ElementsExpense;