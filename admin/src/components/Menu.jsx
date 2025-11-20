import {
  FaBox,
  FaChartBar,
  FaClipboard,
  FaClipboardList,
  FaCog,
  FaElementor,
  FaHdd,
  FaHome,
  FaSignOutAlt,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Products from "../pages/Products";
const Menu = () => {
  return (
    <div className="h-[100vh] bg-gray-100 p-[20px] w-[350px] shadow-lg">
      <ul className="flex flex-col items-start justify-start mt-[20px] pl-[20px]">
        <Link to={"/"}>
          <li className="flex items-center text-[20px] cursor-pointer mt-[20px] hover:font-semibold transition-transform duration-300 hover:scale-105">
          <FaHome className="mr-[15px] text-blue-300" />
          Home
        </li>
        </Link>
          
         <li className="flex items-center text-[20px] cursor-pointer mt-[20px] hover:font-semibold transition-transform duration-300 hover:scale-105">
          <FaUser className="mr-[15px] text-blue-300" />
          Profile
        </li>
         
        <hr className="w-full my-[20px] border-gray-300" />

        <Link to="/users">
          <li className="flex items-center text-[20px] cursor-pointer mt-[20px] hover:font-semibold transition-transform duration-300 hover:scale-105">
            <FaUsers className="mr-[15px] text-blue-300" />
            Users
          </li>
        </Link>

        <Link to="/products">
          <li className="flex items-center text-[20px] cursor-pointer mt-[20px] hover:font-semibold transition-transform duration-300 hover:scale-105">
            <FaBox className="mr-[15px] text-blue-300" />
            Products
          </li>
        </Link>

        <Link to="/orders">
          <li className="flex items-center text-[20px] cursor-pointer mt-[20px] hover:font-semibold transition-transform duration-300 hover:scale-105">
            <FaClipboardList className="mr-[15px] text-blue-300" />
            Orders
          </li>
        </Link>

        <hr className="w-full my-[20px] border-gray-300" />
        <Link to="/banners">
        <li className="flex items-center text-[20px] cursor-pointer mt-[20px] hover:font-semibold transition-transform duration-300 hover:scale-105">
          <FaElementor className="mr-[15px] text-blue-300" />
          Banners
        </li>
        </Link>
        
        <li className="flex items-center text-[20px] cursor-pointer mt-[20px] transition-colors duration-100">
          <FaCog className="mr-[15px] text-blue-300" />
          Settings
        </li>
        <li className="flex items-center text-[20px] cursor-pointer mt-[20px] transition-colors duration-100">
          <FaHdd className="mr-[15px] text-blue-300" />
          Backups
        </li>
        <hr className="w-full my-[20px] border-gray-300" />
        <li className="flex items-center text-[20px] cursor-pointer mt-[20px] transition-colors duration-100">
          <FaChartBar className="mr-[15px] text-blue-300" />
          Charts
        </li>
        <li className="flex items-center text-[20px] cursor-pointer mt-[20px] transition-colors duration-100">
          <FaClipboard className="mr-[15px] text-blue-300" />
          All logs
        </li>
        
        <li className="flex items-center text-[20px] cursor-pointer mt-[20px] transition-colors duration-100">
          <FaSignOutAlt className="mr-[15px] text-blue-300" />
          Logout
        </li>
        
      </ul>
    </div>
  );
};

export default Menu;
