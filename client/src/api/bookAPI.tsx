import { BookData } from '../interfaces/bookData';
import { ApiMessage } from '../interfaces/apiMessage';
import Auth from '../utils/auth';

const retrieveBooks = async () => {
    try {
        const response = await fetch('/api/books', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${Auth.getToken()}`
            }
        });
        const data = await response.json();

        if (!response.ok) {
            throw new Error('invalid book API response, check network tab!');
        }

        return data;

    } catch (error) {
        console.error(error);
        return [];

    }
}

const retrieveBook = async (id: number | null): Promise<BookData> => {
    try {
        const response = await fetch(`/api/books/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${Auth.getToken()}`
            }
        });
        const data = await response.json();

        if (!response.ok) {
            throw new Error('invalid book API response, check network tab!');
        }

        return data;

    } catch (error) {
        console.error(error);
        return Promise.reject("could not fetch single book");

    }
}
const createBook = async (body: BookData) => {
    try {
        const response = await fetch('/api/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${Auth.getToken()}`
            },
            body: JSON.stringify(body)
        });
        const data = await response.json();

        if (!response.ok) {
            throw new Error('invalid book API response, check network tab!');
        }

        return data;

    } catch (error) {
        console.error(error);
        return Promise.reject("could not create book");

    }
}
const updateBook = async (body: BookData) => {
    try {
        const response = await fetch(`/api/books/${body.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${Auth.getToken()}`
            },
            body: JSON.stringify(body)
        });
        const data = await response.json();

        if (!response.ok) {
            throw new Error('invalid book API response, check network tab!');
        }

        return data;

    } catch (error) {
        console.error(error);
        return Promise.reject("could not update book");

    }
}

const deleteBook = async (bookId: number): Promise<ApiMessage> => {
    try {
        const response = await fetch(`/api/books/${bookId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${Auth.getToken()}`
            }
        });
        const data = await response.json();

        if (!response.ok) {
            throw new Error('invalid book API response, check network tab!');
        }

        return data;

    } catch (error) {
        console.error(error);
        return Promise.reject('Could not delete book');
    }
}

export { retrieveBooks, retrieveBook, createBook, updateBook, deleteBook };