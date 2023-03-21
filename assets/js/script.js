const form = document.querySelector('[data-form]');
const section = document.querySelector('[data-author-book]');
const author = document.querySelector('[data-author-input]');
const book = document.querySelector('[data-book-input]');

// create an arry to hold all books
let library = [];

// prevent auto refresh when clickimg to the submit button
// generate a random ID to be assign to authors_books
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let id = Math.random() * 500;
  const inputVal = new InputVal(id, author.value, book.value);
  library = [...library, inputVal];
  // console.log(library);
  display.displayData();
});

// objeck instance
class InputVal {
  constructor(id, inputVal){
    this.id = id;
    this.inputVal = inputVal;
    this.inputVall = book.value;
  }
}
// display data into html
class display {
  static displayData(){
    let displayData = library.map((item) => {
      return `
            <div class="author-books">
              <h4 class="author-name">${item.inputVal}</h4>
              <h5 class="boock-name">${item.inputVall}</h5>
              <small class="delete">Delete</small>
              <hr>
            </div>
      `
    });
    // inject the data into html
    section.innerHTML = (displayData).join("");
  }
}

