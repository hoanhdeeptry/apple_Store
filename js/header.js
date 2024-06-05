const menu_list = document.getElementById("list");
const search = document.getElementById("search");
const res_nav = document.querySelector(".respo-nav");
const menu_search = document.getElementById("menu_search");
const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

let isMenuSearchOpen = false;

function toggleMenuSearch() {
  isMenuSearchOpen = !isMenuSearchOpen;

  if (isMenuSearchOpen) {
    overlay.animate(
      { transform: 'translateY(0)' },
      { duration: 500, fill: 'forwards' }
    );
    menu_search.animate(
      { transform: 'translateY(0)' },
      { duration: 500, fill: 'forwards' }
    );
  } else {
    overlay.animate(
      { transform: 'translateY(-200%)' },
      { duration: 500, fill: 'forwards' }
    );
    menu_search.animate(
      { transform: 'translateY(-100%)' },
      { duration: 500, fill: 'forwards' }
    );
  }
}

menu_list.addEventListener("click", function() {
  res_nav.style.display = "flex";
});

search.addEventListener("click", toggleMenuSearch);


menu_search.addEventListener("mouseleave", function() {

  if (isMenuSearchOpen) {
    toggleMenuSearch();
  }
  
});