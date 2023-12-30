const menu = document.querySelector("#nav-text .menu");
const menuParent = document.querySelector("#nav-text");

function animateIcon() {
  menuParent.classList.toggle("change");
  menuParent.classList.toggle("responsive");
  menuParent.classList.toggle("unclicked");
    
  if (menuParent.classList.contains("d-none")) {  setTimeout(() => {
      menuParent.classList.remove("d-none");
    }, 50);
  } else {
    setTimeout(() => {
      menuParent.classList.add("d-none");
    }, 300);
  }
}

menu.addEventListener("click", animateIcon);

function checkForm() {
  const form = document.querySelector('.form');
  const nameInput = form.querySelector('#name');
  const emailInput = form.querySelector('#email');
  const messageInput = form.querySelector('#message');

  if (nameInput.checkValidity() && emailInput.checkValidity() && messageInput.checkValidity()) {
    alert('Thank you for Reaching Out!');;
  } else {
    nameInput.reportValidity();
    emailInput.reportValidity();
    messageInput.reportValidity();
  }
}

function handleSubmit(event) {
  event.preventDefault();
}

window.addEventListener('scroll', reveal);

function reveal() {
  const reveals = document.querySelectorAll('.reveal');

  for ( i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if ( revealTop < windowHeight - revealPoint ) {
      reveals[i].classList.add('active');
    }
    else {
      reveals[i].classList.remove('active');
    }

      const api = document.querySelector('.map');
      const apiTop = api.getBoundingClientRect().top;

      if (apiTop < window.innerHeight - 150) {
        api.classList.add('api-active');
      } else {
        api.classList.remove('api-active');
      }
  }
}

window.addEventListener('DOMContentLoaded',revealsOnLoad);

function revealsOnLoad() {
  const revealsOnLoad = document.querySelectorAll(".revealsOnLoad");

  for ( i = 0; i < revealsOnLoad.length; i++) {

      revealsOnLoad[i].classList.add('activeOL');
  }
}

    // if(revealsOnLoad[i].classList.contains(".revealsOnLoad")) { }