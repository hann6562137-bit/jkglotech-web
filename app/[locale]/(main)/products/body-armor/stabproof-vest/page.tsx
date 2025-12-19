import ProductMainIntoduce from "@/components/animation/ProductMainIntoduce";
import { BodyArmorMenu } from "@/components/nav/BodyArmorMenu";
import { Link } from "@/i18n/routing";
import Banner from "@/ui/banner";
import CircularProgress from "@/ui/CircularProgress";
import FeatureCard from "@/ui/FeatureCard";
import Image from "next/image";

export default function StabproofVestPage() {
    return (
        <div className="mt-[100px]">
            <Banner
                title="Stabproof Vest"
                bgSrc="/assets/banners/stabproof-vest-banner.png"
            />
            <div className="content-container mt-15 flex flex-col">
                <BodyArmorMenu currentMenu="stabproof-vest" />
                <div className="w-full h-auto mt-10">
                    <Image
                        src="/assets/products/stabproof-vest-top.png"
                        alt="Stabproof Vest"
                        width={1920}
                        height={1080}
                    />
                </div>
                <div className="mt-50 mb-50 font-aldrich text-[50px] mx-auto text-center">
                    Stab proof Vest
                </div>

            </div>
            <div className="w-full bg-[#121319] mt-20">
                <div className="w-full max-w-[1920px] mx-auto ">
                    <ProductMainIntoduce src="/assets/products/stabproof-vest-intro.png" />
                </div>
            </div>
            <div className="content-container flex flex-col">
                <div className="mt-50 mb-30 font-aldrich text-[40px] mx-auto text-center">
                    Material Durability
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-40">
                    <CircularProgress
                        percentage={85}
                        value={17}
                        prefix="x"
                        title={`Stab-Resistance\nPerformance Test`}
                        description={`Ensures sufficient stability\nthrough 17 rounds of\nperformance testing`}
                    />
                    <CircularProgress
                        percentage={70}
                        value={10}
                        suffix="s"
                        title={`In-House Production\nTechnology`}
                        description={`Specially coated stab-\nresistant material produced\nwith proprietary technology,\noffering flexibility and high\nresilience`}
                    />
                    <CircularProgress
                        percentage={100}
                        value={100}
                        suffix="%"
                        title={`Kevlar® Prepreg\nfabric`}
                        description={`Pre-impregnated Kevlar®\nlayers engineered for\nsuperior strength, flexibility,\nand consistent quality.`}
                    />
                    <CircularProgress
                        percentage={100}
                        value={100}
                        suffix="%"
                        title={`Kevlar® Ceramic\nCoated fabric`}
                        description={`Kevlar® fabric reinforced\nwith a ceramic coating to\nenhance stab and cut\nresistance.`}
                    />
                </div>
                <div className="flex flex-col gap-[2px] mt-20 w-full mb-40">
                    <FeatureCard
                        imageSrc="/assets/products/stabproof-vest-feature-2.png"
                        title="Proven Safety"
                        description="Over 17 stab-resistance tests completed at accredited domestic and international laboratories."
                    />
                    <FeatureCard
                        imageSrc="/assets/products/stabproof-vest-feature-3.png"
                        title="Weight Distribution System"
                        description={`A 3-point waist-tightening mechanism ensures a snug fit around the torso, enhancing comfort and evenly distributing weight to minimize fatigue during long wear.`}
                    />
                    <FeatureCard
                        imageSrc="/assets/products/stabproof-vest-feature-4.png"
                        title="Quick Wearability"
                        description="Incorporates an aircraft life-vest fastening system with a zipper closure, allowing rapid wear and removal — even enabling over-the-head donning in emergencies for immediate readiness."
                    />
                </div>
            </div>
            <div className="w-full relative">
                <Image
                    src="/assets/products/stabproof-vest-bottom.png"
                    alt="Stabproof Vest"
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                    <p className="text-white font-aldrich text-[24px] md:text-[32px] text-center leading-relaxed drop-shadow-md">
                        A field-proven stab-resistant vest, designed for quick wear and<br />
                        agile movement, specialized for police operations.
                    </p>
                </div>
            </div>
            <div className="w-full bg-black mt-[300px] mb-[300px] flex flex-col items-center justify-center text-center px-4">
                <p className="text-white font-pretendard text-[50px] mb-10 font-semibold">
                    Experience trusted stab-resistant protection
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