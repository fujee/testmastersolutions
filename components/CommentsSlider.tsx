'use client'

import { getMediaPathname } from "@/common/pathHelper";
import { useLang } from "@/contexts/langContext";
import { faLongArrowAltLeft, faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback } from "react";

export default function CommentsSlider() {
    const { t } = useLang();

    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: "start" },
        [
            Autoplay({
                delay: 4000,
                stopOnInteraction: false,
            }),
        ]
    );

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi]);

    const sliderData = [
        {
            id: 1,
            title: t(`"Било ми је задовољство радити са овим људима уз перфектну организацију."`, "home_eval_comm_1"),
        },
        {
            id: 2,
            title: t(`"Све похвале за све установе и све људе који су били укључени у читав процес Завршног испита. Перфектно реализован пројекат."`, "home_eval_comm_2"),
        },
        {
            id: 3,
            title: t(`"Чиста десетка за сарадњу са тимом. Реч у решавању проблема, поред опреме и софтвера, има огроман удео. Свака част."`, "home_eval_comm_3"),
        },
        {
            id: 4,
            title: t(`"Честитке за успешно обављен посао и хвала свима на изузетној сарадњи."`, "home_eval_comm_4"),
        },
        {
            id: 5,
            title: t(`"Све одлично функционише. Софтвер више него практичан."`, "home_eval_comm_5")
        },
        {
            id: 6,
            title: t(`"Све похвале за комплетну припрему, организацију и реализацију планираних активности."`, "home_eval_comm_6")
        },
        {
            id: 7,
            title: t(`"Било је задовољство радити са вама."`, "home_eval_comm_7")
        }
    ];

    return (
        <>
            <div className="overflow-hidden w-full mx-3 lg:mx-20 pt-4 relative" ref={emblaRef}>
                <div className="flex">
                    {sliderData.map((item) => (
                        <div
                            className="flex-shrink-0 basis-full lg:basis-1/2 px-5 relative"
                            key={item.id}
                        >
                            <span className="absolute -top-3 lg:-top-5 right-[16%] lg:right-[14%] w-[9%] z-30">
                                <Image
                                    className="block w-full h-auto align-middle"
                                    src={getMediaPathname("clients/quote.svg")}
                                    alt="Quote"
                                    width={40}
                                    height={40}
                                />
                            </span>

                            <div className="px-10 pt-[50px] pb-10 border-[10px] border-t-0 border-[#f7f7f7] shadow-lg h-full flex items-center justify-center relative after:content-[''] after:absolute after:top-0 after:h-[10px] after:w-3/4 after:left-0 after:bg-[#f7f7f7] before:content-[''] before:absolute before:top-0 before:h-[10px] before:w-[5%] before:right-0 before:bg-[#f7f7f7] box-border">
                                <p className="text-center text-lg font-normal italic text-white font-playfair">
                                    {item.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <span
                    className="bg-[#bcab8a] py-[10px] px-5 cursor-pointer absolute top-1/2 left-0 transform -translate-y-1/2 z-40"
                    onClick={scrollPrev}
                >
                    <FontAwesomeIcon icon={faLongArrowAltLeft} />
                </span>

                <span
                    className="bg-[#bcab8a] py-[10px] px-5 cursor-pointer absolute top-1/2 right-0 transform -translate-y-1/2 z-40"
                    onClick={scrollNext}
                >
                    <FontAwesomeIcon icon={faLongArrowAltRight} />
                </span>
            </div>

        </>
    );
}