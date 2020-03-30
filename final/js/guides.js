const requestURL = 'https://kendraanderson.github.io/final/json/guides.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const guides = jsonObject['guides']; 

   for (let x = 0; x < guides.length; x++ ) {
     let section = document.createElement('section');
     let name = document.createElement('h2');
     let age = document.createElement('p');
     let cert = document.createElement('p');
     let xp = document.createElement('p');
     let email = document.createElement('p');
     let bio = document.createElement('p');
     let image = document.createElement('img');

     name.textContent = guides[x].name;
     age.textContent = 'Age: ' + guides[x].age;
     cert.textContent = 'Certifications: ' + guides[x].certification;
     xp.textContent = 'Years Experience: ' + guides[x].experience;
     email.textContent = guides[x].email;
     bio.textContent = guides[x].biography;

     image.setAttribute('src', guides[x].photo);
     image.setAttribute('alt', guides[x].name);

     section.appendChild(name);
     section.appendChild(age);
     section.appendChild(cert);
     section.appendChild(xp);
     section.appendChild(email);
     section.appendChild(bio);
     section.appendChild(image);
      
     document.querySelector('div.guides').appendChild(section);
    }
   });

