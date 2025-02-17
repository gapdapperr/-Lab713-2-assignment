import type {Book} from "../models/book"
import {getBookByTitle as bookByTitle ,getAllBooks as allBooks, getBookById as bookById, addBook as addNewBook} from "../repository/bookRepository"


export function getBookByTitle(title: string): Promise<Book[]> {
    return bookByTitle(title)
}

export function getAllBooks(): Promise<Book[]> {
    return allBooks()
}

export function getBookById(id: number): Promise<Book | undefined> {
    return bookById(id)
}

export function addBook(newBook: Book): Promise<Book> {
    return addNewBook(newBook)
}