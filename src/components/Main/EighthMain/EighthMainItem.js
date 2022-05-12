import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const EighthMainItem = (props) => {
  return (
    <div className="mb-4 relative group mx-auto lg:mb-8 xl:mb-4">
      <img src={props.img} alt={props.title} className="xl:w-[23rem] w-11/12 mx-auto md:w-[22rem] lg:w-[19rem]" />
      <div className="opacity-0 w-full h-full bg-white group-hover:opacity-70 transition-all duration-300 top-0 right-0 z-10 absolute"></div>
      <div className="opacity-0 group-hover:opacity-100 flex absolute top-1/3 right-[38%] z-20 flex-col justify-center items-center transition-all duration-300">
        <h2 className="font-bold text-xl text-[#012970] mb-2">{props.title}</h2>
        <h3 className="text-[#012970] mb-2">{props.caption}</h3>
        <div className="flex justify-between">
          <span className="p-1 rounded-full bg-blue-600 ml-4">
            <Link to="/" title={props.title}>
              <Icon icon="bi:plus" color="#fff" width="25" />
            </Link>
          </span>
          <span className="p-1 rounded-full bg-blue-600">
            <Link to="/" title="اطلاعات بیشتر">
              <Icon icon="bi:link" color="#fff" width="25" />
            </Link>
          </span>
        </div>
      </div>
      <div className="opacity-0 group-hover:opacity-100 absolute border-r-[3px] border-t-[3px] border-gray-700 w-12 h-12 top-5 right-5 transition-all duration-300"></div>
      <div className="opacity-0 group-hover:opacity-100 absolute border-l-[3px] border-b-[3px] border-gray-700 w-12 h-12 bottom-5 left-5 transition-all duration-300"></div>
    </div>
  );
};

export default EighthMainItem;
