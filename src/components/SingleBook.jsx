import Rating from "react-rating";
import IconStar from "./FullStar";
import IconStarEmpty from "./EmptyStar";

const SingleBook = () => {
  const bookObj = {
    id: 19,
    title:
      "Why I am an Atheist and Other Works | Letters & Jail Diary of Bhagat Singh on Revolution, Religion & Politics",
    image:
      "https://book-management-test-api.s3.ap-south-1.amazonaws.com/ecom/1706384844615pexels-photographie-amg-19898940.jpg",
    excerpt:
      "Bhagat Singh is a name that became synonymous with revolution in India’s struggle for independence. This young boy brought about a change in the way people thought about freedom. He was well read and fought extensively for rights – his own, his comrades’ ",
    ISBN: "45646546521332137",
    category: "test",
    ratingCount: 566,
    reviews: 126,
    rating: 4.3,
    createdAt: "2024-01-26T13:26:30.000Z",
    subcategories: [
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
    ],
  };
  return (
    <div className="single-book-container">
      <div className="signle-book-cover-container">
        <img
          className="book-cover-image"
          src={bookObj.image}
          alt="book-cover-image"
        />
        <button className="want-to-read-button">Want to read</button>
      </div>
      <div className="single-book-desc-container">
        <h3 className="book-title">{bookObj.title}</h3>
        <p className="book-excert">{bookObj.excerpt}</p>
        <div className="reviews">
          <div className="rating">
            <Rating
              initialRating={bookObj.rating}
              readonly
              emptySymbol={
                <IconStarEmpty href="#icon-star-empty" className="icon" />
              }
              fullSymbol={<IconStar href="#icon-star-full" className="icon" />}
            />{" "}
            {bookObj.rating}
          </div>
          <div className="rating"> {bookObj.ratingCount} ratings</div>
          <div className="rating">{bookObj.reviews} reviews</div>
        </div>
        <div className="genre">
          genre:{" "}
          {bookObj.subcategories.map((item) => (
            <div className="genre-item" key={item.id}>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
