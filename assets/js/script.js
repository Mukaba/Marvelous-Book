const form = document.querySelector('[data-form]');
const section = document.querySelector('[data-author-book]');
const author = document.querySelector('[data-author-input]');
const book = document.querySelector('[data-book-input]');

// create an arry to hold all books
let library = [];
// display data into html
class display {
  static displayData() {
    const displayData = library.map((item) => `
            <div class="author-books">
              <h4 class="author-name">${item.inputVal}</h4>
              <h5 class="boock-name">${item.inputVall}</h5>
              <button type="button" class="del delete" data-id = ${item.id}>Delete</button>
              <hr>
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
});
