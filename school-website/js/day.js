const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];

const date = new Date();
const dayName = daynames[date.getDay()];
const day = dayName;
document.getElementById("day").textContent = day;