import Image from 'next/image';

interface StaticImageProps {
  src: string;
  alt: string;
}

const StaticImage = ({ src, alt }: StaticImageProps) => {
  return (
    <div className="w-full max-w-screen mx-auto mt-10">
      <div className="relative w-full h-[60vw] max-h-[450px] rounded-lg overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default StaticImage;
