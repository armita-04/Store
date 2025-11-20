import { useLocation } from "react-router-dom";
import Products from "../components/Products";
import { useState } from "react";

const ProductList = () => {

  const location =useLocation();
  const query = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest")

  const handleFilters = (e) =>{
     const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    })
  }
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      
      <div className="flex justify-between m-4">
        {/* LEFT */}
        <div className="flex flex-col sm:flex-row sm:items-center">
          <span className="text-lg font-semibold mr-4">Filter Products</span>
          <select name="concern" id="" className="p-2 mb-4 sm:mb-0 sm:mr-4 bg-gray-100 hover:bg-gray-200 rounded-md" onChange={handleFilters}>
            <option>Dry Skin</option>
            <option>Pigmentation</option>
            <option>Oil Control</option>
            <option>Anti Acne</option>
            <option>Sunburn</option>
            <option>Skin Brightening</option>
            <option>Tan Removal</option>
            <option>Night Routine</option>
            <option>UV Protection</option>
            <option>Frizzy Hair</option>
            <option>Stretch Marks</option>
            <option>Color Protection</option>
            <option>Soothing</option>
            <option>Dandruff</option>
            <option>Greying</option>
            <option>Well Being</option>
            <option>Acne</option>
          </select>

          <select name="brand" id="" className="p-2 mb-4 sm:mb-0 sm:mr-4 bg-gray-100 hover:bg-gray-200 rounded-md" onChange={handleFilters}>
            <option>Beauty Of Joseon</option>
            <option>Round Lab</option>
            <option>Skin1004</option>
            <option>Anua</option>
            <option>Innisfree</option>
            <option>ETUDE HOUSE</option>
            <option>Heaven Dove</option>       
            <option>Johnsons Baby</option>
            <option>Rexona</option>
            <option>Vilvah</option>
          </select>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col sm:flex-row sm:items-center">
          <span className="text-lg font-semibold mr-4 ">Sort Products</span>
          <select name="price" id="" className="bg-gray-100 rounded-md p-1 hover:bg-gray-200" onChange={(e) => setSort(e.target.value)}>
            <option value="newest">Newest</option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price (desc)</option>
          </select>
        </div>
      </div>

        <Products query={query} filters={filters} sort={sort}/>
    </div>
  );
};

export default ProductList;
