import { FaAngleRight } from "react-icons/fa";

const CategoryItem = ({ category , index }) => {
  const linears = [
    "from-pink-200 to-blue-200",
    "from-blue-200 to-purple-200",
    "from-purple-200 to-blue-200",
    "from-green-200 to-pink-200",
  ];

  return (
    <div> 
      <div className={`p-6 bg-linear-to-br ${linears[index % linears.length]}  rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer`}>
        <div className="flex justify-between items-start mb-4">
          <p className="bg-pink-500 w-10 h-10 flex justify-center items-center text-white text-xl font-semibold rounded-full">
            {category.name.charAt(0)}
          </p>
          <span className="text-sm text-gray-600 bg-white/70 px-2 py-1 rounded-full">{category.product_count} Items</span>
        </div>

        <h2 className="font-bold text-xl ">{category.name}</h2>
        <p className="text-gray-500">{category.description}</p>
        <button className="text-pink-500 hover:text-pink-600 font-bold transition-colors flex items-center mt-4 cursor-pointer">
          Explore
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default CategoryItem;
