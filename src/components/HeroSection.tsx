import React from "react";
import Image from "../Image";
import Card2 from "../assets/images/card2.png";
import MiniBus from "../assets/images/mini-bus.png";
import { RiArrowRightSLine } from "react-icons/ri";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-cover bg-center h-[485px] font-roboto bg-[url('/hero.png')]">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative container mx-auto px-4 py-16 flex flex-col lg:flex-row justify-between items-start gap-5">
        {/* Text and Images Section */}
        <div className="text-white max-w-lg mb-8 lg:mb-0 lg:ml-[5rem] lg:mt-[2rem]">
          <h1 className="text-3xl font-bold mb-4 block lg:hidden">
            Transfers in Peterborough
          </h1>
          <h1 className="text-3xl font-bold mb-4 hidden lg:block">
            Private Transfer & Taxi services <br /> in Geneva
          </h1>
          <p className="text-lg mb-6 hidden lg:block">
            Book airport transfers, city transfers and hourly disposal services
            with driver
          </p>

          {/* Images */}
          <div className="md:flex hidden space-x-4 mt-8 lg:mt-[14rem] lg:flex">
            <div className="flex gap-5 bg-[url('/eclipse.png')] bg-left bg-no-repeat bg-contain items-center justify-between bg-gray-100 rounded-lg p-4">
              <div className="relative w-48 h-24 rounded-lg">
                <Image
                  src={MiniBus}
                  alt="MiniBus & Coach"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-sm font-bold text-gray-800">
                  Hire MiniBus & Coach/Bus
                </h2>
                <button className="mt-4 px-3 py-1 border flex items-center gap-2 border-red-500 text-red-500 font-medium text-sm rounded-full hover:bg-red-600 focus:outline-none focus:shadow-outline">
                  Book Now
                  <RiArrowRightSLine size={20} />
                </button>
              </div>
            </div>
            {/* <div className="flex items-center justify-between bg-gray-100 rounded-lg p-4">
              <div className="relative bg-[url('src/assets/images/eclipse.png')] bg-cover bg-center bg-no-repeat">
                <Image
                  src={MiniBus}
                  alt="MiniBus & Coach"
                  className="w-48 h-24"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold text-gray-800">
                  Hire MiniBus & Coach/Bus
                </h2>
                <button className="mt-4 px-6 py-2 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 focus:outline-none focus:shadow-outline">
                  Book Now <span className="ml-2">&gt;</span>
                </button>
              </div>
            </div> */}
            <Image src={Card2} alt="" className="w-full h-auto" />
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full lg:w-[430px] mx-auto lg:mx-0">
          <div className="flex justify-around mb-4 overflow-x-auto">
            <button className="text-red-500 font-bold flex-shrink-0 bg-white rounded">
              One Way
            </button>
            <button className="text-gray-600 ml-6 flex-shrink-0">
              Round Trip
            </button>
            <button className="text-gray-600 ml-6 flex-shrink-0">Hourly</button>
          </div>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="From (airport, hotel, address)"
                className="w-full p-3 border rounded-lg"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="To (airport, hotel, address)"
                className="w-full p-3 border rounded-lg"
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-4">
              <input
                type="date"
                className="w-full lg:w-1/2 p-3 border rounded-lg mb-4 lg:mb-0"
              />
              <input
                type="time"
                className="w-full lg:w-1/2 p-3 border rounded-lg"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Add Passenger & Baggage"
                className="w-full p-3 border rounded-lg"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border rounded-lg"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 border rounded-lg"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="additional-requirements"
                className="mr-2"
              />
              <label
                htmlFor="additional-requirements"
                className="text-gray-600"
              >
                Additional Requirements
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white p-3 rounded-lg font-bold"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
