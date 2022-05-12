import FourthMainItem from "./FourthMainItem";

const FourthMain = () => {
  return (
    <>
      <div className="text-center mt-28">
        <p className="text-blue-700">ویژگی‌ها</p>
        <h1 className="text-[#012970] mx-4 font-bold mt-2 text-2xl lg:text-4xl">
          لورم ایپسوم یک متن ساختگی در صنعت چاپ است.
        </h1>
      </div>
      <div className="flex container flex-col lg:flex-row justify-between mt-10">
          <div className="w-11/12 lg:w-1/2 mx-auto lg:mr-4">
              <img src="https://flexstart.anjili.ir/FlexStart/assets/img/features.png" alt="Fourth Main" />
          </div>
          <FourthMainItem />
      </div>
    </>
  );
};

export default FourthMain;
