// import { useDispatch, useSelector } from "react-redux";
// import { logOut } from '../redux/userRedux';
// import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLock, FaSignOutAlt, FaSave } from 'react-icons/fa';
// import { Link } from "react-router-dom";

// const Myaccount = () => {
//   const user = useSelector((state) => state.user);
//   const dispatch = useDispatch();

//   const handleLogout = () => {
//     dispatch(logOut());
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white pt-24 pb-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-10">
//           <h1 className="text-3xl font-serif font-bold text-gray-800 mb-2">My Account</h1>
//           <p className="text-gray-600">Manage your personal information and account settings</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
//           {/* Account Information Section */}
//           <div className="p-8 border-b border-sky-100">
//             <div className="flex items-center mb-6">
//               <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mr-4">
//                 <FaUser className="text-sky-600 text-xl" />
//               </div>
//               <div>
//                 <h2 className="text-2xl font-serif font-bold text-gray-800">{user.currentUser?.name}</h2>
//                 <p className="text-gray-600">{user.currentUser?.email}</p>
//               </div>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
//             {/* Account Settings Section */}
//             <div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
//                 <FaUser className="text-sky-600 mr-2" />
//                 Personal Information
//               </h3>
//               <form className="space-y-5">
//                 <div>
//                   <label className="block text-gray-700 text-sm font-medium mb-2">Full Name</label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <FaUser className="text-gray-400" />
//                     </div>
//                     <input
//                       type="text"
//                       value={user.currentUser?.name}
//                       className="w-full pl-10 p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-colors duration-300"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 text-sm font-medium mb-2">Email Address</label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <FaEnvelope className="text-gray-400" />
//                     </div>
//                     <input
//                       type="email"
//                       value={user.currentUser?.email}
//                       className="w-full pl-10 p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-colors duration-300"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 text-sm font-medium mb-2">Phone Number</label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <FaPhone className="text-gray-400" />
//                     </div>
//                     <input
//                       type="text"
//                       value="+1 (555) 123-4567"
//                       className="w-full pl-10 p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-colors duration-300"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 text-sm font-medium mb-2">Address</label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <FaMapMarkerAlt className="text-gray-400" />
//                     </div>
//                     <input
//                       type="text"
//                       value="DownTown 123, Sydney"
//                       className="w-full pl-10 p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-colors duration-300"
//                     />
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full bg-blue-300 hover:bg-sky-700 text-white py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center"
//                 >
//                   <FaSave className="mr-2" />
//                   Save Changes
//                 </button>

//               <div className="bg-white rounded-2xl shadow-lg p-6 text-center transition-all duration-300 transform hover:scale-[1.04]">
//               <Link to={"/myorders"}>
//               <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
//               </svg>
//                </div>
//                 <div>
//                   Orders History
//                 </div>
//                 </Link>
//                 </div>
//               </form>
//             </div>

//             {/* Password Management Section */}
//             <div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
//                 <FaLock className="text-sky-600 mr-2" />
//                 Password & Security
//               </h3>
//               <form className="space-y-5">
//                 <div>
//                   <label className="block text-gray-700 text-sm font-medium mb-2">Current Password</label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <FaLock className="text-gray-400" />
//                     </div>
//                     <input
//                       type="password"
//                       className="w-full pl-10 p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-colors duration-300"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 text-sm font-medium mb-2">New Password</label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <FaLock className="text-gray-400" />
//                     </div>
//                     <input
//                       type="password"
//                       className="w-full pl-10 p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-colors duration-300"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 text-sm font-medium mb-2">Confirm New Password</label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <FaLock className="text-gray-400" />
//                     </div>
//                     <input
//                       type="password"
//                       className="w-full pl-10 p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-colors duration-300"
//                     />
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full bg-blue-100 hover:bg-blue-200 text-sky-700 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center"
//                 >
//                   Update Password
//                 </button>

//                 <button
//                   type="button"
//                   onClick={handleLogout}
//                   className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center mt-4"
//                 >
//                   <FaSignOutAlt className="mr-2" />
//                   Logout
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Myaccount;

import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  logOut,
} from "../redux/userRedux";
import { userRequest } from "../requestMethods";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLock,
  FaSignOutAlt,
  FaSave,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Myaccount = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  // --------------------------
  // Local state for form values
  // --------------------------
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  // set initial values once
  useEffect(() => {
    if (currentUser) {
      setFormData({
        name: currentUser.name || "",
        email: currentUser.email || "",
        phone: currentUser.phone || "",
        address: currentUser.address || "",
      });
    }
  }, [currentUser]);

  // controlled inputs
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // --------------------------
  // UPDATE USER INFORMATION
  // --------------------------
  const handleUpdateInfo = async (e) => {
    e.preventDefault();

    try {
      dispatch(updateUserStart());

      const res = await userRequest.put(`/users/${currentUser._id}`, formData);

      dispatch(updateUserSuccess(res.data));
      alert("Your information updated!");
    } catch (err) {
      dispatch(updateUserFailure());
      alert("Update failed");
    }
  };

  return (
    <div className="bg-gradient-to-b from-sky-50 to-white py-10  px-4 flex justify-center">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow p-8">
        <h2 className="text-3xl font-bold mb-6">My Account</h2>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-10">
          {/* LEFT: INFO FORM */}
          <form onSubmit={handleUpdateInfo} className="space-y-5">
            <h3 className="text-xl font-semibold mb-4">Personal Information</h3>

            <input
              name="name"
              placeholder="Full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-colors duration-300"
            />

            <input
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-colors duration-300"
            />

            <input
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-colors duration-300"
            />

            <input
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-colors duration-300"
            />
            <button className="w-full bg-blue-300 hover:bg-sky-700 text-white py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center">
              Save Changes
            </button>

            <div className="h-30 bg-white rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-[1.04] hover:bg-sky-50 relative flex items-center justify-center ">
              <Link
                to={"/myorders"}
                className="h-full w-full flex items-center justify-center"
              >
                {/* Icon fixed on the left */}
                <div className="absolute left-4 flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-sky-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      ></path>
                    </svg>
                  </div>
                </div>

                {/* Center text */}
                <div className="text-lg text-center">Orders History</div>
              </Link>
            </div>
          </form>
        </div>

        <button
          onClick={() => dispatch(logOut())}
          className="w-full mt-6 bg-gray-100 hover:bg-gray-300 text-gray-700 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center"
        >
          <FaSignOutAlt className="mr-2" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Myaccount;
