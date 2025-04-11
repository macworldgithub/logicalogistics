"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-auto bg-black">
      <div className="bg-footerBlack h-auto">
        <div className="pt-32 pb-10 px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="">
            <Image
              src="/logo.png"
              width={100}
              height={100}
              alt="Logo"
              className="mb-2"
            />
            <p className="text-sm max-w-xs leading-relaxed text-start md:text-xs text-white">
              One of leading transportation and logistics providers over the
              world
            </p>
            <div className="flex items-center gap-4 mt-4">
              <FontAwesomeIcon
                icon={faTwitter}
                className="z-10 max-sm:w-5 text-white bg-orange-500"
                size="2x"
              />
              <FaLinkedin size={22} className="text-white " />
              <FontAwesomeIcon
                icon={faFacebookF}
                className="text-white"
                size="1x"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className="z-10 max-sm:w-5 text-white"
              />
            </div>
          </div>

          <div className="text-start">
            <h3 className="font-bold mb-4 text-[1.2rem] text-white">
              Useful Links
            </h3>
            <ul className="space-y-2 text-sm md:text-xs">
              <li className="text-white hover:text-orange-500">Home</li>
              <li className="text-orange-500 underline">Terms and Condition</li>
              <li className="text-white hover:text-orange-500">
                Application Form
              </li>
              <li className="text-white hover:text-orange-500">
                Our Community/Team
              </li>
              <li className="text-white hover:text-orange-500">Contact Us</li>
              <li className="text-white hover:text-orange-500">
                Custom clearance
              </li>
            </ul>
          </div>

          <div className="text-start">
            <h3 className="mb-4 text-[1.2rem] font-bold text-white">
              Contact us
            </h3>
            <ul className="space-y-2 text-sm md:text-xs">
              <li className="text-white  hover:text-orange-500">Find Us Here</li>
              <li className="text-white  hover:text-orange-500">Get In Touch</li>
              <li className="text-white  hover:text-orange-500">FAQ Page</li>
              <li className="text-white  hover:text-orange-500">Policies</li>
              <li className="text-white  hover:text-orange-500">Support 24/7</li>
            </ul>
          </div>

          <div className="flex flex-col items-start text-secondaryColorDark">
            <div className="text-start">
              <h3 className="mb-4 text-[1.2rem] font-bold text-white">
                Say in touch
              </h3>
              <div className="flex mb-8">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-2 rounded-l-md text-Black bg-amber-50 "
                />
                <button className="bg-orange-500 px-4 py-2 rounded-r-md hover:bg-orange-600">
                  <FaArrowRight />
                </button>
              </div>

              <p className="text-xs text-gray-300 mt-7">
                Subscribe to receive our latest offers and news via your email
                address
              </p>
            </div>
          </div>
        </div>

        <div className="text-center border-t border-gray-800 py-4 text-sm text-white">
          © 2021ovatheme - All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
