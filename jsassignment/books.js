
const booksContainer = document.getElementById("books");
const storedData = JSON.parse(localStorage.getItem("book1"));

if (storedData) {
    
    // const bookInfo = document.createElement("div");
    booksContainer.innerHTML = `
        <div>
        <p><strong >Category</strong> <span class = "book">:${storedData.category}</span></p>
        <p><strong >Book Name</strong> <span class = "book">:${storedData.book}</span></p>
        <p><strong >Email</strong> <span class = "book">:${storedData.email}</span></p>
        <p><strong >Author Name</strong> <span class = "book">:${storedData.name}</span></p>
        <p><strong >Published date</strong> <span class = "book">:${storedData.published}</span></p>
        <p><strong >Price</strong> <span class = "book">:${storedData.price}</span></p>
        </div>
    `;

    // booksContainer.appendChild(bookInfo);
}
