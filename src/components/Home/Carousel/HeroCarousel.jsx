// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import book from "../../../assets/images/banner-image1.png";
import collect from "../../../assets/images/banner-image3.png";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import CarouselSlide from "./CarouselSlide";
const HeroCarousel = () => {
  const slides = [
    {
      title: "this fine Print Book Colleciton",
      subtitle: "discount available. grab it now",
      image: book,
    },
    {
      title: "this fine Print 2nd Colleciton",
      subtitle: "discount available. grab it now",
      image: collect,
    },
  ];

  return (
    <>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <CarouselSlide
              title={slide.title}
              subtitle={slide.subtitle}
              image={slide.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HeroCarousel;
