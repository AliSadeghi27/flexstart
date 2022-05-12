import FooterBottom from "./FooterBottom/FooterBottom";
import FooterLeft from "./FooterLeft/FooterLeft";
import FooterRight from "./FooterRight/FooterRight";

const Footer = () => {
  return (
    <>
      <div className="flex justify-between flex-col h-auto lg:flex-row lg:mx-4 border-y">
        <FooterRight />
        <FooterLeft />
      </div>
      <FooterBottom />
    </>
  );
};

export default Footer;
