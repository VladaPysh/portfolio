AOS.init({
  easing: 'ease',
  duration: 1800,
  once: true
})

const links = document.querySelectorAll("nav a, .landing-page a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

// Shows one page and hides the other two
function showPage(page) {

  // Hide all of the divs:
  document.querySelectorAll('.carousel').forEach(function(div) {
      div.style.display = 'none';
  });

  // Show the div provided in the argument
  document.querySelector(`#${page}`).style.display = 'block';
}

// Wait for page to loaded:
document.addEventListener('DOMContentLoaded', function() {

  // Select all buttons
  if (document.querySelectorAll('.portfolio_item').forEach(function(button) {

      // When a button is clicked, switch to that page
      button.onclick = function() {
          showPage(this.dataset.page);
      }
  }));
});