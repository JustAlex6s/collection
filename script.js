
const collection = [
    //1
    {
      name: "Get Out (2017)",
      director: "Jordan Peele",
      picture: "./images/get-out.jpeg",
      genre: ["Horreur", "Mystère", "Thriller"],
      synopsis:["Chris, un jeune homme noir, découvre des secrets terrifiants lors de sa visite à la maison de campagne de la famille de sa petite amie blanche."],
      note: [
        "4/5",
        "3,5/5",
      ],
      trailer: "https://www.youtube.com/watch?v=DzfpyUB60YY",
    },
    //2
    {
        name: "The Witch (2015)",
        director: "Robert Eggers",
        picture: "images/the-witch.webp",
        genre: ["Horreur", "Mystère"],
        synopsis:["Dans la Nouvelle-Angleterre du XVIIe siècle, une famille est confrontée à des forces maléfiques vivant dans les bois au-delà de leur ferme."],
        note: [
          "3/5",
          "3/5",
        ],
        trailer: "https://www.youtube.com/watch?v=iQXmlf3Sefg",
      },
      //3
      {
        name: "Hereditary (2018)",
        director: "Ari Aster",
        picture: "images/hereditary.jpeg",
        genre: ["Horreur", "Mystère", "Drame"],
        synopsis:["La famille Graham découvre des secrets sombres après la mort de leur grand-mère, déclenchant des événements terrifiants."],
        note: [
          "2/5",
          "2/5",
        ],
        trailer: "https://www.youtube.com/watch?v=V6wWKNij_1M",
      },
    //4
    {
        name: "It Follows (2014)",
        director: "David Robert Mitchell",
        picture: "images/it-follow.jpeg",
        genre: ["Horreur", "Mystère", "Thriller"],
        synopsis:["Après un acte sexuel, Jay est poursuivie par une entité surnaturelle qui ne s'arrête que si elle transmet la malédiction à quelqu'un d'autre."],
        note: [
          "1/5",
          "1/5",
        ],
        trailer: "https://www.youtube.com/watch?v=AsoUG9ScJnc",
      },
      //5
      {
        name: "A Quiet Place (2018)",
        director: "John Krasinski",
        picture: "images/quiet-place.jpeg",
        genre: ["Horreur", "Drame", "Sci-Fi"],
        synopsis:["Une famille doit survivre dans un monde où des créatures mortelles chassent au son, forçant les survivants à vivre dans un silence total."],
        note: [
          "2/5",
          "2/5",
        ],
        trailer: "https://www.youtube.com/watch?v=WR7cc5t7tv8",
      },
      //6
      {
        name: "The Babadook (2014)",
        director: "Jennifer Kent",
        picture: "images/babadook.webp",
        genre: ["Horreur", "Drame"],
        synopsis:["Une mère et son fils sont hantés par une présence sinistre qui émerge d'un livre pour enfants intitulé : The Babadook."],
        note: [
          "2/5",
          "2/5",
        ],
        trailer: "https://www.youtube.com/watch?v=k5WQZzDRVtw",
      },
      //7
      {
        name: "The Conjuring (2013)",
        director: "James Wan",
        picture: "images/conjuring.jpeg",
        genre: ["Horreur", "Mystère", "Thriller"],
        synopsis:["Les enquêteurs paranormaux Ed et Lorraine Warren aident une famille terrorisée par une présence maléfique dans leur ferme isolée."],
        note: [
          "2/5",
          "2/5",
        ],
        trailer: "https://www.youtube.com/watch?v=k10ETZ41q5o",
      },
      //8
      {
        name: "Midsommar (2019)",
        director: "Ari Aster",
        picture: "images/midsommar.jpeg",
        genre: ["Horreur", "Mystère", "Drame"],
        synopsis:["Un couple en deuil se rend en Suède pour participer à un festival estival qui se révèle être une compétition pour le rituel de recueillement le plus sinistre."],
        note: [
          "2/5",
          "2/5",
        ],
        trailer: "https://www.youtube.com/watch?v=1Vnghdsjmd0",
      },
      //9
      {
        name: "The Shining (1980)",
        director: "Stanley Kubrick",
        picture: "images/shining.jpeg",
        genre: ["Horreur", "Drame"],
        synopsis:["Une famille devient gardienne d'un hôtel isolé en hiver, mais les forces surnaturelles et l'isolement conduisent à la folie."],
        note: [
          "2/5",
          "2/5",
        ],
        trailer: "https://www.youtube.com/watch?v=S014oGZiSdI",
      },
      //10
      {
        name: "Psycho (1960)",
        director: "Alfred Hitchcock",
        picture: "images/psycho.jpeg",
        genre: ["Horreur", "Mystère", "Thriller"],
        synopsis:["Marion Crane vole de l'argent et trouve refuge dans un mystérieux motel dirigé par Norman Bates, déclenchant une série d'événements terrifiants."],
        note: [
          "3/5",
          "3/5",
        ],
        trailer: "https://www.youtube.com/watch?v=DTJQfFQ40lI",
      },

  ];

