var instance = new mail();

function submitForm() {
	var validate = true;
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

	var name = document.getElementById('name').value.replace(/^\s+|\s+$/g,"");
	var email = document.getElementById('email_from').value.replace(/^\s+|\s+$/g,"");
	var comments = document.getElementById('comments').value.replace(/^\s+|\s+$/g,"");
	
	
	if (name == ""){
		document.getElementById('name').className='form-control inputErr';
		validate = false;
	}

	if (validate == true) {
		var result = instance.sendEmail(name, email, comments, section);
		if (result == true) {
			document.getElementById('contact_form_container').style.display = "none";
			document.getElementById('contact_response').style.display = "block";
			scroll(0,0);
		}
	}
	else {
		$('html, body').animate({
	        scrollTop: $("#contact-result").offset().top - 10
	    }, 1000);
		document.getElementById('contact-result').innerHTML = "Required Fields are Missing or Contain Invalid Data.";
	}
}

function submitFormPage() {
	var validate = true;
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

	var name = document.getElementById('name').value.replace(/^\s+|\s+$/g,"");
	var email = document.getElementById('email_from').value.replace(/^\s+|\s+$/g,"");
	var comments = document.getElementById('comments').value.replace(/^\s+|\s+$/g,"");
	var section = document.getElementById('section').value;
	
	if (name == ""){
		document.getElementById('name').className='form-control inputErr';
		validate = false;
	}
	else {
		document.getElementById('name').className='form-control inputOk';
	}
	
	if (!isValidEMail(email) || email == ''){
		document.getElementById('email_from').className='form-control inputErr';
		validate = false;
	}
	else {
		document.getElementById('email_from').className='form-control inputOk';
	}
	
	if (comments == ""){
		document.getElementById('comments').className='form-control inputErr';
		validate = false;
	}
	else {
		document.getElementById('comments').className='form-control inputOk';
	}

	if (validate == true) {
		var result = instance.sendEmail(name, email, comments, section);
		if (result == true) {
			var cfcp = document.getElementById('contact_form_container_page');
			var crsp = document.getElementById('contact_response_page');
			
			document.getElementById('contact_form_container_page').style.display = "none";
			document.getElementById('contact_response_page').style.display = "block";
			
			scroll(0,0);
		}
	}
	else {
		$('html, body').animate({
	        scrollTop: $("#contact-result").offset().top - 10
	    }, 1000);
		document.getElementById('contact-result').innerHTML = "Required Fields are Missing or Contain Invalid Data.";
	}
}
function submitRequestFormPage() {
	var validate = true;
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

	var orgname = document.getElementById('orgname').value.replace(/^\s+|\s+$/g,"");
	var eventdate = document.getElementById('eventdate').value.replace(/^\s+|\s+$/g,"");
	var eventtime = document.getElementById('eventtime').value.replace(/^\s+|\s+$/g,"");
	var eventloc = document.getElementById('eventloc').value.replace(/^\s+|\s+$/g,"");
	var volunteers = document.getElementById('volunteers').value.replace(/^\s+|\s+$/g,"");
	var vage = document.getElementById('vage').value.replace(/^\s+|\s+$/g,"");
	var vresp = document.getElementById('vresp').value.replace(/^\s+|\s+$/g,"");
	var eventtype = document.getElementsByName('eventtype');
	var cname = document.getElementById('cname').value.replace(/^\s+|\s+$/g,"");
	var cemail = document.getElementById('cemail').value.replace(/^\s+|\s+$/g,"");
	var cphone = document.getElementById('cphone').value;
	
	if (orgname == ""){
		document.getElementById('orgname').className='form-control inputErr';
		validate = false;
	}
	else {
		document.getElementById('orgname').className='form-control inputOk';
	}
	
	if (eventdate == ""){
		document.getElementById('eventdate').className='form-control inputErr';
		validate = false;
	}
	else {
		document.getElementById('eventdate').className='form-control inputOk';
	}
	
	if (eventtime == ""){
		document.getElementById('eventtime').className='form-control inputErr';
		validate = false;
	}
	else {
		document.getElementById('eventtime').className='form-control inputOk';
	}
	
	if (eventloc == ""){
		document.getElementById('eventloc').className='form-control inputErr';
		validate = false;
	}
	else {
		document.getElementById('eventloc').className='form-control inputOk';
	}
	
	if (volunteers == ""){
		document.getElementById('volunteers').className='form-control inputErr';
		validate = false;
	}
	else {
		document.getElementById('volunteers').className='form-control inputOk';
	}
	
	if (vresp == ""){
		document.getElementById('vresp').className='form-control inputErr';
		validate = false;
	}
	else {
		document.getElementById('vresp').className='form-control inputOk';
	}
	
	for (var i = 0, length = eventtype.length; i < length; i++) {
	    if (eventtype[i].checked) {
	    	eventtype = eventtype[i].value;
	        break;
	    }
	}
	
	if (eventtype == ""){
		document.getElementById('eventtype').className='form-control inputErr';
		validate = false;
	}
	else {
		document.getElementById('eventtype').className='form-control inputOk';
	}
	
	if (cname == ""){
		document.getElementById('cname').className='form-control inputErr';
		validate = false;
	}
	else {
		document.getElementById('cname').className='form-control inputOk';
	}
	
	if (cphone == ""){
		document.getElementById('cphone').className='form-control inputErr';
		validate = false;
	}
	else {
		document.getElementById('cphone').className='form-control inputOk';
	}
	
	
	
	if (!isValidEMail(cemail) || cemail == ''){
		document.getElementById('cemail').className='form-control inputErr';
		validate = false;
	}
	else {
		document.getElementById('cemail').className='form-control inputOk';
	}


	if (validate == true) {
		var result = instance.sendRequestEmail(orgname, eventdate, eventtime, eventloc, volunteers, vage, vresp, eventtype, cname, cemail, cphone);
		if (result == true) {
			var cfcp = document.getElementById('request_form_container');
			var crsp = document.getElementById('request_response_page');
			
			document.getElementById('request_form_container').style.display = "none";
			document.getElementById('request_response_page').style.display = "block";
			
			
		}
	}
	else {
		$('html, body').animate({
	        scrollTop: $("#contact-result").offset().top - 10
	    }, 1000);
		document.getElementById('contact-result').innerHTML = "Required Fields are Missing or Contain Invalid Data.";
	}
}

