import { useState, useRef } from "react";

import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import Paragraph from "@/components/shared/Paragraph/Paragraph";

import Play from '@/public/assets/svg/play.svg';

export default function Welcome() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(true);

    const play = () => {
        setIsPlaying(state => !state);
        if (isPlaying) {
            videoRef.current?.play();
        } else {
            videoRef.current?.pause();
        }
    };

    return (
        <section className="py-3">
            <div className="container">
                <SectionHeader styles="md:text-center" text="We’re welcoming new patients and can’t wait to meet you." />
                <Paragraph styles="mb-[50px] md:text-center" text="We use only the best quality materials on the market in order to provide the best products to our patients, So don’t worry about anything and book yourself." />
                <div className="relative w-full rounded-lg overflow-hidden cursor-pointer" onClick={play}>
                    <video ref={videoRef} className="w-full" src="https://res.cloudinary.com/dlvkybbnu/video/upload/v1692818757/10_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B2_%D1%83%D0%B6%D0%B0%D1%81%D0%BE%D0%B2_%D0%BA%D0%BE%D1%82%D0%BE%D1%80%D1%8B%D0%B5_%D0%B4%D0%BE%D0%BB%D0%B6%D0%B5%D0%BD_%D0%BF%D0%BE%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C_%D0%BA%D0%B0%D0%B6%D0%B4%D1%8B%D0%B9._%D0%A7%D0%B0%D1%81%D1%82%D1%8C_1_fjuvs1.mp4" />
                    <Play className={`absolute w-[50px] md:w-[68px] xl:w-[80px] h-[50px] md:h-[68px] xl:h-[80px] top-[50%] left-[50%] -translate-x-[50%] -tranclate-y-[50%] ${isPlaying ? 'scale-1' : 'scale-0'} transition-all`} />
                </div>
            </div>
        </section>
    );
}