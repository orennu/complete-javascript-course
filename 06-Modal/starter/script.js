'use strict';

/*
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

// selecting all elements with selector
const btnsShowModal = document.querySelectorAll('.show-modal');

// this will print the NodeList of matching elements
console.log(btnsShowModal);

// iterate over elements in NodeList
for (let i = 0; i < btnsShowModal.length; i++) {
  console.log(btnsShowModal[i].textContent);
}
*/

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// adding global event listener since keyboard events are not specific to one element
// if we want to see the event object passed to the handler function of the event listener, we can define a parameter and log it inside the handler. JavaScript will pass the event object as argument to our handler function
/*
document.addEventListener('keydown', function (event) {
  console.log(event.key);

  if (event.key === 'Escape') console.log('Esc was pressed');
});
*/

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
