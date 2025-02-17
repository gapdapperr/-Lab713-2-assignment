import express, { Request, Response } from 'express'
import {getAllBooks, getBookByTitle, getBookById, addBook} from './services/bookService'

import type {Book} from './models/book'
const app = express()
const port = 5000

app.use(express.json())


app.get('/books', async (req: Request, res: Response) => {
    if (req.query.title) {
        const title = req.query.title as string;
        const filteredBooks = await getBookByTitle(title);
        res.json(filteredBooks);
    } else {
        res.json(await getAllBooks());
    }
})


app.get('/books/:id', async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const book = await getBookById(id)
    if (book) {
    res.json(book);
    } else {
    res.status(404).send("Book not found");
    }
})

app.post('/books', async (req: Request, res: Response) => {
    const newBook: Book = req.body;
    await addBook(newBook);
    res.json(newBook);
})



app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
  })





  