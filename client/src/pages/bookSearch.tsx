import { useState, useEffect } from 'react';
import { searchBook } from '../api/bookAPI';
import { review } from '../api/reviewAPI';

const BookSearch = () => {
    const [currentBook, setCurrentBook] = useState<Book>({
        title: '',
        author: '',
        genre: ''
    });
    const [books, setBooks] = useState<books[]>([]);

    const [currentIndex, setCurrentIndex] = useState<number>(0) ;

    const [searchInput, setSearchInput] = useState<string>('');

    const [error, setError] = useState<string | null>(null);

    const [noBooks, setBooks] = useState<boolean>(false);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const data = await searchBook();
                const fetchedBooks = Books[] = data.map((book: Book) => ({
                    title: book.title,
                    author: book.author,
                    genre: book.genre,

                }));
                setBooks(fetchedBooks);
                console.log(books);
                if (fetchedBooks.length === 0) {
                    setNoBooks(true);
                }
            } catch (error) {
                setError('Error fetching books');
            }
        };
        fetchBooks();
    }
    , []);

    const handleSearch = async () => {
        try {
            const data = await searchBook(searchInput);
            const fetchedBooks = Books[] = data.map((book: Book) => ({
                title: book.title,
                author: book.author,
                genre: book.genre,
            }));
            setBooks(fetchedBooks);
            setError(null);
        }
        setSearchInput('');
    } catch (error) {
        setError('Error fetching books');
    }
    }