function submitEmailFormPage() {
	var validate = true;
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

	var name = document.getElementById('cf_name').value.replace(/^\s+|\s+$/g,"");
	var email = document.getElementById('cf_email_from').value.replace(/^\s+|\s+$/g,"");
	var comments = document.getElementById('cf_comments').value.replace(/^\s+|\s+$/g,"");
	var section = document.getElementById('cf_section').value;
	
	if (name == ""){
		document.getElementById('cf_name').className='form-control inputErr';
		validate = false;
	}
	else {
		document.getElementById('cf_name').className='form-control inputOk';
	}
	
	if (!isValidEMail(email) || email == ''){
		document.getElementById('cf_email_from').className='form-control inputErr';
	}
	else {
		document.getElementById('cf_email_from').className='form-control inputOk';
	}
	
	if (comments == ""){
		document.getElementById('cf_comments').className='form-control inputErr';
		validate = false;
	}
	else {
		document.getElementById('cf_comments').className='form-control inputOk';
	}

	if (validate == true) {
		var result = instance.sendEmail(name, email, comments, section);
		if (result == true) {
			document.getElementById('contact_form_contain').style.display = "none";
			document.getElementById('contact-result').style.display = "none";
			document.getElementById('contact_response').style.display = "block";
		}
	}
	else {
		$('html, body').animate({
	        scrollTop: $("#contact-result").offset().top - 10
	    }, 1000);
		document.getElementById('contact-result').innerHTML = "Required Fields are Missing or Contain Invalid Data.";
	}
}

$(document).ready(function() {
	$('#cf_name').alphanumeric({allow:"., '-"});
	$('#cf_email_from').alphanumeric({allow:".@-_"});
	$('#cf_comments').alphanumeric({allow:".,!?@/\()$*&%:;+= '-"});
	
	$('#name').alphanumeric({allow:"., '-"});
	$('#email').alphanumeric({allow:".@-_"});
	$('#comments').alphanumeric({allow:".,!?@/\()$*&%:;+= '-"});
});
