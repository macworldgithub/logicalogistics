import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";
import Navbar from "../../../Components/Navbar";
// import Footer from "../../../Components/Footer";
import cartage from "../assets/cartage.png";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-96">
        <Image
          src={cartage}
          alt="Cartage"
          layout="fill"
          objectFit="cover"
          className="w-full"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-white text-4xl font-bold">Contact Us</h2>
            <h3 className="text-white text-md mt-2">Home Contact us</h3>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col md:flex-row justify-center gap-32 items-start py-16 px-4  bg-white">
        {/* Left side: Contact Info */}
        <div className="flex-1 max-w-lg">
          <h2 className="text-2xl font-bold mb-4">Get in touch with us</h2>
          <p className="mb-10 text-sm">
            Contact us on direct, by phone or fill out the form to receive a
            free consultation from our enthusiastic staff.
          </p>

          <div className="space-y-8 text-sm">
            <div className="flex items-start gap-4">
              <Phone className="text-orange-500 w-5 h-5 mt-1" />
              <div>
                <p className="text-sm font-medium">Phone number</p>
                <p className="text-base font-extrabold">+61 03 9452 8045</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-orange-500 w-5 h-5 mt-1" />
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm">info@ozshipping.com.au</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-orange-500 w-5 h-5 mt-1" />
              <div>
                <p className="text-sm font-medium">Address</p>
                <p className="font-bold text-sm leading-6">
                  454A NorthRoad Road,
                  <br />
                  Huntingdale, Australia,
                  <br />
                  3166
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side: Form */}
        <form className="flex-1 max-w-md space-y-6">
          <h3 className="font-bold text-md flex items-center gap-2 mb-2">
            <Mail className="text-orange-500 w-4 h-4" /> Send us message
          </h3>

          <input
            type="text"
            placeholder="Full name"
            className="w-full border-b border-black p-2 text-sm placeholder-gray-500 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full border-b border-black p-2 text-sm placeholder-gray-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email address"
            className="w-full border-b border-black p-2 text-sm placeholder-gray-500 focus:outline-none"
          />
          <textarea
            placeholder="Message"
            rows={3}
            className="w-full border-b border-black p-2 text-sm placeholder-gray-500 focus:outline-none resize-none"
          />

          <button
            type="submit"
            className="bg-orange-500 text-white text-sm px-5 py-2 rounded hover:bg-orange-600 flex items-center gap-2"
          >
            <span>➤</span> Send message
          </button>
        </form>
      </div>

      {/* Map Section */}
      <div className="w-full h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.068680943676!2d145.0943469157011!3d-37.90322277973985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad644f799e0b16b%3A0x89b6c6d3d69cddc0!2s454A%20North%20Rd%2C%20Ormond%20VIC%203206%2C%20Australia!5e0!3m2!1sen!2sus!4v1615170514669!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
