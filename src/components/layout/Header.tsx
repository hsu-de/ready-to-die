import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className=" flex w-full py-10 px-4 items-center justify-between">
      <NavLink to="/" end>
        <h1 className="text-xl font-bold">DE</h1>
      </NavLink>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        <NavLink
          to="qua-qua-lu"
          className={({ isActive }) =>
            isActive
              ? " text-blue-500 font-bold"
              : " hover:text-blue-400 font-bold"
          }
        >
          QuaQua
        </NavLink>
        <NavLink
          to="lottie"
          className={({ isActive }) =>
            isActive
              ? " text-blue-500 font-bold"
              : " hover:text-blue-400 font-bold"
          }
        >
          Lottie
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
