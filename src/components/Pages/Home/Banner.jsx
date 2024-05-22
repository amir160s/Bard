import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  const goListPage = () => {
    navigate("/listedbooks");
  };

  return (
    <div className="container mx-auto hero min-h-screen bg-base-200 rounded-3xl overflow-hidden my-2 md:my-5">
      <div className="hero-content flex-col md:flex-row-reverse p-3 md:p-20">
        <div className="w-full md:w-1/2">
          <img src="banner.png" className="w-full rounded-lg" />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl lg:text-5xl font-bold text-justify md:text-left">
            Books to freshen up your bookshelf
          </h1>
          <p className="py-3 lg:py-6 text-justify md:text-left max-w-full md:max-w-md">
            Reading books is extremely important. If you read books avidly, apparently, you obtain
            lots of good information. As a result, you become knowledgeable.
          </p>
          <div className="flex items-center justify-center md:justify-start">
            <button
              onClick={goListPage}
              className="btn bg-[#23be0a] hover:bg-[#52df3c] hover:text-black font-medium text-base text-white"
            >
              View The List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
