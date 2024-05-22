import { toast } from "react-toastify";

export const SaveDataToReadList = (clickedBook) => {
  // Dekhlam aage theke local storage a data ase kina
  const savedData = JSON.parse(localStorage.getItem("readList")) || [];

  // Local storage er datar moddhe amra jeta save korbo oi data ase kina
  const isAlready = savedData.find((item) => item.bookId === clickedBook.bookId);

  if (isAlready) {
    toast.error("Already in Readlist", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  } else {
    savedData.push(clickedBook);
    localStorage.setItem("readList", JSON.stringify(savedData));
    toast.success("Added to Readlist Successfully", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
};

export const SaveDataToWishList = (clickedBook) => {
  // Dekhlam aage theke local storage a data ase kina
  const savedData = JSON.parse(localStorage.getItem("wishList")) || [];
  const ReadListData = JSON.parse(localStorage.getItem("readList")) || [];

  // Local storage er datar moddhe amra jeta save korbo oi data ase kina
  const isAlready = savedData.find((item) => item.bookId === clickedBook.bookId);
  const isAlreadyRead = ReadListData.find((item) => item.bookId === clickedBook.bookId);

  if (isAlready) {
    toast.error("Already in Wishlist", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  } else {
    if (isAlreadyRead) {
      toast.error("You Have Already Read", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      savedData.push(clickedBook);
      localStorage.setItem("wishList", JSON.stringify(savedData));
      toast.success("Added to Wishlist Successfully", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }
};
