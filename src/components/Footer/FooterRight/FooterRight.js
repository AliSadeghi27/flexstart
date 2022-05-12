import Logo from "../../Header/HeaderTop/Logo";
import { Icon } from "@iconify/react";

const FooterRight = () => {
  return (
    <div className="flex w-11/12 flex-col my-[4rem] mx-auto md:mb-0 lg:w-5/12 xl:ml-2 xl:mr-[7rem]">
      <Logo />
      <p className="my-3 text-sm text-gray-700">
        این یک نوشته آزمایشی است که به طراحان و برنامه نویسان کمک میکند تا
        بتوانند نمونه تکمیل شده از پروژه خود را به کارفرما نمایش دهند، استفاده
        از این متن تستی می‌تواند سرعت پیشرفت پروژه را افزایش دهد.
      </p>
      <div className="flex justify-between w-5/12 md:w-1/6 lg:w-1/3">
        <a href="#">
          <Icon
            icon="bi:twitter"
            width="20"
            className="text-[#01297080] hover:text-[#012970] transition-all duration-300"
          />
        </a>
        <a href="#">
          <Icon
            icon="bi:facebook"
            width="20"
            className="text-[#01297080] hover:text-[#012970] transition-all duration-300"
          />
        </a>
        <a href="#">
          <Icon
            icon="bi:instagram"
            width="20"
            className="text-[#01297080] hover:text-[#012970] transition-all duration-300"
          />
        </a>
        <a href="#">
          <Icon
            icon="bi:linkedin"
            width="20"
            className="text-[#01297080] hover:text-[#012970] transition-all duration-300"
          />
        </a>
      </div>
    </div>
  );
};

export default FooterRight;
