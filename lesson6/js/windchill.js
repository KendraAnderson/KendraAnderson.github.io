let temp = parseFloat(document.getElementById('temp').innerHTML);
let speed = parseFloat(document.getElementById('speed').innerHTML);
if (temp > 50 || speed < 3.0) {
   document.getElementById('windchill').innerHTML = "N/A";
} else {
   let chill = 35.74 + (0.6215 * temp) - (35.75 * speed**0.16) + 
   (0.4275 * (temp * speed**0.16));
   document.getElementById('windchill').innerHTML = chill.toFixed(0);
}