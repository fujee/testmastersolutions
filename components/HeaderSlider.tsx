'use client'

import { getMediaPathname } from "@/common/pathHelper";
import { getLang } from "@/common/pismo";
import { useLang } from "@/contexts/langContext";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

export default function HeaderSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const { t, lang } = useLang();

    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: "start" },
        [
            Autoplay({
                delay: 7000,
                stopOnInteraction: false,
            }),
        ]
    );

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setCurrentIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        emblaApi.on("select", onSelect);
        onSelect();

        return () => {
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi, onSelect]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi]);

    const sliderData = [
        {
            id: 1,
            title: t("Софтверско решење", "home_slide1_title"),
            subtitle: t("ТестМастер", "home_slide1_subtitle"),
            description: t("Софтвер за подршку тестирања кандидата. <br/>Унапређивање образовног система модерним технолошким решењима.", "home_slide1_desc"),
            img: "slides/1.jpg",
            href: "#software"
        },
        {
            id: 2,
            title: t("обухваћене све", "home_slide2_title"),
            subtitle: t("Фазе процеса", "home_slide2_subtitle"),
            description: t("Дизајнирање и генерисање персонализованих тестова, <br/>Дистрибуција и пријем материјала, <br/>Скенирање тестова и аутоматска обрада, <br/>Ручно прегледање и објава резултата, <br/>Онлајн приговори и аналитика.", "home_slide2_desc"),
            img: "slides/3.jpg",
            href: "#phases"
        },
        {
            id: 3,
            title: t("О нама говоре", "home_slide3_title"),
            subtitle: t("Наши резултати", "home_slide3_subtitle"),
            description: t("Спровођење завршних испита на крају основног образовања и васпитања (мала матура), <br/>Пријемни испити на мастер студијама, <br/>Пријемни испити на основним студијама, <br/>Колоквијуми и испити на факултетима.", "home_slide3_desc"),
            img: "slides/2.jpg",
            href: "#results"
        },
        {
            id: 4,
            title: t("Поносни на", "home_slide4_title"),
            subtitle: t("Наше партнере", "home_slide4_subtitle"),
            description: t("Влада Републике Србије, <br/> Министарство просвете, <br/> Канцеларија за информационе технологије и електронску управу, <br/> Завод за вредновање квалитета образовања и васпитања", "home_slide4_desc"),
            img: "slides/partners.jpg",
            href: "#partners"
        },
    ];

    return (
        <>
            <div className="relative overflow-hidden max-w-full">
                <div className="relative" ref={emblaRef}>
                    <div className="flex">
                        {sliderData.map((item) => (
                            <div
                                className="flex-shrink-0 basis-full relative"
                                key={item.id}
                            >
                                <div
                                    className="relative overflow-hidden max-lg:bg-center bg-cover lg:bg-repeat-round h-screen"
                                    style={{
                                        backgroundImage: `url('${getMediaPathname(item.img)}')`
                                    }}
                                >
                                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-10"></div>
                                    <div className="container mx-auto top-[25%] lg:top-[25%] relative z-20 flex ">
                                        <div className="lg:grid lg:grid-cols-3 items-center justify-center">
                                            <div className="lg:col-span-2 ml-4 lg:ml-44 flex flex-col justify-center items-start">
                                                <p className={`text-primary text-[25px] ${getLang(lang) === "sr-Cyrl-RS" ? "lg:text-[30px]" : "lg:text-[40px]"} font-light uppercase tracking-[8px] mb-[5px] font-teko leading-[1.4] transition-all duration-300 delay-700`}>
                                                    {item.title}
                                                </p>
                                                <p className="text-[35px] lg:text-[65px] font-bold tracking-[4px] text-white leading-[1.4]">
                                                    <a href={item.href}>{item.subtitle}</a>
                                                </p>
                                                <p
                                                    className="text-[#eee] mt-[10px] leading-[2] text-[15px] font-normal"
                                                    dangerouslySetInnerHTML={{
                                                        __html: item.description,
                                                    }}
                                                />
                                                <a
                                                    href={item.href}
                                                    className="relative group border border-white font-teko text-white bg-transparent py-2 lg:py-3 px-[15px] lg:px-[35px] mt-[30px] overflow-hidden cursor-pointer"
                                                >
                                                    <span className={`${getLang(lang) === "sr-Cyrl-RS" ? "text-[15px] lg:text-[18px]" : "text-[20px] lg:text-[24px]"} uppercase tracking-[1px] lg:tracking-[2px] relative z-20 group-hover:text-primary duration-1000`}>
                                                        {t("Детаљније", "home_details_button")}
                                                    </span>
                                                    <div className="absolute inset-[-30px] bg-[#fff] transform transition-all duration-1000 ease-in-out group-hover:scale-100 scale-0"></div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="absolute right-[7%] lg:right-[15%] left-auto bottom-auto top-[12%] lg:top-[20%] w-auto text-white text-[40px] font-medium font-teko text-center">
                    <span className="text-[25px] lg:text-[60px] font-bold relative sliderNum">
                        {currentIndex + 1}
                        <span className="relative text-[12px] font-thin mx-[10px] inline-block">/</span>
                    </span>
                    <span className="max-lg:text-[20px] ml-[6px]">{sliderData.length}</span>
                </div>

                <div className="absolute right-5 lg:right-10 bottom-[12%] lg:bottom-[17.5%] flex items-center z-30">
                    <button
                        className="text-[#ccc] text-[13px] w-[45px] h-[45px] lg:w-[55px] lg:h-[55px] leading-[45px] lg:leading-[55px] text-center my-[5px] border border-navBtn cursor-pointer"
                        onClick={scrollNext}
                    >
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
                <div className="absolute right-5 lg:right-10 bottom-[5%] lg:bottom-[8%] flex items-center z-30">
                    <button
                        className="text-[#ccc] text-[13px] w-[45px] h-[45px] lg:w-[55px] lg:h-[55px] leading-[45px] lg:leading-[55px] text-center my-[5px] border border-navBtn cursor-pointer"
                        onClick={scrollPrev}
                    >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                </div>
            </div>
        </>
    );
}