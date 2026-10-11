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
        <span className="text-base font-bold tracking-tight text-[#1d1d1f]">DARION</span>
        <span className="text-[10px] font-semibold tracking-[0.28em] text-[#0071e3]">DATA</span>
      </span>
    </span>
  );
}
