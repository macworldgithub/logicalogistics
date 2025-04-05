import React from "react";

const Footer = () => {
  return (
    <footer className="bottom-0 left-0 right-0 bg-gray-100 shadow-inner p-4 text-center">
      <p className="text-gray-600">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
