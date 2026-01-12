import { Link } from "@/i18n/routing";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#25262E] text-white py-5 xl:py-16 font-pretendard">
      <div className="content-container flex flex-row xl:justify-between gap-5 xl:gap-10 lg:gap-20">
        <div className="xl:hidden block mt-1 me-5">
          <Image
            src="/assets/logo-footer-mobile.png"
            alt="JK GLOTECH"
            width={249}
            height={28}
            className="w-[68px]"
          />
        </div>
        {/* Left Section: Company Info */}
        <div className="flex flex-col">
          <div className="hidden xl:block mb-2 xl:mb-4">
            <Image
              src="/assets/logo-footer.svg"
              alt="JK GLOTECH"
              width={249}
              height={28}
              className="w-auto h-[15px] xl:h-[30px]"
            />
          </div>

          <div className="flex flex-col xl:gap-2 text-[7px] xl:text-[18px] text-[#777777] leading-relaxed">
            <div>JK Glotech Co., Ltd.</div>
            <div className="my-2 xl:my-0">
              Room 401, Kyeongdong MirWell, 741, Taejang-ro, Gimpo-si,<br />
              Gyeonggi-do, Republic of Korea
            </div>
            <div className="my-2 xl:my-0">[Postal : 10090]</div>
            <div className="flex flex-col xl:mt-4">
              <p>Tel. 031-997-6490</p>
              <p>Fax. 0505-936-7774</p>
              <p>E-mail. info@jkglotech.com</p>
            </div>
          </div>
        </div>

        {/* Right Section: Navigation Links */}
        <div className="hidden xl:grid grid-cols-4 xl:gap-x-6 gap-x-3 gap-y-5 xl:gap-y-10 lg:gap-x-12 w-full lg:w-auto">

          {/* Quick Links */}
          <div className="flex flex-col xl:gap-3 gap-1">
            <h3 className="font-aldrich text-[12px] xl:text-[24px] lg:text-[30px] text-white font-bold mb-1">Quick Links</h3>
            <div className="flex flex-col gap-1 text-[9px] xl:text-[18px] lg:text-[22px] text-[#777777]">
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <Link href="/products/thermal/nomex" className="hover:text-white transition-colors">Nomex®</Link>
              <Link href="/products/thermal/kevlar" className="hover:text-white transition-colors">Kevlar®</Link>
              <Link href="/about-us" className="hover:text-white transition-colors">About us</Link>
            </div>
          </div>

          {/* Thermal */}
          <div className="flex flex-col gap-1 xl:gap-3">
            <h3 className="font-aldrich text-[12px] xl:text-[24px] lg:text-[30px] text-white font-bold mb-1">Thermal</h3>
            <div className="flex flex-col gap-1 text-[9px] xl:text-[18px] lg:text-[22px] text-[#777777]">
              <Link href="/products/thermal/garment" className="hover:text-white transition-colors">Garment</Link>
              <Link href="/products/thermal/glove" className="hover:text-white transition-colors">Gloves</Link>
              <Link href="/products/thermal/hood" className="hover:text-white transition-colors">Hoods</Link>
            </div>
          </div>

          {/* BodyArmor */}
          <div className="flex flex-col gap-1 xl:gap-3">
            <h3 className="font-aldrich text-[12px] xl:text-[24px] lg:text-[30px] text-white font-bold mb-1">BodyArmor</h3>
            <div className="flex flex-col gap-1 text-[9px] xl:text-[18px] lg:text-[22px] text-[#777777]">
              <Link href="/products/body-armor/bulletproof-vest" className="hover:text-white transition-colors">Bulletproof vest</Link>
              <Link href="/products/body-armor/stabproof-vest" className="hover:text-white transition-colors">Stabproof vest</Link>
              <Link href="/products/body-armor/plate" className="hover:text-white transition-colors">Plate</Link>
            </div>
          </div>

          {/* Equipment */}
          <div className="flex flex-col gap-1 xl:gap-3">
            <h3 className="font-aldrich text-[12px] xl:text-[24px] lg:text-[30px] text-white font-bold mb-1">Equipment</h3>
            <div className="flex flex-col gap-1 text-[9px] xl:text-[18px] lg:text-[22px] text-[#777777]">
              <Link href="/products/equipment/ev-tank" className="hover:text-white transition-colors">EV tank</Link>
              <Link href="/products/equipment/washer" className="hover:text-white transition-colors">Decon Washer</Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
