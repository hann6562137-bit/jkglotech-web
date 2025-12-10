import Image from "next/image";

export default function Banner({title, bgSrc}:{title:string, bgSrc:string}) {
    return (
        <div className="relative w-full">
            <Image
                src={bgSrc}
                alt="Banner Background"
                width={1920}
                height={600}
                className="w-full h-auto" />
            <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center">
                <h1 className="text-[70px] font-aldrich">{title}</h1>
            </div>
        </div>
    );
}