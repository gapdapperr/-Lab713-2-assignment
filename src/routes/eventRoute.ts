import express, { Request, Response } from 'express'
import {getAllBooks, getBookByTitle, getBookById, addBook} from '../services/bookService'
import type {Book} from '../models/book'
import exp from 'constants'
const router = express.Router()

router.get('/', async (req: Request, res: Response) => {
    if (req.query.title) {
        const title = req.query.title as string;
        const filteredBooks = await getBookByTitle(title);
        res.json(filteredBooks);
    } else {
        res.json(await getAllBooks());
    }
})

router.get('/:id', async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const book = await getBookById(id)
    if (book) {
    res.json(book);
    } else {
    res.status(404).send("Book not found");
    }
})

router.post('/', async (req: Request, res: Response) => {
    const newBook: Book = req.body;
    await addBook(newBook);
    res.json(newBook);
})

export default router