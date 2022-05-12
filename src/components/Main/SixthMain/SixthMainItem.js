import { Icon } from "@iconify/react";

const SixthMainItem = (props) => {
  let hoverClass = "transition-all duration-300";

  return (
    <div className="group">
      <div
        className={`w-[17.3rem] sm:w-[37rem] md:w-[21rem] lg:w-[18rem] xl:w-[21rem] sm:mx-5 mx-auto shadow-custom mb-8 rounded border-b-4 flex flex-col items-center text-center ${props.borderColor} ${props.bgColor} ${hoverClass}`}
      >
        <div
          className={`${props.bgIconColor} mt-16 p-5 rounded group-hover:bg-white ${hoverClass}`}
        >
          <Icon icon="bi:folder" width="40" color={props.color} />
        </div>
        <div className="mb-16">
          <h1
            className={`text-2xl font-bold text-gray-700 mt-6 group-hover:text-white ${hoverClass}`}
          >
            {props.title}
          </h1>
          <p
            className={`mt-4 mb-7 text-gray-600 w-10/12 mx-auto group-hover:text-white ${hoverClass}`}
          >
            این یک نوشته آزمایشی است که به طراحان و برنامه نویسان کمک میکند تا
            بتوانند نمونه تکمیل شده از پروژه خود را به کارفرما نمایش دهند .
          </p>
          <a
            href="#"
            className={`${props.textColor} flex justify-center items-center font-bold group-hover:text-white ${hoverClass}`}
          >
            بیش تر بخوانید
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              fill="currentColor"
              className="bi bi-arrow-left mr-2"
              viewBox="0 0 16 16"
            >
              {" "}
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                fill={props.color}
                className={`group-hover:fill-white ${hoverClass}`}
              ></path>{" "}
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SixthMainItem;
