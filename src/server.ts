import express, { Request, Response } from 'express'
import {getAllBooks, getBookByTitle, getBookById, addBook} from './services/bookService'

import type {Book} from './services/bookService'
const app = express()
const port = 5000

app.use(express.json())


app.get('/books', (req: Request, res: Response) => {
    if (req.query.title) {
        const title = req.query.title as string;
        const filteredBooks = getBookByTitle(title);
        res.json(filteredBooks);
    } else {
        res.json(getAllBooks());
    }
})


app.get('/books/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const book = getBookById(id)
    if (book) {
    res.json(book);
    } else {
    res.status(404).send("Book not found");
    }
})

app.post('/books', (req: Request, res: Response) => {
    const newBook: Book = req.body;
    addBook(newBook);
    res.json(newBook);
})



app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
  })





  