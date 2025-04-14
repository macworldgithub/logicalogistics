import Image from "next/image";

const QuoteBanner = () => {
  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/home/BANNER.svg"
        alt="Banner Background"
        fill
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col lg:flex-row items-center justify-center w-full h-full px-4 sm:px-6  pt-10 pb-8 gap-36">
        {/* Left Side - Text */}
        <div className="text-white max-w-xl w-full space-y-4 gap-28">
          <div className="w-6 h-1 bg-orange-500"></div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
            Provide our customers <br />
            <span className="text-white">with a competitive edge</span>
          </h1>
          <p className="text-sm sm:text-base">
            Enhance business efficiency for clients with the best services.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 text-sm sm:text-base rounded-md shadow-md">
            See services
          </button>
        </div>

        {/* Right Side - Form */}
        <form className="bg-white rounded-lg shadow-lg w-full max-w-sm p-5 sm:p-6 space-y-4 mt-6 lg:mt-0">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md text-sm font-semibold tracking-wide"
          >
            GET A QUOTE
          </button>
        </form>
      </div>
    </section>
  );
};

export default QuoteBanner;
