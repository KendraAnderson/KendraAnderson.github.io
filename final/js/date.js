const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

const today = new Date();

const month = months[today.getMonth()];
const year = today.getFullYear();
const date = month + " " + today.getDate() +", " + year;
document.getElementById("date").textContent = date;