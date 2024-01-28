import { useNavigate } from "react-router-dom";

const Book = ({ book }) => {
  const navigate = useNavigate();
  const gotoBook = (id) => {
    navigate(`/${id}`);
  };
  const baasImagee =
    "https://book-management-test-api.s3.ap-south-1.amazonaws.com/ecom/1706384844615pexels-photographie-amg-19898940.jpg";
  return (
    <div onClick={() => gotoBook(book.id)} className="book" key={book.id}>
      <img
        className="book-cover"
        src={book.image ? book.image : baasImagee}
        alt="book-cover"
      />
      <h5>{book.title}</h5>

      <p>
        {book.excerpt.length <= 30
          ? book.excerpt
          : `${book.excerpt.substring(0, 30)}...`}
      </p>
      <p className={book.excerpt.length <= 30 ? "" : "read-full"}>
        {book.excerpt.length <= 30 ? "" : " read Full..."}
      </p>
      <p>
        ISBN:
        <strong>{book.ISBN}</strong>
      </p>
    </div>
  );
};

export default Book;
