// Add your code here
function submitData(name, email) {
  let formData = {
    name: name,
    email: email
  };

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      let el = document.createElement('h1');
      el.textContent = `Name: ${object.name} \n Email: ${object.email} \n Id: ${object.id}`
      document.getElementById('target').appendChild(el);
    })
    .catch(function(error) {
      alert("Bad things! Ragnarők!");
      console.log(error.message);
      let er = document.createElement('h2');
      er.textContent = error.message;
      document.getElementById('target').appendChild(er);
    });
}
