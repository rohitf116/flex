import { fetchAllBooks, setBooks } from "../features/bookSlice";
import { useDispatch, useSelector } from "react-redux";
import Book from "./Book";
import { useEffect } from "react";
import { useState } from "react";
import Loader from "../ui/Loader";

/* eslint-disable react/prop-types */
const BookList = () => {
  const book = useSelector((state) => state.book);
  const { books, status } = book;
  const dispatch = useDispatch();
  console.log({ books });
  useEffect(() => {
    const fetchBooksApi = async () => {
      const data = await dispatch(fetchAllBooks("HII"));
      console.log({ data });
      // setBooks(data);
    };
    fetchBooksApi();
  }, []);
  return (
    <>
      <div className="book-container">
        {status === "loading" ? (
          <Loader />
        ) : (
          books.map((book) => <Book key={book.id} book={book} />)
        )}
      </div>
    </>
  );
};

export default BookList;
