import { FaLightbulb } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { IoIosPeople } from "react-icons/io";
const OurPurpose = () => {
  return (
    <div className="container mx-auto my-5 grid grid-cols-12 gap-7">
      <div className="rounded-3xl bg  flex items-center justify-center col-span-12">
        <h1 className="text-center text-5xl p-14 font-bold text-white">Our Purpose</h1>
      </div>
      <div className="text-base col-span-12 lg:col-span-4 flex flex-col gap-3 border p-7 rounded-2xl bg-red-50">
        <div className="w-fit mx-auto p-3 rounded-full bg-red-600">
          <TfiWorld className="text-white text-5xl " />
        </div>
        <h1 className="text-4xl font-bold text-center text-indigo-600">Our Vision</h1>
        <div className="text-justify">
          <p>
            Your premier destination for digital reading pleasure! At Our Vision, we believe in the
            transformative power of literature to inspire, educate, and entertain. Our mission is to
            provide a diverse and extensive collection of eBooks, catering to every reader&apos;s
            tastes and preferences.
          </p>
          <p>
            With a user-friendly interface and seamless navigation, Our Vision offers a curated
            selection of eBooks spanning various genres, from timeless classics to contemporary
            bestsellers. Whether you&apos;re a voracious reader seeking the next literary adventure
            or a student in pursuit of academic resources, Our Vision has something for everyone.
          </p>
          <p>
            Join us at Our Vision and embark on a journey through the boundless realms of
            imagination and knowledge. Let us be your trusted companion in the wonderful world of
            eBooks.
          </p>
        </div>
      </div>
      <div className="text-base col-span-12 lg:col-span-4 flex flex-col gap-3 border p-7 rounded-2xl bg-yellow-50">
        <div className="w-fit mx-auto p-3 rounded-full bg-yellow-400 ">
          <FaLightbulb className="text-white text-5xl " />
        </div>
        <h1 className="text-4xl text-center font-bold text-indigo-600">Our Mission</h1>
        <div className="text-justify">
          <p>
            We&apos;re driven by a passion for literature and a dedication to enhancing the reading
            experience for every individual. We believe that everyone deserves access to a vast
            library of knowledge and imagination, regardless of geographical location or economic
            status.
          </p>
          <p>
            Through cutting-edge technology and a relentless focus on user satisfaction, Our Mission
            strives to create an ecosystem where readers can explore, discover, and indulge in a
            diverse array of literary works. From timeless classics to contemporary gems, our
            curated collection caters to every taste and interest.
          </p>
          <p>
            Join us at Our Mission and embark on a journey of literary exploration and discovery.
            Let us be your trusted partner as you navigate the vast and captivating world of eBooks.
          </p>
        </div>
      </div>
      <div className="text-base col-span-12 lg:col-span-4 flex flex-col gap-3 border p-7 rounded-2xl bg-indigo-50">
        <div className="w-fit mx-auto p-3 rounded-full bg-blue-600">
          <IoIosPeople className="text-white text-5xl " />
        </div>
        <h1 className="text-4xl text-center font-bold text-indigo-600">Our Audiences</h1>
        <div className="text-justify">
          <p>
            Whether you&apos;re a seasoned bookworm or just beginning your literary journey, Our
            Audiences has something for you. From avid readers devouring novels in a single sitting
            to students seeking academic resources, from casual readers looking for light
            entertainment to professionals exploring the latest industry insights, our platform
            offers a curated selection of eBooks to satisfy every taste and need.
          </p>
          <p>
            At Our Audiences, accessibility is key. We strive to make reading easy and convenient
            for everyone, with user-friendly interfaces, affordable pricing options, and
            compatibility across various devices. Whether you prefer to read on your smartphone
            during your daily commute, on your tablet while lounging at home, or on your e-reader
            during a relaxing getaway, Our Audiences ensures that your favorite books are always at
            your fingertips.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurPurpose;
