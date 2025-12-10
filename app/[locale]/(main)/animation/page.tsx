import CircularWithMovingNumber from "@/components/animation/CircularProgressCenterNumber";
import RadialFade from "@/components/animation/RadialFade";
import RadialFadePentagon from "@/components/animation/RadialFadePentagon";

export default function Test() {
    return <div>Animation Test Page

        <CircularWithMovingNumber 
            target={85}
        />
        <CircularWithMovingNumber
            target={30}
        />
        <RadialFade />
        <RadialFadePentagon />
    </div>;
}