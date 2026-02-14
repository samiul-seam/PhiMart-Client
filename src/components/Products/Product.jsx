import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import ErrorAlert from "../ErrorAlert";
import apiClient from "../../services/api-client";


const Product = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    apiClient
      .get("/products/")
      .then((res) => setProducts(res.data.results))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="mx-auto max-w-4/5 bg-gray-100 py-16">
      <div className="flex justify-between items-center px-4 md:px-8 mb-6">
        <h2 className="text=3xl md:text-4xl font-bold ">Trending Products</h2>
        <a href="#" className="btn btn-secondary px-6 py-5 rounded-full">
          View all
        </a>
      </div>
      {isLoading && (
        <div className="flex justify-center items-center mt-6">
          <span className="loading loading-spinner loading-xl text-secondary"></span>
        </div>
      )}

      {error && <ErrorAlert error={error} />}

      {!isLoading && !error && products.length > 0 && (
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slideperview={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          className="mt-4 px-5 container"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="flex justify-between">
              <ProductItem product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default Product;
