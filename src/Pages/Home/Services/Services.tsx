import { Link } from "react-router-dom";
import corporate from "../../../Assets/images/network.png";

const Services = () => {
  return (
    <div className="border border-blue-800 bg-[#BF1424]">
      <div className="m-[80px] grid lg:grid-cols-2 gap-[68px]">
        <div className="text-white">
          <p className="text-[18px] font-medium">
            Your one stop smart internet solution !
          </p>
          <h3 className="text-[38px] font-bold">What We Do ?</h3>
          <h4 className="text-2xl mt-3">
            Super Fast & Reliable Faster Network
          </h4>
          <div className="w-[100px] h-[3px] my-8 bg-white"></div>
          <p className="text-semibold tracking-wider text-sm leading-6">
            HeartWix IT provides an extensive range of high quality data &
            internet connectivity services throughout the country. We offer safe
            internet access services with various service level descriptions for
            corporate businesses and SMEs. Our IPTSP services allow the
            opportunity to generate profitable and recurring monthly revenue for
            businesses. We also offer hosting & web development solutions for
            any business with high availability and consistency.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {/* Corporate Internet */}
          <div className="p-7 text-center bg-white rounded-lg">
            <img className="w-[50px] mx-auto" src={corporate} alt="" />
            <h2 className="text-xl font-semibold my-6">Corporate Internet</h2>
            <p className="text-sm leading-6 font-semibold mb-6">
              We offer safe internet access services with various service level
              descriptions for corporate businesses and SMEs.
            </p>
            <Link to="" className="">
              Learn More
            </Link>
          </div>
          <div className="p-7 text-center bg-white rounded-lg">
            <img className="w-[50px] mx-auto" src={corporate} alt="" />
            <h2 className="text-xl font-semibold my-6">Corporate Internet</h2>
            <p className="text-sm leading-6 font-semibold mb-6">
              We offer safe internet access services with various service level
              descriptions for corporate businesses and SMEs.
            </p>
            <Link to="" className="">
              Learn More
            </Link>
          </div>
          <div className="p-7 text-center bg-white rounded-lg">
            <img className="w-[50px] mx-auto" src={corporate} alt="" />
            <h2 className="text-xl font-semibold my-6">Corporate Internet</h2>
            <p className="text-sm leading-6 font-semibold mb-6">
              We offer safe internet access services with various service level
              descriptions for corporate businesses and SMEs.
            </p>
            <Link to="" className="">
              Learn More
            </Link>
          </div>
          <div className="p-7 text-center bg-white rounded-lg">
            <img className="w-[50px] mx-auto" src={corporate} alt="" />
            <h2 className="text-xl font-semibold my-6">Corporate Internet</h2>
            <p className="text-sm leading-6 font-semibold mb-6">
              We offer safe internet access services with various service level
              descriptions for corporate businesses and SMEs.
            </p>
            <Link to="" className="">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
