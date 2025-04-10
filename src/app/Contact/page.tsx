import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";
import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";
import cartage from "../assets/cartage.png";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="relative w-full h-96">
        <Image
          src={cartage}
          alt="Cartage"
          layout="fill"
          objectFit="cover"
          className="w-full"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-left">
            <h2 className="text-white text-2xl font-bold">Contact Us</h2>
            <h3 className="text-white text-sm  mt-2">Home Contact us</h3>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center py-12 px-4 md:px-20">
        <h2 className="text-2xl font-bold mb-4">Get in touch with us</h2>
        <p className="text-center max-w-2xl mb-8">
          Contact us direct. Be prepared to fill out the form to receive a free
          contact call back from our team.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
          {/* Left Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Phone className="text-orange-500 mt-1" />
              <div>
                <p>Phone Number</p>
                <p className="font-extrabold text-1xl">+61 03 9452 8045</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-orange-500 mt-1" />
              <div>
                <p>Email</p>
                <p>info@ozshipping.com.au</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-orange-500 mt-1" />
              <div>
                <p>Address</p>
                <p className="font-semibold">
                  454A NorthRoad Road,
                  <br />
                  Huntingdale, Australia,
                  <br />
                  3166
                </p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <form className="space-y-4">
            <h3 className="font-bold text-md">Send us message</h3>
            <input
              type="text"
              placeholder="Full name"
              className="w-full border-b p-2 focus:outline-none"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border-b p-2 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full border-b p-2 focus:outline-none"
            />
            <textarea
              placeholder="Message"
              className="w-full border-b p-2 focus:outline-none"
              rows={2}
            />
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
              Send message
            </button>
          </form>
        </div>
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
