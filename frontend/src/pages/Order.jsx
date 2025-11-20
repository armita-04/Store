import { FaCheckCircle } from "react-icons/fa";
import  { useEffect, useState } from "react"; //( i added chatGPT's)
import Rating from "@mui/material/Rating"; //( i added chatGPT's)
import { userRequest } from "../requestMethods";
import { useDispatch, useSelector } from "react-redux";


const Order = () => {
  const [value, setValue] = useState(0); // (i added chatGPT's)
  const user = useSelector((state) => state.user);
  const [orders, setOrders] = useState([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();


  useEffect(() => {
    const getUserOrder = async () => {
      try {
        const res = await userRequest.get(
          `/orders/find/${user.currentUser._id}`
        );
        setOrders(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUserOrder();
  }, [user]);

  const handleRating = async (id) => {
    const singleRating = {
      star: value,
      name: user.currentUser.name,
      postedBy: user.currentUser.name,
      comment: comment,
    };
    try {
      await userRequest.put(`/products/rating/${id}`, singleRating);
      setComment("");
      setValue(0); // GPT
      // setRating(0);
    } catch (error) {
      console.log(error);
    }
  }
  

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="text-center mb-8">
          <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
          <h1 className="text-3xl font-bold">Thank You for Your Orders!</h1>
          <p className="text-gray-600 mt-2">
            Here are the details of your recent orders.
          </p>
        </div>

        {orders.map((order, index) => (
          <div className="mb-8" key={index}>
            <h2 className="text-2xl font-semibold mb-4">Order #{order._id} </h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Items Ordered</h3>

                <div className="flex flex-col">
                  {order.products.map((product, index) => (
                    <div className="mb-4" key={index}>
                      <div className="flex items-center justify-evenly border-b border-gray-200 pb-4">
                        <img
                          src={product.img}
                          alt="product"
                          className="h-24 w-24 rounded-md object-contain"
                        />
                        <div className="flex-1 ml-4">
                          <h4 className="text-lg font-semibold">
                            {product.title}
                          </h4>
                          <p className="text-gray-600">{product.quantity}</p>
                        </div>

                        <div className="text-right">
                          <p className="text-lg font-bold">${product.price}</p>
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <h3 className="my-3">Rate this product</h3>
                                              
                        <Rating //( i added chatGPT's)
                          name="simple-controlled"
                          value={value}
                          precision={0.1}
                          onChange={(event, newValue) => {
                            setValue(newValue);
                          }} 
                        />
                        <textarea
                          name=""
                          id=""
                          placeholder="leave a message"
                          className="p-[10px] w-[300px] mt-3 bg-white"
                          onChange={(e) => setComment(e.target.value)}
                        />
                        <button className="bg-[#aed1fb] rounded-md transition-transform duration-500 hover:scale-105 hover:bg-blue-600 mt-3 w-[200px] p-[5px] text-white" onClick={()=> handleRating(product._id)}>
                          Submit
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

 


        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Shipping Information</h3>
          <p className="text-gray-600">{user.currentUser.email}</p>
          <p className="text-gray-600">{user.currentUser.name}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg my-2">
          <h3 className="text-xl font-semibold mb-2">Payment Method</h3>
          <p className="text-gray-600">VISA</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg ">
          <h3 className="text-2xl font-semibold mb-2">Order summary</h3>
          <div className="flex justify-between mb-2">
            <span className="text-lg font-medium">Subtotal:</span>
            <span className="text-lg font-semibold">${cart.products.reduce((total, item) => total + item.price * item.quantity, 0)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-lg font-medium">Shipping:</span>
            <span className="text-lg font-semibold">$10</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-lg font-medium">Total:</span>
            <span className="text-lg font-semibold">${cart.products.reduce((total, item) => total + item.price * item.quantity, 0) + 10}</span>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button className="bg-[#aed1fb] text-white p-3 rounded-lg font-semibold">
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;


// import { FaCheckCircle } from "react-icons/fa";
// import { useEffect, useState } from "react";
// import Rating from "@mui/material/Rating";
// import { userRequest } from "../requestMethods";
// import { useSelector } from "react-redux";

// const Order = () => {
//   const [value, setValue] = useState(0);
//   const [comment, setComment] = useState("");
//   const [orders, setOrders] = useState([]);
//   const user = useSelector((state) => state.user);

//   useEffect(() => {
//     const getUserOrder = async () => {
//       try {
//         const res = await userRequest.get(
//           `/orders/find/${user.currentUser._id}`
//         );
//         setOrders(res.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getUserOrder();
//   }, [user]);

//   // اضافه شده: ثبت سفارش بعد از پرداخت موفق
//   const createOrder = async (products, amount, address) => {
//     const orderData = {
//       userId: user.currentUser._id,
//       products: products.map((p) => ({
//         productId: p._id,
//         quantity: p.quantity,
//         price: p.price,
//         img: p.img,
//         title: p.title
//       })),
//       amount: amount,
//       address: address,
//       paymentStatus: "Paid",
//     };

//     try {
//       const res = await userRequest.post("/orders", orderData);
//       console.log("Order saved:", res.data);
//       setOrders((prev) => [...prev, res.data]); // اضافه کردن سفارش جدید به state
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   // فرض بر این است که این تابع بعد از پرداخت موفق استرایپ صدا زده می‌شود
//   const handlePaymentSuccess = () => {
//     const totalAmount = orders.reduce(
//       (acc, order) =>
//         acc + order.products.reduce((sum, p) => sum + p.price * p.quantity, 0),
//       0
//     );
//     const address = user.currentUser.address || "No address provided";
//     createOrder(orders.flatMap(o => o.products), totalAmount, address);
//   };

//   const handleRating = async (id) => {
//     const singleRating = {
//       star: value,
//       name: user.currentUser.name,
//       postedBy: user.currentUser.name,
//       comment: comment,
//     };
//     try {
//       await userRequest.put(`/products/rating/${id}`, singleRating);
//       setComment("");
//       setValue(0);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
//         <div className="text-center mb-8">
//           <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
//           <h1 className="text-3xl font-bold">Thank You for Your Orders!</h1>
//           <p className="text-gray-600 mt-2">
//             Here are the details of your recent orders.
//           </p>
//         </div>

//         {orders.map((order, index) => (
//           <div className="mb-8" key={index}>
//             <h2 className="text-2xl font-semibold mb-4">Order #{order._id} </h2>
//             <div className="space-y-4">
//               <div className="bg-gray-50 p-4 rounded-lg">
//                 <h3 className="text-xl font-semibold mb-2">Items Ordered</h3>

//                 <div className="flex flex-col">
//                   {order.products.map((product, index) => (
//                     <div className="mb-4" key={index}>
//                       <div className="flex items-center justify-evenly border-b border-gray-200 pb-4">
//                         <img
//                           src={product.img}
//                           alt="product"
//                           className="h-24 w-24 rounded-md object-cover"
//                         />
//                         <div className="flex-1 ml-4">
//                           <h4 className="text-lg font-semibold">{product.title}</h4>
//                           <p className="text-gray-600">{product.quantity}</p>
//                         </div>

//                         <div className="text-right">
//                           <p className="text-lg font-bold">${product.price}</p>
//                         </div>
//                       </div>

//                       <div className="flex flex-col">
//                         <h3 className="my-3">Rate this product</h3>
//                         <Rating
//                           name="simple-controlled"
//                           value={value}
//                           precision={0.1}
//                           onChange={(event, newValue) => setValue(newValue)}
//                         />
//                         <textarea
//                           placeholder="leave a message"
//                           className="p-[10px] w-[300px] mt-3 bg-white"
//                           onChange={(e) => setComment(e.target.value)}
//                         />
//                         <button
//                           className="bg-[#1e1e1e] mt-3 w-[200px] p-[5px] text-white"
//                           onClick={() => handleRating(product._id)}
//                         >
//                           Submit
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}

//         <div className="bg-gray-50 p-4 rounded-lg">
//           <h3 className="text-xl font-semibold mb-2">Shipping Information</h3>
//           <p className="text-gray-600">{user.currentUser.email}</p>
//           <p className="text-gray-600">{user.currentUser.phone}</p>
//           <p className="text-gray-600">{user.currentUser.name}</p>
//         </div>

//         <div className="bg-gray-50 p-4 rounded-lg my-2">
//           <h3 className="text-xl font-semibold mb-2">Payment Method</h3>
//           <p className="text-gray-600">VISA</p>
//         </div>

//         <div className="bg-gray-50 p-4 rounded-lg ">
//           <h3 className="text-xl font-semibold mb-2">Order summary</h3>
//           <div className="flex justify-between mb-2">
//             <span className="text-lg font-medium">Subtotal:</span>
//             <span className="text-lg font-semibold">$720</span>
//           </div>
//           <div className="flex justify-between mb-2">
//             <span className="text-lg font-medium">Shipping:</span>
//             <span className="text-lg font-semibold">$10</span>
//           </div>
//           <div className="flex justify-between mb-2">
//             <span className="text-lg font-medium">Total:</span>
//             <span className="text-lg font-semibold">$730</span>
//           </div>
//         </div>

//         <div className="mt-8 text-center">
//           <button
//             className="bg-[#ef93db] text-white p-3 rounded-lg font-semibold"
//             onClick={handlePaymentSuccess} // اضافه شد
//           >
//             Continue Shopping
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Order;

// import { FaCheckCircle } from "react-icons/fa";
// import { useEffect, useState } from "react";
// import Rating from "@mui/material/Rating";
// import { userRequest } from "../requestMethods";
// import { useSelector } from "react-redux";

// const Order = () => {
//   const [value, setValue] = useState(0);
//   const [comment, setComment] = useState("");
//   const [orders, setOrders] = useState([]);

//   const user = useSelector((state) => state.user);
//   const cart = useSelector((state) => state.cart); // فرض بر این است که cart در redux وجود دارد

//   // Fetch orders
//   useEffect(() => {
//     const getUserOrder = async () => {
//       try {
//         const res = await userRequest.get(`/orders/find/${user.currentUser._id}`);
//         setOrders(res.data); // حتی اگر خالی باشد، آرایه خالی می‌آید
//       } catch (error) {
//         console.log("Error fetching orders:", error);
//         setOrders([]); // برای اطمینان
//       }
//     };
//     if (user.currentUser?._id) getUserOrder();
//   }, [user]);

//   // ثبت سفارش بعد از پرداخت موفق
//   const createOrder = async (products, amount, address) => {
//     if (!products || products.length === 0) return;

//     const orderData = {
//       userId: user.currentUser._id,
//       products: products.map((p) => ({
//         productId: p._id,
//         quantity: p.quantity,
//         price: p.price,
//         img: p.img,
//         title: p.title,
//       })),
//       amount: amount,
//       address: address,
//       paymentStatus: "Paid",
//     };

//     try {
//       const res = await userRequest.post("/orders", orderData);
//       console.log("Order saved:", res.data);
//       setOrders((prev) => [...prev, res.data]); // اضافه کردن سفارش جدید
//     } catch (err) {
//       console.log("Error saving order:", err);
//     }
//   };

//   // فرض بر این است که این تابع بعد از پرداخت موفق صدا زده می‌شود
//   const handlePaymentSuccess = async () => {
//     if (!cart.products || cart.products.length === 0) return;

//     const address = user.currentUser.address || "No address provided";
//     const totalAmount = cart.total || cart.products.reduce((acc, p) => acc + p.price * p.quantity, 0);

//     await createOrder(cart.products, totalAmount, address);
//   };

//   // ثبت rating
//   const handleRating = async (id) => {
//     if (value === 0 && comment.trim() === "") return;

//     const singleRating = {
//       star: value,
//       name: user.currentUser.name,
//       postedBy: user.currentUser.name,
//       comment: comment,
//     };

//     try {
//       await userRequest.put(`/products/rating/${id}`, singleRating);
//       setComment("");
//       setValue(0);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
//         <div className="text-center mb-8">
//           <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
//           <h1 className="text-3xl font-bold">Thank You for Your Orders!</h1>
//           <p className="text-gray-600 mt-2">
//             Here are the details of your recent orders.
//           </p>
//         </div>

//         {orders.length === 0 && (
//           <p className="text-center text-gray-500">You have no orders yet.</p>
//         )}

//         {orders.map((order, index) => (
//           <div className="mb-8" key={order._id || index}>
//             <h2 className="text-2xl font-semibold mb-4">Order #{order._id}</h2>
//             <div className="space-y-4">
//               <div className="bg-gray-50 p-4 rounded-lg">
//                 <h3 className="text-xl font-semibold mb-2">Items Ordered</h3>
//                 <div className="flex flex-col">
//                   {order.products.map((product, index) => (
//                     <div className="mb-4" key={index}>
//                       <div className="flex items-center justify-evenly border-b border-gray-200 pb-4">
//                         <img
//                           src={product.img}
//                           alt={product.title}
//                           className="h-24 w-24 rounded-md object-cover"
//                         />
//                         <div className="flex-1 ml-4">
//                           <h4 className="text-lg font-semibold">{product.title}</h4>
//                           <p className="text-gray-600">Quantity: {product.quantity}</p>
//                         </div>
//                         <div className="text-right">
//                           <p className="text-lg font-bold">${product.price}</p>
//                         </div>
//                       </div>

//                       <div className="flex flex-col mt-3">
//                         <h3 className="mb-2">Rate this product</h3>
//                         <Rating
//                           name="simple-controlled"
//                           value={value}
//                           precision={0.1}
//                           onChange={(event, newValue) => setValue(newValue)}
//                         />
//                         <textarea
//                           placeholder="Leave a message"
//                           className="p-[10px] w-[300px] mt-3 bg-white border border-gray-300 rounded-md"
//                           value={comment}
//                           onChange={(e) => setComment(e.target.value)}
//                         />
//                         <button
//                           className="bg-[#1e1e1e] mt-3 w-[200px] p-[5px] text-white rounded-md"
//                           onClick={() => handleRating(product._id)}
//                         >
//                           Submit
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}

//         <div className="bg-gray-50 p-4 rounded-lg">
//           <h3 className="text-xl font-semibold mb-2">Shipping Information</h3>
//           <p className="text-gray-600">{user.currentUser.email}</p>
//           <p className="text-gray-600">{user.currentUser.phone}</p>
//           <p className="text-gray-600">{user.currentUser.name}</p>
//         </div>

//         <div className="bg-gray-50 p-4 rounded-lg my-2">
//           <h3 className="text-xl font-semibold mb-2">Payment Method</h3>
//           <p className="text-gray-600">VISA</p>
//         </div>

//         <div className="bg-gray-50 p-4 rounded-lg">
//           <h3 className="text-xl font-semibold mb-2">Order summary</h3>
//           <div className="flex justify-between mb-2">
//             <span className="text-lg font-medium">Subtotal:</span>
//             <span className="text-lg font-semibold">
//               ${cart.total || 0}
//             </span>
//           </div>
//           <div className="flex justify-between mb-2">
//             <span className="text-lg font-medium">Shipping:</span>
//             <span className="text-lg font-semibold">$10</span>
//           </div>
//           <div className="flex justify-between mb-2">
//             <span className="text-lg font-medium">Total:</span>
//             <span className="text-lg font-semibold">
//               ${cart.total ? cart.total + 10 : 10}
//             </span>
//           </div>
//         </div>

//         <div className="mt-8 text-center">
//           <button
//             className="bg-[#ef93db] text-white p-3 rounded-lg font-semibold"
//             onClick={handlePaymentSuccess}
//           >
//             Complete Order
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Order;


