import Image from "next/image";

const locations = [
  { name: "New York, United States", top: "35%", left: "28%" },
  { name: "Brazil", top: "60%", left: "32%" },
  { name: "UK", top: "30%", left: "43%" },
  { name: "Germany", top: "33%", left: "47%" },
  { name: "Egypt", top: "44%", left: "50%" },
  { name: "South Africa", top: "67%", left: "50%" },
  { name: "India", top: "50%", left: "60%" },
  { name: "China", top: "40%", left: "67%" },
  { name: "Russia", top: "25%", left: "60%" },
  { name: "Japan", top: "38%", left: "75%" },
  { name: "Australia", top: "75%", left: "82%" },
  { name: "Canada", top: "25%", left: "23%" },
];

const OurNetwork = () => {
  return (
    <div className="relative w-full h-screen bg-white flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl font-semibold mb-6 text-center">Our network</h2>
      <div className="relative w-full max-w-5xl aspect-[2/1]">
        <Image
          src="/map.png"
          alt="World Map"
          layout="fill"
          objectFit="contain"
          className="rounded"
        />
        {locations.map((loc, idx) => (
          <div
            key={idx}
            className="absolute flex items-center justify-center w-3 h-3 bg-orange-500 rounded-full shadow-md cursor-pointer"
            style={{ top: loc.top, left: loc.left }}
            title={loc.name}
          />
        ))}
      </div>
    </div>
  );
};

export default OurNetwork;
