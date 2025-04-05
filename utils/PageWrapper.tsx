import React from "react";

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <div className="container w-[100%] min-h-[100vh] h-max bg-amber-600 mt-16">
      {children}
    </div>
  );
};

export default PageWrapper;
