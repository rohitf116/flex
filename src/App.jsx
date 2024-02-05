import { Routes } from "react-router-dom";
import "./App.css";
import { books } from "./books";
import BookList from "./components/BookList";
import Home from "./components/Home";
import Subcategories from "./components/subcategoriie";
import { Route } from "react-router-dom";
import SingleBook from "./components/SingleBook";
import RegisterForm from "./components/Register";
import SignIn from "./components/SignIn";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBooks } from "./features/bookSlice";
import { useEffect } from "react";
import BookForm from "./components/BookForm";
function App() {
  const subcategories = [
    {
      id: 1,
      name: "rohit",
      createdAt: "2024-01-24T10:07:32.000Z",
      updatedAt: "2024-01-24T10:07:32.000Z",
    },
    {
      id: 2,
      name: "science",
      createdAt: "2024-01-24T10:16:27.000Z",
      updatedAt: "2024-01-24T10:16:27.000Z",
    },
    {
      id: 3,
      name: "history",
      createdAt: "2024-01-24T10:16:36.000Z",
      updatedAt: "2024-01-24T10:16:36.000Z",
    },
    {
      id: 4,
      name: "modern",
      createdAt: "2024-01-24T10:16:55.000Z",
      updatedAt: "2024-01-24T10:16:55.000Z",
    },
    {
      id: 5,
      name: "main",
      createdAt: "2024-01-24T12:42:12.000Z",
      updatedAt: "2024-01-24T12:42:12.000Z",
    },
    {
      id: 6,
      name: "655",
      createdAt: "2024-01-24T12:42:19.000Z",
      updatedAt: "2024-01-24T12:42:19.000Z",
    },
    {
      id: 7,
      name: "ewqa",
      createdAt: "2024-01-24T12:42:25.000Z",
      updatedAt: "2024-01-24T12:42:25.000Z",
    },
    {
      id: 8,
      name: "master",
      createdAt: "2024-01-24T12:56:14.000Z",
      updatedAt: "2024-01-24T12:56:14.000Z",
    },
    {
      id: 9,
      name: "225",
      createdAt: "2024-01-24T12:56:18.000Z",
      updatedAt: "2024-01-24T12:56:18.000Z",
    },
    {
      id: 10,
      name: "888",
      createdAt: "2024-01-25T10:07:52.000Z",
      updatedAt: "2024-01-25T10:07:52.000Z",
    },
    {
      id: 11,
      name: "999",
      createdAt: "2024-01-25T10:08:06.000Z",
      updatedAt: "2024-01-25T10:08:06.000Z",
    },
  ];
  // const book = useSelector((state) => state.book);
  // const { books, status } = book;
  // const dispatch = useDispatch();
  // console.log({ books });
  // useEffect(() => {
  //   const fetchBooksApi = async () => {
  //     const data = await dispatch(fetchAllBooks("HII"));
  //     console.log({ data });

  //   };
  //   fetchBooksApi();
  // }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home books={books} subcategories={subcategories} />}
        />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/:id" element={<SingleBook />} />
        <Route path="/addbook" element={<BookForm />} />
      </Routes>
    </>
  );
}

export default App;
