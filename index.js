function resetFields () {
	document.getElementById('registration-form').reset()

	document.getElementById('first-name-valid').style.display = 'none'
	document.getElementById('last-name-valid').style.display = 'none'
	document.getElementById('email-valid').style.display = 'none'
	document.getElementById('city-valid').style.display = 'none'
	document.getElementById('state-valid').style.display = 'none'
	document.getElementById('zip-valid').style.display = 'none'
	document.getElementById('tNC-valid').style.display = 'none'
}

function validate() {
	let firstName = document.getElementById('first-name').value
	let lastName = document.getElementById('last-name').value
	let email = document.getElementById('email').value
	let city = document.getElementById('city').value
	let state = document.getElementById('state').value
	let zipCode = document.getElementById('zip-code').value
	let tnC = document.getElementById('t-and-c').checked

	let error = false

	if(firstName.length >= 2) {
		document.getElementById('first-name-valid').style.display = 'block'
		document.getElementById('first-name-invalid').style.display = 'none'
	} else {
		error = true
		document.getElementById('first-name-invalid').style.display = 'block'
		document.getElementById('first-name-valid').style.display = 'none'
	}

	if(lastName.length >= 2) {
		document.getElementById('last-name-valid').style.display = 'block'
		document.getElementById('last-name-invalid').style.display = 'none'
	} else {
		error = true
		document.getElementById('last-name-invalid').style.display = 'block'
		document.getElementById('last-name-valid').style.display = 'none'
	}

	

	if (
		email.includes("@") && 
		email.includes(".") && 
		email.indexOf("@") > 0 &&
		email.substr(email.lastIndexOf('.') + 1).length >= 2
	) {
    document.getElementById("email-valid").style.display = "block";
    document.getElementById("email-invalid").style.display = "none";
  } else {
		error = true
    document.getElementById("email-invalid").style.display = "block";
    document.getElementById("email-valid").style.display = "none";
  }

	if (city.length >= 3) {
    document.getElementById("city-valid").style.display = "block";
    document.getElementById("city-invalid").style.display = "none";
  } else {
		error = true
    document.getElementById("city-invalid").style.display = "block";
    document.getElementById("city-valid").style.display = "none";
  }

	if(state != 'None') {
		document.getElementById("state-valid").style.display = "block";
    document.getElementById("state-invalid").style.display = "none";
  } else {
		error = true
    document.getElementById("state-invalid").style.display = "block";
    document.getElementById("state-valid").style.display = "none";
	}

	let numberZip = parseInt(zipCode)
	if (
		!isNaN(numberZip) &&
    numberZip > 100000 &&
    numberZip <= 999999
  ) {
    document.getElementById("zip-valid").style.display = "block";
    document.getElementById("zip-invalid").style.display = "none";
  } else {
		error = true
    document.getElementById("zip-invalid").style.display = "block";
    document.getElementById("zip-valid").style.display = "none";
  }

	if(tnC) {
		document.getElementById("tNC-invalid").style.display = "none"
	} else {
		error = true
		document.getElementById("tNC-invalid").style.display = "block"
	}

	if(error ===  false) {
		alert('Your details saved successfully!')
		resetFields()
	}
}