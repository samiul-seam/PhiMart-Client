import { useEffect, useState } from "react";
import apiClient from "../../../services/api-client";
import CategoryItem from "./CategoryItem";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    apiClient.get("/categories").then((res) => setCategories(res.data));
  });
  return (
    <div>
      <section className="py-10 px-4 mx-auto w-4/5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold">Browser Category</h2>
          <a
            href="#"
            className="btn btn-secondary px-6 py-5 rounded-full text-md"
          >
            View All
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryItem key={category.id} category={category} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Category;
