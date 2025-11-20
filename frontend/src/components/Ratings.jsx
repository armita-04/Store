// import { useState } from "react"; //( i added chatGPT's)
// import Rating from "@mui/material/Rating"; //( i added chatGPT's)


// export const showAverageRating = (p) => {

//   if (p && p.ratings) {
//     let ratingsArray = p && p.ratings;

//     let total = [];

//     let length = ratingsArray.length;
//     ratingsArray.map((r) => total.push(r.star));
//     let totalReduced = total.reduce((p, n) => p + n, 0);
//     let highest = length * 5;
//     let result = (totalReduced * 5) / highest;

//     return (
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           margin: "5px",
//         }}
//       >
//         {result ? (
//           <span>
//             <Rating //( i added chatGPT's)
//               name="read-only"
//               value={result}
//               precision={0.1}
//               readOnly              
//             />
//             ({length})
//           </span>
//         ) : (
//           ""
//         )}
//       </div>
//     );
//   }
// };


import Rating from "@mui/material/Rating";

export const showAverageRating = (product) => {
  if (!product || !product.ratings || product.ratings.length === 0) {
    return <div className="text-gray-500" style={{ textAlign: "center", margin: "5px" }}>No ratings</div>;
  }

  const ratingsArray = product.ratings;

  // تبدیل هر star به عدد و جمع
  const totalReduced = ratingsArray.reduce(
    (sum, r) => sum + parseFloat(r.star || 0),
    0
  );

  const length = ratingsArray.length;
  const highest = length * 5;
  const result = (totalReduced * 5) / highest;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "5px",
      }}
    >
      <Rating name="read-only" value={result} precision={0.1} readOnly />
      <span style={{ marginLeft: "5px" }}>({length})</span>
    </div>
  );
};
