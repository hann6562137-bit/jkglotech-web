"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

function toHMS(seconds: number) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  const parts = [];
  if (hrs > 0) parts.push(`${hrs}h`);
  if (mins > 0) parts.push(`${mins}m`);
  if (secs > 0 || (hrs === 0 && mins === 0)) parts.push(`${secs}s`);

  return parts.join(" ");
}

interface CircularProgressProps {
  percentage?: number; // 0-100 for the ring fill
  value?: number;      // Target number to display
  duration?: number;
  mode?: 'number' | 'time';
  suffix?: string;
  prefix?: string;
  decimals?: number;
  strokeThickness?: number;
  bgRingColor?: string;
  ringColor?: string;
  imageSrc?: string;
}

export default function CircularProgressCenterNumber({
  percentage = 0,
  value = 0,
  duration = 1500,
  mode = 'number',
  suffix = "",
  prefix = "",
  decimals = 0,
  strokeThickness = 8,
  bgRingColor = "black",
  ringColor = "white",
  imageSrc
}: CircularProgressProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const [displayPercentage, setDisplayPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Easing Function: EaseOutQuart (Fast start, smooth deceleration)
  const easeOutQuart = (x: number): number => {
    return 1 - Math.pow(1 - x, 4);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const linearRatio = Math.min(elapsed / duration, 1);
      const eased = easeOutQuart(linearRatio);

      setDisplayPercentage(eased * percentage);
      setDisplayValue(eased * value);

      if (linearRatio < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [percentage, value, duration, isVisible]);

  // SVG Config
  const size = 100; // coordinate system size
  const radius = (size - strokeThickness) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (displayPercentage / 100) * circumference;
  const cx = size / 2;
  const cy = size / 2;

  const formattedText = mode === 'time'
    ? toHMS(Math.round(displayValue))
    : `${prefix}${displayValue.toFixed(decimals)}${suffix}`;

  return (
    <div ref={containerRef} className="relative w-full h-full flex items-center justify-center font-aldrich">
      <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full transform -rotate-90">
        {/* Background Circle */}
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          stroke={bgRingColor}
          strokeWidth={strokeThickness}
          fill="transparent"
        />
        {/* Progress Circle */}
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          stroke={ringColor}
          strokeWidth={strokeThickness}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center select-none">
        {imageSrc ? (
          <>
            <div className="relative w-[100%] h-[100%] md:w-[40%] md:h-[40%] mb-2">
              <Image
                src={imageSrc}
                alt="Progress Icon"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-white font-aldrich text-[17px] xl:text-[30px]">
              {formattedText}
            </div>
          </>
        ) : (
          <div className="text-white font-aldrich text-[17px] xl:text-[30px]">
            {formattedText}
          </div>
        )}
      </div>
    </div>
  );
}
