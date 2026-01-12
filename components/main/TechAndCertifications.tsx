"use client";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function TechAndCertifications() {
	const t = useTranslations("Main.TechAndCertifications");

	return (
		<div className="text-center pt-12 lg:pt-28 pb-16">
			<div className="content-container my-0">
				<span
					className="font-pretendard font-semibold text-[20px] md:text-[40px] leading-[130%] tracking-[-0.03em] text-center align-middle"
					data-aos="fade-up"
					data-aos-delay="0">
					{t("heading")}
				</span>

				<div
					className="font-pretendard font-medium text-[#73798E] text-[10px] md:text-[30px] leading-[150%] tracking-[-0.03em] text-center align-middle mt-5 lg:mt-12 block whitespace-pre-line"
					data-aos="fade-up"
					data-aos-delay="0">
					{t("subheading")}
				</div>

				<div
					className="flex w-full mt-7 lg:mt-16 cursor-pointer lg:mb-32"
					data-aos="fade-up"
					data-aos-delay="0">
					<SectionItem
						title={t("sections.company.title")}
						description={t("sections.company.description")}
						imageSrc="/assets/main/4.jpg"
						link="/about"
					/>
					<SectionItem
						title={t("sections.products.title")}
						description={t("sections.products.description")}
						imageSrc="/assets/main/1.jpg"
						link="/products"
					/>
					<SectionItem
						title={t("sections.tech.title")}
						description={t("sections.tech.description")}
						imageSrc="/assets/main/2.jpg"
						link="/customer-support"
					/>
					<SectionItem
						title={t("sections.customer.title")}
						description={t("sections.customer.description")}
						imageSrc="/assets/main/3.jpg"
						link="/customer-support"
					/>
				</div>
			</div>
		</div>
	);
}

function SectionItem({ title, description, imageSrc, link }: { title: string; description: string; imageSrc: string; link: string }) {
	return (
		<Link href={link} className="flex-1 h-[150px] lg:h-[653px] relative overflow-hidden flex transition-all duration-300 hover:flex-3 group">
			<Image src={imageSrc} alt={title} width={1000} height={1000} className="object-cover h-full w-full z-0" />

			<div className="absolute bg-black inset-0 z-5 opacity-30 w-full h-full"></div>

			<div className="flex absolute lg:hidden w-full h-full items-center justify-center text-white font-semibold text-[12px] z-10">
				{title}
			</div>

			<div
				className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-10
                text-white font-semibold text-[50px]
                text-center opacity-100 group-hover:opacity-0">
				{title}
			</div>

			{/* 호버시 뜰 제목 */}
			<div
				className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full 
                text-start ps-10 text-white
                opacity-0 group-hover:opacity-100 transition-opacity duration-300">
				<div className="font-semibold text-[50px]">{title}</div>
			</div>

			<div
				className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-6 z-10 w-full
                pt-16
                text-start ps-10 text-white
                opacity-0 group-hover:opacity-100 transition-opacity duration-300">
				<div className="text-[23px] font-medium whitespace-pre-line max-w-[80%] ">{description}</div>
			</div>
		</Link>
	);
}