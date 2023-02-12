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