import express, { Request, Response } from 'express'
import {getAllBooks, getBookByTitle, getBookById, addBook} from './services/bookService'
import multer from 'multer'
import {uploadFile} from './services/uploadFileService'
import type {Book} from './models/book'
const app = express()
const port = 5000

app.use(express.json())


const upload = multer({ storage: multer.memoryStorage()})

app.post('/upload', upload.single('file'), async (req: any, res: any) => {
    try {
       const file = req.file
       if (!file) {
        return res.status(400).send('No file uploaded.')
       }

       const bucket = 'images';
       const filePath = `uploads`

       const outputUrl = await uploadFile(bucket, filePath, file)

       res.status(200).send(outputUrl)
    } catch (error) {
        res.status(500).send('Error uploading file.')
    }
})

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





  