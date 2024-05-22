import { useState } from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${
    y + height
  }
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function PToRead() {
  const [readBookData, setReadBookData] = useState([]);
  useEffect(() => {
    const readBook = JSON.parse(localStorage.getItem("readList")) || [];
    const newObj = readBook.map((readBookData) => {
      const obj = {
        name: readBookData.bookName,
        page: readBookData.totalPages,
      };
      return obj;
    });
    setReadBookData(newObj);
  }, []);

  return (
    <div className="container mx-auto h-screen p-0 md:p-8 lg:p-16 rounded-3xl bg-slate-100 my-5">
      <ResponsiveContainer width="96%" height="100%">
        <BarChart
          data={readBookData.length > 0 && readBookData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="page" fill="#8884d8" shape={<TriangleBar />} label={{ position: "top" }}>
            {readBookData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
          <Tooltip cursor={false}></Tooltip>
          <Legend></Legend>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

TriangleBar.propTypes = {
  props: PropTypes.object,
  fill: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};
