"use client";

import Image from "next/image";

type PhilosophyCard = {
  iconSrc: string;
  title: string;
  description: string;
};

function PhilosophyCardItem({ card }: { card: PhilosophyCard }) {
  return (
    <div className="bg-[#121319] px-10 py-20 border border-white/5">
      <Image src={card.iconSrc} alt={card.title} width={71} height={71} className="h-[71px] w-[71px]" />
      <div className="mt-8 font-pretendard font-semibold text-white text-[30px] leading-tight whitespace-pre-line">
        {card.title}
      </div>
      <div className="mt-3 font-pretendard font-medium text-white/60 text-[20px] leading-relaxed">
        {card.description}
      </div>
    </div>
  );
}

export default function CorporatePhilosophy() {
  const cards: PhilosophyCard[] = [
    {
      iconSrc: "/assets/main/Globe.png",
      title: "Slogan",
      description: "Go Above and Beyond!",
    },
    {
      iconSrc: "/assets/main/Compass.png",
      title: "Professionalism",
      description: "Join with us and experience the Global Standard for FR PPE",
    },
    {
      iconSrc: "/assets/main/Data.png",
      title: "Sustainable Growth",
      description: "Since 2009, We have been growing continuously.",
    },
    {
      iconSrc: "/assets/main/Users_Group.png",
      title: "Innovation & R&D\nLeadership",
      description: "We lead high-end PPE solutions through robust R&D investment.",
    },
    {
      iconSrc: "/assets/main/First_Aid.png",
      title: "Safety-First Commitment",
      description: "The safety of workers and workplaces is always our top priority.",
    },
    {
      iconSrc: "/assets/main/Chat_Dots.png",
      title: "Customer Collaboration\n& Reliability",
      description: "We provide solutions by identifying the customer's unmet needs",
    },
  ];

  return (
    <section className="content-container py-40">
      <div className="font-pretendard font-semibold text-white text-[40px]">Corporate Philosophy</div>
      <div className="mt-10 grid grid-cols-3 gap-6">
        {cards.map((card) => (
          <PhilosophyCardItem key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
}
