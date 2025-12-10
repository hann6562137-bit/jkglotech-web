/* eslint-disable @next/next/no-img-element */
export default function LoadSVG({ src, alt, className }: { src: string; alt: string; className?: string }) {
    return <object data={src} title={alt} className={className} />;
}