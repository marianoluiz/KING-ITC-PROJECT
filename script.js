const menu = document.querySelector("#nav-text li .menu");
const menuParent = document.querySelector("#nav-text");

function animateIcon() {
  menuParent.classList.toggle("change");
}

menu.addEventListener("click", animateIcon);


window.alert('hello world');

function clickMenu() {
  if (menuParent.className === "menuParentClass") {
    menuParent.className = menuParent.className + "responsive";
  } else {
    menuParent.className = "menuParentClass";
  }
}

