import PropTypes from "prop-types";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, image, tags, bookName, author, category, rating } = book;
  return (
    <Link
      to={`/book-details/${bookId}`}
      className="col-span-12 sm:col-span-6 lg:col-span-4 grid gap-3 border p-4 rounded-3xl shadow-md"
    >
      <div className="grid gap-3">
        <div className="bg-[#f2f2f2] p-5 rounded-2xl flex items-center justify-center">
          <img className="w-1/2" src={image} />
        </div>
        <div className="flex gap-1 items-center flex-wrap">
          {tags.map((item, i) => (
            <li
              className="list-none px-3 py-1 font-medium text-[#23be0a] rounded-xl flex-wrap bg-[#f2f2f2] text-nowrap"
              key={i}
            >
              #{item}
            </li>
          ))}
        </div>
        <h1 className="text-2xl font-bold ">{bookName}</h1>
        <p className="border-b border-dashed border-slate-400 font-medium text-slate-700 pb-3">
          By : {author}
        </p>
        <div className="flex justify-between">
          <p className="font-medium text-slate-700 ">{category}</p>
          <div className="flex items-center gap-2">
            <p className="font-medium text-slate-700">{rating}</p>
            <p className="text-xl">
              <CiStar />
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

Book.propTypes = {
  book: PropTypes.object,
};

export default Book;
