import { useSelector, useDispatch } from "react-redux";
import { smallNavbarAction, menuIconAction } from "../../../store/index";
import { Icon } from "@iconify/react";
import DropdownMenu from "./DropdownMenu";
import { useState } from "react";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const liClass = "hover:text-blue-700 transition-all duration-300 mr-7";
  const dispatch = useDispatch();
  const showMenuIcon = useSelector((state) => state.menuIcon.show);
  const smallNavbarHandler = () => {
    dispatch(smallNavbarAction.show());
    dispatch(menuIconAction.hide());
  };

  return (
    <>
      <nav className="hidden lg:block">
        <ul className="flex text-blue-900 font-bold items-center">
          <li className={liClass}>
            <a href="#">خانه</a>
          </li>
          <li className={liClass}>
            <a href="#">درباره ما</a>
          </li>
          <li className={liClass}>
            <a href="#">خدمات</a>
          </li>
          <li className={liClass}>
            <a href="#">نمونه‌کارها</a>
          </li>
          <li className={liClass}>
            <a href="#">تیم ما</a>
          </li>
          <li className={liClass}>
            <a href="#">وبلاگ</a>
          </li>
          <li
            className="relative h-auto"
            onMouseMove={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <a href="#" className={"flex items-center " + liClass}>
              <span>منوی کشویی</span>
              <Icon icon="bi:chevron-down" width="12" className="mr-1" />
            </a>
            {showDropdown && <DropdownMenu />}
          </li>
          <li className={liClass}>
            <a href="#">تماس با ما</a>
          </li>
          <li className="bg-blue-600 text-white px-6 py-2 rounded-md mr-7 transition-all duration-300 hover:opacity-80">
            <a href="#">بزن بریم!</a>
          </li>
        </ul>
      </nav>
      {showMenuIcon && (
        <button className="pb-3 lg:hidden" onClick={smallNavbarHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            {" "}
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              fill="#1e3a8a"
            ></path>{" "}
          </svg>
        </button>
      )}
    </>
  );
};

export default Navbar;
