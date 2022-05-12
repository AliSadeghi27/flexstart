import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const DropdownSmallNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const liClass = "hover:text-blue-700 transition-all duration-300";

  return (
    <div className="bg-white w-10/12 shadow-bigCustom h-auto mx-auto mt-3">
      <ul className="pr-5">
        <li className={"pt-4 " + liClass}>
          <Link to="/">اولین آیتم</Link>
        </li>
        <li
          className="mt-4 relative"
          onClick={() => {
            setShowDropdown(!showDropdown);
          }}
        >
          <Link
            to="/"
            className={"flex items-center justify-between " + liClass}
          >
            <span>آیتم چند سطحی</span>
            <Icon icon="bi:chevron-left" className="ml-3" />
          </Link>
          {showDropdown && (
            <div className="bg-white shadow-bigCustom w-11/12 h-auto py-2 mt-2">
              <ul className="pr-5">
                <li className={"mt-4 " + liClass}>
                  <Link to="/">آیتم آزمایشی اول</Link>
                </li>
                <li className={"mt-4 " + liClass}>
                  <Link to="/">آیتم آزمایشی دوم</Link>
                </li>
                <li className={"mt-4 " + liClass}>
                  <Link to="/">آیتم آزمایشی سوم</Link>
                </li>
                <li className={"mt-4 " + liClass}>
                  <Link to="/">آیتم آزمایشی چهارم</Link>
                </li>
                <li className={"my-4 " + liClass}>
                  <Link to="/">آیتم آزمایشی پنجم</Link>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li className={"mt-4 " + liClass}>
          <Link to="/">سومین آیتم</Link>
        </li>
        <li className={"mt-4 " + liClass}>
          <Link to="/">چهارمین آیتم</Link>
        </li>
        <li className={"py-4 " + liClass}>
          <Link to="/">پنجمین آیتم</Link>
        </li>
      </ul>
    </div>
  );
};

export default DropdownSmallNavbar;
