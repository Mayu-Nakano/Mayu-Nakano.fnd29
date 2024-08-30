
window.onload = function() {
  displayBooks();
};

//localStorageに保存する！
function saveBook() {

  const title = document.getElementById("bookTitle").value;
  const author = document.getElementById("bookAuthor").value;
  const image = document.getElementById("bookImage").value;
  const wikiLink = document.getElementById("bookWikiLink").value;

  const book = {
    title: title,
    author: author,
    image: image,
    wikiLink: wikiLink
  };

  let books = JSON.parse(localStorage.getItem("books")) || [];

  books.push(book);

  localStorage.setItem("books", JSON.stringify(books));
}


// 書籍情報をリストに表示する！
function displayBooks() {

  const bookList = document.querySelector(".link");

  const books = JSON.parse(localStorage.getItem("books")) || [];

  bookList.innerHTML = "";


  books.forEach(book => {
    const listItem = document.createElement("li");

    listItem.innerHTML = "<a href=\"" + book.wikiLink + "\">" +
    "<div class=\"man\">" +
      "<img src=\"" + book.image + "\" alt=\"\">" +
      "<p>" + book.title + "</p>" +
      "<span>著 " + book.author + "</span>" +
    "</div>" +
  "</a>";


    bookList.appendChild(listItem);

  });
}


document.getElementById("addBookForm").addEventListener("submit",
    function(event) {
    event.preventDefault();
    saveBook();
    displayBooks();
});





