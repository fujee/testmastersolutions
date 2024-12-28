import { getMediaPathname } from "@/common/pathHelper";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faLongArrowAltLeft, faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback } from "react";

export default function TeammatesSlider() {
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
            name: `др Марко Петровић`,
            title: 'руководилац пројекта',
            img: 'team/marko.petrovic.png',
            site: 'https://fon.bg.ac.rs/nastavnici/marko-petrovic/',
            linkedin: 'https://www.linkedin.com/in/marko-petrovic-15832830'
        },
        {
            id: 2,
            name: `др Милош Јевтић`,
            img: 'team/milos.jevtic.png',
            site: 'https://fon.bg.ac.rs/nastavnici/milos-jevtic/',
            linkedin: 'https://www.linkedin.com/in/milo%C5%A1-jevti%C4%87-2663a343/'
        },
        {
            id: 3,
            name: `др Нина Турајлић`,
            img: 'team/nina.turajlic.png',
            site: 'https://fon.bg.ac.rs/nastavnici/nina-turajlic/',
        },
        {
            id: 4,
            name: `др Ненад Аничић`,
            img: 'team/nenad.anicic.png',
            site: 'https://fon.bg.ac.rs/nastavnici/nenad-anicic/',
        },
        {
            id: 5,
            name: `Филип Фуртула`,
            img: 'team/filip.furtula.png',
            site: 'https://fon.bg.ac.rs/nastavnici/filip-furtula/',
            linkedin: 'https://www.linkedin.com/in/filip-furtula/'
        },
        {
            id: 6,
            name: `Милош Љубисављевић`,
            img: 'team/milos.ljubisavljevic.png',
            site: 'https://fon.bg.ac.rs/nastavnici/milos-ljubisavljevic/',
            linkedin: 'https://www.linkedin.com/in/ljuba95/'
        },
        {
            id: 7,
            name: `Ђорђе Несторовић`,
            img: 'team/djordje.nestorovic.png',
            linkedin: 'https://www.linkedin.com/in/djordje-nestorovic-3b3543119/'
        },
        {
            id: 8,
            name: `Владимир Белча`,
            img: 'team/vladimir.belca.png',
            site: 'https://fon.bg.ac.rs/nastavnici/vladimir-belca/',
            linkedin: 'https://www.linkedin.com/in/vladimir-belca/'
        },
        {
            id: 9,
            name: `Александра Фуртула`,
            img: 'team/aleksandra.furtula.png',
            linkedin: 'https://www.linkedin.com/in/aleksandra-furtula-41a666181/'
        },
        {
            id: 10,
            name: `Исидора Видојевић`,
            img: 'team/isidora.vidojevic.png',
            linkedin: 'https://www.linkedin.com/in/isidora-vidojević-6ab4891a2/'
        },
    ];

    return (
        <>
            <div className="lg:col-span-2 mx-4 lg:ml-16">
                <p className="text-primary text-[22px] font-normal mb-[10px] font-teko visible animate-fadeInDown delay-300">Нешто о нама</p>
                <p className="font-bold mb-5 visible delay-500 animate-flipInX text-[24px] lg:text-[35px]">Реализатори пројекта</p>
                <p className="text-[#888] text-[15px] font-normal leading-[2] visible delay-300 animate-fadeInUp">
                    У наставку су приказани кључни људи заслужни за идејно решење, имплементацију, реализацију
                    и организацију горе поменутих процеса.
                </p>
                <div className="animate-fadeInUp delay-300 visible mt-[30px]">
                    <span className="py-[15px] px-[30px] bg-[#f8f4f3] cursor-pointer mr-1" onClick={scrollPrev}>
                        <FontAwesomeIcon icon={faLongArrowAltLeft} size="xs" />
                    </span>
                    <span className="py-[15px] px-[30px] bg-[#f8f4f3] cursor-pointer" onClick={scrollNext}>
                        <FontAwesomeIcon icon={faLongArrowAltRight} size="xs" />
                    </span>
                </div>
            </div>

            <div className="lg:col-span-3">
                <div className="relative mx-auto after:lg:absolute after:lg:-top-[100px] after:lg:-bottom-[100px] after:lg:right-20 after:lg:w-[60%] after:lg:bg-[#f8f4f3] after:lg:-z-10">
                    <div className="overflow-hidden max-w-full mx-3 lg:mx-20 pt-1 relative" ref={emblaRef}>
                        <div className="flex">
                            {sliderData.map((item) => (
                                <div
                                    className="flex-shrink-0 basis-full lg:basis-1/2 px-1 relative"
                                    key={item.id}
                                >
                                    <div className="flex flex-col overflow-hidden group">
                                        <Image
                                            className="object-cover w-[85%] lg:w-[90%] h-[350px] border border-primary rounded-[35px] align-middle shadow-indexTeammate duration-700 group-hover:brightness-[.65]"
                                            src={getMediaPathname(item.img)}
                                            alt=""
                                            width={0}
                                            height={0}
                                        />
                                        <div className="absolute top-4 left-2 bg-white p-3 rounded-lg shadow-lg z-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
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


                                        <div className="mt-5 lg:text-center">
                                            {/* <p className="max-lg:px-14 text-[18px] mb-[2px] leading-[1.4] font-semibold">{item.name}</p> */}

                                            {item.title && <span className="text-[14px] text-primary">{item.title}</span>}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}