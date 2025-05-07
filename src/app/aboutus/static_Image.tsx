
import Image from 'next/image';

interface StaticImageProps {
  src: string;
  alt: string;
}

const StaticImage = ({ src, alt }: StaticImageProps) => {
  return (
    <div className="w-full max-w-screen mx-auto mt-10">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={600}
        className="rounded-lg object-cover w-full"
      />
    </div>
  );
};

export default StaticImage;
