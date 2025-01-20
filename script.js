// Récupération des éléments HTML5
const hero = document.querySelector(".hero");
const text = document.querySelector("h1");

// Création de la constante walk réglé à 500px
const walk = 500;

// Ecoute de l'événment "mousemove" sur la div ayant la classe hero
hero.addEventListener("mousemove", (e) => {
  // Destructuring
  const { offsetWidth: width, offsetHeight: height } = hero;

  // Destructuring
  let { offsetX: x, offsetY: y } = e;

  x += e.target.offsetLeft;
  y += e.target.offsetTop;

  // Coordonnée xWalk
  const xWalk = Math.round((x / width) * walk - walk / 2);
  // Coordonnée yWalk
  const yWalk = Math.round((y / height) * walk - walk / 2);
  console.log(xWalk, yWalk);

  // Création de la text-shadow sur l'élément HTML5 <h1>
  text.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 rgba(238 ,82, 83, 0.7),
        ${xWalk * -1}px ${yWalk}px 0 rgba(52 , 31, 151, 0.7),
        ${yWalk}px ${xWalk * -1}px 0 rgba(243 , 104, 224, 0.7),
        ${yWalk * -1}px ${xWalk}px 0 rgba(254 , 202, 87, 0.7)
    `;
});
