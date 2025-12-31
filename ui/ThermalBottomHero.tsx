import { Link } from "@/i18n/routing";

export default function ThermalBottomHero() {
  return (
    <div className="w-full bg-black mt-[300px] mb-[300px]">
      <div className="content-container flex flex-col items-center justify-center text-center px-4">
        <p className="text-white font-pretendard text-[50px] mb-10 font-semibold">
          Curious about the performance? Contact us
        </p>
        <Link
          href="/about-us"
          className="bg-[#FFD900] text-black font-pretendard px-20 py-4 text-[35px] font-semibold flex items-center hover:bg-[#ffe033] transition-colors"
        >
          About us <span className="ml-2 text-xl">→</span>
        </Link>
      </div>
    </div>
  );
}
