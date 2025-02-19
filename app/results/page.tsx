'use client'

import { getMediaPathname } from "@/common/pathHelper";
import { faBell, faChevronLeft, faChevronRight, faGraduationCap, faUniversity } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { ScrollMode, Worker } from '@react-pdf-viewer/core';
import { disableScrollPlugin } from "@/common/disableScrollPlugin";
import JumpToPagePlugin from "@/common/jumpToPagePlugin";
import dynamic from 'next/dynamic';
import { useLang } from "@/contexts/langContext";
import { getLang } from "@/common/pismo";

const Viewer = dynamic(() => import('@react-pdf-viewer/core').then((mod) => mod.Viewer), { ssr: false });

export default function Results() {
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [defaultScale, setDefaultScale] = useState<number>(1.5);

    const { t, lang } = useLang();

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


    const url = getLang(lang) === "en-US" ? getMediaPathname("TestMaster-Brosura-eng.pdf") : getMediaPathname("TestMaster-Brosura-srp.pdf");

    const handleDocumentLoad = (numPages: number) => {
        setTotalPages(numPages);
        setCurrentPage(0);
    };

    return (
        <>
            <div className="relative overflow-hidden bg-cover bg-no-repeat shadow-brand" style={{ backgroundImage: `url('${getMediaPathname("results_page.png")}')`, height: "50vh" }}>
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                    <div className="flex h-full items-center justify-center">
                        <div className="text-white text-center">
                            <p className="mt-7 mb-4 text-4xl lg:text-7xl font-bold mx-5">{t("Резултати којима се поносимо", "results_title")}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="block py-14 lg:py-28">
                <div className="container mx-auto font-playfair mb-16">
                    <p className="text-center text-3xl lg:text-[40px] font-semibold mx-20">
                        {t("Најбољи", "results_bestResults")} <span className="text-primary">{t("резултати", "results_bestResults_2")}</span>
                    </p>
                </div>
                <div className="container mx-auto flex justify-center">
                    <div className="grid lg:grid-cols-3 max-w-screen-lg gap-9 mx-7">

                        {/* card start */}
                        <div className="col-span-1">
                            <div className="bg-[#f8f4f3] rounded-xl shadow-resultItem text-center">
                                <div className="p-5">
                                    {/* card header */}
                                    <div className="mb-8">
                                        <div className="text-primary text-3xl">
                                            <FontAwesomeIcon icon={faBell} />
                                        </div>
                                        <p className="text-lg font-semibold mt-1 leading-6">{t("Завршни испит на крају основног образовања", "results_zavrsni_title")}</p>
                                    </div>
                                    {/* card body */}
                                    <div className="text-center">
                                        <div className="mb-3 py-2 shadow-resultGroupItem rounded-xl">
                                            <p className="text-primary text-2xl">62.659​</p>
                                            <p className="text-xs text-[#888] font-medium">{t("Дигитално прегледаних тестова", "results_digitalno_pregledanih")}</p>
                                        </div>
                                        <div className="mb-3 py-2 shadow-resultGroupItem rounded-xl">
                                            <p className="text-primary text-2xl">1.065.203​</p>
                                            <p className="text-xs text-[#888] font-medium">{t("Прегледаних задатака затвореног типа​", "results_pregledanih_zatvorenih")}</p>
                                        </div>
                                        <div className="mb-3 py-2 shadow-resultGroupItem rounded-xl">
                                            <p className="text-primary text-2xl">187.977​</p>
                                            <p className="text-xs text-[#888] font-medium">{t("Прегледаних задатака отвореног типа​", "results_pregledanih_otvorenih")}</p>
                                        </div>
                                        <div className="mb-3 py-2 shadow-resultGroupItem rounded-xl">
                                            <p className="text-primary text-2xl">5.000</p>
                                            <p className="text-xs text-[#888] font-medium">{t("Ангажованих учесника", "results_ucesnici")}</p>
                                        </div>
                                        <div className="mb-3 py-2 shadow-resultGroupItem rounded-xl">
                                            <p className="text-primary text-2xl">4 сата</p>
                                            <p className="text-xs text-[#888] font-medium">{t("Време прегледања", "results_reviewTime")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* card end */}

                        {/* card start */}
                        <div className="col-span-1">
                            <div className="bg-[#f8f4f3] rounded-xl shadow-resultItem text-center">
                                <div className="p-5">
                                    {/* card header */}
                                    <div className="mb-8">
                                        <div className="text-primary text-3xl">
                                            <FontAwesomeIcon icon={faUniversity} />
                                        </div>
                                        <p className="text-lg font-semibold mt-1 leading-6">{t("Пријемни испит на", "results_prijemni_title")}<br /> {t("факултетима", "results_prijemni_title_2")}</p>
                                    </div>
                                    {/* card body */}
                                    <div className="text-center">
                                        <div className="mb-3 py-2 shadow-resultGroupItem rounded-xl">
                                            <p className="text-primary text-2xl">2.250</p>
                                            <p className="text-xs text-[#888] font-medium">{t("Дигитално прегледаних тестова", "results_digitalno_pregledanih")}</p>
                                        </div>
                                        <div className="mb-3 py-2 shadow-resultGroupItem rounded-xl">
                                            <p className="text-primary text-2xl">44.000</p>
                                            <p className="text-xs text-[#888] font-medium">{t("Прегледаних задатака затвореног типа​", "results_pregledanih_zatvorenih")}</p>
                                        </div>
                                        <div className="mb-3 py-2 shadow-resultGroupItem rounded-xl">
                                            <p className="text-primary text-2xl">0​</p>
                                            <p className="text-xs text-[#888] font-medium">{t("Прегледаних задатака отвореног типа​", "results_pregledanih_otvorenih")}</p>
                                        </div>
                                        <div className="mb-3 py-2 shadow-resultGroupItem rounded-xl">
                                            <p className="text-primary text-2xl">5</p>
                                            <p className="text-xs text-[#888] font-medium">{t("Ангажованих учесника", "results_ucesnici")}</p>
                                        </div>
                                        <div className="mb-3 py-2 shadow-resultGroupItem rounded-xl">
                                            <p className="text-primary text-2xl">30 минута</p>
                                            <p className="text-xs text-[#888] font-medium">{t("Време прегледања", "results_reviewTime")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* card end */}

                        {/* card start */}
                        <div className="col-span-1">
                            <div className="bg-[#f8f4f3] rounded-xl shadow-resultItem text-center">
                                <div className="p-5">
                                    {/* card header */}
                                    <div className="mb-8">
                                        <div className="text-primary text-3xl">
                                            <FontAwesomeIcon icon={faGraduationCap} />
                                        </div>
                                        <p className="text-lg font-semibold mt-1 leading-6">{t("Колоквијум/испит на", "results_kolokvijumi_title")} <br />{t("факултетима", "results_kolokvijumi_title_2")}</p>
                                    </div>
                                    {/* card body */}
                                    <div className="text-center">
                                        <div className="mb-3 py-2 shadow-resultGroupItem rounded-xl">
                                            <p className="text-primary text-2xl">600</p>
                                            <p className="text-xs text-[#888] font-medium">{t("Дигитално прегледаних тестова", "results_digitalno_pregledanih")}</p>
                                        </div>
                                        <div className="mb-3 py-2 shadow-resultGroupItem rounded-xl">
                                            <p className="text-primary text-2xl">18.000</p>
                                            <p className="text-xs text-[#888] font-medium">{t("Прегледаних задатака затвореног типа​", "results_pregledanih_zatvorenih")}</p>
                                        </div>
                                        <div className="mb-3 py-2 shadow-resultGroupItem rounded-xl">
                                            <p className="text-primary text-2xl">6.000​</p>
                                            <p className="text-xs text-[#888] font-medium">{t("Прегледаних задатака отвореног типа​", "results_pregledanih_otvorenih")}</p>
                                        </div>
                                        <div className="mb-3 py-2 shadow-resultGroupItem rounded-xl">
                                            <p className="text-primary text-2xl">2</p>
                                            <p className="text-xs text-[#888] font-medium">{t("Ангажованих учесника", "results_ucesnici")}</p>
                                        </div>
                                        <div className="mb-3 py-2 shadow-resultGroupItem rounded-xl">
                                            <p className="text-primary text-2xl">1 сат и 30 минута</p>
                                            <p className="text-xs text-[#888] font-medium">{t("Време прегледања", "results_reviewTime")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* card end */}

                    </div>
                </div>
            </div>

            <div className="block bg-[#f8f4f3] py-16 lg:py-24">
                <div className="relative mb-16 text-center">
                    <div>
                        <p className="font-playfair font-medium lg:font-semibold text-2xl lg:text-4xl tracking-wider">{t("Наша брошура", "results_title_brochure")}</p>
                        <p className="text-primary text-sm lg:text-base mt-3"><em>{t("Креирана 2022. године", "results_subtitle_brochure")}</em></p>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-0">
                    <Worker workerUrl={getMediaPathname("js/pdf.worker.min.js")}>
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
                        <span className="w-[150px] text-center inline-block text-inherit font-poppins">{t("Страница", "results_brochure_page")} {currentPage + 1} {t("од", "results_brochure_outOf")} {totalPages}</span>
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
        </>
    );
}