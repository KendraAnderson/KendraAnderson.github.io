var today = new Date();
var hour = today.getHours();
var min = today.getMinutes();
var activity;
var upcoming;

if (hour == 8) {
   activity = 'Breakfast and Job 8:00 - 9:00';
   upcoming = 'Next: Scriptures';
} else if (hour == 9 && min < 30) {
   activity = 'Brush Teeth / Scriptures / Pray 9:00 - 9:30';
   upcoming = 'Next: MineCraft';
} else if (hour == 9 && min >= 30) {
   activity = 'Minecraft 9:30 - 10:30';
   upcoming = 'Next: MineCraft';
} else if (hour == 10 && min < 30) {
   activity = 'Minecraft 9:30 - 10:30';
   upcoming = 'Next: Snack';
} else if (hour == 10 && min >= 30) {
   activity = 'Snack 10:30 - 11:00';
   upcoming = 'Next: Homework';
} else if (hour == 11) {
   activity = 'Homework / Google Classroom 11:00 - 12:00';
   upcoming = 'Next: Lunch';
} else if (hour == 12 && min < 30) {
   activity = 'Lunch 12:00 - 12:30';
   upcoming = 'Next: iReady';
} else if (hour == 12 && min >= 30) {
   activity = 'iReady 12:30 - 1:00';
   upcoming = 'Next: Reading';
} else if (hour == 13) {
   activity = 'Reading 1:00 - 2:00';
   upcoming = 'Next: Exercise';
} else if (hour == 14 && min < 30) {
   activity = 'Exercise / Outside Time 2:00 - 2:30';
   upcoming = 'Next: Creativity';
} else if (hour == 14 && min >= 30) {
   activity = 'Smart / Creative You Tube 2:30 - 3:00';
   upcoming = 'Next: Homework';
} else if (hour == 15) {
   activity = 'Homework / Google Classroom 3:00 - 4:00';
   upcoming = 'Done';
}
    

document.getElementById("activity").innerHTML = activity;
document.getElementById("upcoming").textContent = upcoming;