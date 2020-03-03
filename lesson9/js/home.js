const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const towns = jsonObject['towns']; 

   for (let i = 0; i < towns.length; i++ ) {
     if (towns[i].name == "Fish Haven" ||
         towns[i].name == "Preston" ||
         towns[i].name == "Fish Haven") 
      {
         let card = document.createElement('section');
         let name = document.createElement('h2');
         let motto = document.createElement('h3');
         let year = document.createElement('p');
         let pop = document.createElement('p');
         let rain = document.createElement('p');
         let image = document.createElement('img');

         name.textContent = towns[i].name;
         motto.textContent = towns[i].motto;
         year.textContent = 'Year Founded: ' + towns[i].year;
         pop.textContent = 'Population: ' + towns[i].pop;
         rain.textContent = 'Annual Rain Fall: ' + towns[i].rain;
         image.setAttribute('src', towns[i].imageurl);
         image.setAttribute('alt', 'Barn');

         card.appendChild(name);
         card.appendChild(motto);
         card.appendChild(year);
         card.appendChild(pop);
         card.appendChild(rain);
         card.appendChild(image);
      
         document.querySelector('div.cards').appendChild(card);
   });