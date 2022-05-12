import React from "react";

const FourthMainItem = () => {
  const fourthMainContentOne = [
    { id: 1, title: "طراحی خلاقانه" },
    { id: 2, title: "کد سازمان یافته" },
  ];
  const fourthMainContentTwo = [
    { id: 1, title: "کاملا ریسپانسیو" },
    { id: 2, title: "امکان کار با فرم‌های PHP" },
  ];
  const fourthMainContentThree = [
    { id: 1, title: "سفارشی‌ سازی آسان" },
    { id: 2, title: "بسیار انعطاف‌پذیر" },
  ];
  const icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="currentColor"
      className="bi bi-check"
      viewBox="0 0 16 16"
    >
      {" "}
      <path
        d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"
        fill="#444444"
        className="group-hover:fill-white transition-all duration-500"
      ></path>{" "}
    </svg>
  );

  return (
    <div className="w-11/12 lg:w-1/2 mx-auto my-auto mt-10">
      <div className="flex flex-col md:flex-row justify-between">
        {fourthMainContentOne.map((item) => (
          <div key={item.id} className="flex items-center justify-start shadow-custom py-6 w-full md:mx-3 mx-auto mb-7 group">
            <div className="bg-[#ecf3ff] rounded-md mr-5 ml-3 group-hover:bg-blue-600 transition-all duration-500">
              {icon}
            </div>
            <h2 className="text-[#012970] font-bold text-lg">{item.title}</h2>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        {fourthMainContentTwo.map((item) => (
          <div key={item.id} className="flex items-center justify-start shadow-custom py-6 w-full mx-auto md:mx-3 mb-7 group">
            <div className="bg-[#ecf3ff] rounded-md mr-5 ml-3 group-hover:bg-blue-600 transition-all duration-500">
              {icon}
            </div>
            <h2 className="text-[#012970] font-bold text-lg">{item.title}</h2>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        {fourthMainContentThree.map((item) => (
          <div key={item.id} className="flex items-center justify-start shadow-custom py-6 w-full mx-auto md:mx-3 mb-7 group">
            <div className="bg-[#ecf3ff] rounded-md mr-5 ml-3 group-hover:bg-blue-600 transition-all duration-500">
              {icon}
            </div>
            <h2 className="text-[#012970] font-bold text-lg">{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FourthMainItem;
