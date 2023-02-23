const button = document.querySelector('#menu-button');
const menu = document.querySelector('#mobile-menu');
const closebtn = document.querySelector('#menu-close');
button.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    closebtn.classList.toggle('hidden');
    button.classList.toggle('hidden');
});
closebtn.addEventListener('click', () => {
    menu.classList.add('hidden');
    closebtn.classList.toggle('hidden');
    button.classList.toggle('hidden');
});