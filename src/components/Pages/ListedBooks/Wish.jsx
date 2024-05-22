import { useEffect, useState } from "react";
import ClickedWish from "./ClickedWish";

const Wish = () => {
  const [wishListData, setWishListData] = useState([]);
  useEffect(() => {
    const getLocalStorageWishData = JSON.parse(localStorage.getItem("wishList"));
    if (getLocalStorageWishData) {
      setWishListData(getLocalStorageWishData);
    }
  }, []);

  return (
    <div className="grid gap-4">
      {wishListData.map((wishBook, index) => (
        <ClickedWish key={index} wishBook={wishBook}></ClickedWish>
      ))}
    </div>
  );
};

export default Wish;
