"use client";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function ProductHighlights() {
    const t = useTranslations("Main.ProductHighlights");

	return (
		<div className="text-center bg-[#F4F5FA] pt-12 lg:pt-28 pb-16">
			<div className="w-full content-container my-0 px-2 lg:px-0">
				<span
					className="font-pretendard font-semibold text-[20px] lg:text-[40px] leading-[130%] tracking-[-0.03em] text-center align-middle"
					data-aos="fade-up"
					data-aos-delay="0">
					{t("heading")}
				</span>
				<div className="w-full grid lg:grid-cols-4 grid-cols-2 gap-3 mt-5 lg:mt-12 ">
					{/* Highlight Item 1 */}
					<div className="flex flex-col items-center justify-center mb-auto" data-aos="fade-up" data-aos-delay="0">
						{/* must be relative for next/image fill to work */}
						<div className="w-full aspect-square bg-gray-300 mb-3 lg:mb-9 relative overflow-hidden">
							<Image src="/assets/main/product1.png" alt={t("items.item1.title")} fill className="object-cover" />
						</div>
						<span className="font-pretendard font-semibold lg:text-[25px] text-[12px] leading-[130%] tracking-[-0.03em] text-black text-center">
							{t("items.item1.title")}
						</span>
						<span className="font-pretendard font-medium lg:text-[20px] text-[9px] leading-[130%] tracking-[-0.03em] text-[#969BAE] text-center mt-3 whitespace-pre-line">
							{t("items.item1.description")}
						</span>
					</div>
					{/* Highlight Item 2 */}
					<div className="flex flex-col items-center justify-center mb-auto" data-aos="fade-up" data-aos-delay="100">
						<div className="w-full aspect-square bg-gray-300 mb-3 lg:mb-9 relative overflow-hidden">
							<Image src="/assets/main/product2.png" alt={t("items.item2.title")} fill className="object-cover" />
						</div>
						<span className="font-pretendard font-semibold lg:text-[25px] text-[12px] leading-[130%] tracking-[-0.03em] text-black text-center">
							{t("items.item2.title")}
						</span>
						<span className="font-pretendard font-medium lg:text-[20px] text-[9px] leading-[130%] tracking-[-0.03em] text-[#969BAE] text-center mt-3">
							{t("items.item2.description")}
						</span>
					</div>
					{/* Highlight Item 3 */}
					<div className="flex flex-col items-center justify-center mb-auto" data-aos="fade-up" data-aos-delay="200">
						<div className="w-full aspect-square bg-gray-300 mb-3 lg:mb-9 relative overflow-hidden">
							<Image src="/assets/main/product3.png" alt={t("items.item3.title")} fill className="object-cover" />
						</div>
						<span className="font-pretendard font-semibold lg:text-[25px] text-[12px] leading-[130%] tracking-[-0.03em] text-black text-center">
							{t("items.item3.title")}
						</span>
						<span className="font-pretendard font-medium lg:text-[20px] text-[9px] leading-[130%] tracking-[-0.03em] text-[#969BAE] text-center mt-3">
							{t("items.item3.description")}
						</span>
					</div>
					{/* Highlight Item 4 */}
					<div className="flex flex-col items-center justify-center mb-auto" data-aos="fade-up" data-aos-delay="300">
						<div className="w-full aspect-square bg-gray-300 mb-3 lg:mb-9 relative overflow-hidden">
							<Image src="/assets/main/product4.png" alt={t("items.item4.title")} fill className="object-cover" />
						</div>
						<span className="font-pretendard font-semibold lg:text-[25px] text-[12px] leading-[130%] tracking-[-0.03em] text-black text-center">
							{t("items.item4.title")}
						</span>
						<span className="font-pretendard font-medium lg:text-[20px] text-[9px] leading-[130%] tracking-[-0.03em] text-[#969BAE] text-center mt-3">
							{t("items.item4.description")}
						</span>
					</div>
				</div>

				{/* Button */}
				<Link
					className="flex justify-center mt-12 mx-auto cursor-pointer lg:w-auto w-[150px]"
					href="/products/screw-compressor"
					data-aos="fade-up"
					data-aos-delay="0">
					{/* give explicit dimensions so next/image renders without fill */}
					<Image
						src={t("moreProductsSrc")}
						alt={t("buttonAlt")}
						width={240}
						height={56}
						className="w-auto h-auto"
					/>
				</Link>
			</div>
		</div>
	);
}
