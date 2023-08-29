import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <main className="w-full px-10 py-3 bg-slate-100 flex items-center justify-between">
        <h1 className="text-xl trackind-wide capitalize">reactjs Projects</h1>
        <i
          onClick={() => setToggler(true)}
          className={`uil uil-bars text-xl cursor-pointer md:hidden sm:visible `}
        ></i>
        <ul
          className={
            toggler
              ? "sidebar active bg-slate-100 flex items-center gap-6"
              : "sidebar flex items-center gap-6"
          }
        >
          <i
            onClick={() => setToggler(false)}
            className="close_icon uil uil-times text-2xl cursor-pointer md:hidden sm:visible "
          ></i>
          <li className="cursor-pointer capitalize border-b-2 border-transparent hover:border-black duration-400">
            <Link to="/todo">Todo-List</Link>
          </li>
          <li className="cursor-pointer capitalize border-b-2 border-transparent hover:border-black duration-400">
            <Link to="/bmi">bmi calculator</Link>
          </li>
          <li className="cursor-pointer capitalize border-b-2 border-transparent hover:border-black duration-400">
            <Link to="/weather">weather App</Link>
          </li>
        </ul>
      </main>
    </>
  );
};
export default Navbar;
