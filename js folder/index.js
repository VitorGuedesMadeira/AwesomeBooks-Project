// ------------------------ DATA ----------------------------- //
const booksData = [
{
  title: 'test',
  author: 'test'
},
{
  title: 'test2',
  author: 'test2'
}
]

const addBtn = document.querySelector('#addBtn');
const title = document.querySelector('#titleId');
const author = document.querySelector('#authorId');
const bookUl = document.querySelector('#books')

function BookConstructor(title, author){
  this.title = title;
  this.author = author;
}

function loadBooks(index) {
  const bookLi = document.createElement('li');
  const titleP = document.createElement('p');
  const authorP = document.createElement('p');
  const deleteBtn = document.createElement('button');

  titleP.textContent = booksData[index].title;
  authorP.textContent = booksData[index].author;
  deleteBtn.textContent = 'remove';

  bookLi.appendChild(titleP);
  bookLi.appendChild(authorP);
  bookLi.appendChild(deleteBtn);
  bookUl.appendChild(bookLi);
}

// ----------------------- event listener ------------------- //

addBtn.addEventListener('click', () => {
  let titleName = title.value;
  let authorName = author.value;
  title.value = '';
  author.value = '';
  let addNewBook = new BookConstructor(titleName, authorName);
  booksData.push(addNewBook);

  loadBooks(booksData.length - 1)
})

for (let i = 0; i < booksData.length; i++) {
  loadBooks(i)
}