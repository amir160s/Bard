import { useState, useEffect } from "react";
import Book from "./Book";

const Books = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("bookData.json")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);

  return (
    <div className="container mx-auto grid grid-cols-12 gap-4">
      <h1 className="text-center font-bold text-5xl col-span-12">Books</h1>
      {allBooks.map((book, indx) => (
        <Book key={indx} book={book}></Book>
      ))}
    </div>
  );
};

export default Books;
