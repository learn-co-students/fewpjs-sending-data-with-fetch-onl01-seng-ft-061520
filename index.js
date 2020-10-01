// Add your code here
function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      document.body.innerHTML = object["id"];
    })
    .catch(function (error) {
      document.body.innerHTML = error.message;
    });
}

let formData = {
  dogName: "Byron",
  dogBreed: "Poodle",
};

let configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify(formData),
};

fetch("http://localhost:3000/dogs", configObj)
  .then(function (response) {
    return response.json();
  })
  .then(function (object) {
    console.log(object);
  })
  .catch(function (error) {
    alert("Bad things! Ragnarők!");
    console.log(error.message);
  });

// function submitData(user_name, user_email) {
//   fetch("http://localhost/users", configObj)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (object) {
//       console.log(object);
//     });
// }

// The metadata needed is in the form of headers; headers are sent just ahead of teh actual data payload of POST request
// they contain info about the data being sent
// a common header is 'Content-Type', user to indicate what format the data being sent is in
// each individual header is stored in a key/value pair inside an object;
// best practice to tell header what data format we accept in return

// JS comes with built in method for converting objects to strings; by passing an object in, JSON.stringify() will return a string
