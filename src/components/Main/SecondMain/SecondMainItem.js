import React from "react";

const SecondMainItem = () => {
  const secondMainContent = [
    {
      id: 1,
      img: "https://flexstart.anjili.ir/FlexStart/assets/img/values-1.png",
      title: "طراحی خلاق",
      content:
        "استفاده از یک متن تستی می‌تواند سرعت پیشرفت پروژه را افزایش دهد.",
    },
    {
      id: 2,
      img: "https://flexstart.anjili.ir/FlexStart/assets/img/values-2.png",
      title: "کاملا ریسپانسیو",
      content:
        "استفاده از یک متن تستی می‌تواند سرعت پیشرفت پروژه را افزایش دهد.",
    },
    {
      id: 3,
      img: "https://flexstart.anjili.ir/FlexStart/assets/img/values-3.png",
      title: "سفارشی سازی آسان",
      content:
        "استفاده از یک متن تستی می‌تواند سرعت پیشرفت پروژه را افزایش دهد.",
    },
  ];

  return (
    <div className="flex flex-col lg:w-11/12 lg:flex-row justify-between container mt-10">
      {secondMainContent.map((item) => {
        return (
          <div
            key={item.id}
            className="w-11/12 mx-auto lg:mx-3 mb-8 shadow-custom text-center group transition-all hover:shadow-bigCustom"
          >
            <img
              src={item.img}
              alt={item.title}
              className="p-14 mx-auto group-hover:scale-90 transition-all duration-300"
            />
            <h2 className="font-bold text-2xl text-[#012970]">{item.title}</h2>
            <p className="text-gray-700 px-7 mt-4 mb-8">{item.content}</p>
          </div>
        );
      })}
    </div>
  );
};
export default SecondMainItem;
