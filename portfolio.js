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

document.body.onclick = function() {
  document.querySelector("#carouselPortfolio").style.display = "none";
};

document.querySelector("#portfolio_item_1").addEventListener("click", function(){
  document.querySelector("#carouselPortfolio").style.display = "block";
});

var els = document.querySelectorAll("#carouselPortfolio, #portfolio_item_1");
// When clicking on these elements don't hide the popup
for (var i = 0; i < els.length; i++) {
  els[i].addEventListener("click", function(e) {
    e.stopPropagation();
  });
}
