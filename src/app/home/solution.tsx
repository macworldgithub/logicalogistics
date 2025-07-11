import Image from "next/image";
import ContentWrapper from '../../../utils/ContentWrapper';
const solutions = [
  {
    title: "Wharf Cartage",
    image: "/sol1.webp", // Replace with your actual file
  },
  {
    title: "Freight Movement",
    image: "/sol2.webp",
  },
  {
    title: "Bio Security",
    image: "/sol3.webp",
  },
  {
    title: "Inventory Management",
    image: "/sol4.webp",
  },
  {
    title: "movement",
    image: "/sol5.webp",
  },
];

export default function SolutionsSection() {
  return (
    <ContentWrapper>
    <section className="bg-white py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Solutions we offer</h2>
      <p className="text-gray-600 mb-10 max-w-3xl">
        Provides high quality and comprehensive transportation services with
        competitive rates and always understand client’s requirements.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {solutions.map((item, idx) => (
          <div key={idx} className="relative group overflow-hidden rounded shadow-md">
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={300}
              className=" h-full object-cover transition-transform duration-300 group-hover:scale-105 w-[99vm]"
            />
          </div>
        ))}
      </div>
    </section>
    </ContentWrapper>
  );
}
