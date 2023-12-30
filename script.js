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
