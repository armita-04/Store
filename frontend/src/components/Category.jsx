// const Category = () => {
//   return (


    
//     <div className="flex items-center mt-8 m-3">
//       <div className="relative bg-[url('/serum.jpg')] bg-no-repeat bg-cover bg-center bg-slate h-[500px] w-[400px] flex items-center justify-center m-[20px]">        
//         <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-transparent"></div>
//         <div className="relative flex items-center justify-center">
//           <h2 className="font-semibold text-[30px] text-white">Serums</h2>
//         </div>
//       </div>
//       <div className="relative bg-[url('/serum1.jpg')] bg-no-repeat bg-cover bg-center bg-slate h-[500px] w-[400px] flex items-center justify-center m-[20px]">
//         <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-transparent"></div>
//         <div className="relative flex items-center justify-center">
//           <h2 className="font-semibold text-[30px] text-white">Toners</h2>
//         </div>
//       </div>

//       <div className="relative bg-[url('/lotion.jpg')] bg-no-repeat bg-cover bg-center bg-slate h-[500px] w-[400px] flex items-center justify-center m-[20px]">
//         <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-transparent"></div>
//         <div className="relative flex items-center justify-center">
//           <h2 className="font-semibold text-[30px] text-white">Lotions</h2>
//         </div>
//       </div>

//       <div className="relative bg-[url('/foundation.jpg')] bg-no-repeat bg-cover bg-center bg-slate h-[500px] w-[400px] flex items-center justify-center m-[20px]">
//         <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-transparent"></div>
//         <div className="relative flex items-center justify-center">
//           <h2 className="font-semibold text-[30px] text-white">Foundation</h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Category;

import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="w-full bg-gray-50 py-12 mb-5">
      
      <div className="max-w-[1600px] mx-auto flex flex-col items-center justify-center">
          <h2 className="text-[45px] mb-15 font-extrabold tracking-wide text-[#bfdbfe] drop-shadow-[2px_2px_2px_#3f3f46] transform hover:scale-110 transition-all duration-400">
          Categories
        </h2>
        
        

        <div className="flex flex-wrap justify-center gap-12">

          <Link to="/products/serums">
            <div className="relative bg-[url('/serum.jpg')] bg-no-repeat bg-cover bg-center h-[400px] w-[300px] rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="relative flex items-center justify-center h-full">
                <h2 className="text-white text-[26px] font-semibold drop-shadow-lg">Serums</h2>
              </div>
            </div>
          </Link>

          <Link to="/products/toners">
            <div className="relative bg-[url('/toner.jpg')] bg-no-repeat bg-cover bg-center h-[400px] w-[300px] rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="relative flex items-center justify-center h-full">
                <h2 className="text-white text-[26px] font-semibold drop-shadow-lg">Toners</h2>
              </div>
            </div>
          </Link>
          
          <Link to="/products/lotions">
            <div className="relative bg-[url('/lotion.jpg')] bg-no-repeat bg-cover bg-center h-[400px] w-[300px] rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="relative flex items-center justify-center h-full">
                <h2 className="text-white text-[26px] font-semibold drop-shadow-lg">Lotions</h2>
              </div>
            </div>
          </Link>

          <Link to="/products/foundation">
            <div className="relative bg-[url('/foundation.jpg')] bg-no-repeat bg-cover bg-center h-[400px] w-[300px] rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="relative flex items-center justify-center h-full">
                <h2 className="text-white text-[26px] font-semibold drop-shadow-lg">Foundations</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;

