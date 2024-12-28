import React from "react";
import Image from "../Image";
import BookAndPayLater from "../assets/images/book-and-pay-later.png";
import FlexibleTripAmendments from "../assets/images/flexible-trip-amendments.png";
import FreeCancellation from "../assets/images/free-cancellation.png";
import InPersonSupport from "../assets/images/in-person-support.png";

const Features: React.FC = () => {
  return (
    <div className="bg-gray-100 py-8  flex flex-wrap justify-evenly items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-[30rem] sm:mt-[20rem] font-roboto">
      {/* Feature 1 */}
      <div className="flex flex-col items-center w-1/2 sm:w-auto p-4">
        <Image
          src={BookAndPayLater}
          alt="Book & pay later"
          className="w-10 h-10 mb-2"
        />
        <p className="text-gray-700 text-sm text-center">Book & pay later</p>
      </div>

      {/* Vertical Divider */}
      <div className="w-px h-10 bg-gray-300 hidden sm:block"></div>

      {/* Feature 2 */}
      <div className="flex flex-col items-center w-1/2 sm:w-auto p-4">
        <Image
          src={FlexibleTripAmendments}
          alt="Flexible trip amendments"
          className="w-10 h-10 mb-2"
        />
        <p className="text-gray-700 text-sm text-center">
          Flexible trip amendments
        </p>
      </div>

      {/* Vertical Divider */}
      <div className="w-px h-10 bg-gray-300 hidden sm:block"></div>

      {/* Feature 3 */}
      <div className="flex flex-col items-center w-1/2 sm:w-auto p-4">
        <Image
          src={FreeCancellation}
          alt="Free cancellation"
          className="w-10 h-10 mb-2"
        />
        <p className="text-gray-700 text-sm text-center">Free cancellation</p>
      </div>

      {/* Vertical Divider */}
      <div className="w-px h-10 bg-gray-300 hidden sm:block"></div>

      {/* Feature 4 */}
      <div className="flex flex-col items-center w-1/2 sm:w-auto p-4">
        <Image
          src={InPersonSupport}
          alt="24/7 in-person support"
          className="w-10 h-10 mb-2"
        />
        <p className="text-gray-700 text-sm text-center">
          24/7 in-person support
        </p>
      </div>
    </div>
  );
};

export default Features;
