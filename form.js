function submitForm() {
	var form = document.getElementById("request");
	
	if (!validateForm(form)) {
		alert("Invalid Form");
		return;
	}
	
	var day = parseInt(form.day.value);
	var firstname = form.firstname.value;
	var lastname = form.lastname.value;
	var tutors = form.tutors.value;
	var date = new Date();
	var dayWeek = parseInt(date.getDay());
	var dayMonth = parseInt(date.getDate());
	var month = parseInt(date.getMonth());
	var year = parseInt(date.getYear()) + 1900;
	
	if (day < dayWeek) {
		day += 7;
	}
	dayMonth += day - dayWeek - 1;

	if (dayMonth > 30 && (month === 3 || month === 5 || month === 8 || month === 10)) {
		dayMonth -= 30;
		month++;
	} else if (dayMonth > 29 && month === 1 && year % 4 === 0){
		dayMonth -= 29;
		month++;
	} else if (dayMonth > 28 && month === 1) {
		dayMonth -= 28;
		month++;
	} else if (dayMonth > 31 && month === 11) {
		daysMonth -= 31;
		month = 0;
		year++;
	} else if (dayMonth > 31) {
		dayMonth -= 31;
		month++;
	}
	
	dayMonth++;
	month++;
	
	if (day > 6) {
		day -= 7;
	}
	
	switch(day) {
	case 0:
		day = "Sunday";
		break;
	case 1:
		day = "Monday";
		break;
	case 2:
		day = "Tuesday";
		break;
	case 3:
		day = "Wednesday";
		break;
	case 4:
		day = "Thursday";
		break;
	case 5:
		day = "Friday";
		break;
	case 6:
		day = "Saturday";
		break;
	}
	
	alert(tutors + " requested successsfully by " + firstname + " " + lastname + " for " + day + " " + month + "/" + dayMonth + "/" + year); 
}

function validateForm(form) {
	var firstname = form.firstname.value;
	var lastname = form.lastname.value;
	var tutors = form.tutors.value;
	
	if (firstname !== "" && lastname !== "" && (tutors === "Bernie Sanders" || tutors === "Hillary Clinton" || tutors === "Donald Trump" || tutors === "Chris Christie")) {
		return true;
	} else {
		return false;
	}
}