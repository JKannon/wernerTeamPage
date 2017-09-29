function toggleForms(formName) {
	//document.getElementById("login_start").style.display = "none";
	switch (formName) {
		case "driver":
			document.getElementById("login_driver_holder").style.display = "block";
			document.getElementById("login_cust_holder").style.display = "none";
			document.getElementById("login_carr_holder").style.display = "none";
			// document.getElementById("link_driver").setAttribute("class", "drivers activeLI");
			// document.getElementById("link_cust").setAttribute("class", "customers");
			// document.getElementById("link_carr").setAttribute("class", "carriers");
			document.getElementById('link_driver').className='form-control drivers activeLI';
			document.getElementById('link_cust').className='form-control customers';
			document.getElementById('link_carr').className='form-control carriers';
			break;
			
		case "cust":
			document.getElementById("login_cust_holder").style.display = "block";
			document.getElementById("login_driver_holder").style.display = "none";
			document.getElementById("login_carr_holder").style.display = "none";
			// document.getElementById("link_driver").setAttribute("class", "drivers");
			// document.getElementById("link_cust").setAttribute("class", "customers activeLI");
			// document.getElementById("link_carr").setAttribute("class", "carriers");
			document.getElementById('link_driver').className='form-control drivers';
			document.getElementById('link_cust').className='form-control customers activeLI';
			document.getElementById('link_carr').className='form-control carriers';
			break;
			
		case "carr":
			document.getElementById("login_carr_holder").style.display = "block";
			document.getElementById("login_driver_holder").style.display = "none";
			document.getElementById("login_cust_holder").style.display = "none";
			// document.getElementById("link_driver").setAttribute("class", "drivers");
			// document.getElementById("link_cust").setAttribute("class", "customers");
			// document.getElementById("link_carr").setAttribute("class", "carriers activeLI");
			document.getElementById('link_driver').className='form-control drivers';
			document.getElementById('link_cust').className='form-control customers';
			document.getElementById('link_carr').className='form-control carriers activeLI';
			break;
	}
}

function validateDriverForm() {

	var validate = true;

	if (document.frmlogin.UserID.value == "") {
		document.getElementById('UserID').className='form-control inputErr';
		validate = false;
	}
	else {
		document.getElementById('UserID').className='form-control inputOk';
		validate = true;
	}
	
	if (document.frmlogin.tractor.value == "") {
		document.getElementById('tractor').className='form-control inputErr';
		validate = false;
	}
	else {
		document.getElementById('tractor').className='form-control inputOk';
		validate = true;
	}
	
	if (document.frmlogin.ssn.value == "") {
		document.getElementById('ssn').className='form-control inputErr';
		validate = false;
	}
	else {
		document.getElementById('ssn').className='form-control inputOk';
		validate = true;
	}
	
	if (document.frmlogin.trip.value == "") {
		document.getElementById('trip').className='form-control inputErr';
		validate = false;
	}
	else {
		document.getElementById('trip').className='form-control inputOk';
		validate = true;
	}
	
	if (validate == true) {
		return true;
	}
	else {
		return false;
	}
}

function validateCarrierForm() {

	var validate = true;

	if (document.carrlogin.userid.value == "") {
		document.getElementById('userid').className='form-control inputErr';
		validate = false;
	}
	else {
		document.getElementById('userid').className='form-control inputOk';
		validate = true;
	}
	
	if (document.carrlogin.pwd.value == "") {
		document.getElementById('pwd').className='form-control inputErr';
		validate = false;
	}
	else {
		document.getElementById('pwd').className='form-control inputOk';
		validate = true;
	}
	
	if (validate == true) {
		return true;
	}
	else {
		return false;
	}
}

function validateCustForm() {

	var validate = true;

	if (document.custlogin.cuserid.value == "") {
		document.getElementById('cuserid').className='form-control inputErr';
		validate = false;
	}
	else {
		document.getElementById('cuserid').className='form-control inputOk';
		validate = true;
	}
	
	if (document.custlogin.password.value == "") {
		document.getElementById('password').className='form-control inputErr';
		validate = false;
	}
	else {
		document.getElementById('password').className='form-control inputOk';
		validate = true;
	}
	
	if (validate == true) {
		return true;
	}
	else {
		return false;
	}

}