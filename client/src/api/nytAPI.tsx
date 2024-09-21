export const bookCovers = async () => {
  const response = await fetch("/api/book-covers", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  return data;
};
