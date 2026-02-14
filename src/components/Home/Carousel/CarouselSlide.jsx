import bgimg from "../../../assets/images/banner-image-bg.jpg";

const CarouselSlide = ({ title, subtitle, image }) => {
  return (
    <section
      className="w-full h-162.5 bg-cover bg-center flex justify-center items-center px-4 md:px-8"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <div className="max-w-6xl flex flex-col md:flex-row items-center justify-between px-8">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 ">
            {title}
          </h1>
          <p className="text-gray-600 my-4 ">
            {subtitle}
          </p>
          <button className="btn btn-secondary px-6 py-3 rounded-full shadow-md">
            Shop Product
          </button>
        </div>

        {/* Right Content  */}
        <div className="w-full md:w-1/2 flex justify-center sm:mt-3">
          <img src={image} alt="" className="max-w-full mid:max-w-mid drop-shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default CarouselSlide;
