var today = new Date();
var hour = today.getHours();
var min = today.getMinutes();
var activity;

if (hour == 8) {
   activity = 'Breakfast and Job';
} else if (hour == 9 && min < 30) {
   activity = 'Scriptures';
} else if (hour == 9 && min >= 30) {
   activity = 'Minecraft';
} else if (hour == 10 && min < 30) {
   activity = 'Minecraft';
} else if (hour == 10 && min >= 30) {
   activity = 'Snack';
} else if (hour == 11) {
   activity = 'Homework / Google Classroom';
} else if (hour == 12 && min < 30) {
   activity = 'Lunch';
} else if (hour == 12 && min >= 30) {
   activity = 'iReady';
} else if (hour == 13) {
   activity = 'Reading';
} else if (hour == 14 && min < 30) {
   activity = 'Exercise / Outside Time';
} else if (hour == 14 && min >= 30) {
   activity = 'Smart / Creative You Tube';
} else if (hour == 15) {
   activity = 'Homework / Google Classroom';
}
    

document.getElementById("activity").textContent = activity;