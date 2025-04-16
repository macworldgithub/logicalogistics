"use client";

import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import Navbar from "../../../Components/Navbar";
import PageHeader from "../../../common/PageHeader";
import PageWrapper from "../../../utils/PageWrapper";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, phone, email, message } = formData;

    if (!name || !phone || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        alert(data.message || "Failed to send message.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <PageWrapper>
        <div className="flex flex-col min-h-screen font-poppins">
          <Navbar />
          <PageHeader title="Contact Us" breadcrumb="Contact Us " />

          {/* Contact Section */}
          <div className="flex flex-col md:flex-row justify-center gap-32 items-start py-16 px-4 bg-white text-black max-w-7xl mx-auto w-full">
            {/* Left side: Contact Info */}
            <div className="flex-1 max-w-lg">
              <h2 className="text-2xl font-bold mb-4 text-black">Get in touch with us</h2>
              <p className="mb-10 text-sm text-black">
                Contact us on direct, by phone or fill out the form to receive a
                free consultation from our enthusiastic staff.
              </p>

              <div className="space-y-8 text-sm">
                <div className="flex items-start gap-4">
                  <Phone className="text-orange-500 w-5 h-5 mt-1" />
                  <div>
                    <p className="text-sm font-medium text-black">Phone number</p>
                    <p className="text-base font-extrabold text-black">+61 03 9452 8045</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="text-orange-500 w-5 h-5 mt-1" />
                  <div>
                    <p className="text-sm font-medium text-black">Email</p>
                    <p className="text-sm text-black">info@ozshipping.com.au</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="text-orange-500 w-5 h-5 mt-1" />
                  <div>
                    <p className="text-sm font-medium text-black">Address</p>
                    <p className="font-bold text-sm leading-6 text-black">
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
            <form onSubmit={handleSubmit} className="flex-1 max-w-md space-y-6 w-full">
              <h3 className="font-bold text-md flex items-center gap-2 mb-2">
                <Mail className="text-orange-500 w-4 h-4" /> Send us message
              </h3>

              <input
                type="text"
                name="name"
                placeholder="Full name"
                className="w-full border-b border-black p-2 text-sm placeholder-gray-500 focus:outline-none"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="w-full border-b border-black p-2 text-sm placeholder-gray-500 focus:outline-none"
                value={formData.phone}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="w-full border-b border-black p-2 text-sm placeholder-gray-500 focus:outline-none"
                value={formData.email}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={3}
                className="w-full border-b border-black p-2 text-sm placeholder-gray-500 focus:outline-none resize-none"
                value={formData.message}
                onChange={handleChange}
              />

              <button
                type="submit"
                className="bg-orange-500 text-white text-sm px-5 py-2 rounded hover:bg-orange-600 flex items-center gap-2"
              >
                <span>➤</span> Send message
              </button>
            </form>
          </div>
        </div>
      </PageWrapper>

      {/* ✅ Full-Width Map Section (breaks out of layout) */}
      <div className="relative w-screen h-[400px] left-1/2 right-1/2 -translate-x-1/2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.068680943676!2d145.0943469157011!3d-37.90322277973985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad644f799e0b16b%3A0x89b6c6d3d69cddc0!2s454A%20North%20Rd%2C%20Ormond%20VIC%203206%2C%20Australia!5e0!3m2!1sen!2sus!4v1615170514669!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
}
