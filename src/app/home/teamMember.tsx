// components/TeamMembersSection.tsx
"use client";

import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import ContentWrapper from "../../../utils/ContentWrapper";
import Image from "next/image";

interface TeamMember {
  name: string;
  title: string;
  image: string; // path to image in public folder
  highlight?: boolean;
}

const team: TeamMember[] = [
  {
    name: "Bessie Cooper",
    title: "Warehouse manager",
    image: "/WarehouseManager.webp",
  },
  {
    name: "Ralph Edwards",
    title: "Truck driver",
    image: "/TruckDriver.webp",
    highlight: true,
  },
  {
    name: "Brooklyn Simmons",
    title: "Procurement manager",
    image: "/ProcurementManager.webp",
  },
  {
    name: "Theresa Webb",
    title: "Demand analyst",
    image: "/DemandAnalyst.webp",
  },
];

const TeamMembersSection: React.FC = () => {
  return (
    <ContentWrapper>
      <section className="px-4 md:px-16 py-12 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-black">
            Team members
          </h2>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">
            Meet friendly, experienced and knowledgeable members who make our
            customers pleased with.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Profile image */}
              <div className="w-full aspect-square relative rounded-md overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              {/* Name */}
              <h3
                className={`mt-4 font-semibold ${
                  member.highlight ? "text-orange-500" : "text-black"
                }`}
              >
                {member.name}
              </h3>
              <p className="text-gray-500 text-sm">{member.title}</p>

              {/* Social icons */}
              <div className="flex gap-4 mt-2 text-gray-400">
                <FaTwitter
                  className={member.highlight ? "text-orange-500" : ""}
                />
                <FaFacebookF />
                <FaLinkedinIn />
              </div>
            </div>
          ))}
        </div>
      </section>
    </ContentWrapper>
  );
};

export default TeamMembersSection;
