import Book from "./Book";

/* eslint-disable react/prop-types */
const BookList = ({ books }) => {
  const baasImagee =
    "https://book-management-test-api.s3.ap-south-1.amazonaws.com/ecom/1706384844615pexels-photographie-amg-19898940.jpg";
  return (
    <div className="book-container">
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
      {/* hii */}
    </div>
  );
};

export default BookList;
