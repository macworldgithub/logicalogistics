"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const QuoteBanner = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phone } = formData;
    if (name && email && phone) {
      router.push("/quotepage"); // Change this to your desired page
    } else {
      alert("Please fill in all fields.");
    }
  };

  // Slideshow logic
  const images = [
    "/home/BANNER.svg",
    "/home/banner2.png",
    "/home/banner3.png"
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 1 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      {/* Background Image Swapper */}
      <Image
        src={images[currentImageIndex]}
        alt="Banner Background"
        fill
        className="object-cover object-center transition-opacity duration-1000 ease-in-out"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col lg:flex-row items-center justify-center w-full h-full px-4 sm:px-6 pt-10 pb-8 gap-36">
        {/* Left Side - Text */}
        <div className="text-white max-w-xl w-full space-y-4 gap-28">
          <div className="w-6 h-1 bg-orange-500"></div>
          <h1 className="text-3xl sm:text-4xl text-white lg:text-5xl font-bold leading-snug">
            Providing our customers <br />
            <span className="text-white">with a competitive edge</span>
          </h1>
          <p className="text-sm sm:text-base">
            Enhanced business efficiency for clients with the best services.
          </p>
        </div>

        {/* Right Side - Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-lg w-full max-w-sm p-5 sm:p-6 space-y-4 mt-6 lg:mt-0"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            onChange={handleChange}
            value={formData.name}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            onChange={handleChange}
            value={formData.email}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            onChange={handleChange}
            value={formData.phone}
          />
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md text-sm font-semibold tracking-wide"
          >
            GET A QUOTE
          </button>
        </form>
      </div>

      {/* Dots at the bottom center */}
      <div className="absolute bottom-4 w-full flex justify-center z-30">
        <div className="flex gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentImageIndex
                  ? "bg-white"
                  : "bg-white/50"
              } transition-colors duration-300`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuoteBanner;
