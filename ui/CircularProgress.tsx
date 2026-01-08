import CircularProgressCenterNumber from "@/components/animation/CircularProgressCenterNumber";

export default function CircularProgress({
  bigTitle,
  title,
  description,
  percentage,
  value,
  mode = 'number',
  suffix = "",
  prefix = "",
  decimals = 0,
  background = "#121319",
  strokeThickness = 8,
  bgRingColor = "black",
  ringColor = "white",
  imageSrc
}: {
  bigTitle?: string,
  title?: string,
  description?: string,
  percentage?: number,
  value?: number,
  mode?: 'number' | 'time',
  suffix?: string,
  prefix?: string,
  decimals?: number,
  background?: string,
  strokeThickness?: number,
  bgRingColor?: string,
  ringColor?: string,
  imageSrc?: string
}) {
  return (
    <div className={`flex flex-col font-pretendard justify-start items-center bg-[${background}] py-12 w-full h-full `}>
      <div className="w-full px-5 xl:px-20">
        <CircularProgressCenterNumber
          percentage={percentage}
          value={value}
          mode={mode}
          suffix={suffix}
          prefix={prefix}
          decimals={decimals}
          strokeThickness={strokeThickness}
          bgRingColor={bgRingColor}
          ringColor={ringColor}
          imageSrc={imageSrc}
        />
      </div>
      {
        bigTitle && <div className="mt-5 xl:mt-10 text-white text-[15px] xl:text-[35px] font-medium whitespace-pre-line text-center flex items-center">{bigTitle}</div>
      }
      {
        title && <div className="mt-5 xl:mt-10 text-white text-[15px] xl:text-[30px] font-semibold whitespace-pre-line text-center flex items-center">{title}</div>
      }
      {
        description && <div className="mt-1 xl:mt-6 text-gray-400 text-[12px] xl:text-[25px] whitespace-pre-line text-center leading-relaxed">{description}</div>
      }
    </div>
  );
}