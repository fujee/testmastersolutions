'use client'

import { getMediaPathname } from "@/common/pathHelper";
import { getLang } from "@/common/pismo";
import { useLang } from "@/contexts/langContext";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Footer() {
    const { t, lang } = useLang();

    const fonImageUrl = getLang(lang) === "en-US" ? getMediaPathname("fon_eng.png") : getLang(lang) === "sr-Latn-RS" ? getMediaPathname("fon_lat.png") : getMediaPathname("fon-logo.png");
    const tmImageUrl = getLang(lang) === "sr-Cyrl-RS" ? getMediaPathname("logo-light.png") : getMediaPathname("logo-light-latinica.png");

    return (
        <div className="bg-[#1e2236] pt-10 lg:pt-20 min-w-fit" id="partners">
            <div className="container mx-auto lg:pb-10">
                <div className="grid grid-rows-[auto] lg:grid-rows-1 lg:grid-flow-col gap-3 lg:mx-56 gap-x-20">
                    <div className="lg:col-span-1">
                        <div className="flex justify-center items-center">
                            <Image
                                className="p-3"
                                src={tmImageUrl}
                                alt="Testmaster Solutions"
                                width={220}
                                height={40}
                            />
                        </div>
                        <p className="text-xs lg:text-sm text-[#888] my-2 text-center">{t("Наш тим покрива све – од идеје до реализације", "footer_team")}</p>
                    </div>
                    <div className="mt-6 ml-4 lg:ml-0 lg:mt-0 lg:col-span-1 text-xs lg:text-sm">
                        <h6 className="text-[#a68968] font-semibold uppercase tracking-widest text-xs mb-6">{t("Партнери", "footer_partners")}</h6>
                        <ul className="grid gap-y-4 lg:gap-y-2">
                            <li className="flex items-center">
                                <FontAwesomeIcon icon={faChevronRight} aria-hidden="true" className={`text-[#a68968] text-xs`} />
                                <a target="_blank" href="https://www.srbija.gov.rs/" className="text-white hover:text-primary transition-colors duration-100 ml-2">{t("Влада републике Србије", "footer_government")}</a>
                            </li>
                            <li className="flex items-center">
                                <FontAwesomeIcon icon={faChevronRight} aria-hidden="true" className={`text-[#a68968] text-xs`} />
                                <a target="_blank" href="https://www.mpn.gov.rs/" className="text-white hover:text-primary transition-colors duration-100 ml-2">{t("Министарство просвете", "footer_ministry")}</a>
                            </li>
                            <li className="flex items-center">
                                <FontAwesomeIcon icon={faChevronRight} aria-hidden="true" className={`text-[#a68968] text-xs`} />
                                <a target="_blank" href="https://www.ite.gov.rs/" className="text-white hover:text-primary transition-colors duration-100 ml-2">{t("Канцеларија за информационе технологије и електронску управу", "footer_euprava")}</a>
                            </li>
                            <li className="flex items-center">
                                <FontAwesomeIcon icon={faChevronRight} aria-hidden="true" className={`text-[#a68968] text-xs`} />
                                <a target="_blank" href="https://ceo.edu.rs/" className="text-white hover:text-primary transition-colors duration-100 ml-2">{t("Завод за вредновање квалитета образовања и васпитања", "footer_zavod")}</a>
                            </li>
                        </ul>
                    </div>
                    <div className="mx-4 lg:mx-0 mt-8 lg:mt-0 mb-10 lg:mb-0 lg:col-span-1">
                        <div className="block border-b border-b-white/10 mb-6">
                            <h6 className="text-[#a68968] font-semibold uppercase tracking-widest text-xs mb-2">{t("Електронска пошта", "footer_email")}</h6>
                        </div>
                        <p className="text-[#888] hover:text-primary transition-colors duration-100 text-sm"><a href="mailto:contact@testmastersolutions.com">contact@testmastersolutions.com</a></p>
                        <p className="text-sm mt-8 text-[#888] leading-relaxed">{t("Подржано од стране", "footer_supported")}</p>
                        <a href="http://www.fon.bg.ac.rs/" target="_blank">
                            <Image
                                className="p-3"
                                src={fonImageUrl}
                                alt="FON"
                                width={280}
                                height={100}
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className="border-t border-t-white/5">
                <div className="container mx-auto py-8 lg:px-64">
                    <div className="grid grid-rows-2 text-center gap-y-2 lg:flex lg:justify-between">
                        <div className="lg:text-left text-xs text-[#888]">
                            <p>© 2022, TESTMASTER SOLUTIONS</p>
                        </div>
                        <div className="lg:text-right text-xs text-[#888]">
                            <p>{t("Сва права задржана.", "footer_rights")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}