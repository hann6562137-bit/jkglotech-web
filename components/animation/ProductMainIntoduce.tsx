import Image from "next/image";
import RadialRingsSVG from "./RadialFade";

export default function ProductMainIntoduce({src}:{src:string}) {
    return (
        <div className="w-full relative">
            <Image
                src={src}
                alt="Product Main Introduce"
                width={1920}
                height={600}
                className="w-full h-auto relative! z-20!" />
            <div className="w-full h-full absolute top-0 left-0 bg-[#121319] z-0" />
            <div className="h-full absolute top-0 left-[5%] flex items-center justify-center z-10">
                <div className="h-[80%]">
                    <RadialRingsSVG />
                </div>
            </div>
        </div>
    );
}