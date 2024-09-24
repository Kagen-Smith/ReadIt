/**
 * Fetches book covers from the API.
 *
 * @returns {Promise<any>} A promise that resolves to the data containing book covers.
 *
 * @throws {Error} Will throw an error if the fetch operation fails.
 */

export const bookCovers = async () => {
  const response = await fetch("/api/book-covers", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  return data;
};
