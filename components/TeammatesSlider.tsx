'use client'

import { getMediaPathname } from "@/common/pathHelper";
import { getLang } from "@/common/pismo";
import { useLang } from "@/contexts/langContext";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faLongArrowAltLeft, faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback } from "react";
import { useInView } from "react-intersection-observer";

export default function TeammatesSlider() {
    const { t, lang } = useLang();

    const { ref: teamRef, inView: teamInView } = useInView({
        triggerOnce: true,
        threshold: 0,
        delay: 1200
    });

    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: "start", active: teamInView },
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
            name: t(`др Марко Петровић`, "about_team_1"),
            title: t('руководилац пројекта', "home_team_manager"),
            img: 'team/marko.petrovic.png',
            site: 'https://fon.bg.ac.rs/nastavnici/marko-petrovic/',
            linkedin: 'https://www.linkedin.com/in/marko-petrovic-15832830'
        },
        {
            id: 2,
            name: t(`др Милош Јевтић`, "about_team_2"),
            img: 'team/milos.jevtic.png',
            site: 'https://fon.bg.ac.rs/nastavnici/milos-jevtic/',
            linkedin: 'https://www.linkedin.com/in/milo%C5%A1-jevti%C4%87-2663a343/'
        },
        {
            id: 3,
            name: t(`др Нина Турајлић`, "about_team_3"),
            img: 'team/nina.turajlic.png',
            site: 'https://fon.bg.ac.rs/nastavnici/nina-turajlic/',
        },
        {
            id: 4,
            name: t(`др Ненад Аничић`, "about_team_4"),
            img: 'team/nenad.anicic.png',
            site: 'https://fon.bg.ac.rs/nastavnici/nenad-anicic/',
        },
        {
            id: 5,
            name: t(`Филип Фуртула`, "about_team_5"),
            img: 'team/filip.furtula.png',
            site: 'https://fon.bg.ac.rs/nastavnici/filip-furtula/',
            linkedin: 'https://www.linkedin.com/in/filip-furtula/'
        },
        {
            id: 6,
            name: t(`Милош Љубисављевић`, "about_team_6"),
            img: 'team/milos.ljubisavljevic.png',
            site: 'https://fon.bg.ac.rs/nastavnici/milos-ljubisavljevic/',
            linkedin: 'https://www.linkedin.com/in/ljuba95/'
        },
        {
            id: 7,
            name: t(`Ђорђе Несторовић`, "about_team_7"),
            img: 'team/djordje.nestorovic.png',
            linkedin: 'https://www.linkedin.com/in/djordje-nestorovic-3b3543119/'
        },
        {
            id: 8,
            name: t(`Владимир Белча`, "about_team_8"),
            img: 'team/vladimir.belca.png',
            site: 'https://fon.bg.ac.rs/nastavnici/vladimir-belca/',
            linkedin: 'https://www.linkedin.com/in/vladimir-belca/'
        },
        {
            id: 9,
            name: t(`Александра Фуртула`, "about_team_9"),
            img: 'team/aleksandra.furtula.png',
            linkedin: 'https://www.linkedin.com/in/aleksandra-furtula-41a666181/'
        },
        {
            id: 10,
            name: t(`Исидора Видојевић`, "about_team_10"),
            img: 'team/isidora.vidojevic.png',
            linkedin: 'https://www.linkedin.com/in/isidora-vidojević-6ab4891a2/'
        },
    ];

    return (
        <>
            <div className="block relative py-16 lg:py-24">
                <div className="absolute top-0 left-0 w-full h-full -z-[20] bg-auto bg-repeat shadow-brand" style={{ backgroundImage: `url('${getMediaPathname("dots.png")}')` }}>
                </div>

                <div className={`container mx-auto ${teamInView ? "" : "opacity-0"}`}>
                    <div className="grid lg:grid-cols-5 gap-10 ">

                        <div className="lg:col-span-2 mx-4 lg:ml-16" ref={teamRef}>
                            <p className={`text-primary ${getLang(lang) === "sr-Cyrl-RS" ? "text-[22px]" : "text-[33px]"} font-normal mb-[10px] font-teko visible animate-fadeInDown delay-300`}>{t("Нешто о нама", "home_about_title")}</p>
                            <p className="font-bold mb-5 visible delay-500 animate-flipInX text-[24px] lg:text-[35px]">{t("Реализатори пројекта", "home_about_subtitle")}</p>
                            <p className={`text-[#888] text-[15px] font-normal leading-[2] ${teamInView ? "visible delay-300 animate-fadeInUp" : ""}`}>
                                {t("У наставку су приказани кључни људи заслужни за идејно решење, имплементацију, реализацију и организацију горе поменутих процеса.", "home_team")}
                            </p>
                            <div className={`${teamInView ? "visible delay-300 animate-fadeInUp" : ""} visible mt-[30px]`}>
                                <span className="py-[15px] px-[30px] bg-[#f8f4f3] cursor-pointer mr-1" onClick={scrollPrev}>
                                    <FontAwesomeIcon icon={faLongArrowAltLeft} size="xs" />
                                </span>
                                <span className="py-[15px] px-[30px] bg-[#f8f4f3] cursor-pointer" onClick={scrollNext}>
                                    <FontAwesomeIcon icon={faLongArrowAltRight} size="xs" />
                                </span>
                            </div>
                        </div>

                        <div className={`lg:col-span-3 ${teamInView ? "visible delay-300 animate-fadeInUp" : ""}`} ref={teamRef}>
                            <div className="relative mx-auto after:lg:absolute after:lg:-top-[100px] after:lg:-bottom-[100px] after:lg:right-20 after:lg:w-[60%] after:lg:bg-[#f8f4f3] after:lg:-z-10">
                                <div className="overflow-hidden max-w-full mx-3 lg:mx-20 2xl:mx-10 pt-1 relative" ref={emblaRef}>
                                    <div className={`flex`}>
                                        {sliderData.map((item) => (
                                            <div
                                                className="flex-shrink-0 basis-full lg:basis-1/2 2xl:basis-1/3 px-1 relative"
                                                key={item.id}
                                            >
                                                <div className="flex justify-center items-center lg:flex-col overflow-hidden group">
                                                    <Image
                                                        className="object-cover mx-auto w-[85%] lg:w-[90%] 2xl:w-[95%] h-[350px] border border-primary rounded-[35px] align-middle shadow-indexTeammate duration-700 group-hover:brightness-[.65]"
                                                        src={getMediaPathname(item.img)}
                                                        alt={item.name}
                                                        width={350}
                                                        height={450}
                                                    />
                                                    <div className="absolute top-4 left-8 lg:left-5 bg-white p-3 rounded-lg shadow-lg z-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                                                        {item.site && (
                                                            <a className={`block text-primary text-[16px] ${item.linkedin ? "mb-2" : ""}`} href={item.site} target="_blank">
                                                                <FontAwesomeIcon icon={faGlobe} />
                                                            </a>
                                                        )}
                                                        {item.linkedin && (
                                                            <a className="block text-primary text-[16px]" href={item.linkedin} target="_blank">
                                                                <FontAwesomeIcon icon={faLinkedin} />
                                                            </a>
                                                        )}
                                                    </div>

                                                </div>

                                                <div className="mt-5 text-center">
                                                    <p className="break-words break-all whitespace-normal max-w-full overflow-auto text-[18px] mb-[2px] leading-[1.4] font-semibold">{item.name}</p>
                                                    {item.title && <span className="text-[14px] text-primary">{item.title}</span>}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}