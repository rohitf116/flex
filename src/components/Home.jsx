import React from "react";
import BookList from "./BookList";
import Subcategories from "./subcategoriie";

const Home = ({ books, subcategories }) => {
  return (
    <div className="main">
      <BookList books={books} />
      <Subcategories subcategories={subcategories} />
    </div>
  );
};

export default Home;
