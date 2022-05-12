const HeaderBottom = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between mt-28 lg:mt-18 container px-4 mx-auto">
      <div className="w-full lg:w-1/2 pt-6">
        <h1 className="text-[#012970] font-bold text-3xl lg:mr-5 xl:mr-0 lg:text-5xl lg:text-right lg:leading-snug leading-tight text-center">
          ما راه‌حل هایی مدرن برای رشد کسب و کار شما ارائه می‌دهیم
        </h1>
        <h3 className="text-2xl w-11/12 text-gray-700 text-center xl:mr-0 lg:text-right mx-auto mt-3">
          ما تیمی از طراحان با‌استعداد هستیم که با بوت استرپ وب سایت می‌سازیم
        </h3>
        <a
          href="#"
          className="bg-blue-600 flex text-white text-xl lg:mr-5 xl:mr-0 items-center w-44 rounded-lg mt-8 px-8 py-3 group mx-auto"
        >
          <span className="ml-2 group-hover:ml-4 transition-all">
            بزن بریم!
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
      <div className="w-full lg:w-1/2 mt-16 lg:mt-0">
        <img
          src="https://flexstart.anjili.ir/FlexStart/assets/img/hero-img.png"
          alt="Header Bottom"
          className="md:w-11/12 md:mx-auto"
        />
      </div>
    </div>
  );
};

export default HeaderBottom;
