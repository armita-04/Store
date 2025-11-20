import React, { useEffect, useState } from "react"; //( i added chatGPT)
import Rating from "@mui/material/Rating"; //( i added chatGPT)
import { FaMinus, FaPlus } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { userRequest } from "../requestMethods";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addProduct } from "../redux/cartRedux";
import { showAverageRating } from "../components/Ratings";

const Product = () => {
  const [value, setValue] = useState(0); // 3 ستاره به عنوان مقدار اولیه (i added chatGPT's)
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  let price;

  const handleQuantity = (action) => {
    if (action === "dec") {
      setQuantity(quantity === 1 ? 1 : quantity - 1);
    }
    if (action === "inc") {
      setQuantity(quantity + 1);
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await userRequest.get("/products/find/" + id);

        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [id]);

  const handlePrice = (
    originalPrice,
    discountedPrice,
    wholePrice,
    minimumQuantity,
    quantity
  ) => {
    if (quantity > minimumQuantity && discountedPrice) {
      discountedPrice = wholePrice;

      price = discountedPrice;

      return price;
    } else if (quantity > minimumQuantity && originalPrice) {
      originalPrice = wholePrice;

      price = originalPrice;

      return price;
    } else if (discountedPrice) {
      price = discountedPrice;

      return price;
    } else {
      price = originalPrice;

      return price;
    }
  };

  const handleAddToCart = () => {
    dispatch(
      addProduct({
        ...product,
        quantity,
        price,
        email: "test.for.my.projects.1@gmail.com",
      })
    );
    toast.success("Product has been added to basket successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    console.log(cart);
  };

  return (
    <div className=" h-auto flex justify-stretch p-[30px]">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {/* LEFT */}
      <div className="flex-1 flex justify-center p-4 max-w-[600px]">
        <img
          src={product.img}
          alt="product"
          className="w-[80%] h-auto max-h-[600px] object-contain transition-transform duration-300 ease-in-out hover:scale-105 rounded-xl"
        />
      </div>

      {/* RIGHT */}
      <div className="flex flex-1 flex-col ml-10">
        <h2 className="text-[25px] font-semibold mb-[20px]">{product.title}</h2>
        <span className="">{product.desc}</span>
        <h2 className="font-semibold mt-2 text-[20px]">
          $
          {handlePrice(
            product.originalPrice,
            product.discountedPrice,
            product.wholesalePrice,
            product?.wholesaleMinimumQuantity,
            quantity
          )}
        </h2>
        <span className="flex items-center">{showAverageRating(product)}</span>

        <div className="h-52 w-96 border-2 border-gray-300 rounded-lg shadow-md my-4 p-6 ">
          <h2 className="flex items-center justify-center font-semibold text-lg text-gray-700 mb-4">
            WHAT'S IN THE BOX
          </h2>
          <hr className="mb-4 text-gray-300" />
          <span className="block text-gray-600 text-base text-[18px]">
            {product.title}
          </span>
        </div>

        <div className="inline-flex items-center bg-[#aed1fb] text-white font-semibold text-sm p-3  rounded-full shadow-md">
          Wholesale Availabe : ${product.wholesalePrice} as from{" "}
          {product.wholesaleMinimumQuantity} items{" "}
        </div>

        <div className="flex items-center my-5 p-4">
          <FaMinus
            className="bg-[#aed1fb] hover:bg-sky-600 text-white cursor-pointer p-2 rounded-full mr-2 text-3xl"
            onClick={() => handleQuantity("dec")}
          />
          <span className="text-lg font-semibold mx-4">{quantity}</span>
          <FaPlus
            className="bg-[#aed1fb] hover:bg-sky-600 text-white cursor-pointer p-2 rounded-full mr-3 text-3xl"
            onClick={() => handleQuantity("inc")}
          />
        </div>

        <button
          className="bg-[#aed1fb] hover:bg-sky-600 p-[10px] w-[200px] text-white cursor-pointer rounded-md"
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
        <hr className="my-6 text-gray-300" />

        <div className="flex flex-col">
          <h2 className="font-semibold text-[18px]">Reviews</h2>

          {product.ratings && product.ratings.length > 0 ? (
            product.ratings.map((r, index) => (
              <div
                className="flex flex-col mt-2 border-b border-gray-200 pb-2"
                key={index}
              >
                <div className="flex items-center">
                  <Rating
                    name="read-only"
                    value={parseFloat(r.star)}
                    readOnly
                    precision={0.1}
                  />
                  <span className="font-semibold ml-2">{r.name}</span>
                </div>
                <p className="text-gray-600 ml-2">{r.comment}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 mt-2">No reviews yet.</p>
          )}

          {product?.Rating?.map((Rating, index) => (
            <div className="flex items-center" key={index}>
              <Rating //( i added chatGPT's)
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }} //( i added chatGPT's)
              />
              {/* <span className="font-semibold ml-[20px]">{Rating.postedBy}</span> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;

// import React, { useEffect, useState } from "react";
// import Rating from "@mui/material/Rating";
// import { FaMinus, FaPlus } from "react-icons/fa";
// import { useLocation } from "react-router-dom";
// import { userRequest } from "../requestMethods";
// import { useDispatch, useSelector } from "react-redux";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { addProduct } from "../redux/cartRedux";

// const Product = () => {
//   const [product, setProduct] = useState({});
//   const [quantity, setQuantity] = useState(1);
//   const [price, setPrice] = useState(0);
//   const dispatch = useDispatch();
//   const cart = useSelector((state) => state.cart);

//   const location = useLocation();
//   const id = location.pathname.split("/")[2];

//   useEffect(() => {
//     const getProduct = async () => {
//       try {
//         const res = await userRequest.get("/products/find/" + id);
//         setProduct(res.data);

//         // مقدار اولیه قیمت
//         const initialPrice = res.data.discountedPrice || res.data.originalPrice || 0;
//         setPrice(initialPrice);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getProduct();
//   }, [id]);

//   const handleQuantity = (action) => {
//     if (action === "dec") setQuantity(quantity > 1 ? quantity - 1 : 1);
//     else if (action === "inc") setQuantity(quantity + 1);
//   };

//   useEffect(() => {
//     if (!product) return;
//     let calculatedPrice = product.discountedPrice || product.originalPrice || 0;
//     if (product.wholesalePrice && quantity >= product.wholesaleMinimumQuantity) {
//       calculatedPrice = product.wholesalePrice;
//     }
//     setPrice(calculatedPrice);
//   }, [quantity, product]);

//   const handleAddToCart = () => {
//     dispatch(
//       addProduct({
//         ...product,
//         quantity,
//         price,
//       })
//     );

//     toast.success("Product has been added to basket successfully!", {
//       position: "top-right",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//     });
//   };

//   return (
//     <div className="h-auto flex justify-stretch p-[30px]">
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//       />

//       {/* LEFT */}
//       <div className="flex-1 h-[500px] w-[600px]">
//         <img
//           src={product.img}
//           alt="product"
//           className="h-[100%] w-[100%] object-cover"
//         />
//       </div>

//       {/* RIGHT */}
//       <div className="flex flex-1 flex-col ml-10">
//         <h2 className="text-[25px] font-semibold mb-[20px]">{product.title}</h2>
//         <span>{product.desc}</span>
//         <h2 className="font-semibold mt-2 text-[20px]">${price}</h2>

//         {/* ستاره‌ها */}
//         <span className="flex items-center my-2">
//           <Rating
//             name="read-only"
//             value={
//               product.ratings && product.ratings.length > 0
//                 ? product.ratings.reduce((sum, r) => sum + parseFloat(r.star), 0) /
//                   product.ratings.length
//                 : 0
//             }
//             readOnly
//             precision={0.1}
//           />
//           <span className="ml-2 text-gray-600">
//             ({product.ratings ? product.ratings.length : 0} reviews)
//           </span>
//         </span>

//         <div className="h-52 w-96 border-2 border-gray-300 rounded-lg shadow-md my-4 p-6">
//           <h2 className="flex items-center justify-center font-semibold text-lg text-gray-700 mb-4">
//             WHAT'S IN THE BOX
//           </h2>
//           <hr className="mb-4 text-gray-300" />
//           <span className="block text-gray-600 text-base text-[18px]">{product.title}</span>
//         </div>

//         {product.wholesalePrice && (
//           <div className="inline-flex items-center bg-[#ef93db] text-white font-semibold text-sm p-3 rounded-full shadow-md my-2">
//             Wholesale Available: ${product.wholesalePrice} from {product.wholesaleMinimumQuantity} items
//           </div>
//         )}

//         <div className="flex items-center my-5 p-4">
//           <FaMinus
//             className="bg-[#ef93db] text-white cursor-pointer p-2 rounded-full mr-4 text-3xl"
//             onClick={() => handleQuantity("dec")}
//           />
//           <span className="text-lg font-semibold mx-4">{quantity}</span>
//           <FaPlus
//             className="bg-[#ef93db] text-white cursor-pointer p-2 rounded-full mr-4 text-3xl"
//             onClick={() => handleQuantity("inc")}
//           />
//         </div>

//         <button
//           className="bg-[#1e1e1e] p-[10px] w-[200px] text-white cursor-pointer"
//           onClick={handleAddToCart}
//         >
//           Add to cart
//         </button>

//         <hr className="my-6 text-gray-300" />

//         {/* Reviews */}
//         <div className="flex flex-col mt-6">
//           <h2 className="font-semibold text-[18px] mb-4">Reviews</h2>

//           {product.ratings && product.ratings.length > 0 ? (
//             product.ratings.map((r, index) => (
//               <div className="flex flex-col mt-2 border-b border-gray-200 pb-2" key={index}>
//                 <div className="flex items-center">
//                   <Rating name="read-only" value={parseFloat(r.star)} readOnly precision={0.1} />
//                   <span className="font-semibold ml-2">{r.name}</span>
//                 </div>
//                 <p className="text-gray-600 ml-2">{r.comment}</p>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-500 mt-2">No reviews yet.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;
