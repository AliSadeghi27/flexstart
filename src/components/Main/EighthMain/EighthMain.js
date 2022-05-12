import EighthMainItem from "./EighthMainItem";

const EighthMain = () => {
  const eighthMainContent = [
    {
      id: 1,
      img: "https://flexstart.anjili.ir/FlexStart/assets/img/portfolio/portfolio-3.jpg",
      title: "اپلیکیشن ۲",
      caption: "اپلیکیشن",
      category: "app",
    },
    {
      id: 2,
      img: "https://flexstart.anjili.ir/FlexStart/assets/img/portfolio/portfolio-2.jpg",
      title: "وبسایت ۳",
      caption: "وبسایت",
      category: "web",
    },
    {
      id: 3,
      img: "https://flexstart.anjili.ir/FlexStart/assets/img/portfolio/portfolio-1.jpg",
      title: "اپلیکیشن ۱",
      caption: "اپلیکیشن",
      category: "app",
    },
    {
      id: 4,
      img: "https://flexstart.anjili.ir/FlexStart/assets/img/portfolio/portfolio-6.jpg",
      title: "اپلیکیشن ۳",
      caption: "اپلیکیشن",
      category: "app",
    },
    {
      id: 5,
      img: "https://flexstart.anjili.ir/FlexStart/assets/img/portfolio/portfolio-5.jpg",
      title: "وبسایت ۲",
      caption: "وبسایت",
      category: "web",
    },
    {
      id: 6,
      img: "https://flexstart.anjili.ir/FlexStart/assets/img/portfolio/portfolio-4.jpg",
      title: "کارت ۲",
      caption: "کارت",
      category: "card",
    },
    {
      id: 7,
      img: "https://flexstart.anjili.ir/FlexStart/assets/img/portfolio/portfolio-9.jpg",
      title: "وبسایت ۳",
      caption: "وبسایت",
      category: "web",
    },
    {
      id: 8,
      img: "https://flexstart.anjili.ir/FlexStart/assets/img/portfolio/portfolio-8.jpg",
      title: "کارت ۳",
      caption: "کارت",
      category: "card",
    },
    {
      id: 9,
      img: "https://flexstart.anjili.ir/FlexStart/assets/img/portfolio/portfolio-7.jpg",
      title: "کارت ۱",
      caption: "کارت",
      category: "card",
    },
  ];

  return (
    <>
      <div className="text-center mt-28">
        <p className="text-blue-700">نمونه‌کارها</p>
        <h1 className="text-[#012970] mx-4 font-bold mt-2 text-2xl lg:text-4xl">
          آخرین نمونه‌کارهای ما را بررسی کنید
        </h1>
      </div>
      <div className="flex justify-between container w-11/12 mx-auto flex-wrap mt-10">
        {eighthMainContent.map((item) => (
          <EighthMainItem
            key={item.id}
            img={item.img}
            title={item.title}
            caption={item.caption}
            category={item.category}
          />
        ))}
      </div>
    </>
  );
};

export default EighthMain;
