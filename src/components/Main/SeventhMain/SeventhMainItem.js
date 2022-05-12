const SeventhMainItem = (props) => {
  return (
    // <div className="flex flex-col items-center w-[45%] shadow-custom ml-7 hover:scale-[1.1] transition-all duration-300">
    //   <h2 className={props.color + " mt-7 text-lg font-bold"}>{props.title}</h2>
    //   <div className="flex mt-5">
    //     <sup className="text-xl text-gray-700 font-bold">﷼</sup>
    //     <span className="font-bold text-4xl text-gray-700">{props.price}</span>
    //     <span className="text-gray-400 mt-3 mr-2"> / ماهانه</span>
    //   </div>
    //   <div className="mx-auto">
    //     <img src={props.img} className="scale-[.6]" />
    //   </div>
    //   <div>{props.content}</div>
    //   <a
    //     href="#"
    //     className="w-11/12 border border-[#4154F1] px-10 py-1 rounded-full mt-7 font-bold text-blue-600 text-lg text-center hover:text-white hover:bg-[#4154F1] transition-all duration-300"
    //   >
    //     هم اکنون خریداری کنید
    //   </a>
    // </div>
    <div className="flex flex-col items-center w-11/12 shadow-custom mx-auto hover:scale-[1.1] md:w-[45%] transition-all duration-300 mt-10">
      <h2 className={props.color + " mt-7 text-lg font-bold"}>{props.title}</h2>
      <div className="flex mt-5">
        <sup className="text-xl text-gray-700 font-bold">﷼</sup>
        <span className="font-bold text-4xl text-gray-700">{props.price}</span>
        <span className="text-gray-400 mt-3 mr-2"> / ماهانه</span>
      </div>
      <div className="mx-auto">
        <img src={props.img} className="scale-[.6]" />
      </div>
      <div>{props.content}</div>
      <a
        href="#"
        className="w-11/12 border border-[#4154F1] px-10 py-1 rounded-full my-7 font-bold text-blue-600 text-lg text-center hover:text-white hover:bg-[#4154F1] transition-all duration-300"
      >
        هم اکنون خریداری کنید
      </a>
    </div>
  );
};

export default SeventhMainItem;
