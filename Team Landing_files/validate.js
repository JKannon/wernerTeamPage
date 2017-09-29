function isValidZip(str)
{
	trim(str);
	if (isNaN(str) || str.length != 5) {
		return false;
	} else {
		return true;
	}
}

//Fxn For E-Mail Validation 
function isValidEMail(str)
{
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	
	if(!emailReg.test(str)) {
		return false;
		}
	
	return true;
}

//Fxn For Phone Number validation
function isValidPhone(str)
{
	var newvalue = "";

	if (trim(str) == "") {
		return false;
	} else {
		var oldvalue = trim(str);
		var numDigits = 0;
		for (var i = 0; i < oldvalue.length; i++) {
			var Char = oldvalue.charAt(i);
			if (i == 0 && Char == 1)
			{
				//throw out the leading 1
			}
			else
			{
				if (!isNaN(Char) && Char != " ") {
					numDigits++;

					// Format it correctly.
					if (newvalue.length == 3 || newvalue.length == 7) {
							newvalue += "-" + Char;
					} else {
						newvalue += Char;
					}
				}
	        	}
		}
		if (numDigits == 10) {
			str = newvalue;
			return true;
		} else {
			return false;
		}
	}
}

//Fxn For Social Security Number validation
function isValidSSN(str)
{	
	var newvalue = "";
	
	var oldvalue = trim(str);
	var numDigits = 0;
	for (var i = 0; i < oldvalue.length; i++) {
		var Char = oldvalue.charAt(i);
		if (!isNaN(Char)) {
			numDigits++;
			// Format it correctly.
			// US = xxx-xx-xxxx
			// CA = xxx-xxx-xxx
			if (newvalue.length == 3 || newvalue.length == 6) {
				newvalue += "-" + Char;
			} else {
				newvalue += Char;
			}

		}
	}

	// Validate numbers
	// can't be 000, 666, 734-739, 74x, 755, 773-779, 780-799, or 800-999.  Otherwise, any 3 digits
	var first3 = /(?!000)(?!666)(?!73[4-9])(?!74\d)(?!755)(?!77[3-9])(?!7[89]\d)(?![89]\d{2})\d{3}/;
	var second2 = /(?!00)\d{2}/;
	var last4 = /(?!0000)\d{4}/;

	if (! first3.test(newvalue.substring(0, 3))) {
		return false;
	}
	if (! second2.test(newvalue.substring(4, 6))) {
		return false;
	}
	if (! last4.test(newvalue.substring(7, 11))) {
		return false;
	}


	if (numDigits == 9) {
		str = newvalue;
		return true;
	} else {
		return false;
	}
}

function isValidText(txt)
{
	//Form the reg Expressions 
	var regExp = /^\w*$/;	
	return regExp.test(txt);
}

function isValidNumber(txt)
{
	if (isNaN(txt) || txt.length == 0) {
		return false;
	} else {
		return true;
	}
}

function checkForCheckBoxRadio(obj)
{
	flag = false;
	for(i=0;i<obj.length;i++) {
		if (obj[i].checked)
			flag = true;
	}
	if (!flag) {
		for(i=0;i<obj.length;i++) {
			obj[i].className = "FormError";
		}
//		obj[0].focus();
	}
	return flag;
}

function checkForText(obj)
{
	flag = false;
	if (obj.value != "")
		flag = true;
		
//	if (!flag) {
//		obj.focus();
//	}
	return flag;
}

// This function has a moving window.  Any 2-digit year <= than the current 2-digit year will
// be in the 2000s.  Any 2-digit year greater than the current 2-digit year will be in the 1900s.
// So you can't end up with any date with a year in the future.
function isValidDate(obj)
{
	if (obj.value != "") {
		var datePat = /^(\d{1,2})[\\/|-](\d{1,2})[\\/|-](\d{2})?(\d{2})$/;
		if (datePat.test(trim(obj.value))) {
			var strDateParts = trim(obj.value).replace(datePat, "$4-$1-$2");
			var arrDateParts = strDateParts.split("-");
			// Check the year for validity
			if (arrDateParts[0] < 0 || arrDateParts[0] > 99) {
				return false;
			}
			// Check the month for validity
			if (arrDateParts[1] < 1 || arrDateParts[1] > 12) {
				return false;
			}
			// Check the month for validity
			if (arrDateParts[2] < 1 || arrDateParts[2] > 31) {
				return false;
			}
			var d = new Date("19" + arrDateParts[0], arrDateParts[1] - 1, arrDateParts[2]);
			var curDate = new Date();
			var year = "";
			var curYear = curDate.getYear() - 100;
			var dyear = d.getYear();
			if (curYear >= 1900) { curYear = curYear - 1900; }		// IE hack
			if (dyear > 100) { dyear = dyear - 100; } 				// Safari hack

			// Compare the 2-digit years to see what century it's in
			if (dyear >= curYear) {
				year = 1900 + dyear;
			} else {
				year = 2000 + dyear;
			}
			if (!isNaN(d.getMonth())) {
				obj.value = (d.getMonth() + 1) + "/" + d.getDate() + "/" + year;
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	}
}

function isValidDate(month, date, year)
{
	if (month != null && date != null && year != null
		&& month != "" && date != "" && year != "") {
		var leapyear = false;

		// Figure out if it's a leap year
		if (year % 400 == 0) {
			leapyear = true;
		} else if (year % 100 == 0) {
			leapyear = false;
		} else if (year % 4 == 0) {
			leapyear = true;
		} else {
			leapyear = false;
		}
			
		// Check 31 day months
		if (	month == 1
			|| month == 3
			|| month == 5
			|| month == 7
			|| month == 8
			|| month == 10
			|| month == 12) {
			if (date < 1 || date > 31) {
				return false;
			}
		}

		// Check 30 day months
		if (	month == 4
			|| month == 6
			|| month == 9
			|| month == 11) {
			if (date < 1 || date > 30) {
				return false;
			}
		}

		// Check February
		if (month == 2 && leapyear == true) {
			if (date < 1 || date > 29) {
				return false;
			}
		} else if (month == 2 && leapyear == false) {
			if (date < 1 || date > 28) {
				return false;
			}
		}
		return true;
	} else {
		// If any aren't selected...
		return false;
	}
}

function isEndDateBeforeStartDate(StartYear, StartMonth, EndYear, EndMonth) {
	if (StartYear != null && StartMonth != null && EndYear != null && EndMonth != null &&
		StartYear != '' && StartMonth != '' && EndYear != '' && EndMonth != '') {

		if (StartMonth < 10) {
			StartDate = StartYear.toString() + '0' + StartMonth.toString();
		} else {
			StartDate = StartYear.toString() + StartMonth.toString();
		}
		if (EndMonth < 10) {
			EndDate = EndYear.toString() + '0' + EndMonth.toString();
		} else {
			EndDate = EndYear.toString() + EndMonth.toString();
		}

		if (EndDate >= StartDate) {
			return false;
		} else {
			return true;
		}
	} else {
		return false;
	}
}

function trim(sString)
{
	while (sString.substring(0,1) == ' ') {
		sString = sString.substring(1, sString.length);
	}
	while (sString.substring(sString.length-1, sString.length) == ' ') {
		sString = sString.substring(0,sString.length-1);
	}
	return sString;
}
