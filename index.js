// // Add your code here

function submitData(name, email) {
    let userData = {
        name: name,
        email: email
    };
    
    let configObject = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userData)
    }
return fetch("http://localhost:3000/users", configObject)
.then(res => res.json())
.then(obj => {
    document.body.append(obj.id)
})
.catch(error => {
    alert("Try again!");
    document.body.append(error.message);
})
 

};



// fetch("http://localhost:3000/dogs", { //three core components in CO required for post requests


//     method: "POST", //HTTP verb
//     headers: { //metadata about sent data
//         "Content-Type": "application/json",
//         "Accept": "application/json"  //data accepted in return
//     },
//     body: JSON.stringify({
//         dogName: "Byron",
//         dogBreed: "Poodle" 
//     })        
// });

// let formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   };
   
//   let configObj = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
//   };
   
//   fetch("http://localhost:3000/dogs", configObj) 
//   .then(res => res.json())
//   .then(obj => console.log(obj))
//   .catch(error => (error) {
//     alert("Bad things! Ragnarők!");
//     console.log(error.message);
//   })

  





// // Add your code here
// fetch(destinationURL, configurationObject); //three core components in CO required for post requests

// configurationObject = {
//     method: "POST", //HTTP verb
//     headers: { //metadata about sent data
//         "Content-Type": "application/json",
//         "Accept": "application/json"  //data accepted in return
//     },
//     body: JSON.stringify({
//         dogName: "Byron",
//         dogBreed: "Poodle" 
//     })        
// };