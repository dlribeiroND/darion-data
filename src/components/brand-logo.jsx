import Image from "next/image";

export default function BrandLogo({ size = "h-10" }) {
  return (
    <span className="flex items-center">
      <Image
        src="/og-image.png"
        alt="Darion Data"
        width={1536}
        height={1024}
        priority
        className={`${size} w-auto object-contain`}
      />
    </span>
  );
}
