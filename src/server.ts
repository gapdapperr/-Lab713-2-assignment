import express, { Request, Response } from 'express'
const app = express()
const port = 3000

interface Book {
    id: number,
    title: string,
    Author_name: string,
    description: string,
    groups: string
}

const books: Book[] = [
    {
        id: 1,
        title: 'The Alchemist',
        Author_name: 'Paulo Coelho',
        description: 'The Alchemist is a novel by Brazilian author Paulo Coelho that was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller.',
        groups: 'Fiction'
    },
    {
        id: 2,
        title: 'The Lean Startup',
        Author_name: 'Eric Ries',
        description: 'The Lean Startup: How Today’s Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses is a book by Eric Ries describing his proposed lean startup strategy for startup companies.',
        groups: 'Business'
    },
    {
        id: 3,
        title: 'The 4-Hour Workweek',
        Author_name: 'Tim Ferriss',
        description: 'The 4-Hour Workweek: Escape 9-5, Live Anywhere, and Join the New Rich is a self-help book by Timothy Ferriss, an American writer, educational activist, and entrepreneur.',
        groups: 'Business'
    },
    {
        id: 4,
        title: 'The Da Vinci Code',
        Author_name: 'Dan Brown',
        description: 'The Da Vinci Code is a 2003 mystery thriller novel by Dan Brown. It follows symbologist Robert Langdon and cryptologist Sophie Neveu after ',
        groups: 'Fiction'
    },
    {
        id: 5,
        title: 'The Great Gatsby',
        Author_name: 'F. Scott Fitzgerald',
        description: 'The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts ',
        groups: 'Fiction'
    },
    {  
        id: 6, 
        title: 'The Catcher in the Rye',
        Author_name: 'J.D. Salinger',
        description: 'The Catcher in the Rye is a novel by J. D. Salinger, partially published in serial form in 1945–1946 and as a novel in 1951. It was originally intended ',
        groups: 'Fiction'
    }
]

app.get('/books', (req: Request, res: Response) => {
    if (req.query.title) {
        const title = req.query.title;
        const filteredBooks = books.filter((book) => book.title === title);
        res.json(filteredBooks);}
        else {
        res.json(books);}
})


app.get('/books/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const book = books.find((book) => book.id === id);
    if (book) {
    res.json(book);
    } else {
    res.status(404).send("Book not found");
    }
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
  })






  