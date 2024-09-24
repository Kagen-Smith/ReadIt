// import { ReviewData } from '../interfaces/reviewData';
// import { ApiMessage } from '../interfaces/apiMessage';
// import Auth from '../utils/auth';

// const retrieveReviews = async () => {
//     try {
//         const response = await fetch('/api/reviews', {
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: `Bearer ${Auth.getToken()}`
//             }
//         });
//         const data = await response.json();

//         if (!response.ok) {
//             throw new Error('invalid review API response, check network tab!');
//         }

//         return data;

//     } catch (error) {
//         console.error(error);
//         return [];

//     }
// }

// const retrieveReview = async (id: number | null): Promise<ReviewData> => {
//     try {
//         const response = await fetch(`/api/reviews/${id}`, {
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: `Bearer ${Auth.getToken()}`
//             }
//         });
//         const data = await response.json();

//         if (!response.ok) {
//             throw new Error('invalid review API response, check network tab!');
//         }

//         return data;

//     } catch (error) {
//         console.error(error);
//         return Promise.reject("could not fetch single review");

//     }
// }

// const createReview = async (body: ReviewData) => {
//     try {
//         const response = await fetch('/api/reviews', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: `Bearer ${Auth.getToken()}`
//             },
//             body: JSON.stringify(body)
//         });
//         const data = await response.json();

//         if (!response.ok) {
//             throw new Error('invalid review API response, check network tab!');
//         }

//         return data;

//     } catch (error) {
//         console.error(error);
//         return null;

//     }
// }

// const updateReview = async (reviewId: number, body: ReviewData): Promise<ReviewData> => {
//     try {
//         const response = await fetch(`/api/reviews/${reviewId}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: `Bearer ${Auth.getToken()}`
//             },
//             body: JSON.stringify(body)
//         });
//         const data = await response.json();

//         if (!response.ok) {
//             throw new Error('invalid review API response, check network tab!');
//         }

//         return data;

//     } catch (error) {
//         console.error(error);
//         return Promise.reject('Update did not work');

//     }
// }

// const deleteReview = async (reviewID: number): Promise<ApiMessage> => {
//     try {
//         const response = await fetch(`/api/reviews/${reviewID}`, {
//             method: 'DELETE',
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: `Bearer ${Auth.getToken()}`
//             }
//         });
//         const data = await response.json();

//         if (!response.ok) {
//             throw new Error('invalid review API response, check network tab!');
//         }

//         return data;

//     } catch (error) {
//         console.error(error);
//         return Promise.reject('Could not delete review');
//     }
// }

// export { retrieveReviews, retrieveReview, createReview, updateReview, deleteReview };
