function checkName() {
	var name = document.getElementById('name');
	var invalid = document.getElementById('name_invalid');
	var missing = document.getElementById('name_missing');
    var filter = /^[A-Za-z\s]+$/;
	
	if (name.value == null || name.value == ""){
		missing.style.visibility="visible";
		return false;
	}
	else {
		missing.style.visibility="hidden";
		//return true;
	}
    if (!filter.test(name.value)) {
		invalid.style.visibility="visible";
		return false;
	}
	else {
		name_invalid.style.visibility="hidden";
		//return true;
	}
}

function checkEmail() {
	var email = document.getElementById('email');
	var invalid = document.getElementById('email_invalid');
	var missing = document.getElementById('email_missing');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (email.value == null || email.value == ""){
		missing.style.visibility="visible";
		return false;
	}
	else {
		missing.style.visibility="hidden";
		//Return true;
	}
    if (!filter.test(email.value)) {
		invalid.style.visibility="visible";
		return false;
	}
	else {
		invalid.style.visibility="hidden";
		//return true;
	}
}

function checkContactNumber() {
	var contact_number = document.getElementById('contact_number');
	var invalid = document.getElementById('contact_number_invalid');
	var missing = document.getElementById('contact_number_missing');
    var filter = /^\d{10}$/;

    if (contact_number.value == null || contact_number.value == ""){
		missing.style.visibility="visible";
		return false;
	}
	else {
		missing.style.visibility="hidden";
		//return true;
	}
    if (!filter.test(contact_number.value)) {
		invalid.style.visibility="visible";
		return false;
	}
	else {
		invalid.style.visibility="hidden";
		//return true;
	}
}

function checkMessage() {
	var message = document.getElementById('message');
	//var invalid = document.getElementById('message_invalid');
	var missing = document.getElementById('message_missing');
    //var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (message.value == null || message.value == ""){
		missing.style.visibility="visible";
		return false;
	}
	else {
		missing.style.visibility="hidden";
		//return true;
	}/*
    if (!filter.test(message.value)) {
		invalid.style.visibility="visible";
		return false;
	}
	else {
		invalid.style.visibility="hidden";
		//return true;
	}*/
}