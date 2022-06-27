// ---------------------- VARIABLES -------------------------- //
const addBtn = document.querySelector('#addBtn');
const title = document.querySelector('#titleId');
const author = document.querySelector('#authorId');
const bookUl = document.querySelector('#books')

// ---------------------- LOCAL STORAGE ---------------------- //

bookUl.addEventListener('input', () => {
  localStorage.setItem('title', `${title.value}`);
  localStorage.setItem('author', `${author.value}`);
});

title.value = localStorage.getItem('nameValue');
author.value = localStorage.getItem('emailValue');

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

// ------------------------ FUNCTIONS ------------------------ //
function BookConstructor(title, author){
  this.title = title;
  this.author = author;
}

function loadBooks(index) {
  //creatingElements
  const bookLi = document.createElement('li');
  const titleP = document.createElement('p');
  const authorP = document.createElement('p');
  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('id', index);
  deleteBtn.setAttribute('class', 'buttons');
  //content inside
  titleP.textContent = booksData[index].title;
  authorP.textContent = booksData[index].author;
  deleteBtn.textContent = 'remove';
  //appendChilds
  bookLi.appendChild(titleP);
  bookLi.appendChild(authorP);
  bookLi.appendChild(deleteBtn);
  bookUl.appendChild(bookLi);

  deleteBtn.addEventListener('click', (e) => {
    booksData.splice(index, 1);
    bookUl.removeChild(bookLi);
  })
}

// ----------------------- EVENT LISTENER ------------------- //

addBtn.addEventListener('click', () => {
  let titleName = title.value;
  let authorName = author.value;
  title.value = '';
  author.value = '';
  let addNewBook = new BookConstructor(titleName, authorName);
  booksData.push(addNewBook);
  loadBooks(booksData.length-1);
})

for(let i = 0; i < booksData.length; i++) {
  loadBooks(i)
}
