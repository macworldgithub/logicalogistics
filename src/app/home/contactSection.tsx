// components/ContactSection.tsx
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import ContentWrapper from "../../../utils/ContentWrapper";

const ContactSection: React.FC = () => {
  return (
    <ContentWrapper>
    <section className="px-4 md:px-16 py-12 bg-white">
      <div className="flex flex-col lg:flex-row bg-white rounded-md overflow-hidden shadow-md">
        {/* Left Side: Contact Info */}
        <div className="bg-black text-white w-full lg:w-1/2 p-8 space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold">Get in touch with us</h2>
          <p className="text-gray-300">
            Contact us on direct, by phone or fill out the form to receive a free consultation from our enthusiastic staff.
          </p>

          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <FaPhoneAlt className="text-orange-500 mt-1" />
              <div>
                <p className="text-gray-400">Phone number</p>
                <p className="font-bold text-white">+61 03 9452 8045</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaEnvelope className="text-orange-500 mt-1" />
              <div>
                <p className="text-gray-400">Email</p>
                <p className="text-white">info@logicalogistics.com.au</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-orange-500 mt-1" />
              <div>
                <p className="text-gray-400">Address</p>
                <p className="text-white">
                  54-62 McArthurs Road,<br />
                  Altona North, Victoria<br />
                  Australia, 3025
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-gray-50 w-full lg:w-1/2 p-8 space-y-6">
          <div className="flex items-center gap-2 text-orange-500 font-semibold">
            <FaPaperPlane />
            <h3>Send us message</h3>
          </div>

          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Full name"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-orange-500 py-2 bg-transparent"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Phone number"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-orange-500 py-2 bg-transparent"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email address"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-orange-500 py-2 bg-transparent"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full border-b border-gray-300 focus:outline-none focus:border-orange-500 py-2 bg-transparent resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md flex items-center gap-2"
            >
              <FaPaperPlane /> Send message
            </button>
          </form>
        </div>
      </div>
    </section>
    </ContentWrapper>
  );
};

export default ContactSection;
