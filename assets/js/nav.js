const listbtn = document.querySelector('[data-link-list]');
const newbtn = document.querySelector('[data-link-new]');
const contactbtn = document.querySelector('[data-link-contact]');
const bookssection = document.querySelector('[data-books-section]');
const formsection = document.querySelector('[data-form]');
const contactsection = document.querySelector('[data-contact-section]');

listbtn.addEventListener('click', ()=> {
  bookssection.classList.remove('hide');
  formsection.classList.remove('active');
  contactsection.classList.remove('active');
});
newbtn.addEventListener('click', ()=> {
  bookssection.classList.add('hide');
  formsection.classList.add('active');
  contactsection.classList.remove('active');
});
contactbtn.addEventListener('click', ()=> {
  formsection.classList.remove('active');
  contactsection.classList.add('active');
  bookssection.classList.add('hide');
})