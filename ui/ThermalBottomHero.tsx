import { Link } from "@/i18n/routing";

export default function ThermalBottomHero() {
  return (
    <div className="w-full bg-black my-[100px] xl:my-[300px]">
      <div className="content-container flex flex-col items-center justify-center text-center px-4">
        <p className="text-white font-pretendard text-[18px] xl:text-[50px] mb-10 font-semibold">
          Curious about the performance? Contact us
        </p>
        <Link
          href="/about-us"
          className="bg-[#FFD900] text-black font-pretendard px-0 xl:px-20 py-2 xl:py-4 text-[17px] xl:text-[35px] xl:w-auto w-full justify-center font-semibold flex items-center hover:bg-[#ffe033] transition-colors"
        >
          About us <span className="ml-2 text-xl">→</span>
        </Link>
      </div>
    </div>
  );
}
