import React from "react";

interface ContentWrapperProps {
  children: React.ReactNode;
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({ children }) => {
  return <div className=" px-5rem py-2rem h-max w-[100%]">{children}</div>;
};

export default ContentWrapper;
