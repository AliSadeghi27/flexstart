import SixthMainItem from "./SixthMainItem";

const SixthMain = () => {
  const sixthMainContent = [
    {
      id: 1,
      title: "یک عنوان آزمایشی",
      color: "#2db6fa",
      bgColor: "group-hover:bg-[#2db6fa]",
      textColor: "text-[#2db6fa]",
      borderColor: "border-b-[#2db6fa]",
      bgIconColor: "bg-[#dbf3fe]",
    },
    {
      id: 2,
      title: "یک عنوان آزمایشی دیگر",
      color: "#f68c09",
      bgColor: "group-hover:bg-[#f68c09]",
      textColor: "text-[#f68c09]",
      borderColor: "border-b-[#f68c09]",
      bgIconColor: "bg-[#fde3c4]",
    },
    {
      id: 3,
      title: "سومین عنوان آزمایشی",
      color: "#08da4e",
      bgColor: "group-hover:bg-[#08da4e]",
      textColor: "text-[#08da4e]",
      borderColor: "border-b-[#08da4e]",
      bgIconColor: "bg-[#cffddf]",
    },
    {
      id: 4,
      title: "یک عنوان ساختگی",
      color: "#e9222c",
      bgColor: "group-hover:bg-[#e9222c]",
      textColor: "text-[#e9222c]",
      borderColor: "border-b-[#e9222c]",
      bgIconColor: "bg-[#fef7f8]",
    },
    {
      id: 5,
      title: "یک عنوان ساختگی دیگر",
      color: "#b50edf",
      bgColor: "group-hover:bg-[#b50edf]",
      textColor: "text-[#b50edf]",
      borderColor: "border-b-[#b50edf]",
      bgIconColor: "bg-[#f8e4fd]",
    },
    {
      id: 6,
      title: "سومین عنوان ساختگی",
      color: "#f51f9c",
      bgColor: "group-hover:bg-[#f51f9c]",
      textColor: "text-[#f51f9c]",
      borderColor: "border-b-[#f51f9c]",
      bgIconColor: "bg-[#feecf7]",
    },
  ];

  return (
    <>
      <div className="text-center mt-28">
        <p className="text-blue-700">خدمات</p>
        <h1 className="text-[#012970] mx-4 font-bold mt-2 text-2xl lg:text-4xl">
          لورم ایپسوم یک متن ساختگی در صنعت چاپ است.
        </h1>
      </div>
      <div className="container flex flex-wrap justify-around mt-10">
        {sixthMainContent.map((item) => (
          <SixthMainItem
            key={item.id}
            title={item.title}
            color={item.color}
            bgColor={item.bgColor}
            borderColor={item.borderColor}
            bgIconColor={item.bgIconColor}
            textColor={item.textColor}
          />
        ))}
      </div>
    </>
  );
};

export default SixthMain;
