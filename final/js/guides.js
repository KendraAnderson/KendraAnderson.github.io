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
     let info = document.createElement('div');
     let pic = document.createElement('div');
     let name = document.createElement('h2');
     let age = document.createElement('h4');
     let cert = document.createElement('h4');
     let xp = document.createElement('h4');
     let email = document.createElement('h4');
     let bio = document.createElement('p');
     let image = document.createElement('img');

     info.className = "guide-info";
     pic.classname = "guide-pic";
     name.textContent = guides[x].name;
     age.textContent = 'Age: ' + guides[x].age;
     cert.textContent = 'Certifications: ' + guides[x].certification;
     xp.textContent = 'Years Experience: ' + guides[x].experience;
     email.textContent = guides[x].email;
     bio.textContent = guides[x].biography;
     image.setAttribute('src', guides[x].photo);
     image.setAttribute('alt', guides[x].name);

     info.appendChild(name);
     info.appendChild(age);
     info.appendChild(cert);
     info.appendChild(xp);
     info.appendChild(email);
     info.appendChild(bio);
     pic.appendChild(image);
     section.appendChild(info);
     section.appendChild(pic);
      
     document.querySelector('div.guides').appendChild(section);
    }
   });