//HEADER
  let myheader = document.getElementById('myheader'); 
  myheader.className = 'header';
  
  let mySecondheader = document.getElementById('mySecondheader'); 
  mySecondheader.className = 'headerSecond';
  

  let h1 = document.createElement('h1'); 
  h1.className = 'h1-lien';
  h1.textContent = 'Vous voulez vous faire une petite fraiyeur ?';

  let imgmoi = document.createElement('img');
  imgmoi.src = "/Users/alexisdelfosse/collection/images/profillinkedin.jpeg";
  imgmoi.className = 'image-moi';

  let mypara = document.createElement('p'); 
  mypara.className = 'my-para';
  mypara.textContent = 'Vous trouverez ci-desssous ma collection de film horrifique ! Avec les films vous ferez les meilleurs cauchemars... Consultez mes projets Github et contactez moi si vous avez une question.';

  let boxheader = document.getElementById('boxheader'); 
  boxheader.appendChild(myheader);
  myheader.appendChild(imgmoi);
  mySecondheader.appendChild(h1);
  mySecondheader.appendChild(mypara);

  //BODY
  
 
  let section = document.getElementById('card-container'); 

for (let elem of collection) {
    let div = document.createElement('div');
    div.className = 'card';

    let croix = document.createElement('button');
    croix.className ='card__croix';
    croix.textContent = 'X';

    div.appendChild(croix);

  
    let divimg = document.createElement('div');
    divimg.className = 'card__image';
  
    let img = document.createElement('img');
    img.src = elem.picture;
    img.className = 'desktop-image';
  
    divimg.appendChild(img);
  
    let h2 = document.createElement('h2');
    h2.className = 'card__genre';
    h2.textContent = elem.genre.join(', ');
  
    let h3 = document.createElement('h3');
    h3.className = 'card__title';
    h3.textContent = elem.name;
  
    let h4 = document.createElement('h4');
    h4.className = 'card__author';
    h4.textContent = elem.director;
  
    let p = document.createElement('p');
    p.className = 'card__synopsis';
    p.textContent = elem.synopsis;
  
    let divnote = document.createElement('div');
    divnote.className = 'card__note';
  
    let divnoteFirst = document.createElement('div');
    divnoteFirst.className = 'card__note__first';
    divnoteFirst.textContent = `Note des spectateurs ${elem.note[0]}`;
  
    let divnoteSecond = document.createElement('div');
    divnoteSecond.className = 'card__note__second';
    divnoteSecond.textContent = `Note de la presse ${elem.note[1]}`;
  
    divnote.appendChild(divnoteFirst);
    divnote.appendChild(divnoteSecond);
  
    let divlien = document.createElement('div');
    divlien.className = 'card__lien';
  
    let button = document.createElement('a');
    button.href = elem.trailer;
    button.textContent = 'Voir la bande-annonce';
  
    divlien.appendChild(button);
  
    div.appendChild(divimg);
    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(p);
    div.appendChild(divnote);
    div.appendChild(divlien);
  
    section.appendChild(div);
   
}

function supprimerCarte() {
    // Obtenez le parent (la carte) du bouton
    let carte = this.parentNode;
  
    // Supprimez la carte 
    carte.parentNode.removeChild(carte);
  }
  
  // Ajouter un gestionnaire d'événements à tous les boutons avec la classe "card__croix"
  document.querySelectorAll('.card__croix').forEach(function(button) {
    button.addEventListener('click', supprimerCarte);
  });