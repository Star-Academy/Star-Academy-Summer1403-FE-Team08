async function fetchData() {
    const url = 'https://raw.githubusercontent.com/Star-Academy/codestar-documents/master/static/datasets/books.json';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch the JSON file:', error);
    }
}

(async () => {
    const data = await fetchData();
    renderBooks(data)
})();


function renderBooks (data) {
    const article = document.querySelector('article');
    data.forEach(element => {
        const book = document.createElement('div');
        const title = document.createElement('h3');
        const author = document.createElement('p');
        const image = document.createElement('img');

        title.innerText = element.name;
        author.innerText = element.author;
        image.src = element.image;
        
        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(image);

        article.appendChild(book);

    });
}