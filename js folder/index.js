// ------------------------ DATA ----------------------------- //
const booksData = []

function BookConstructor(title, author){
  this.title = title;
  this.author = author;
}

const addBtn = document.querySelector('#addBtn');
const title = document.querySelector('#titleId');
const author = document.querySelector('#authorId');

addBtn.addEventListener('click', () => {
  let titleName = title.value;
  let authorName = author.value;
  let addNewBook = new BookConstructor(titleName, authorName);
  booksData.push(addNewBook);
})