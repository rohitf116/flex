import Rating from "react-rating";
import IconStar from "./FullStar";
import IconStarEmpty from "./EmptyStar";
import { fetchAllBooks, fetchBookById, setBooks } from "../features/bookSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Loader from "../ui/Loader";
const SingleBook = () => {
  const book = useSelector((state) => state.book);
  const dispatch = useDispatch();
  const { status, currentBook, error } = book;
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchBook = async () => {
      console.log({ id });
      const res = await dispatch(fetchBookById(id));
      console.log({ res });
    };
    fetchBook();
  }, [dispatch, id]);
  return (
    <div className="single-book-container">
      {status === "loading" ? (
        <Loader />
      ) : (
        <>
          <button onClick={() => navigate("/")}>Back</button>
          <div className="signle-book-cover-container">
            <img
              className="book-cover-image"
              src={currentBook.image}
              alt="book-cover-image"
            />
            <button className="want-to-read-button">Want to read</button>
          </div>
          <div className="single-book-desc-container">
            <h3 className="book-title">{currentBook.title}</h3>
            <p className="book-excert">{currentBook.excerpt}</p>
            <div className="reviews">
              <div className="rating">
                <Rating
                  initialRating={currentBook.rating}
                  readonly
                  emptySymbol={
                    <IconStarEmpty href="#icon-star-empty" className="icon" />
                  }
                  fullSymbol={
                    <IconStar href="#icon-star-full" className="icon" />
                  }
                />{" "}
                {currentBook.rating}
              </div>
              <div className="rating"> {currentBook.ratingCount} ratings</div>
              <div className="rating">{currentBook.reviews} reviews</div>
            </div>
            <div className="genre">
              genre:{" "}
              {currentBook.subcategories.length
                ? currentBook.subcategories.map((item) => (
                    <div className="genre-item" key={item.id}>
                      <span>{item.name}</span>
                    </div>
                  ))
                : ""}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleBook;
