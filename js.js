const header=document.querySelector("header");

window.addEventListener("scroll",function(){
  header.classList.toggle("sticky",window.scrollY > 0);
});
// Get the "Home" and "Contact" elements by their IDs
const home = document.getElementById('home');
const contact = document.getElementById('contact');

// Add click event listeners to the elements
homeLink.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default behavior of the anchor tag (avoiding page refresh)

  // Change the URL to the desired home page URL
  window.location.href = 'path/to/home';
});

contactLink.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default behavior of the anchor tag (avoiding page refresh)

  // Change the URL to the desired contact page URL
  window.location.href = 'path/to/contact';
});

// Get the "Home" and "Contact" elements by their IDs
const about = document.getElementById('about');
const portfolio = document.getElementById('portfolio');

// Add click event listeners to the elements
homeLink.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default behavior of the anchor tag (avoiding page refresh)

  // Change the URL to the desired home page URL
  window.location.href = 'path/to/about';
});

contactLink.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default behavior of the anchor tag (avoiding page refresh)

  // Change the URL to the desired contact page URL
  window.location.href = 'path/to/portfolio';
});
