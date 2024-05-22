import { useLoaderData, useParams } from "react-router-dom";
import { SaveDataToWishList, SaveDataToReadList } from "../../Utilities/Utilities";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DetailsBook = () => {
  const allBookInfo = useLoaderData();
  const { bookId } = useParams();
  const intBookId = parseInt(bookId);
  const clickedBook = allBookInfo.find((book) => book.bookId === intBookId);
  const {
    image,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = clickedBook;

  const handleWish = () => {
    SaveDataToWishList(clickedBook);
  };

  const handleRead = () => {
    SaveDataToReadList(clickedBook);
  };

  return (
    <div className="container mx-auto grid grid-cols-12 my-5 gap-4">
      <div className="col-span-12 md:col-span-6 bg-[#f2f2f2] flex items-center justify-center p-5 rounded-3xl">
        <img className="w-1/2" src={image} />
      </div>
      <div className="col-span-12 md:col-span-6 grid gap-4">
        <h1 className="text-2xl md:text-4xl font-bold ">{bookName}</h1>
        <p className="text-xl md:text-2xl font-medium text-slate-600">By : {author}</p>
        <p className="text-xl md:text-2xl font-medium text-slate-600 border-y py-3">{category}</p>
        <p>
          <span className="font-bold">Review :</span> {review}
        </p>
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
        <hr />
        <div className="grid grid-cols-2 md:w-1/2 gap-2">
          <p>Number of Pages:</p>
          <p className="font-bold">{totalPages}</p>
          <p>Publisher:</p>
          <p className="font-bold">{publisher}</p>
          <p>Year of Publishing:</p>
          <p className="font-bold">{yearOfPublishing}</p>
          <p>Rating:</p>
          <p className="font-bold">{rating}</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleRead}
            className="btn btn-outline hover:bg-[#23be0a] text-base font-medium border-2 hover:border-[#23be0a] border-gray-600"
          >
            Read
          </button>
          <button
            onClick={handleWish}
            className="btn bg-[#59c6d2] hover:bg-cyan-400 sm:font-medium text-base text-white "
          >
            Wishlist
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default DetailsBook;
