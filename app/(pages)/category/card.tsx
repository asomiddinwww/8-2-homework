import Image, { StaticImageData } from "next/image";

const Card = ({
  title,
  img,
  price,
}: {
  title: string;
  img: string | StaticImageData;
  price?: string;
}) => {
  return (
    <div className="flex flex-col items-center group cursor-pointer text-center">
      <div className="relative w-full h-40 mb-4 transition-transform duration-300 group-hover:scale-105">
        <Image
          src={img}
          alt={title}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 200px"
        />
      </div>
      {price && (
        <p className="text-sm font-bold text-green-600 mb-1">{price}</p>
      )}
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>
  );
};
export default Card;
