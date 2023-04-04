import { Link } from "react-router-dom";

const Package = () => {
  return (
    <div>
      <h1 className="text-4xl text-black text-bold text-center">
        Most Popular Package
      </h1>
      <div className="lg:flex items-center lg:mx-20 py-10 ">
<<<<<<< HEAD
        <div className="my-10 lg:mx-10 w-full">
          <h5 className="text-2xl font-semibold lg:px-20 py-2 ">
            Primary Package
          </h5>
          <h2 className="text-2xl font-semibold text-black lg:mx-10 py-3">
            BDT{" "}
            <span className="text-5xl text-bold">
              1200<span className="text-4xl font-light text-bold">/month</span>
            </span>
          </h2>
          <p className="py-3 font-light lg:mx-20 lg:px-10 text-bold border my-2">
            30 Mbps Unlimited
          </p>
          <p className="py-3 font-light lg:mx-20 lg:px-10 text-bold border my-2">
            Fiber Optics
          </p>
          <p className="py-2 font-light lg:mx-10 text-bold border my-2 p-2">
            400 Min TalkTime & 400 SMS /month
          </p>
          <p className="py-3 font-light lg:mx-20 lg:px-5 text-bold border my-2">
            OTC Fee - 500 Taka
          </p>
          <p className="py-3 font-light lg:mx-20 lg:px-5 text-bold border my-2">
            24/7 Customer Support
          </p>
          <p className="py-2 font-light  text-bold border my-2 p-2">
            Free OTT Bongo, Chorki, Addatimes & Eros Now (Any 2)
          </p>
          <button className="btn btn- bg-red-700 border-none lg:mx-20 lg:px-10 my-10">
            View All Packages{" "}
          </button>
=======
        <div className="my-10 lg:mx-10 w-full divide-y divide-dashed">
          <h5 className="text-2xl font-semibold lg:px-20 py-2 ">Primary Package</h5>
          <h2 className="text-2xl font-semibold text-black lg:mx-10 py-3">BDT <span className="text-5xl text-bold">1200<span className="text-4xl font-light text-bold">/month</span></span></h2>
          <p className="py-3 font-light lg:mx-20 lg:px-10 text-bold my-2">30 Mbps Unlimited</p>
          <p className="py-3 font-light lg:mx-20 lg:px-10 text-bold  my-2">Fiber Optics</p>
          <p className="py-2 font-light lg:mx-10 text-bold  my-2 p-2">400 Min TalkTime & 400 SMS /month</p>
          <p className="py-3 font-light lg:mx-20 lg:px-5 text-bold  my-2">OTC Fee - 500 Taka</p>
          <p className="py-3 font-light lg:mx-20 lg:px-5 text-bold  my-2">24/7 Customer Support</p>
          <p className="py-2 font-light  text-bold my-2 ">Free OTT Bongo, Chorki, Addatimes & Eros Now (Any 2)</p>
          <img src="https://www.amberit.com.bd/img/logos/doctime-logo-AMBER-1.png" className="min-w-screen-sm w-3/5 mx-20" alt=""></img>
          <Link to='/home-internet'><button className="btn btn- bg-red-700 border-none lg:mx-20 lg:px-10 my-10">View All Packages </button></Link>
>>>>>>> main
        </div>
        <div className="">
          <img
            src="http://amberit.com.bd/img/popular-package.png"
<<<<<<< HEAD
            className="rounded-lg shadow-1xl"
            alt="packages_img"
=======
            className="max-w-lg max-w-screen-lg rounded-lg shadow-1xl "
            alt=""
>>>>>>> main
          />
        </div>
      </div>
    </div>
  );
};

export default Package;
