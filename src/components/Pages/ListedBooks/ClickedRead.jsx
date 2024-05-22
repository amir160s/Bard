import PropTypes from "prop-types";
import { SlCalender } from "react-icons/sl";
import { MdPeopleOutline } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ClickedRead = ({ readBook }) => {
  const {
    bookId,
    image,
    bookName,
    author,
    tags,
    yearOfPublishing,
    publisher,
    totalPages,
    category,
    rating,
  } = readBook;
  return (
    <div className="grid grid-cols-12 gap-4 border rounded-3xl p-4">
      <div className="col-span-12 md:col-span-3 bg-[#f2f2f2] p-6 rounded-2xl flex items-center justify-center">
        <img className=" h-[180px]" src={image} />
      </div>
      <div className="col-span-12 md:col-span-9 grid">
        <h1 className="text-2xl font-bold ">{bookName}</h1>
        <p className=" border-dashed border-slate-400 font-medium text-slate-700">By : {author}</p>
        <div className="flex items-center gap-3 flex-wrap pb-1">
          <div className="flex gap-3 items-center flex-wrap">
            <span className="font-bold">Tags</span>
            {tags.map((item, i) => (
              <li
                className="list-none px-3 py-1 font-medium text-[#23be0a] rounded-xl text-nowrap bg-[#f2f2f2]"
                key={i}
              >
                #{item}
              </li>
            ))}
          </div>
          <div className="flex items-center gap-2 text-slate-700">
            <span className="text-xl">
              <SlCalender />
            </span>
            <p>Year of Publishing : {yearOfPublishing}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-slate-500 pb-1 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="text-2xl text-nowrap">
              <MdPeopleOutline />
            </span>
            <p className="text-nowrap">Publisher : {publisher}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl text-nowrap">
              <IoDocumentTextOutline />
            </span>
            <p className="text-nowrap">Page : {totalPages}</p>
          </div>
        </div>
        <hr />
        <div className="pt-1 flex gap-3 flex-wrap">
          <button className="btn  text-base border-0 rounded-full bg-blue-100  hover:bg-blue-100 text-blue-400">
            Category : {category}
          </button>
          <button className="btn text-base border-0 font-medium rounded-full bg-orange-100 hover:bg-orange-100 text-orange-300">
            Rating : {rating}
          </button>
          <Link to={`/book-details/${bookId}`}>
            <button className="btn  text-base font-medium border-0 rounded-full bg-[#23be0a] hover:bg-[#23be0f] text-white hover:text-black">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

ClickedRead.propTypes = {
  readBook: PropTypes.object,
};

export default ClickedRead;
