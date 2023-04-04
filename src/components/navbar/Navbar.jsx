import { BiSearchAlt } from "react-icons/bi";
import { SlBasket } from "react-icons/sl";
import { BiHeart } from "react-icons/bi";
import { NavLink , Link} from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-white h-14 flex items-center justify-between w-full shadow-sm">
      <h1 className="uppercase text-xl ml-5 font-thin">e-commerce</h1>

      <div className="options">
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li>
         <NavLink to="/about">About</NavLink>
        </li>
      </div>

      <div className="w-[45%]">
        <input
          className="w-full py-2 px-4 outline-none border rounded-md"
          type="search"
          placeholder="Search..."
        />
      </div>

      <div className="flex list-none items-center justify-center h-full p-5">
        <li>
          <BiSearchAlt className="shop-icons" />
        </li>
        <li>
          <Link to="/cart"> <SlBasket className="shop-icons" /></Link>
        </li>
        <li>
          <BiHeart className="shop-icons" />
        </li>
      </div>
    </div>
  );
}
