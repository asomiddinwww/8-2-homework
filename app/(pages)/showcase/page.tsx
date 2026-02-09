import Image from "next/image";
import catch1 from "../../img/catch1.png";
import catch2 from "../../img/catch2.png";

const ShowCase = () => {
  return (
    <div className="w-full px-2 md:px-0">
      <div className="bg w-full md:w-[93.5%] p-6 md:p-20 h-auto md:h-[658px]! rounded-[30px] md:rounded-[50px]! m-auto flex flex-col md:flex-row items-center justify-between md:pr-0 gap-10">
        <div className="flex flex-col gap-3 md:gap-4 text-center md:text-left items-center md:items-start w-280 max-[800px]:w-full">
          <p className="font-[400] text-[18px] md:text-[30px] text-[white] uppercase">
            Sale up to 20% off
          </p>
          <h1 className="font-[700] text-[32px] sm:text-[45px] md:text-[64px] text-[white] leading-tight">
            Apple Watch Ultra 2
          </h1>
          <p className="font-[300] text-[16px] md:text-[25px] text-[white] max-w-[500px]">
            The most rugged and capable Apple Watch pushes{" "}
            <br className="hidden md:block" /> the limits again. Featuring the
            all-new S9 SiP.
          </p>
          <div className="flex items-center gap-3 mt-2">
            <button className="bg-[#D75300] text-white rounded-full py-2 px-6 cursor-pointer hover:bg-orange-600 transition-all">
              Shop Now
            </button>
            <button className="bg-[white] text-black rounded-full py-2 px-6 cursor-pointer hover:bg-gray-200 transition-all">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3 md:gap-5 w-full justify-center md:justify-end overflow-hidden">
          <div className="w-[180px] sm:w-[250px] md:w-[410px]">
            <Image src={catch1} alt="Watch 1" layout="responsive" priority />
          </div>
          <div className="w-[100px] sm:w-[150px] md:w-[230px]">
            <Image src={catch2} alt="Watch 2" layout="responsive" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
