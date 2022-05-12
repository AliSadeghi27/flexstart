import SeventhMainItem from "./SeventhMainItem";

const SeventhMain = () => {
  const seventhMainContentOne = [
    {
      id: 1,
      title: "طرح رایگان",
      color: "text-[#07d5c0]",
      price: "۰",
      img: "https://flexstart.anjili.ir/FlexStart/assets/img/pricing-free.png",
      content: (
        <ul className="text-center w-11/12 space-y-2 text-gray-700 text-lg mx-auto">
          <li>پشتیبانی آنلاین</li>
          <li>فرم تماس PHP/AJAX کارا</li>
          <li>استفاده در پروژه‌های شخصی و تجاری</li>
          <li>
            <del className="text-gray-400">فایل های Sass/SCSS</del>
          </li>
          <li>
            <del className="text-gray-400">پشتیبانی پریمیوم</del>
          </li>
        </ul>
      ),
    },
    {
      id: 2,
      title: "طرح آغازگر",
      color: "text-[#65c600]",
      price: "۱۹",
      img: "https://flexstart.anjili.ir/FlexStart/assets/img/pricing-starter.png",
      content: (
        <ul className="text-center w-11/12 space-y-2 text-gray-700 text-lg mx-auto">
          <li>پشتیبانی آنلاین</li>
          <li>فرم تماس PHP/AJAX کارا</li>
          <li>استفاده در پروژه‌های شخصی و تجاری</li>
          <li>فایل های Sass/SCSS</li>
          <li>
            <del className="text-gray-400">پشتیبانی پریمیوم</del>
          </li>
        </ul>
      ),
    },
  ];
  const seventhMainContentTwo = [
    {
      id: 1,
      title: "طرح تجاری",
      color: "text-[#ff901c]",
      price: "۲۹",
      img: "https://flexstart.anjili.ir/FlexStart/assets/img/pricing-business.png",
      content: (
        <ul className="text-center w-11/12 space-y-2 text-gray-700 text-lg mx-auto">
          <li>پشتیبانی آنلاین</li>
          <li>فرم تماس PHP/AJAX کارا</li>
          <li>استفاده در پروژه‌های شخصی و تجاری</li>
          <li>فایل های Sass/SCSS</li>
          <li>پشتیبانی پریمیوم</li>
        </ul>
      ),
    },
    {
      id: 2,
      title: "طرح نهایی",
      color: "text-[#ff0071]",
      price: "۴۹",
      img: "https://flexstart.anjili.ir/FlexStart/assets/img/pricing-ultimate.png",
      content: (
        <ul className="text-center w-11/12 mx-auto space-y-2 text-gray-700 text-lg">
          <li>پشتیبانی آنلاین</li>
          <li>فرم تماس PHP/AJAX کارا</li>
          <li>استفاده در پروژه‌های شخصی و تجاری</li>
          <li>فایل های Sass/SCSS</li>
          <li>پشتیبانی پریمیوم</li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <div className="text-center mt-28">
        <p className="text-blue-700">قیمت‌گذاری</p>
        <h1 className="text-[#012970] mx-4 font-bold mt-2 text-2xl lg:text-4xl">
          قیمت‌های ما را بررسی کنید
        </h1>
      </div>
      {/* <div className="flex container mt-10">
        <div className="flex w-1/2 justify-between ml-2">
          {seventhMainContentOne.map((item) => (
            <SeventhMainItem
              key={item.id}
              title={item.title}
              color={item.color}
              price={item.price}
              img={item.img}
              content={item.content}
            />
          ))}
        </div>
        <div className="flex w-1/2">
          {seventhMainContentTwo.map((item) => (
            <SeventhMainItem
              key={item.id}
              title={item.title}
              color={item.color}
              price={item.price}
              img={item.img}
              content={item.content}
            />
          ))}
        </div>
      </div> */}
      <div className="flex flex-col lg:flex-row lg:w-11/12 container mt-10">
        <div className="flex flex-col md:flex-row md:w-11/12 md:mx-auto w-full justify-between ml-2">
          {seventhMainContentOne.map((item) => (
            <SeventhMainItem
              key={item.id}
              title={item.title}
              color={item.color}
              price={item.price}
              img={item.img}
              content={item.content}
            />
          ))}
        </div>
        <div className="flex flex-col md:flex-row md:w-11/12 md:mx-auto w-full">
          {seventhMainContentTwo.map((item) => (
            <SeventhMainItem
              key={item.id}
              title={item.title}
              color={item.color}
              price={item.price}
              img={item.img}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SeventhMain;
