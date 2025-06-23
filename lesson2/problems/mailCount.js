/*
input: string of email data
output: number of email messages in the string, date range of the email messages
	string? : number and range of numbers?

Rules:
	- multiple email messages are in the string
	- delimited by ##||##
	- Every email message has 5 parts:
		- Sender, Subject, Date, Recipient, Body
	- They occur in this sequence.
	- Each part is delimited by #/#

	total number of emails, total length.
	date range, filter the dates into their own array, then sort them, take the min (first) and
		max(last)
	.includes 'Date:'

Data Structures:
	split by ##||##, which gives an array of all the emails. Take this length for the total email count.
	
	map the array by another split => subarray of different parts, split by #/#
	filter and take a Date string [Date: Date Object] => map by newDate.

	map => create new Date to today, for each item in the array, make the date object reassign to the Date
	. return that for each callback iteration.

Algo:
	split the email into an array, split by ##||##. array of emails. Take the count, this is the
		email number
	Map this array and split by #/#, the different sections of the emails. Array of subarrays
	map the array again, this time creating a date obj.
	iterate over the subarray, setting the date var equal to a new date with teh string if it matches
	Date:
	sort the array by ascending order. the min is the first value, the max is the last.
*/

const dayNames = [
  "Sunday", "Monday", "Tuesday", "Wednesday",
  "Thursday", "Friday", "Saturday"
];

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


function emailDates(emails) {
	emails = emails.map(email => email.split('#/#'));

	let emailData = emails.map(email => {
		let date = new Date;

		email.forEach(data => {
			if (data.match(/Date:/)) {
				date = new Date(data);
			}
		})

		return date;
	})

	return emailData.sort((date1, date2) => date1 - date2);
}

function formatDate(date) {
	const day = dayNames[date.getDay()];
	const month = monthNames[date.getMonth()];
	const num = date.getDate();
	const year = date.getFullYear();

	return `${day} ${month} ${num} ${year}`
}

function mailCount(emailData) {
  let emails = emailData.split('##||##');
	const emailCount = emails.length;
	const dates = emailDates(emails);

	const [minDate, maxDate] = [dates[0], dates[dates.length - 1]];

	console.log(`Count of Email: ${emailCount}`);
	console.log(`Date Range: ${formatDate(minDate)} - ${maxDate}`);
}

mailCount(emailData);

// console output

// Count of Email: 5
// Date Range: Sat Jun 25 2016 - Thu Aug 11 2016