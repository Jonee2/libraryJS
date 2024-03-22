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
const button = document.querySelector(".addbutton");

button.addEventListener("click", function (e) {
  e?.preventDefault();

  const input = document.querySelector("input");
  const bookname = document.querySelector(".name").value;
  const author = document.querySelector(".author").value;
  const year = document.querySelector(".year").value;
  const read = document.querySelector(".read").checked;

  input?.value = "";
  let newBook = Createbook(bookname, author, year, read);
  myLibrary.push(newBook);
  createDiv(bookname, author, year, read);
});

function createDiv(bookname, author, year, read) {
  const div = document.createElement("div");
  const main = document.querySelector("main");
  main.appendChild(div);
  div.className = "mainbookcard";
  div.innerHTML = `
        <p>Bookname:</p>
          <p class="pexample">${bookname}</p>
          <p>Author:</p>
          <p class="pexample">
            ${author}
          </p>
          <p>Year released:</p>
          <p class="pexample">${year}</p>
          <p>Read?</p>
          <input class="read" type="checkbox" name="read" value="${read}" />
          <button class="removebtn" onclick="removeDiv(this)">Remove</button>
        `;
}

const removebtn = document.querySelector(".removebtn");
const bookdiv = document.querySelector(".mainbookcard");
const removebtn1 = document.querySelector(".removebtn1");
function removeDiv(bookdiv) {
  bookdiv?.parentNode.remove(this);
}

removebtn1?.addEventListener("click", () => {
  bookdiv?.remove();
});
