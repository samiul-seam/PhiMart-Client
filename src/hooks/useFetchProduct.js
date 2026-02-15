import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useFetchProduct = (
  currentPage, 
  priceRange, 
  selectedCategory,
  searchQuery,
  sortOrder
) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [totalPages, setTotalPages] = useState(0);
  
  useEffect(() => {
    const fetchProducts = async () => {
      setError(null);
      setLoading(true);
      const url = `/products/?price__gt=${priceRange[0]}&price__lt=${priceRange[1]}&page=${currentPage}&category_id=${selectedCategory}&search=${searchQuery}&ordering=${sortOrder}`;
      try {
        const response = await apiClient.get(url);
        const data = await response.data;
        const pagelimit = 10;
 
        setProducts(data.results);
        setTotalPages(Math.ceil(data.count / pagelimit));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [currentPage, priceRange, selectedCategory, searchQuery, sortOrder]);

  return { products, loading, error, totalPages };
};

export default useFetchProduct;
