import { Icon } from "@iconify/react";

const FifthMainItem = () => {
  const FifthMainContentOne = [
    {
      id: 1,
      icon: <Icon icon="ri:line-chart-line" color="#0245bc" width="50" />,
      title: "طراحی مدرن و حرفه‌ای",
      content:
        "استفاده از یک متن تستی می‌تواند سرعت پیشرفت پروژه را افزایش دهد.",
    },
    {
      id: 2,
      icon: <Icon icon="ri:stack-line" color="#0245bc" width="50" />,
      title: "پیاده‌سازی با بوت استرپ",
      content:
        "استفاده از یک متن تستی می‌تواند سرعت پیشرفت پروژه را افزایش دهد.",
    },
  ];
  const FifthMainContentTwo = [
    {
      id: 1,
      icon: <Icon icon="ri:brush-4-line" color="#0245bc" width="50" />,
      title: "قابلیت شخصی‌سازی آسان",
      content:
        "استفاده از یک متن تستی می‌تواند سرعت پیشرفت پروژه را افزایش دهد.",
    },
    {
      id: 2,
      icon: <Icon icon="ri:magic-line" color="#0245bc" width="50" />,
      title: "کد نویسی بهینه",
      content:
        "استفاده از یک متن تستی می‌تواند سرعت پیشرفت پروژه را افزایش دهد.",
    },
  ];
  const FifthMainContentThree = [
    {
      id: 1,
      icon: <Icon icon="ri:command-line" color="#0245bc" width="50" />,
      title: "کاملا واکنشگرا",
      content:
        "استفاده از یک متن تستی می‌تواند سرعت پیشرفت پروژه را افزایش دهد.",
    },
    {
      id: 2,
      icon: <Icon icon="ri:radar-line" color="#0245bc" width="50" />,
      title: "سازگار با تمام مرورگر‌ها",
      content:
        "استفاده از یک متن تستی می‌تواند سرعت پیشرفت پروژه را افزایش دهد.",
    },
  ];

  return (
    <div className="flex-col xl:w-2/3 my-auto">
      <div className="w-11/12 flex flex-col md:flex-row mt-8 mx-auto">
        {FifthMainContentOne.map((item) => (
          <div key={item.id} className="flex mb-8">
            <div>{item.icon}</div>
            <div className="mr-4">
              <h3 className="text-[#012970] text-xl font-bold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 w-11/12 text-sm">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-11/12 flex flex-col md:flex-row mx-auto">
        {FifthMainContentTwo.map((item) => (
          <div key={item.id} className="flex mb-8">
            <div>{item.icon}</div>
            <div className="mr-4">
              <h3 className="text-[#012970] text-xl font-bold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 w-11/12 text-sm">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-11/12 flex flex-col md:flex-row mx-auto">
        {FifthMainContentThree.map((item) => (
          <div key={item.id} className="flex mb-8">
            <div>{item.icon}</div>
            <div className="mr-4">
              <h3 className="text-[#012970] text-xl font-bold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 w-11/12 text-sm">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FifthMainItem;
