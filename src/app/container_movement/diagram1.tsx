"use client";

import Image from "next/image";

interface Diagram {
  label: string;
  description: string;
  image: string;
}

const FCLvsLCL = () => {
  const diagramData: Diagram[] = [
    {
      label: "FCL",
      description: "Your Shipment",
      image: "/LCL-vs-FCL.webp",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-10 lg:px-20 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-4xl font-bold mb-4">
        FCL Container Movement
      </h2>
      <p className="text-gray-600 mb-6 max-w-3xl">
        While offering a link in the international logistics solutions we also
        can assist with all other container movement requirements. Be it out of
        Melbourne’s wharfs or simply moving containers throughout the country we
        can certainly assist.
      </p>

      <div className="mb-10">
        <Image
          src="/conta_move.webp"
          alt="Container Yard"
          width={700}
          height={400}
          className="w-full h-auto rounded-md shadow"
        />
      </div>

      <h3 className="text-xl font-semibold mb-3">FCL vs LCL – Diagram 1</h3>
      <p className="text-gray-600 mb-10 max-w-3xl">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting.
      </p>

      <div className="grid grid-cols-1 ">
        {diagramData.map((item, index) => (
          <div key={index} className="text-center">
            <Image
              src={item.image}
              alt={item.label}
              width={1200}
              height={400}
              className="mx-auto mb-2"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FCLvsLCL;
