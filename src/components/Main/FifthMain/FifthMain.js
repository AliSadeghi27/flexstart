import FifthMainItem from "./FifthMainItem";

const FifthMain = () => {
  return (
    <>
      <div className="text-center mt-28">
        <h1 className="text-[#012970] mx-4 font-bold mt-2 text-2xl lg:text-4xl">
          لورم ایپسوم یک متن ساختگی در صنعت چاپ است.
        </h1>
      </div>
      <div className="flex container xl:flex-row flex-col mt-10">
        <div className="w-11/12 mx-auto xl:w-1/3">
          <img
            src="https://flexstart.anjili.ir/FlexStart/assets/img/features-3.png"
            alt="Fifth Main"
            className="scale-90 mx-auto"
          />
        </div>
        <FifthMainItem />
      </div>
    </>
  );
};

export default FifthMain;
