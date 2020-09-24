function submitData(name, email) {
    let configObject = {
	method: "POST",
	headers: {
	    "Content-Type": "application/json",
	    "Accept": "application/json"
	},
	body: JSON.stringify({
	    name,
	    email
	})};
    
    return fetch("http://localhost:3000/users", configObject)
	.then(function(response) {
	    return response.json();
	})
	.then(function(object) {
	    document.body.innerHTML = object.id;
	})
	.catch(function(error) {
	    alert("Bad things!!");
	    document.body.innerHTML = error.message;
	});
};

