import { useEffect, useState } from "react";
import ClickedRead from "./ClickedRead";

const Read = () => {
  const [readListData, setReadListData] = useState([]);
  useEffect(() => {
    const getLocalStorageReadData = JSON.parse(localStorage.getItem("readList")) || [];
    if (getLocalStorageReadData) {
      setReadListData(getLocalStorageReadData);
    }
  }, []);
  return (
    <div className="grid gap-4">
      {readListData.map((readBook, index) => (
        <ClickedRead key={index} readBook={readBook}></ClickedRead>
      ))}
    </div>
  );
};

export default Read;
