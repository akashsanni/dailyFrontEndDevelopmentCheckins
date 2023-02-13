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