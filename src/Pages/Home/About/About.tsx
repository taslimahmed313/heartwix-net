const About = () => {
  return (
    <div className="bg-base-100">
      <div className="lg:flex items-center lg:mx-20 py-10 ">
        <div className="my-10 lg:mx-10 w-full">
          <h5 className="text-1xl font-semibold text-red-600 py-2">Welcome To HeartWix Net</h5>
          <h1 className="text-3xl font-semibold text-black">We are always Faster & Reliable!</h1>
          <p className="py-6 font-light">
          HeartWix Net has come a long way since its establishment in 1997. From small beginnings as a provider of dial-up & radio link Internet access to local businesses, we have grown consistently and organically as a communications provider serving a diverse portfolio of business class voice and data services.
          </p>
          <button className="btn btn- bg-red-700 border-none">Learn More</button>
        </div>
        <div className="">
          <img
            src="http://amberit.com.bd/img/about.png"
            className="max-w-lg max-w-screen-lg rounded-lg shadow-1xl"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
