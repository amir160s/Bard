import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const problem = useRouteError();
  return (
    <div className="flex flex-col gap-7 items-center justify-center h-screen bg-slate-100">
      <h1 className="text-5xl lg:text-8xl text-center font-black text-violet-600">
        Something Wrong!
      </h1>
      <p className="text-3xl text-center">{problem.error.message || problem.statusText}</p>
      <p className="text-6xl lg:text-9xl font-black text-red-600">{problem.status}</p>
      <Link to="/">
        <button className="btn bg-violet-600 hover:bg-violet-500 text-white text-base">
          Back To Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
