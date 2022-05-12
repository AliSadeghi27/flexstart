import Logo from "./Logo";
import Navbar from "./Navbar";
import SmallNavbar from "./SmallNavbar";
import { useSelector } from "react-redux";

const Header = () => {
  const showSmallNavbar = useSelector((state) => state.smallNavbar.show);

  return (
    <>
      <header className="py-3 z-40 bg-white shadow-2xl fixed top-0 w-full">
        <div className="container px-4 mx-auto flex justify-between">
          <Logo />
          <Navbar />
        </div>
      </header>
      {showSmallNavbar && <SmallNavbar />}
    </>
  );
};

export default Header;
