const FirstMain = () => {
  return (
    <div className="container lg:w-11/12 lg:flex-row flex-col mt-16 flex justify-between">
      <div className="bg-[#f6f9ff] my-auto h-auto px-10 py-12 lg:w-1/2 w-11/12 mx-auto">
        <p className="text-blue-700 mb-2">ما که هستیم</p>
        <h3 className="text-[#012970] text-2xl font-bold mb-3">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است.
        </h3>
        <p className="text-gray-700">
          این یک نوشته آزمایشی است که به طراحان و برنامه نویسان کمک میکند تا
          بتوانند نمونه تکمیل شده از پروژه خود را به کارفرما نمایش دهند، استفاده
          از این متن تستی می‌تواند سرعت پیشرفت پروژه را افزایش دهد، و طراحان به
          جای تایپ و نگارش متن می‌توانند تنها با یک کپی و پیست این متن را در
          کادرهای مختلف جایگزین نمایند.
        </p>

        <a
          href="#"
          className="bg-blue-600 opacity-90 flex md:mx-auto lg:mx-0 text-white text-xl items-center w-56 rounded-lg mt-8 px-8 py-3 group"
        >
          <span className="ml-2 group-hover:ml-4 transition-all">
            بیشتر بخوانید
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              {" "}
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                fill="#ffffff"
              ></path>{" "}
            </svg>
          </span>
        </a>
      </div>
      <div className="w-11/12 mx-auto lg:my-auto lg:w-1/2">
        <img
          src="https://flexstart.anjili.ir/FlexStart/assets/img/about.jpg"
          alt="First Main"
        />
      </div>
    </div>
  );
};

export default FirstMain;
