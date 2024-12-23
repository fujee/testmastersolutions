'use client'

import { disableScrollPlugin } from "@/common/disableScrollPlugin";
import JumpToPagePlugin from "@/common/jumpToPagePlugin";
import { getMediaPathname } from "@/common/pathHelper";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ScrollMode, Worker } from "@react-pdf-viewer/core";
import Image from "next/image";
import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';

const Viewer = dynamic(() => import('@react-pdf-viewer/core').then((mod) => mod.Viewer), { ssr: false });

export default function About() {
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [defaultScale, setDefaultScale] = useState<number>(1.5);

    useEffect(() => {
        if (window.innerWidth >= 768) {
            setDefaultScale(1.5);
        } else {
            setDefaultScale(0.6);
        }
    }, [])

    const jumpToPagePluginInstance = JumpToPagePlugin();
    const { jumpToPage } = jumpToPagePluginInstance;
    const disableScrollPluginInstance = disableScrollPlugin();

    const url = getMediaPathname("TestMaster-Brosura-srp.pdf");

    const handleDocumentLoad = (numPages: number) => {
        setTotalPages(numPages);
        setCurrentPage(0);
    };

    return (
        <>
            <div className="relative overflow-hidden bg-cover bg-no-repeat" style={{ backgroundImage: `url('${getMediaPathname("aboutus.png")}')`, height: "50vh" }}>
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                    <div className="flex h-full items-center justify-center">
                        <div className="text-white text-center">
                            <p className="mt-7 mb-4 text-4xl lg:text-7xl font-bold mx-5">Ко смо ми?</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="block relative py-14 lg:py-28">
                <div className="container mx-auto flex justify-center">
                    <div className="grid lg:grid-cols-2 max-w-screen-lg gap-y-3 gap-x-10">
                        {/* numbers */}
                        <div className="col-span-1 lg:mx-0 lg:mt-20">
                            <div className="grid lg:grid-rows-4 lg:grid-cols-2 lg:gap-x-12 mx-16 lg:mx-0">
                                {/* first row */}
                                <div className="col-span-1">
                                    <div className="relative mb-12 before:w-0 before:h-0 before:box-border before:border-t-[35px] before:border-t-transparent before:border-r-[35px] before:border-r-[#f7f7f7] before:bottom-9 before:absolute before:right-1 before:-z-10 after:box-border after:w-9 after:h-9 after:absolute after:right-1 after:-z-10 after:bottom-0 after:bg-[#f7f7f7]">
                                        <span className="text-primary font-teko text-6xl">300+</span>
                                        <p className="text-xs font-medium uppercase tracking-[0.12em] mt-6">Успешних тестирања</p>
                                    </div>
                                </div>

                                <div className="col-span-1">
                                    <div className="relative mb-12 before:w-0 before:h-0 before:box-border before:border-t-[35px] before:border-t-transparent before:border-r-[35px] before:border-r-[#f7f7f7] before:bottom-9 before:absolute before:right-1 before:-z-10 after:box-border after:w-9 after:h-9 after:absolute after:right-1 after:-z-10 after:bottom-0 after:bg-[#f7f7f7]">
                                        <span className="text-primary font-teko text-6xl">1.000.000+</span>
                                        <p className="text-xs font-medium uppercase tracking-[0.12em] mt-6">Прегледаних тестова</p>
                                    </div>
                                </div>
                                {/* end of first row */}

                                {/* second row */}
                                <div className="col-span-1">
                                    <div className="relative mb-12 before:w-0 before:h-0 before:box-border before:border-t-[35px] before:border-t-transparent before:border-r-[35px] before:border-r-[#f7f7f7] before:bottom-9 before:absolute before:right-1 before:-z-10 after:box-border after:w-9 after:h-9 after:absolute after:right-1 after:-z-10 after:bottom-0 after:bg-[#f7f7f7]">
                                        <span className="text-primary font-teko text-6xl">1.000.000+</span>
                                        <p className="text-xs font-medium uppercase tracking-[0.12em] mt-6">Задовољних корисника</p>
                                    </div>
                                </div>

                                <div className="col-span-1">
                                    <div className="relative mb-12 before:w-0 before:h-0 before:box-border before:border-t-[35px] before:border-t-transparent before:border-r-[35px] before:border-r-[#f7f7f7] before:bottom-9 before:absolute before:right-1 before:-z-10 after:box-border after:w-9 after:h-9 after:absolute after:right-1 after:-z-10 after:bottom-0 after:bg-[#f7f7f7]">
                                        <span className="text-primary font-teko text-6xl">20.000.000+</span>
                                        <p className="text-xs font-medium uppercase tracking-[0.12em] mt-6">Прегледаних питања</p>
                                    </div>
                                </div>
                                {/* end of second row */}

                                {/* third row */}
                                <div className="col-span-1">
                                    <div className="relative mb-12 before:w-0 before:h-0 before:box-border before:border-t-[35px] before:border-t-transparent before:border-r-[35px] before:border-r-[#f7f7f7] before:bottom-9 before:absolute before:right-1 before:-z-10 after:box-border after:w-9 after:h-9 after:absolute after:right-1 after:-z-10 after:bottom-0 after:bg-[#f7f7f7]">
                                        <span className="text-primary font-teko text-6xl">✔</span>
                                        <p className="text-xs font-medium uppercase tracking-[0.12em] mt-6">Повећана ефикасност кроз рационализацију коришћених ресурса</p>
                                    </div>
                                </div>

                                <div className="col-span-1">
                                    <div className="relative mb-12 before:w-0 before:h-0 before:box-border before:border-t-[35px] before:border-t-transparent before:border-r-[35px] before:border-r-[#f7f7f7] before:bottom-9 before:absolute before:right-1 before:-z-10 after:box-border after:w-9 after:h-9 after:absolute after:right-1 after:-z-10 after:bottom-0 after:bg-[#f7f7f7]">
                                        <span className="text-primary font-teko text-6xl">✔</span>
                                        <p className="text-xs font-medium uppercase tracking-[0.12em] mt-6">Елиминисане грешке проузроковане људским фактором</p>
                                    </div>
                                </div>
                                {/* end of third row */}

                                {/* fourth row */}
                                <div className="col-span-1">
                                    <div className="relative mb-12 before:w-0 before:h-0 before:box-border before:border-t-[35px] before:border-t-transparent before:border-r-[35px] before:border-r-[#f7f7f7] before:bottom-9 before:absolute before:right-1 before:-z-10 after:box-border after:w-9 after:h-9 after:absolute after:right-1 after:-z-10 after:bottom-0 after:bg-[#f7f7f7]">
                                        <span className="text-primary font-teko text-6xl">✔</span>
                                        <p className="text-xs font-medium uppercase tracking-[0.12em] mt-6">Обезбеђена <br />транспарентност кроз директан увид у прегледане тестове</p>
                                    </div>
                                </div>

                                <div className="col-span-1">
                                    <div className="relative mb-12 before:w-0 before:h-0 before:box-border before:border-t-[35px] before:border-t-transparent before:border-r-[35px] before:border-r-[#f7f7f7] before:bottom-9 before:absolute before:right-1 before:-z-10 after:box-border after:w-9 after:h-9 after:absolute after:right-1 after:-z-10 after:bottom-0 after:bg-[#f7f7f7]">
                                        <span className="text-primary font-teko text-6xl">✔</span>
                                        <p className="text-xs font-medium uppercase tracking-[0.12em] mt-6">Омогућена <br />анализа резултата <br />зарад <br />будућих тестирања</p>
                                    </div>
                                </div>
                                {/* end of fourth row */}

                            </div>
                        </div>
                        {/* numbers end */}

                        {/* testmaster */}
                        <div className="col-span-1 mx-4 lg:ml-8">
                            <div className="text-justify">
                                <p className="text-center mb-7 lg:mb-9 font-playfair font-semibold text-2xl lg:text-4xl">ТестМастер</p>
                                <p className="mb-5 text-[#888] text-[15px] font-normal leading-7">
                                    Систем је замишљен да обезбеди подршку различитим фазама у процесу тестирања,
                                    од активности формирања базе питања и њихове класификације, избора питања и формирања тестова,
                                    дизајнирања образаца за попуњавање тестова у папирном или електронском облику
                                    (путем мобилног телефона, таблета, десктоп рачунара…), до активности попуњавања,
                                    прегледања, оцењивања и извештавања.
                                </p>
                                <p className="mb-5 text-[#888] text-[15px] font-normal leading-7">
                                    Узимајући у обзир различите начине формулације питања, системом су предвиђене различите
                                    форме питања као што су отворена питања (са и без слика), затворена питања
                                    (са списком понуђених одговора), као и питања на допуну.
                                </p>
                                <p className="mb-5 text-[#888] text-[15px] font-normal leading-7">
                                    Систем је модуларан и развија се у фазама. До сада су, за потребе Факултета организационих наука
                                    и Завршног испита на крају основног образовања и васпитања, развијени модули којима
                                    је подржано дизајнирање образаца у папирном облику, припрема за штампу, скенирање попуњених образаца,
                                    тј. пребацивање у електронски облик, затим њихово аутоматско прегледање, верификација и оцењивање.
                                    Након комплетирања резултата врши се аутоматско означавање
                                    прегледаних тестова и њихово стављање на увид, што подразумева слање одговарајућег мејла
                                    сваком кандидату у чијем прилогу се налази његов прегледани рад. Аутоматско означавање
                                    тестова подразумева да се на сваком скенираном обрасцу, за свако питање означи препознати
                                    одговор, упише да ли је одговор тачан као и број остварених поена.
                                </p>
                            </div>
                        </div>
                        {/* testmaster end */}

                    </div>
                </div>
            </div >

            <div className="block bg-[#f8f4f3] py-16 lg:py-24">
                <div className="relative mb-16 text-center">
                    <div>
                        <p className="font-playfair font-medium lg:font-semibold text-2xl lg:text-4xl tracking-wider">Наша брошура</p>
                        <p className="text-primary text-sm lg:text-base mt-3"><em>Креирана 2022. године</em></p>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-0">
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                        <div className="border-2 border-primary w-[300px] h-[300px] lg:w-[744px] lg:h-[744px] flex justify-center items-center">
                            <Viewer
                                plugins={[disableScrollPluginInstance, jumpToPagePluginInstance]}
                                fileUrl={url}
                                initialPage={currentPage}
                                defaultScale={defaultScale}
                                onDocumentLoad={(e) => handleDocumentLoad(e.doc.numPages)}
                                scrollMode={ScrollMode.Horizontal}
                            />
                        </div>
                    </Worker>
                    <div className="items-center mt-3 flex justify-between lg:w-[300px]">
                        <button disabled={currentPage === 0} className="h-8 w-8 bg-primary flex items-center justify-center rounded-xl text-white cursor-pointer transition ease-out duration-100 hover:bg-[#b8a186] hover:text-black/80 disabled:bg-[#746049] disabled:transition-none disabled:hover:text-white disabled:cursor-default"
                            onClick={() => {
                                jumpToPage(currentPage - 1);
                                setCurrentPage((prev) => prev - 1);
                            }}>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                        <span className="w-[150px] text-center inline-block text-inherit font-poppins">Страница {currentPage + 1} од {totalPages}</span>
                        <button disabled={currentPage === totalPages - 1} className="h-8 w-8 bg-primary flex items-center justify-center rounded-xl text-white cursor-pointer transition ease-out duration-100 hover:bg-[#b8a186] hover:text-black/80 disabled:bg-[#746049] disabled:transition-none disabled:hover:text-white disabled:cursor-default"
                            onClick={() => {
                                jumpToPage(currentPage + 1);
                                setCurrentPage((prev) => prev + 1);
                            }}>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="block py-14 lg:py-28">
                <div className="container mx-auto">
                    <div className="relative mx-20 text-center">
                        <p className="text-primary font-light text-sm lg:text-[18px] font-teko uppercase tracking-widest mb-2">Реализатори пројекта</p>
                        <p className="font-medium text-lg lg:text-[38px] tracking-wider font-playfair">Наш тим</p>
                    </div>
                    <div className="flex justify-center">
                        <div className="grid lg:grid-cols-3 lg:grid-rows-4 gap-x-14 lg:gap-y-14 mt-10 lg:mt-24 max-w-screen-lg">

                            <div className="col-span-1">
                                <div className="relative w-[300px] h-[300px] before:w-[200px] before:h-[200px] before:bg-transparent before:bottom-0 before:left-1/2 before:-translate-x-2/4 before:absolute before:border-[3px] before:border-primary">
                                    <Image
                                        className="absolute animate-flipInY visible drop-shadow-teamImage"
                                        src={getMediaPathname("team/6.png")}
                                        alt=""
                                        width={300}
                                        height={300}
                                    />
                                    <div className="absolute -bottom-2 w-[300px] text-center bg-primary rounded-md shadow-teammate">
                                        <p className="text-white font-semibold text-[15px] leading-7">др Марко Петровић</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-1">
                                <div className="relative w-[300px] h-[300px] before:w-[200px] before:h-[200px] before:bg-transparent before:bottom-0 before:left-1/2 before:-translate-x-2/4 before:absolute before:border-[3px] before:border-primary">
                                    <Image
                                        className="absolute animate-flipInY visible drop-shadow-teamImage"
                                        src={getMediaPathname("team/5.png")}
                                        alt=""
                                        width={300}
                                        height={300}
                                    />
                                    <div className="absolute -bottom-2 w-[300px] text-center bg-primary rounded-md shadow-teammate">
                                        <p className="text-white font-semibold text-[15px] leading-7">др Милош Јевтић</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-1">
                                <div className="relative w-[300px] h-[300px] before:w-[200px] before:h-[200px] before:bg-transparent before:bottom-0 before:left-1/2 before:-translate-x-2/4 before:absolute before:border-[3px] before:border-primary">
                                    <Image
                                        className="absolute animate-flipInY visible drop-shadow-teamImage"
                                        src={getMediaPathname("team/3.png")}
                                        alt=""
                                        width={300}
                                        height={300}
                                    />
                                    <div className="absolute -bottom-2 w-[300px] text-center bg-primary rounded-md shadow-teammate">
                                        <p className="text-white font-semibold text-[15px] leading-7">др Нина Турајлић</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-1">
                                <div className="relative w-[300px] h-[300px] before:w-[200px] before:h-[200px] before:bg-transparent before:bottom-0 before:left-1/2 before:-translate-x-2/4 before:absolute before:border-[3px] before:border-primary">
                                    <Image
                                        className="absolute animate-flipInY visible drop-shadow-teamImage"
                                        src={getMediaPathname("team/10.png")}
                                        alt=""
                                        width={300}
                                        height={300}
                                    />
                                    <div className="absolute -bottom-2 w-[300px] text-center bg-primary rounded-md shadow-teammate">
                                        <p className="text-white font-semibold text-[15px] leading-7">др Ненад Аничић</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-1">
                                <div className="relative w-[300px] h-[300px] before:w-[200px] before:h-[200px] before:bg-transparent before:bottom-0 before:left-1/2 before:-translate-x-2/4 before:absolute before:border-[3px] before:border-primary">
                                    <Image
                                        className="absolute animate-flipInY visible drop-shadow-teamImage"
                                        src={getMediaPathname("team/7.png")}
                                        alt=""
                                        width={300}
                                        height={300}
                                    />
                                    <div className="absolute -bottom-2 w-[300px] text-center bg-primary rounded-md shadow-teammate">
                                        <p className="text-white font-semibold text-[15px] leading-7">Филип Фуртула</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-1">
                                <div className="relative w-[300px] h-[300px] before:w-[200px] before:h-[200px] before:bg-transparent before:bottom-0 before:left-1/2 before:-translate-x-2/4 before:absolute before:border-[3px] before:border-primary">
                                    <Image
                                        className="absolute animate-flipInY visible drop-shadow-teamImage"
                                        src={getMediaPathname("team/4.png")}
                                        alt=""
                                        width={300}
                                        height={300}
                                    />
                                    <div className="absolute -bottom-2 w-[300px] text-center bg-primary rounded-md shadow-teammate">
                                        <p className="text-white font-semibold text-[15px] leading-7">Милош Љубисављевић</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-1">
                                <div className="relative w-[300px] h-[300px] before:w-[200px] before:h-[200px] before:bg-transparent before:bottom-0 before:left-1/2 before:-translate-x-2/4 before:absolute before:border-[3px] before:border-primary">
                                    <Image
                                        className="absolute animate-flipInY visible drop-shadow-teamImage"
                                        src={getMediaPathname("team/8.png")}
                                        alt=""
                                        width={300}
                                        height={300}
                                    />
                                    <div className="absolute -bottom-2 w-[300px] text-center bg-primary rounded-md shadow-teammate">
                                        <p className="text-white font-semibold text-[15px] leading-7">Ђорђе Несторовић</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-1">
                                <div className="relative w-[300px] h-[300px] before:w-[200px] before:h-[200px] before:bg-transparent before:bottom-0 before:left-1/2 before:-translate-x-2/4 before:absolute before:border-[3px] before:border-primary">
                                    <Image
                                        className="absolute animate-flipInY visible drop-shadow-teamImage"
                                        src={getMediaPathname("team/2.png")}
                                        alt=""
                                        width={300}
                                        height={300}
                                    />
                                    <div className="absolute -bottom-2 w-[300px] text-center bg-primary rounded-md shadow-teammate">
                                        <p className="text-white font-semibold text-[15px] leading-7">Владимир Белча</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-1">
                                <div className="relative w-[300px] h-[300px] before:w-[200px] before:h-[200px] before:bg-transparent before:bottom-0 before:left-1/2 before:-translate-x-2/4 before:absolute before:border-[3px] before:border-primary">
                                    <Image
                                        className="absolute animate-flipInY visible drop-shadow-teamImage"
                                        src={getMediaPathname("team/9.png")}
                                        alt=""
                                        width={300}
                                        height={300}
                                    />
                                    <div className="absolute -bottom-2 w-[300px] text-center bg-primary rounded-md shadow-teammate">
                                        <p className="text-white font-semibold text-[15px] leading-7">Александра Фуртула</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-1">
                                <div className="relative w-[300px] h-[300px] before:w-[200px] before:h-[200px] before:bg-transparent before:bottom-0 before:left-1/2 before:-translate-x-2/4 before:absolute before:border-[3px] before:border-primary">
                                    <Image
                                        className="absolute animate-flipInY visible drop-shadow-teamImage"
                                        src={getMediaPathname("team/1.png")}
                                        alt=""
                                        width={300}
                                        height={300}
                                    />
                                    <div className="absolute -bottom-2 w-[300px] text-center bg-primary rounded-md shadow-teammate">
                                        <p className="text-white font-semibold text-[15px] leading-7">Исидора Видојевић</p>
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