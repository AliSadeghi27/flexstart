import { useDispatch } from "react-redux";
import { smallNavbarAction, menuIconAction } from "../../../store/index";
import { Icon } from "@iconify/react";
import { useState } from "react";
import DropdownSmallNavbar from "./DropdownSmallNavbar";
import { Link } from "react-router-dom";

const SmallNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const liClass = "hover:text-blue-700 transition-all duration-300 mr-4 mt-4";
  const dispatch = useDispatch();
  const smallNavbarHandler = () => {
    dispatch(smallNavbarAction.hide());
    dispatch(menuIconAction.show());
  };

  return (
    <div className="justify-center flex">
      <div
        className="z-40 flex fixed top-0 bg-[#01163DE6] h-screen w-full"
        onClick={smallNavbarHandler}
      ></div>
      <button className="z-50 fixed top-5 left-4" onClick={smallNavbarHandler}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          className="bi bi-x"
          viewBox="0 0 16 16"
        >
          {" "}
          <path
            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
            fill="#fff"
          ></path>{" "}
        </svg>
      </button>
      <nav className="bg-white z-50 opacity-100 fixed top-16 w-11/12 h-4/5 rounded-xl overflow-y-auto">
        <ul className="flex text-[#012970] flex-col font-bold">
          <li className={liClass}>
            <Link to="/">خانه</Link>
          </li>
          <li className={liClass}>
            <Link to="/">درباره ما</Link>
          </li>
          <li className={liClass}>
            <Link to="/">خدمات</Link>
          </li>
          <li className={liClass}>
            <Link to="/">نمونه‌کارها</Link>
          </li>
          <li className={liClass}>
            <Link to="/">تیم ما</Link>
          </li>
          <li className={liClass}>
            <Link to="/">وبلاگ</Link>
          </li>
          <li>
            <Link
              to="/"
              className={"flex items-center justify-between " + liClass}
              onClick={() => {
                setShowDropdown(!showDropdown);
              }}
            >
              <span>منوی کشویی</span>
              <Icon icon="bi:chevron-down" width="12" className="ml-4" />
            </Link>
            {showDropdown && <DropdownSmallNavbar />}
          </li>
          <li className={liClass}>
            <Link to="/">تماس با ما</Link>
          </li>
          <li className="bg-blue-800 text-white px-6 py-2 mb-6 rounded-md mx-4 mt-4 transition-all duration-300 hover:opacity-80">
            <Link to="/">بزن بریم!</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SmallNavbar;
