import Image from "next/image";

const QuoteBanner = () => {
  return (
    <section className="relative w-full min-h-[80vh] bg-gray-900 text-white">
      {/* Background Image */}
      <Image
        src="/home/BANNER.svg"
        alt="Banner Background"
        fill
        className="object-cover object-center z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col lg:flex-row items-center justify-between w-full h-full px-4 sm:px-6 lg:px-24 py-12 gap-10">
        {/* Left Content */}
        <div className="text-left max-w-lg space-y-4 w-full">
          <div className="w-6 h-1 bg-orange-500"></div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Provide our customers <br /> with a competitive edge
          </h1>
          <p className="text-white text-sm sm:text-base">
            Enhance business efficiency for clients with the best services.
          </p>
          <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 text-sm sm:text-base rounded-md">
            See services
          </button>
        </div>

        {/* Right Content - Form */}
        <form className="bg-white text-black rounded-lg shadow-md w-full max-w-sm p-5 sm:p-6 space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md font-semibold"
          >
            GET A QUOTE
          </button>
        </form>
      </div>
    </section>
  );
};

export default QuoteBanner;
