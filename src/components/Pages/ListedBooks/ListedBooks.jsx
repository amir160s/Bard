import { NavLink, Outlet } from "react-router-dom";

const ListedBooks = () => {
  const test = () => {
    console.log("hi");
  };

  return (
    <div className="container mx-auto my-5">
      <div className="bg-[#f2f2f2] p-6 rounded-2xl">
        <h1 className="text-3xl text-center font-bold">Books</h1>
      </div>

      <div className="flex items-center justify-center p-5">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 px-11 border-0 bg-[#23be0a] hover:bg-[#23be0a] text-base text-white"
          >
            Short By
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow rounded-box w-fit bg-slate-100"
          >
            <li>
              <a onClick={test} className="text-nowrap hover:bg-[#52df3c]">
                Rating
              </a>
            </li>
            <li>
              <a className="text-nowrap hover:bg-[#52df3c]">Number of pages</a>
            </li>
            <li>
              <a className="text-nowrap hover:bg-[#52df3c]">Published year</a>
            </li>
          </ul>
        </div>
      </div>

      <nav className="py-5">
        <ul className="flex border-b py-[10px]">
          <li className="text-base font-medium list-none">
            <NavLink className="border p-3 rounded-lg" to="/listedbooks/read">
              Read Books
            </NavLink>
          </li>
          <li className="text-base font-medium  list-none ">
            <NavLink className="border p-3 rounded-lg" to="/listedbooks/wish">
              Wishlist Books
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet></Outlet>
    </div>
  );
};

export default ListedBooks;
