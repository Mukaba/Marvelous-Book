import navLinks from './modules/nav.js';
import keepdata from './modules/datastorage.js';

navLinks();

const form = document.querySelector('[data-form]');
const section = document.querySelector('[data-author-book]');
const author = document.querySelector('[data-author-input]');
const book = document.querySelector('[data-book-input]');

// create an arry to hold all books
let library = keepdata.getStorage();
// display data into html
class display {
  static displayData() {
    const displayData = library.map((item) => `
            <div class="author-books">
              <div class="author-by">
                <h4 class="author-name">${item.inputVal}</h4>
                <span>by</span>
                <h5 class="boock-name">${item.inputVall}</h5>
              </div>
              <button type="button" class="del delete" data-id = ${item.id}>Delete</button>              
            </div>
      `);
    // inject the data into html
    section.innerHTML = (displayData).join('');
  }

  static restoreInput() {
    author.value = '';
    book.value = '';
  }

  static deleteFromStore() {
    section.addEventListener('click', (e) => {
      if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
      }
      const checkId = e.target.dataset.id;
      // delete fully from the native array
      display.deleteFromArray(checkId);
    });
  }

  static deleteFromArray(id) {
    library = library.filter((item) => item.id !== +id);
    keepdata.addToLocalStorage(library);
  }
}

// instance
class InputVal {
  constructor(id, inputVal) {
    this.id = id;
    this.inputVal = inputVal;
    this.inputVall = book.value;
  }
}

// prevent auto refresh when clickimg to the submit button
// generate a random ID to be assign to authors_books
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const id = Math.random() * 500;
  const inputVal = new InputVal(id, author.value, book.value);
  library = [...library, inputVal];
  // console.log(library);
  display.displayData();
  display.restoreInput();
  // delete book-author
  display.deleteFromStore();
  // add to sto
  keepdata.addToLocalStorage(library);
});

window.addEventListener('DOMContentLoaded', () => {
  display.displayData();
  display.deleteFromStore();
});