

//navigation section
const nav = document.getElementById('nav');


// title section

let heading = document.querySelector("h1");
console.log(heading);



let subheading = document.querySelector("h2");
console.log(heading);

subheading.style.fontStyle = "italic";

// footer section
let heading4 = document.querySelector("h4");
console.log(heading4);

heading4.setAttribute("id", "heading4");
heading4.style.color = "purple";

const footer = document.querySelector('footer');

window.addEventListener('scroll', () => {
  if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
    footer.classList.add('show');
  } else {
    footer.classList.remove('show');
  }
});