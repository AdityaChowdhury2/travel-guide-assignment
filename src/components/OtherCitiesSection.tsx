import React from "react";
import Image from "../Image";
import Naples from "../assets/images/naples.png";
import Florence from "../assets/images/florence.png";

const OtherCitiesSection: React.FC = () => {
  return (
    <div className="mb-8 px-4 md:px-8 lg:px-16 font-roboto">
      <h2 className="text-left mb-4 text-xl font-semibold">Other Cities</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
        <div className="relative row-span-2 md:row-span-1 rounded-lg shadow-lg overflow-hidden">
          {/* <!-- Background Image --> */}
          <Image
            src={Naples}
            alt="Naples"
            className="w-auto h-full object-cover"
          />

          {/* <!-- Overlay --> */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* <!-- Text Content --> */}
          <div className="absolute z-10 inset-0 flex items-center justify-center text-white">
            <h3 className="text-lg font-semibold text-white">Naples</h3>
          </div>
        </div>
        <div className="relative rounded-lg shadow-lg overflow-hidden">
          {/* <!-- Background Image --> */}
          <Image
            src={Florence}
            alt="Florence"
            className="w-auto h-auto object-cover"
          />

          {/* <!-- Overlay --> */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* <!-- Text Content --> */}
          <div className="absolute z-10 inset-0 flex items-center justify-center text-white">
            <h3 className="text-lg font-semibold text-white">Florence</h3>
          </div>
        </div>
        <div className="relative hidden md:block rounded-lg shadow-lg overflow-hidden">
          {/* <!-- Background Image --> */}
          <Image
            src={Naples}
            alt="Naples"
            className="w-auto h-auto object-cover"
          />

          {/* <!-- Overlay --> */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* <!-- Text Content --> */}
          <div className="absolute z-10 inset-0 flex items-center justify-center text-white">
            <h3 className="text-lg font-semibold text-white">Naples</h3>
          </div>
        </div>
        <div className="relative rounded-lg shadow-lg overflow-hidden">
          {/* <!-- Background Image --> */}
          <Image
            src={Florence}
            alt="Florence"
            className="w-auto h-auto object-cover"
          />

          {/* <!-- Overlay --> */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* <!-- Text Content --> */}
          <div className="absolute z-10 inset-0 flex items-center justify-center text-white">
            <h3 className="text-lg font-semibold text-white">Florence</h3>
          </div>
        </div>
        <div className="relative hidden md:block rounded-lg shadow-lg overflow-hidden">
          {/* <!-- Background Image --> */}
          <Image
            src={Naples}
            alt="Naples"
            className="w-auto h-auto object-cover"
          />

          {/* <!-- Overlay --> */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* <!-- Text Content --> */}
          <div className="absolute z-10 inset-0 flex items-center justify-center text-white">
            <h3 className="text-lg font-semibold text-white">Naples</h3>
          </div>
        </div>
        <div className="relative rounded-lg shadow-lg overflow-hidden">
          {/* <!-- Background Image --> */}
          <Image
            src={Florence}
            alt="Florence"
            className="w-auto h-auto object-cover"
          />

          {/* <!-- Overlay --> */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* <!-- Text Content --> */}
          <div className="absolute z-10 inset-0 flex items-center justify-center text-white">
            <h3 className="text-lg font-semibold text-white">Florence</h3>
          </div>
        </div>
        <div className="relative hidden md:block rounded-lg shadow-lg overflow-hidden">
          {/* <!-- Background Image --> */}
          <Image
            src={Naples}
            alt="Naples"
            className="w-auto h-auto object-cover"
          />

          {/* <!-- Overlay --> */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* <!-- Text Content --> */}
          <div className="absolute z-10 inset-0 flex items-center justify-center text-white">
            <h3 className="text-lg font-semibold text-white">Naples</h3>
          </div>
        </div>
        <div className="relative rounded-lg shadow-lg overflow-hidden">
          {/* <!-- Background Image --> */}
          <Image
            src={Florence}
            alt="Florence"
            className="w-auto h-auto object-cover"
          />

          {/* <!-- Overlay --> */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* <!-- Text Content --> */}
          <div className="absolute z-10 inset-0 flex items-center justify-center text-white">
            <h3 className="text-lg font-semibold text-white">Florence</h3>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col items-center justify-center rounded-lg relative">
          <div className="absolute inset-0 bg-[#0000001f] w-4/5  rounded-lg"></div>
          <Image src={Naples} alt="Naples" className="rounded-lg w-4/5" />
          <h3 className="text-lg font-semibold absolute text-white">Naples</h3>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg relative ">
          <div className="absolute inset-0 bg-[#0000001f] rounded-lg"></div>
          <Image src={Florence} alt="Florence" className="rounded-lg w-full" />
          <h3 className="text-lg font-semibold absolute text-white">
            Florence
          </h3>
        </div> */}
    </div>
  );
};

export default OtherCitiesSection;
