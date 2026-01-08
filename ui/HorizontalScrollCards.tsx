"use client";

import Image from "next/image";
import { useRef, useState } from "react";

interface Card {
    imageSrc: string;
    title: string;
    description: string;
}

export default function HorizontalDragCards({
    cards,
}: {
    cards: Card[];
}) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollContainerRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollContainerRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Multiply by 2 for faster scrolling
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    return (
        <>
            <style jsx>{`
                .horizontal-scroll-yellow::-webkit-scrollbar {
                    height: 5px;
                }
                .horizontal-scroll-yellow::-webkit-scrollbar-track {
                    background: #1a1a1a;
                }
                .horizontal-scroll-yellow::-webkit-scrollbar-thumb {
                    background: #FFD700;
                    border-radius: 0px;
                    cursor: pointer;
                }
                .horizontal-scroll-yellow::-webkit-scrollbar-thumb:hover {
                    background: #FFC700;
                }
            `}</style>
            <div
                ref={scrollContainerRef}
                className="content-container overflow-x-scroll relative h-[800px] horizontal-scroll-yellow pb-10"
                style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
            >
                <div className="flex flex-row gap-5 h-full">
                    {cards.map((c, i) => (
                        <div key={i} className="flex flex-col shrink-0 w-[500px] h-full bg-[#121319] select-none">
                            <div className="w-full">
                                <Image
                                    src={c.imageSrc}
                                    alt={c.title}
                                    width={500}
                                    height={500}
                                    className="w-full h-auto"
                                    draggable={false}
                                />
                            </div>
                            <div className="p-10">
                                <h3 className="text-white text-[32px] mb-2">{c.title}</h3>
                                <p className="text-gray-400 text-[22px]">{c.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
