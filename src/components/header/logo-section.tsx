import React from "react";
import Image from "next/image";

export const LogoSection: React.FC = () => {
  return (
    <div className="flex items-center space-x-3 md:space-x-4">
      {/* Government Logo */}
      <div className="flex-shrink-0">
        <div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center border-2 border-gray-200 shadow-sm overflow-hidden">
          <Image
            src="/assets/images/aptdcl-logo.jpg"
            alt="APTDCL Logo - Assam Plains Tribes Development Corporation Limited"
            width={80}
            height={80}
            className="w-full h-full object-cover rounded-full"
            priority
            quality={90}
          />
        </div>
      </div>

      {/* Department Information */}
      <div className="flex flex-col min-w-0">
        <h1 className="text-sm md:text-lg lg:text-xl font-bold text-purple-700 leading-tight">
          ASSAM PLAINS TRIBES DEVELOPMENT CORPORATION LIMITED
        </h1>
        <p className="text-xs md:text-sm text-purple-500 mt-1">
          A GOVERNMENT OF ASSAM UNDERTAKING
        </p>
      </div>
    </div>
  );
};
