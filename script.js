const menu = document.querySelector("#nav-text .menu");
const menuParent = document.querySelector("#nav-text");

function animateIcon() {
  menuParent.classList.toggle("change");
  menuParent.classList.toggle("responsive");
  menuParent.classList.toggle("unclicked");
}

menu.addEventListener("click", animateIcon);



/* 
function clickMenu() {
  if (menuParent.className === "menuParent") {
    menuParent.className = menuParent.className + " responsive";
    // x.className += " responsive";
  } else {
    menuParent.className = "menuParent";
  }
} 
doesnt work idk why it always else here
*/