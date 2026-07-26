const myLibrary = []
const libraryContainer = document.getElementById("library-container")
const newBookForm = document.getElementById("form-popup")
const newBook = document.getElementById("new-book")
const body = document.querySelector("body")
function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor")
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
    this.info = function info() {
        if (this.read === "read") {
            console.log(`${this.title} by ${this.author}, ${this.pages} pages, read.`)
            bo
        }
        else if (this.read === "unread") {
            console.log(`${this.title} by ${this.author}, ${this.pages} pages, not read yet.`)
        }
        else {throw Error("The read parameter must be written either as 'read' or 'unread'")}
    }

}

function addBookToLibrary(object) {
    myLibrary.push(object)
    return myLibrary
}

function updateBookDisplay(list) {
    libraryContainer.replaceChildren()
    for (i = 0; i < list.length; i++) {
        const bookCard = document.createElement("p")
        const bookTitle = document.createElement("p")
        const bookAuthor = document.createElement("p")
        const bookPages = document.createElement("p")
        const bookStatus = document.createElement("p")
        const remove = document.createElement("button")
        const changeStatus = document.createElement("button")
        bookCard.classList.add("card")
        bookTitle.classList.add("card-title")
        bookAuthor.classList.add("card-text")
        bookPages.classList.add("card-text")
        bookStatus.classList.add("card-text")
        remove.classList.add("remove")
        console.log(list[i])
        changeStatus.classList.add("change-status")
        bookTitle.textContent = `${list[i].title}`
        bookAuthor.textContent =  `Author: ${list[i].author}`
        bookPages.textContent = `Pages: ${list[i].pages}`
        bookStatus.textContent = `Status: ${list[i].read}`
        remove.textContent = `Remove`
        changeStatus.textContent = `Change Book Status`
        libraryContainer.appendChild(bookCard)
        bookCard.appendChild(bookTitle)
        bookCard.appendChild(bookAuthor)
        bookCard.appendChild(bookPages)
        bookCard.appendChild(bookStatus)
        bookCard.appendChild(remove)
        bookCard.appendChild(changeStatus)
    }
}

newBook.addEventListener("click", () => {
    const myForm = document.createElement("form")
    myForm.setAttribute("id", "form-popup")
    myForm.setAttribute("method", "POST")

    const labelBookTitle = document.createElement("label")
    labelBookTitle.textContent = "Book Title: "
    labelBookTitle.classList.add("label-font")
    labelBookTitle.setAttribute("for", "book-title")
    const inputBookTitle = document.createElement("input")
    inputBookTitle.setAttribute("type", "text")
    inputBookTitle.setAttribute("id", "book-title")
    inputBookTitle.setAttribute("required", "")

    const labelBookAuthor = document.createElement("label")
    labelBookAuthor.textContent = "Book Author: "
    labelBookAuthor.classList.add("label-font")
    labelBookAuthor.setAttribute("for", "book-author")
    const inputBookAuthor = document.createElement("input")
    inputBookAuthor.setAttribute("type", "text")
    inputBookAuthor.setAttribute("id", "book-author")
    inputBookAuthor.setAttribute("required", "")

    const labelBookPages = document.createElement("label")
    labelBookPages.textContent = "Pages: "
    labelBookPages.classList.add("label-font")
    labelBookPages.setAttribute("for", "book-pages")
    const inputBookPages = document.createElement("input")
    inputBookPages.setAttribute("type", "number")
    inputBookPages.setAttribute("id", "book-pages")
    inputBookPages.setAttribute("required", "")

    const inputRadioContainer = document.createElement("div")
    inputRadioContainer.setAttribute("id", "input-radio-container")
    const unreadContainer = document.createElement("div")
    const readContainer = document.createElement("div")

    const labelChooseUnread = document.createElement("label")
    labelChooseUnread.textContent = "Unread"
    labelChooseUnread.classList.add("label-font")
    labelChooseUnread.setAttribute("for", "unread")
    const inputChooseUnread = document.createElement("input")
    inputChooseUnread.setAttribute("type", "radio")
    inputChooseUnread.setAttribute("id", "unread")
    inputChooseUnread.setAttribute("name", "read-or-not")
    inputChooseUnread.setAttribute("value", "unread")
    inputChooseUnread.setAttribute("required", "")


    const labelChooseRead = document.createElement("label")
    labelChooseRead.textContent = "Read"
    labelChooseRead.classList.add("label-font")
    labelChooseRead.setAttribute("for", "read")
    const inputChooseRead = document.createElement("input")
    inputChooseRead.setAttribute("type", "radio")
    inputChooseRead.setAttribute("id", "read")
    inputChooseRead.setAttribute("name", "read-or-not")
    inputChooseRead.setAttribute("value", "read")
    inputChooseRead.setAttribute("required", "")

    const submitButton = document.createElement("button")
    submitButton.setAttribute("type", "submit")
    submitButton.textContent = "submit"

    body.appendChild(myForm)
    myForm.appendChild(labelBookTitle)
    myForm.appendChild(inputBookTitle)
    myForm.appendChild(labelBookAuthor)
    myForm.appendChild(inputBookAuthor)
    myForm.appendChild(labelBookPages)
    myForm.appendChild(inputBookPages)
    myForm.appendChild(inputRadioContainer)
    inputRadioContainer.appendChild(unreadContainer)
    inputRadioContainer.appendChild(readContainer)
    unreadContainer.appendChild(labelChooseUnread)
    unreadContainer.appendChild(inputChooseUnread)
    readContainer.appendChild(labelChooseRead)
    readContainer.appendChild(inputChooseRead)
    myForm.appendChild(submitButton)

    myForm.addEventListener("submit", (event) => {
        event.preventDefault()
        const selectedStatus = document.querySelector('input[name="read-or-not"]:checked').value
        const bookItem = new Book(inputBookTitle.value, inputBookAuthor.value, inputBookPages.value, selectedStatus)
        myForm.remove() 
        console.log(bookItem)
        addBookToLibrary(bookItem)
        updateBookDisplay(myLibrary)
    })
})

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "unread")
console.log(theHobbit.info())
