/* eslint-disable max-classes-per-file */

// ------------------------ VARIABLES -------------------------- //
const addBtn = document.querySelector('#addBtn');
const title = document.querySelector('#titleId');
const author = document.querySelector('#authorId');
const error = document.querySelector('#error');
const bookUl = document.querySelector('#books');

// -------------------------- DATA ----------------------------- //
class BooksDataClass {
  constructor() {
    return [];
  }
}
let booksData = new BooksDataClass();

// ------------------- CLASSES/FUNCTIONS ----------------------- //
class BookConstructor {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class Dynamic {
  static loadBooks(index) {
    // creatingElements
    const bookLi = document.createElement('li');
    const titleP = document.createElement('p');
    const authorP = document.createElement('p');
    const deleteBtn = document.createElement('button');
    // content inside
    titleP.textContent = `"${booksData[index].title}"`;
    authorP.textContent = `by ${booksData[index].author}`;
    deleteBtn.textContent = 'Remove';
    // div for title and author
    const divTitleAndAuthor = document.createElement('div');
    // appendChilds
    divTitleAndAuthor.appendChild(titleP);
    divTitleAndAuthor.appendChild(authorP);
    bookLi.appendChild(divTitleAndAuthor);
    bookLi.appendChild(deleteBtn);
    bookUl.appendChild(bookLi);
    // giving classes
    bookLi.setAttribute('class', 'liStyles');
    deleteBtn.setAttribute('id', index);
    deleteBtn.setAttribute('class', 'buttons');
    divTitleAndAuthor.setAttribute('class', 'displayFlex');

    deleteBtn.addEventListener('click', () => {
      booksData.splice(index, 1);
      bookUl.removeChild(bookLi);
      localStorage.setItem('books', JSON.stringify(booksData));
    });
  }
}

// ------------------------ VALIDATIONS ----------------------------- //

const showmessage = (test, msg) => {
  if (test) {
    error.textContent = msg;
    return test;
  }
  error.textContent = msg;
  return test;
};

const validations = (input, msg, input2, msg2) => {
  if (input.trim() === '') {
    return showmessage(false, msg);
  } if (input2.trim() === '') {
    return showmessage(false, msg2);
  }
  return showmessage(true, '');
};

// ----------------------- EVENT LISTENER ------------------- //

addBtn.addEventListener('click', () => {
  const titleName = title.value;
  const authorName = author.value;
  const titleMsg = 'title space is in blank';
  const authorMsg = 'author space is in blank';

  if (validations(titleName, titleMsg, authorName, authorMsg)) {
    const addNewBook = new BookConstructor(titleName, authorName);
    booksData.push(addNewBook);
    Dynamic.loadBooks(booksData.length - 1);
    localStorage.setItem('books', JSON.stringify(booksData));
    title.value = '';
    author.value = '';
  }
});

// ---------------------- LOCAL STORAGE ---------------------- //

window.addEventListener('load', () => {
  if (localStorage.getItem('books')) {
    booksData = JSON.parse(localStorage.getItem('books'));
  }
  for (let i = 0; i < booksData.length; i += 1) {
    Dynamic.loadBooks(i);
  }
});

// ------------------------ DATE ----------------------------- //
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const dateP = document.querySelector('.dateParagraph');
const date = new Date();
dateP.textContent = `${months[date.getMonth()]} ${date.getDate()}  ${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`;
