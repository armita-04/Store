import { FaSearch, FaUser } from "react-icons/fa";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useSelector } from "react-redux";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [search, setSearch] = useState("");
  const cart = useSelector((state) => state.cart)
  const user = useSelector((state) => state.user);

  return (
    <div className="flex items-center justify-between h-[100px] shadow-md px-6">
      <Link to="/">
        <div className="cursor-pointer">
          <img src="/blisslogo3.jpg" alt="logo" height="200px" width="200px"/>
        </div>
      </Link>

      <div className="flex items-center m-2">
        <input
          type="text"
          placeholder="search"
          className="p-[15px] border-2 border-[#bfdbfe] border-solid w-[500px] outline-none rounded-lg mr-[-30px] focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-colors duration-300"
          onChange={(e) => setSearch(e.target.value)}
        />

        <Link to={`/products/${search}`}>
          <FaSearch className="text-[20px] cursor-pointer text-blue-200 hover:text-sky-600 transition duration-300"/>
        </Link>
      </div>

      <div className="flex items-center">
        <Link to="/cart">
          <div className="mr-[20px] cursor-pointer ">
            <Badge badgeContent={cart.quantity} color="primary">
              <ShoppingBasketIcon className="text-[#7dd3fc] hover:text-sky-600 transition duration-300"
              style={{ transition: "color 0.3s ease-in-out" }}
              />
            </Badge>
          </div>
        </Link>

        <Link to="/login">
          <div className="flex items-center cursor-pointer space-x-2 border  border-blue-300 p-2 rounded-lg hover:border-1 hover:bg-gray-100 duration-300">
            <FaUser className="text-[#7dd3fc]  transition duration-300" />
            {!user.currentUser ?
             <span className="text-[#7dd3fc] font-semibold">
              Login
            </span> :
            <Link to={"/Myaccount"}>
            <span className="text-[#7dd3fc] transition duration-300 font-semibold">{user.currentUser.name}</span>
            </Link>
            }            
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
