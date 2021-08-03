// Scroll To Top Button

const scrollToTopButton = document.getElementById('js-top');

const scrollFunc = () => {
  let y = window.scrollY; 
  if (y > 0) {
    scrollToTopButton.className = "top-link show";
  } else {
    scrollToTopButton.className = "top-link not-show";
  }
};


window.addEventListener("scroll", scrollFunc);


const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {   window.requestAnimationFrame(scrollToTop);
              window.scrollTo(0, c - c / 30);
  }
};


scrollToTopButton.onclick = function(e) {
  e.preventDefault();
  scrollToTop();
}