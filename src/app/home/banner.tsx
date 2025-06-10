"use client";

import Image from "next/image";
//import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const QuoteBanner = () => {
  //const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phone } = formData;
    if (name && email && phone) {
      try {
        const response = await fetch("/api/GetAQuote", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          alert("Quote submitted successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
          });
          // router.push("/quotepage");
        } else {
          alert(data.message || "Failed to submit quote.");
        }
      } catch (error) {
        console.error("Submission error:", error);
        alert("Something went wrong. Please try again.");
      }
    } else {
      alert("Please fill in all fields.");
    }
  };

  const images = [
    "/home/BANNER.webp",
    "/home/banner3.webp",
    "/home/banner2.webp",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-[100vw] min-h-screen sm:min-h-[85vh] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`Banner ${index}`}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"} // Load only first eagerly
            placeholder="blur"
            blurDataURL="/placeholder.png" // Replace with actual low-res base64 or static blur image
            className={`absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col lg:flex-row items-center justify-center w-full min-h-screen sm:min-h-[85vh] px-4 sm:px-6 pt-24 sm:pt-10 pb-8 gap-10 lg:gap-36">
        {/* Left Side - Text */}
        <div className="text-white max-w-xl w-full space-y-4">
          <div className="w-6 h-1 bg-orange-500"></div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug break-words">
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
                index === currentImageIndex ? "bg-white" : "bg-white/50"
              } transition-colors duration-300`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuoteBanner;
