import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const DropdownMenu = (props) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const liClass = "hover:text-blue-700 transition-all duration-300";

  return (
    <div className="absolute top-6 -right-3 bg-white h-auto w-48 rounded-md shadow-bigCustom">
      <ul className="pr-5">
        <li className={"mt-4 " + liClass}>
          <Link to="/">اولین آیتم</Link>
        </li>
        <li
          className="mt-4 relative"
          onMouseMove={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <Link
            to="/"
            className={"flex items-center justify-between " + liClass}
          >
            <span>آیتم چند سطحی</span>
            <Icon icon="bi:chevron-left" className="ml-3" />
          </Link>
          {showDropdown && (
            <div className="absolute bg-white shadow-bigCustom w-48 h-auto rounded-md right-[10.7rem] -top-3">
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
        <li className={"my-4 " + liClass}>
          <Link to="/">پنجمین آیتم</Link>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
