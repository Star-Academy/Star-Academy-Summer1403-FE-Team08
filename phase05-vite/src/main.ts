import "./style.scss";

interface Book {
  name: string;
  image: string;
  genre: string;
  author: string;
  publishData: string;
  price: number;
}

function showError(message: string): void {
  const article = document.querySelector("article") as HTMLElement;
  const messageBox: HTMLElement = document.createElement("div");
  messageBox.className = "message-box";
  messageBox.textContent = message;
  article.appendChild(messageBox);
}

let responseOk: boolean = true;

async function fetchData(): Promise<Book[]> {
  const url: string =
    "https://raw.githubusercontent.com/Star-Academy/codestar-documents/master/static/datasets/books.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      showError(`HTTP error! status: ${response.status}`);
      responseOk = false;
      return [];
    }
    const data: Book[] = await response.json();
    return data;
  } catch (error) {
    showError(`Failed to fetch the JSON file: ${error}`);
    responseOk = false;
    return [];
  }
}

async function renderBooks() {
  const data = await fetchData();
  const article = document.querySelector("article") as HTMLElement;
  if (!data.length && responseOk === true) {
    showError("Sorry, No Books found :(");
    return null;
  }
  data.forEach(function (element: Book) {
    const book = document.createElement("div");
    const descriptionContainer = document.createElement("div");
    const bookName = document.createElement("h3");
    const divider = document.createElement("hr");
    const author = document.createElement("div");
    const price = document.createElement("div");
    const genre = document.createElement("div");
    const publishDate = document.createElement("div");
    const image = document.createElement("img");
    const imageContainer = document.createElement("div");
    const infoContainer = document.createElement("div");
    const authorTitle = document.createElement("p");
    const priceTitle = document.createElement("p");
    const genreTitle = document.createElement("p");
    const dateTitle = document.createElement("p");
    const authorValue = document.createElement("span");
    const priceValue = document.createElement("span");
    const genreValue = document.createElement("span");
    const publishDateValue = document.createElement("span");

    bookName.textContent = element.name;
    authorValue.textContent = element.author;
    priceValue.textContent = `$${element.price}`;
    genreValue.textContent = element.genre;
    publishDateValue.textContent = element.publishData;
    image.src = element.image;
    authorTitle.textContent = "Author : ";
    priceTitle.textContent = "Price : ";
    genreTitle.textContent = "Genre : ";
    dateTitle.textContent = "Publish Date : ";

    descriptionContainer.className = "info";
    bookName.className = "title";
    author.className = "author small-desc";
    price.className = "price small-desc";
    genre.className = "genre small-desc";
    publishDate.className = "date small-desc";
    image.className = "book-image";
    book.className = "book";
    infoContainer.className = "info-container";
    imageContainer.className = "image-container";

    author.append(authorTitle, authorValue);
    price.append(priceTitle, priceValue);
    genre.append(genreTitle, genreValue);
    publishDate.append(dateTitle, publishDateValue);

    imageContainer.appendChild(image);
    book.appendChild(imageContainer);
    descriptionContainer.append(
      bookName,
      divider,
      author,
      price,
      genre,
      publishDate
    );
    infoContainer.appendChild(descriptionContainer);
    book.appendChild(infoContainer);

    article.appendChild(book);
  });
}

renderBooks();
