import axios from "axios";

export default {
    // Searches Google Books API
    searchBooks: function (search) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search)
    },
    // Gets all books from database
    getBooks: function () {
        return axios.get("/api/books");
    },
    // Deletes the book with the given id from the database
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },
    // Saves a book to the database
    saveBook: function (bookData) {
        return axios.post("/api/books", bookData);
    }
};
