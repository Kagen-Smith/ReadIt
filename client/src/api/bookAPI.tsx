// /**
//  * Retrieves a list of books from the API.
//  *
//  * @returns {Promise<BookData[]>} A promise that resolves to an array of BookData objects.
//  * @throws Will throw an error if the API response is not ok.
//  */
// // const retrieveBooks: () => Promise<BookData[]>;

// /**
//  * Retrieves a single book by its ID from the API.
//  *
//  * @param {number | null} id - The ID of the book to retrieve.
//  * @returns {Promise<BookData>} A promise that resolves to a BookData object.
//  * @throws Will throw an error if the API response is not ok or if the book cannot be fetched.
//  */
// // const retrieveBook: (id: number | null) => Promise<BookData>;

// /**
//  * Creates a new book in the API.
//  *
//  * @param {BookData} body - The data of the book to create.
//  * @returns {Promise<BookData>} A promise that resolves to the created BookData object.
//  * @throws Will throw an error if the API response is not ok or if the book cannot be created.
//  */
// // const createBook: (body: BookData) => Promise<BookData>;

// /**
//  * Updates an existing book in the API.
//  *
//  * @param {BookData} body - The data of the book to update.
//  * @returns {Promise<BookData>} A promise that resolves to the updated BookData object.
//  * @throws Will throw an error if the API response is not ok or if the book cannot be updated.
//  */
// // const updateBook: (body: BookData) => Promise<BookData>;

// /**
//  * Deletes a book by its ID from the API.
//  *
//  * @param {number} bookId - The ID of the book to delete.
//  * @returns {Promise<ApiMessage>} A promise that resolves to an ApiMessage object.
//  * @throws Will throw an error if the API response is not ok or if the book cannot be deleted.
//  */
// // const deleteBook: (bookId: number) => Promise<ApiMessage>;

// import { BookData } from "../interfaces/bookData";
// import { ApiMessage } from "../interfaces/apiMessage";
// import Auth from "../utils/auth";

// const retrieveBooks = async () => {
//   try {
//     const response = await fetch("/api/books", {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${Auth.getToken()}`,
//       },
//     });
//     const data = await response.json();

//     if (!response.ok) {
//       throw new Error("invalid book API response, check network tab!");
//     }

//     return data;
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// };

// const retrieveBook = async (id: number | null): Promise<BookData> => {
//   try {
//     const response = await fetch(`/api/books/${id}`, {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${Auth.getToken()}`,
//       },
//     });
//     const data = await response.json();

//     if (!response.ok) {
//       throw new Error("invalid book API response, check network tab!");
//     }

//     return data;
//   } catch (error) {
//     console.error(error);
//     return Promise.reject("could not fetch single book");
//   }
// };
// const createBook = async (body: BookData) => {
//   try {
//     const response = await fetch("/api/books", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${Auth.getToken()}`,
//       },
//       body: JSON.stringify(body),
//     });
//     const data = await response.json();

//     if (!response.ok) {
//       throw new Error("invalid book API response, check network tab!");
//     }

//     return data;
//   } catch (error) {
//     console.error(error);
//     return Promise.reject("could not create book");
//   }
// };
// const updateBook = async (body: BookData) => {
//   try {
//     const response = await fetch(`/api/books/${body.id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${Auth.getToken()}`,
//       },
//       body: JSON.stringify(body),
//     });
//     const data = await response.json();

//     if (!response.ok) {
//       throw new Error("invalid book API response, check network tab!");
//     }

//     return data;
//   } catch (error) {
//     console.error(error);
//     return Promise.reject("could not update book");
//   }
// };

// const deleteBook = async (bookId: number): Promise<ApiMessage> => {
//   try {
//     const response = await fetch(`/api/books/${bookId}`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${Auth.getToken()}`,
//       },
//     });
//     const data = await response.json();

//     if (!response.ok) {
//       throw new Error("invalid book API response, check network tab!");
//     }

//     return data;
//   } catch (error) {
//     console.error(error);
//     return Promise.reject("Could not delete book");
//   }
// };

// export { retrieveBooks, retrieveBook, createBook, updateBook, deleteBook };
