// import { useState } from "react";
// import {showAverageRating} from "./Ratings"

// const Product = ({product}) => {
//       const [value, setValue] = useState(3); // (i added chatGPT's)
//     console.log(product.title, product.ratings);

//         return (
//             <div className="flex flex-col items-center justify-center m-[30px] cursor-pointer ">
//             <img src={product.img} alt="" className="h-[400px] w-[300px] object-cover rounded-lg hover:shadow-2xl" />
//             <h2 className="font-semibold text-[18px] w-[300px] text-center mt-2 ">
//              {product.title}
//             </h2>

//             <div className="flex items-center gap-2">
//             <span className="text-gray-600 text-[16px] font-semibold line-through">
//                 ${product.originalPrice}
//             </span>
//             <span className="text-[18px] font-semibold text-red-600 ">
//                 ${product.discountedPrice}
//             </span>
//             </div>              
            
//             <span className="flex items-center">
//                 {showAverageRating(product)}
//             </span>
//             </div>
//         );
// };

// export default Product;

import { useState } from "react"; 
import { showAverageRating } from "./Ratings";

const Product = ({ product }) => {
  const [value, setValue] = useState(3);
  console.log(product.title, product.ratings);

  const hasDiscount =
    product.discountedPrice && product.discountedPrice < product.originalPrice;

  return (
    <div className="flex flex-col items-center justify-center m-[30px] cursor-pointer">
      <img
        src={product.img}
        alt={product.title}
        className="h-[400px] w-[300px] object-cover rounded-lg hover:shadow-2xl"
      />
      <h2 className="font-semibold text-[18px] w-[300px] text-center mt-2">
        {product.title}
      </h2>

      <div className="flex items-center gap-2">
        {hasDiscount ? (
          <>
            <span className="text-gray-600 text-[16px] font-semibold line-through">
              ${product.originalPrice}
            </span>
            <span className="text-[18px] font-semibold text-red-600">
              ${product.discountedPrice}
            </span>
          </>
        ) : (
          <span className="text-[18px] font-semibold text-gray-800">
            ${product.originalPrice}
          </span>
        )}
      </div>

      <span className="flex items-center">
        {showAverageRating(product)}
      </span>
    </div>
  );
};

export default Product;
