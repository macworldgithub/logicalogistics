import Image from "next/image";
import React from "react";
import ContentWrapper from "../../../utils/ContentWrapper";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Container sea freight cost for all small businesses.",
    date: "16 Aug 2021",
    image: "/section13.png",
  },
  {
    id: 2,
    title: "Effective logistics strategies during peak seasons.",
    date: "20 Sep 2021",
    image: "/section14.png",
  },
  {
    id: 3,
    title: "Smart warehousing solutions for modern businesses.",
    date: "10 Oct 2021",
    image: "/section15.png",
  },
];

const NewsSection: React.FC = () => {
  return (
    <ContentWrapper>
      <section className="px-4 md:px-20 py-12 bg-white">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Text Column */}
          <div className="w-full lg:w-1/3 space-y-6 lg:pl-37">
            <h2 className="text-2xl md:text-2xl font-bold text-black leading-snug">
              News updates and useful tips for logistics & transportation
            </h2>
            <p className="text-gray-600 text-sm">
              Provide you news updates to help you handle logistics challenges as well as crucial information about transportation for businesses
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md">
              See more
            </button>
          </div>

          {/* Cards Section */}
          <div className="w-full lg:w-2/3">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {newsItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded shadow-md overflow-hidden"
                >
                  <div className="relative w-full h-52">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-gray-500">{item.date}</p>
                    <h3 className="text-sm font-semibold mt-1 text-black">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ContentWrapper>
  );
};

export default NewsSection;
