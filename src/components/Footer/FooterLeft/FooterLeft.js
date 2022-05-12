import { Icon } from "@iconify/react";

const FooterLeft = () => {
  const liContentOne = [
    { id: 1, content: "خانه" },
    { id: 2, content: "درباره ما" },
    { id: 3, content: "خدمات" },
    { id: 4, content: "شرایط استفاده از خدمات" },
    { id: 5, content: "سیاست حفظ حریم خصوصی" },
  ];
  const liContentTwo = [
    { id: 1, content: "طراحی وب" },
    { id: 2, content: "توسعه وب" },
    { id: 3, content: "مدیریت تولید" },
    { id: 4, content: "بازاریابی" },
    { id: 5, content: "طراحی گرافیک" },
  ];

  return (
    <div className="w-11/12 mx-auto bg-[url(https://flexstart.anjili.ir/FlexStart/assets/img/footer-bg.png)] justify-between flex bg-no-repeat bg-contain bg-bottom flex-wrap items-center h-[30rem] lg:flex-nowrap lg:w-7/12 lg:-mt-[4.5rem]">
      <ul className="h-52 flex flex-col justify-between w-40">
        <li>
          <h4 className="font-bold text-[#012970]">پیوند‌های مفید</h4>
        </li>
        {liContentOne.map((item) => (
          <li
            className="flex items-center text-sm text-[#013289]"
            key={item.id}
          >
            <Icon icon="bi:chevron-left" color="#d0d4fc" />
            <a
              href="#"
              className="hover:text-[#4154f1] transition-all duration-300"
            >
              {item.content}
            </a>
          </li>
        ))}
      </ul>

      <ul className="h-52 flex flex-col justify-between ml-10">
        <li>
          <h4 className="font-bold text-[#012970]">خدمات ما</h4>
        </li>
        {liContentTwo.map((item) => (
          <li
            className="flex items-center text-sm text-[#013289]"
            key={item.id}
          >
            <Icon icon="bi:chevron-left" color="#d0d4fc" />
            <a
              href="#"
              className="hover:text-[#4154f1] transition-all duration-300"
            >
              {item.content}
            </a>
          </li>
        ))}
      </ul>

      <div className="h-52 flex flex-col justify-between mx-auto xl:mr-0 xl:ml-[8rem]">
        <ul className="h-[8.35rem] flex flex-col justify-between">
          <li>
            <h4 className="font-bold text-[#012970]">با ما تماس بگیرید</h4>
          </li>
          <li className="text-sm text-gray-700">خیابان آدام</li>
          <li className="text-sm text-gray-700">نیویورک</li>
          <li className="text-sm text-gray-700">ایالات متحده</li>
        </ul>
        <div>
          <div>
            <span className="text-gray-800 text-sm font-bold">شماره تماس:</span>
            <span className="mr-2 text-gray-700">۵۵۸۹ ۵۵۴۸۸ ۵۵</span>
          </div>
          <div>
            <span className="text-gray-800 text-sm font-bold">ایمیل:</span>
            <span className="mr-2 text-gray-700">info@example.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLeft;
