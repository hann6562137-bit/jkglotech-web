import ProductMainIntoduce from "@/components/animation/ProductMainIntoduce";
import { BodyArmorMenu } from "@/components/nav/BodyArmorMenu";
import Banner from "@/ui/banner";

export default function BulletproofVestPage() {
    return (
        <div> 
            <Banner
                title="Bulletproof Vest"
                bgSrc="/assets/banners/bulletproof-vest-banner.png"
                />
            <div className="content-container mt-15 flex flex-col">
                <BodyArmorMenu currentMenu="bulletproof-vest" />
                <div>

                </div>
                <div>
                    
                </div>
            </div>
            <div className="w-full bg-[#121319] mt-20">
                <div className="w-full max-w-[1920px] mx-auto ">
                    <ProductMainIntoduce src="/assets/products/bulletproof-vest-intro.png" />
                </div>
            </div>
        </div>
    );
}