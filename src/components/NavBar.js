import { NavLink, Link } from "react-router-dom";

function NavBar({ open, setOpen }) {
  return (
    <div className="shadow-md w-full fixed h-4 top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-orange-300"
        >
          <Link to="/" className="cursor-pointer">
            OnlineStore
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl text-black absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-16 " : "top-[-490px]"
          }`}
        >
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <NavLink
              to="/products"
              className="text-gray-800 hover:text-orange-400 duration-500 aria-[current=page]:text-orange-400"
            >
              Products
            </NavLink>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <NavLink
              to="/search"
              className="text-gray-800 hover:text-orange-400 duration-500 aria-[current=page]:text-orange-400"
            >
              Search
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
