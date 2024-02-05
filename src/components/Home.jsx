import React from "react";
import BookList from "./BookList";
import Subcategories from "./subcategoriie";
import NavBar from "./NavBar";

const Home = ({ books, subcategories }) => {
  return (
    <>
      <NavBar />
      <div className="main">
        <BookList books={books} />
        <Subcategories subcategories={subcategories} />
      </div>
    </>
  );
};

export default Home;
