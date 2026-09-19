import Image from "next/image";

export default function BrandLogo({ size = "h-9" }) {
  return (
    <span className="flex items-center gap-2">
      <Image
        src="/logo-mark.png"
        alt="Darion Data"
        width={129}
        height={101}
        priority
        className={`${size} w-auto`}
      />
      <span className="flex flex-col leading-none">
        <span className="text-base font-bold tracking-wide text-white">DARION</span>
        <span className="text-[10px] font-medium tracking-[0.3em] text-blue-400">DATA</span>
      </span>
    </span>
  );
}
