// iterate through some numbers
// fetch the elements based on numbers
// get the attribute based on those numbers
// perform calculations and write the output

for (let index = 0; index < 17; index++) {
	const item = document.getElementById(index.toString());
	const year = parseInt(item.getAttribute('year'));
	const month = item.getAttribute('month');
	const months = {
		'Jan. ': 1,
		'Feb. ': 2,
		'Mar. ': 3,
		'Apr. ': 4,
		'May. ': 5,
		'Jun. ': 6,
		'Jul. ': 7,
		'Aug. ': 8,
		'Sep. ': 9,
		'Oct. ': 10,
		'Nov. ': 11,
		'Dec. ': 12
	};
	diff_years = new Date().getFullYear() - year;
	diff_months = new Date().getMonth() + 1 - months[month];

	// Add date 
	var tag = document.createElement("p");
	var text = document.createTextNode(month + year);
	item.appendChild(text);

	// Add line break
	item.appendChild(document.createElement("br"));

	// Use some logic to automate printing of time
	var message;
	console.log(diff_years);
	if (diff_years > 1) {
		message = diff_years + ' years ago';
		
	} else if (diff_years == 1 && diff_months >= 0) {
		message = '1 year ago';
		
	} else if (diff_months > 1) {
		message = diff_months + ' months ago';
		
	} else if (diff_months == 1) {
		message = '1 month ago';
	
	} else if (diff_years == 1 && diff_months < 0) {
		message = 12 + diff_months + ' months ago';
	
	} else {
		message = "Recent";
	}
	
	var timeText = document.createTextNode(message); 
	item.appendChild(timeText);

	console.log(diff_years, diff_months, message);

}