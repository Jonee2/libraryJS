// const exampleBook = {
//   bookname: "Design Patterns",
//   author: "Erich Gamma",
//   year: 1994,
//   read: false,
//   getInfo() {
//     return `the book name is ${this.bookname},
//     the author is ${this.author},
//     the year it came out was ${this.year}
//     and ${this.read ? `you have read the book` : `you haven't read the book`}`;
//   },
// };

const myLibrary = [];

function Createbook(
  bookname: string,
  author: string,
  year: number,
  read: boolean
) {
  return {
    bookname: bookname,
    author: author,
    year: year,
    read: read,
    getInfo() {
      return `the book name is ${this.bookname}, 
      the author is ${this.author}, 
      the year it came out was ${this.year} 
      and ${this.read ? `you have read the book` : `you havent read the book`}`;
    },
  };
}

const form = document.querySelector(".form");

form.addEventListener("submit", function (e) {
  e?.preventDefault();

  const input = document.querySelector(".read");
  let bookname = document.querySelector(".name").value;
  let author = document.querySelector(".author").value;
  let year = document.querySelector(".year").value;
  let read = document.querySelector(".read").checked;

  input?.value = "";
  let newBook = Createbook(bookname, author, year, read);
  myLibrary.push(newBook);
  createDiv(bookname, author, year, read);
});

function createDiv(bookname, author, year, read) {
  let div = document.createElement("div");
  document.body.appendChild(div);
  div.className = "bookcard";
  div.innerHTML = `<p>Bookname:</p>
        <p class="pexample">${bookname}</p>
          <p>Author:</p>
          <p class="pexample">${author}</p>
          <p>Year released:</p>
          <p class="pexample">${year}</p>
          <p>Read?</p>
          <input type="checkbox" checked />
          <button type="submit">Remove</button>`;
}
// function displayBooks{
//   for (let i = 0; i < myLibrary.length; i++){

//   }
// }
