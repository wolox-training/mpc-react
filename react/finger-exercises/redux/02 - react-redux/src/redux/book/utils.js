export const incrementQuantityByID = (books, ID) => {
  const index = books.findIndex(book => book.id === ID);
  if (index >= 0) {
    books[index].quantity += 1;
  }
  return books;
};
