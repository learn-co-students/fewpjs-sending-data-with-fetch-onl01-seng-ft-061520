// Add your code here

function submitData(name, email) {
  return fetch('http://localhost:3000/users', {
    method: "POST",
    headers: {
      'content-type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name, 
      email
    })
  })  
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    document.body.innerHTML = object['id']
  })
  .catch(function(error) {
    document.body.innerHTML = error.message
  })
}

//write a valid POST request http://localhost:3000/users using fetch(). 
    //This request should include:
      //The destination URL
      //Headers for 'Content-Type' and 'Accept' set to 'application/json'
      //A body with the name and email passed in as arguments to submitData. These should be assigned to name and email keys within an object. This object should then be stringified.
//

  //  1) makes a POST request to /user with a name and email
  //  2) handles the POST request response, retrieves the new id value and appends it to the DOM
  //  3) handles a failed POST request using catch, appends the error message to the DOM


