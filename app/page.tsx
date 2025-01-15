'use client'

import { getMediaPathname } from "@/common/pathHelper";
import { getLang } from "@/common/pismo";
import CommentsSlider from "@/components/CommentsSlider";
import HeaderSlider from "@/components/HeaderSlider";
import TeammatesSlider from "@/components/TeammatesSlider";
import { useLang } from "@/contexts/langContext";
import { faBell, faGraduationCap, faUniversity } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [activeLink, setActiveLink] = useState<number>(1);

  const { t, lang } = useLang();

  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0,
    delay: 1000
  });

  const { ref: numbersRef, inView: numbersInView } = useInView({
    triggerOnce: true,
    threshold: 0,
    delay: 1200
  });

  const { ref: featuresRef, inView: featuresInView } = useInView({
    triggerOnce: true,
    threshold: 0,
    delay: 1200
  });

  const { ref: resultsRef, inView: resultsInView } = useInView({
    triggerOnce: true,
    threshold: 0,
    delay: 1200
  });

  const { ref: commentsRef, inView: commentsInView } = useInView({
    triggerOnce: true,
    threshold: 0,
    delay: 1200
  });

  return (
    <>
      <header className="relative">
        <HeaderSlider />
      </header>

      <div className={`block relative pt-8 pb-56 lg:py-28 mb-5 ${aboutInView ? "" : "opacity-0"}`} id="software">
        <div className="container max-w-screen-xl mx-auto">
          <div className="grid lg:grid-cols-2">

            <div className="col-span-1 flex mx-7 my-24 justify-center">
              <div className={`${aboutInView ? "visible animate-fadeInUp" : ""}`}>
                <div className="visible relative z-20 bg-cover bg-no-repeat">
                  <Image
                    className="align-middle after:absolute after:top-10 after:left-10 after:right-10 after:bottom-10 after:-z-10 after:bg-mainLogoBg"
                    src={getMediaPathname("mainlogo.png")}
                    alt=""
                    width={400}
                    height={100}
                    ref={aboutRef}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-1 ml-5 mr-5 lg:ml-0 lg:mr-10 lg:pr-10">
              <div className={`${aboutInView ? "visible animate-fadeInUp" : ""} relative z-20 after:w-[200px] after:h-[250px] after:absolute after:-top-10 after:right-0 after:lg:-right-10 after:border-[10px] after:border-[#fafafa] after:-z-10 after:box-border`} ref={aboutRef}>
                <p className={`text-primary font-teko uppercase font-normal ${getLang(lang) === "sr-Cyrl-RS" ? "text-sm leading-loose" : "text-lg"} pl-16 mb-5 tracking-[4px] before:w-[50px] before:h-[1px] before:bg-primary before:absolute before:left-0 before:top-[16px] before:box-border`}>
                  {t("О нама", "home_testmaster_title")}
                </p>
                <p className="mb-5 font-playfair font-semibold text-2xl lg:text-4xl">
                  {t("ТестМастер", "home_testmaster_subtitle")}
                </p>
                <p className="text-justify text-[#888] text-[15px] leading-[30px]">
                  {t("Софтверско и организационо решење које дигитализује и оптимизује целокупан процес тестирања кандидата. Пружа комплетну подршку у свим фазама тестирања – од креирања и класификације питања, дизајнирања, штампања и дистрибуције тестова, до скенирања, прегледања и објављивања резултата. Примена ТестМастер-а унапређује процес тестирања повећањем објективности и поузданости, као и уједначавањем услова за све кандидате. ТестМастер елиминише грешке узроковане људским фактором, повећава ефикасност кроз рационалније коришћење ресурса и пружа високу транспарентност кроз могућност онлајн увида у прегледане тестове и подношења приговора на остварене резултате.", "home_testmaster_desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`relative bg-[#f8f4f3] mx-3 lg:mx-0`}>
        <div className="container max-w-[1150px] absolute top-1/2 left-1/2 mt-0 -translate-x-1/2 -translate-y-1/2 py-10 px-8 bg-white rounded-[20px]" style={{ backgroundImage: `url('${getMediaPathname("box-pattern.png")}')` }}>
          <div className={`grid lg:grid-cols-3 gap-x-10 ${numbersInView ? "" : "opacity-0"}`} ref={numbersRef}>

            <div className="col-span-1">
              <div className={`${numbersInView ? "visible animate-tada" : ""} text-center my-[15px]`}>
                <span className="text-[3rem] text-[#1e2236] mb-0 leading-[0.8] font-teko">5</span>
                <p className="text-white mt-[6px] leading-[1.4] text-[15px]">{t("завршних испита на крају основног образовања и васпитања", "home_nums1_title")}</p>
              </div>
            </div>

            <div className="col-span-1">
              <div className={`${numbersInView ? "visible animate-tada" : ""} text-center my-[15px]`}>
                <span className="text-[3rem] text-[#1e2236] mb-0 leading-[0.8] font-teko">50+</span>
                <p className="text-white mt-[6px] leading-[1.4] text-[15px]">{t("пријемних испита на основним и мастер студијама", "home_nums2_title")}</p>
              </div>
            </div>

            <div className="col-span-1">
              <div className={`${numbersInView ? "visible animate-tada" : ""} text-center my-[15px]`}>
                <span className="text-[3rem] text-[#1e2236] mb-0 leading-[0.8] font-teko">200+</span>
                <p className="text-white mt-[6px] leading-[1.4] text-[15px]">{t("реализованих колоквијума и испита на факултету", "home_nums3_title")}</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className={`block pt-64 pb-64 lg:py-36 bg-[#f8f4f3]`} id="phases">
        <div className={`container mx-auto max-w-screen-lg ${featuresInView ? "" : "opacity-0"}`}>
          <div className={`${featuresInView ? "visible animate-fadeInUp" : ""}`}>
            <p className="mb-10 text-3xl lg:text-[40px] font-playfair text-center leading-[1.4] font-semibold" ref={featuresRef}>
              {t("Најзначајније", "home_f_title_1")} <span className="text-primary">{t("функционалности", "home_f_title_2")}</span>
            </p>
          </div>

          <div className="lg:grid lg:grid-cols-3" ref={featuresRef}>
            <div className="lg:col-span-1">
              <div className={`${featuresInView ? "visible animate-fadeInUp" : ""}`}>
                <ul className="flex flex-wrap max-lg:mb-7 max-lg:flex-row max-lg:justify-between max-lg:mx-3 max-lg:gap-x-[2px] lg:flex-col">

                  <li className="leading-[2.2rem] mb-[10px]">
                    <button
                      onClick={() => setActiveLink(1)}
                      className={`relative transition-all duration-500 ease-in-out hover:lg:text-primary 
                          ${activeLink === 1 ? "max-lg:text-[#0a1b35] lg:text-primary max-lg:bg-primary max-lg:scale-110" : "max-lg:text-primary"} cursor-pointer 
                            after:content-[''] after:absolute after:lg:left-0 after:lg:bottom-[-3px] 
                            after:lg:h-[2px] after:lg:bg-primary after:lg:w-full 
                            after:scale-x-0 after:lg:origin-left 
                            after:transition-transform after:duration-500 after:ease-in-out 
                            ${activeLink === 1 ? "after:scale-x-100" : "hover:after:scale-x-100"} 
                            max-lg:border-[1px] max-lg:border-primary max-lg:rounded-full 
                            max-lg:w-[40px] max-lg:h-[40px] max-lg:flex max-lg:items-center max-lg:justify-center 
                            transform-gpu`}
                    >
                      <span className="font-poppins">01. </span>
                      <span className="max-lg:hidden">{t("Дизајнирање тестова", "home_feature_title_1")}</span>
                    </button>
                  </li>

                  <li className="leading-[2.2rem] mb-[10px]">
                    <button onClick={() => setActiveLink(2)}
                      className={`relative transition-all duration-500 ease-in-out hover:lg:text-primary 
                        ${activeLink === 2 ? "max-lg:text-[#0a1b35] lg:text-primary max-lg:bg-primary max-lg:scale-110" : "max-lg:text-primary"} cursor-pointer 
                          after:content-[''] after:absolute after:lg:left-0 after:lg:bottom-[-3px] 
                          after:lg:h-[2px] after:lg:bg-primary after:lg:w-full 
                          after:scale-x-0 after:lg:origin-left 
                          after:transition-transform after:duration-500 after:ease-in-out 
                          ${activeLink === 2 ? "after:scale-x-100" : "hover:after:scale-x-100"} 
                          max-lg:border-[1px] max-lg:border-primary max-lg:rounded-full 
                          max-lg:w-[40px] max-lg:h-[40px] max-lg:flex max-lg:items-center max-lg:justify-center 
                          transform-gpu`}
                    >
                      <span className="font-poppins">02. </span>
                      <span className="max-lg:hidden">{t("Генерисање персонализованих тестова", "home_feature_title_2")}</span>
                    </button>
                  </li>

                  <li className="leading-[2.2rem] mb-[10px]">
                    <button onClick={() => setActiveLink(3)}
                      className={`relative transition-all duration-500 ease-in-out hover:lg:text-primary 
                        ${activeLink === 3 ? "max-lg:text-[#0a1b35] lg:text-primary max-lg:bg-primary max-lg:scale-110" : "max-lg:text-primary"} cursor-pointer 
                          after:content-[''] after:absolute after:lg:left-0 after:lg:bottom-[-3px] 
                          after:lg:h-[2px] after:lg:bg-primary after:lg:w-full 
                          after:scale-x-0 after:lg:origin-left 
                          after:transition-transform after:duration-500 after:ease-in-out 
                          ${activeLink === 3 ? "after:scale-x-100" : "hover:after:scale-x-100"} 
                          max-lg:border-[1px] max-lg:border-primary max-lg:rounded-full 
                          max-lg:w-[40px] max-lg:h-[40px] max-lg:flex max-lg:items-center max-lg:justify-center 
                          transform-gpu`}
                    >
                      <span className="font-poppins">03. </span>
                      <span className="max-lg:hidden">{t("Дистрибуција и пријем материјала", "home_feature_title_3")}</span>
                    </button>
                  </li>

                  <li className="leading-[2.2rem] mb-[10px]">
                    <button onClick={() => setActiveLink(4)}
                      className={`relative transition-all duration-500 ease-in-out hover:lg:text-primary 
                        ${activeLink === 4 ? "max-lg:text-[#0a1b35] lg:text-primary max-lg:bg-primary max-lg:scale-110" : "max-lg:text-primary"} cursor-pointer 
                          after:content-[''] after:absolute after:lg:left-0 after:lg:bottom-[-3px] 
                          after:lg:h-[2px] after:lg:bg-primary after:lg:w-full 
                          after:scale-x-0 after:lg:origin-left 
                          after:transition-transform after:duration-500 after:ease-in-out 
                          ${activeLink === 4 ? "after:scale-x-100" : "hover:after:scale-x-100"} 
                          max-lg:border-[1px] max-lg:border-primary max-lg:rounded-full 
                          max-lg:w-[40px] max-lg:h-[40px] max-lg:flex max-lg:items-center max-lg:justify-center 
                          transform-gpu`}
                    >
                      <span className="font-poppins">04. </span>
                      <span className="max-lg:hidden">{t("Скенирање тестова", "home_feature_title_4")}</span>
                    </button>
                  </li>

                  <li className="leading-[2.2rem] mb-[10px]">
                    <button onClick={() => setActiveLink(5)}
                      className={`relative transition-all duration-500 ease-in-out hover:lg:text-primary 
                        ${activeLink === 5 ? "max-lg:text-[#0a1b35] lg:text-primary max-lg:bg-primary max-lg:scale-110" : "max-lg:text-primary"} cursor-pointer 
                          after:content-[''] after:absolute after:lg:left-0 after:lg:bottom-[-3px] 
                          after:lg:h-[2px] after:lg:bg-primary after:lg:w-full 
                          after:scale-x-0 after:lg:origin-left 
                          after:transition-transform after:duration-500 after:ease-in-out 
                          ${activeLink === 5 ? "after:scale-x-100" : "hover:after:scale-x-100"} 
                          max-lg:border-[1px] max-lg:border-primary max-lg:rounded-full 
                          max-lg:w-[40px] max-lg:h-[40px] max-lg:flex max-lg:items-center max-lg:justify-center 
                          transform-gpu`}
                    >
                      <span className="font-poppins">05. </span>
                      <span className="max-lg:hidden">{t("Аутоматска обрада", "home_feature_title_5")}</span>
                    </button>
                  </li>

                  <li className="leading-[2.2rem] mb-[10px]">
                    <button onClick={() => setActiveLink(6)}
                      className={`relative transition-all duration-500 ease-in-out hover:lg:text-primary 
                        ${activeLink === 6 ? "max-lg:text-[#0a1b35] lg:text-primary max-lg:bg-primary max-lg:scale-110" : "max-lg:text-primary"} cursor-pointer 
                          after:content-[''] after:absolute after:lg:left-0 after:lg:bottom-[-3px] 
                          after:lg:h-[2px] after:lg:bg-primary after:lg:w-full 
                          after:scale-x-0 after:lg:origin-left 
                          after:transition-transform after:duration-500 after:ease-in-out 
                          ${activeLink === 6 ? "after:scale-x-100" : "hover:after:scale-x-100"} 
                          max-lg:border-[1px] max-lg:border-primary max-lg:rounded-full 
                          max-lg:w-[40px] max-lg:h-[40px] max-lg:flex max-lg:items-center max-lg:justify-center 
                          transform-gpu`}
                    >
                      <span className="font-poppins">06. </span>
                      <span className="max-lg:hidden">{t("Ручно прегледање", "home_feature_title_6")}</span>
                    </button>
                  </li>

                  <li className="leading-[2.2rem] mb-[10px]">
                    <button onClick={() => setActiveLink(7)}
                      className={`relative transition-all duration-500 ease-in-out hover:lg:text-primary 
                        ${activeLink === 7 ? "max-lg:text-[#0a1b35] lg:text-primary max-lg:bg-primary max-lg:scale-110" : "max-lg:text-primary"} cursor-pointer 
                          after:content-[''] after:absolute after:lg:left-0 after:lg:bottom-[-3px] 
                          after:lg:h-[2px] after:lg:bg-primary after:lg:w-full 
                          after:scale-x-0 after:lg:origin-left 
                          after:transition-transform after:duration-500 after:ease-in-out 
                          ${activeLink === 7 ? "after:scale-x-100" : "hover:after:scale-x-100"} 
                          max-lg:border-[1px] max-lg:border-primary max-lg:rounded-full 
                          max-lg:w-[40px] max-lg:h-[40px] max-lg:flex max-lg:items-center max-lg:justify-center 
                          transform-gpu`}
                    >
                      <span className="font-poppins">07. </span>
                      <span className="max-lg:hidden">{t("Објава резултата", "home_feature_title_7")}</span>
                    </button>
                  </li>

                  <li className="leading-[2.2rem] mb-[10px]">
                    <button onClick={() => setActiveLink(8)}
                      className={`relative transition-all duration-500 ease-in-out hover:lg:text-primary 
                        ${activeLink === 8 ? "max-lg:text-[#0a1b35] lg:text-primary max-lg:bg-primary max-lg:scale-110" : "max-lg:text-primary"} cursor-pointer 
                          after:content-[''] after:absolute after:lg:left-0 after:lg:bottom-[-3px] 
                          after:lg:h-[2px] after:lg:bg-primary after:lg:w-full 
                          after:scale-x-0 after:lg:origin-left 
                          after:transition-transform after:duration-500 after:ease-in-out 
                          ${activeLink === 8 ? "after:scale-x-100" : "hover:after:scale-x-100"} 
                          max-lg:border-[1px] max-lg:border-primary max-lg:rounded-full 
                          max-lg:w-[40px] max-lg:h-[40px] max-lg:flex max-lg:items-center max-lg:justify-center 
                          transform-gpu`}
                    >
                      <span className="font-poppins">08. </span>
                      <span className="max-lg:hidden">{t("Онлајн приговори", "home_feature_title_8")}</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-2 flex items-center px-10 lg:px-20">
              <div className={`${featuresInView ? "visible animate-fadeInUp" : ""} relative bg-#f8f4f3 z-0 before:block before:absolute before:-top-[17px] before:-left-[17px] before:w-[60px] before:h-[60px] before:bg-#a68968b0 before:-z-10`}>

                <div className={`transition-all duration-700 ease-in-out ${activeLink === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  {activeLink === 1 && (
                    <div className="h-[200px] flex flex-col justify-start">
                      <p className="mb-5 font-semibold leading-[1.4] text-lg">{t("Дизајнирање тестова", "home_feature_title_1")}</p>
                      <p className="text-[#888] text-[15px] leading-[2] m-0">
                        {t("Савремена апликација која омогућава флексибилно креирање докумената у различитим форматима, уз једноставно додавање нових алата и елемената. Подржава напредне функције, као што су питања отвореног и затвореног типа, алати за дефинисање бодовања, тачних одговора и прегледање резултата, чиме пружа свеобухватну подршку за процес тестирања и евалуације.", "home_feature_desc_1")}
                      </p>
                    </div>
                  )}
                </div>

                <div className={`transition-all duration-700 ease-in-out ${activeLink === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  {activeLink === 2 && (
                    <div className="h-[200px] flex flex-col justify-start">
                      <p className="mb-5 font-semibold leading-[1.4] text-lg">{t("Генерисање персонализованих тестова", "home_feature_title_2")}</p>
                      <p className="text-[#888] text-[15px] leading-[2] m-0">
                        {t("Апликација подржава аутоматску припрему докумената за штампу, уз могућност генерисања задатог броја јединствених примерака. Сваки кандидат добија јединствени тест, што обезбеђује да ниједан тест није идентичан, чиме се гарантује висок ниво безбедности и поузданости у процесу тестирања.", "home_feature_desc_2")}
                      </p>
                    </div>
                  )}
                </div>

                <div className={`transition-all duration-700 ease-in-out ${activeLink === 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  {activeLink === 3 && (
                    <div className="h-[200px] flex flex-col justify-start">
                      <p className="mb-5 font-semibold leading-[1.4] text-lg">{t("Дистрибуција и пријем материјала", "home_feature_title_3")}</p>
                      <p className="text-[#888] text-[15px] leading-[2] m-0">
                        {t("Апликација за припрему дистрибуције омогућава организовано паковање и праћење испитног материјала у складу са планом дистрибуције, уз аутоматско генерисање све потребне пратеће документације, као што су налепнице и записници. Апликација за пријем материјала омогућава брзу и ефикасну евиденцију свих пристиглих материјала, чиме се поједностављује процес и осигурава тачност.", "home_feature_desc_3")}
                      </p>
                    </div>
                  )}
                </div>

                <div className={`transition-all duration-700 ease-in-out ${activeLink === 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  {activeLink === 4 && (
                    <div className="h-[200px] flex flex-col justify-start">
                      <p className="mb-5 font-semibold leading-[1.4] text-lg">{t("Скенирање тестова", "home_feature_title_4")}</p>
                      <p className="text-[#888] text-[15px] leading-[2] m-0">
                        {t("Апликација омогућава дигитализацију, валидацију и евидентирање пристиглог испитног материјала, укључујући тестове и идентификационе обрасце. Свака кеса са тестовима се отвара, након чега се исправно попуњени тестови скенирају, валидају и уносе у систем. Идентичан процес се примењује за дигитализацију, валидацију и евидентирање идентификационих образаца, осигуравајући прецизност и интегритет података.", "home_feature_desc_4")}
                      </p>
                    </div>
                  )}
                </div>

                <div className={`transition-all duration-700 ease-in-out ${activeLink === 5 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  {activeLink === 5 && (
                    <div className="h-[200px] flex flex-col justify-start">
                      <p className="mb-5 font-semibold leading-[1.4] text-lg">{t("Аутоматска обрада", "home_feature_title_5")}</p>
                      <p className="text-[#888] text-[15px] leading-[2] m-0">
                        {t("Путем специјално развијене апликације, током дизајнирања тестова, за свако питање се дефинише начин и број прегледа одговора. У случају вишеструког прегледања, резултати се упоређују, а уколико постоји неслагање, врши се усаглашавање резултата. Одговори на питања затвореног типа се аутоматски оцењују, док се одговори на питања отвореног типа додељују прегледачима који су евидентирани у систему.", "home_feature_desc_5")}
                      </p>
                    </div>
                  )}
                </div>

                <div className={`transition-all duration-700 ease-in-out ${activeLink === 6 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  {activeLink === 6 && (
                    <div className="h-[200px] flex flex-col justify-start">
                      <p className="mb-5 font-semibold leading-[1.4] text-lg">{t("Ручно прегледање", "home_feature_title_6")}</p>
                      <p className="text-[#888] text-[15px] leading-[2] m-0">
                        {t("Развијена је посебна апликација која омогућава евидентиранем прегледачима да оцењују одговоре на питања отвореног типа. Одговори се распоређују према предметној области и језику теста. У случају вишеструког прегледања, резултати ће бити упоређени, а уколико постоји неслагање, апликација омогућава усаглашавање резултата и решавање евентуалних приговора.", "home_feature_desc_6")}
                      </p>
                    </div>
                  )}
                </div>

                <div className={`transition-all duration-700 ease-in-out ${activeLink === 7 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  {activeLink === 7 && (
                    <div className="h-[200px] flex flex-col justify-start">
                      <p className="mb-5 font-semibold leading-[1.4] text-lg">{t("Објава резултата", "home_feature_title_7")}</p>
                      <p className="text-[#888] text-[15px] leading-[2] m-0">
                        {t("Увид у резултате омогућен је путем посебно развијене веб апликације. Након пријављивања у систем, кандидат може прегледати резултате свих тестова које је полагао. За сваки тест приказује се укупан број остварених бодова, као и број бодова појединачно за свако питање. На захтев, кандидатима могу бити достављени скенирани и означени тестови путем електронске поште, како би имали комплетан увид у своје одговоре.", "home_feature_desc_7")}
                      </p>
                    </div>
                  )}
                </div>

                <div className={`transition-all duration-700 ease-in-out ${activeLink === 8 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  {activeLink === 8 && (
                    <div className="h-[200px] flex flex-col justify-start">
                      <p className="mb-5 font-semibold leading-[1.4] text-lg">{t("Онлајн приговори", "home_feature_title_8")}</p>
                      <p className="text-[#888] text-[15px] leading-[2] m-0">
                        {t("Корисницима је омогућено да преко специјализованог портала поднесу приговор на број остварених бодова за свако појединачно питање, а приговор се аутоматски заводи у систем. Портал такође омогућава праћење статуса приговора и одлука надлежних комисија. У зависности од исхода приговора, резултати ће бити аутоматски кориговани. Поред првостепеног, корисник може уложити и другостепени приговор, који се обрађује по истом механизму.", "home_feature_desc_8")}
                      </p>
                    </div>
                  )}
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      <div className={`block py-14 lg:py-28 ${resultsInView ? "" : "opacity-0"}`} id="results">
        <div className="container mx-auto font-playfair mb-16" ref={resultsRef}>
          <p className={`text-center text-3xl lg:text-[40px] font-semibold mx-20 ${resultsInView ? "visible animate-fadeInUp delay-500" : ""}`}>
            {t("Најбољи", "results_bestResults")} <span className="text-primary">{t("резултати", "results_bestResults_2")}</span>
          </p>
        </div>
        <div className="container mx-auto flex justify-center" ref={resultsRef}>
          <div className={`grid lg:grid-cols-3 max-w-screen-lg gap-9 mx-7 ${resultsInView ? "visible animate-fadeInUp delay-500" : ""}`}>

            {/* card start */}
            <div className="col-span-1">
              <div className="bg-[#f8f4f3] rounded-xl shadow-resultItem text-center">
                <div className="p-5">
                  {/* card header */}
                  <div className="mb-8">
                    <div className="text-primary text-3xl">
                      <FontAwesomeIcon icon={faBell} />
                    </div>
                    <p className="text-lg font-semibold mt-1 leading-6">{t("Завршни испити на крају основног образовања", "results_zavrsni_title")}</p>
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
                    <p className="text-lg font-semibold mt-1 leading-6">{t("Пријемни испити на", "results_prijemni_title")}<br /> {t("факултетима", "results_prijemni_title_2")}</p>
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
                    <p className="text-lg font-semibold mt-1 leading-6">{t("Колоквијуми/испити на", "results_kolokvijumi_title")} <br />{t("факултетима", "results_kolokvijumi_title_2")}</p>
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

      <div className={`block bg-[#1e2236] text-white pt-28 pb-6 lg:pb-14`}>
        <div className={`container mx-auto ${commentsInView ? "" : "opacity-0"}`}>
          <div className="relative text-center mx-auto mb-20">
            <div className="flex flex-wrap justify-center" ref={commentsRef}>
              <div className="mx-10 lg:mx-52">
                <p className={`text-primary font-light ${getLang(lang) === "sr-Cyrl-RS" ? "text-lg " : "text-3xl"} uppercase tracking-[3px] mb-[10px] leading-[1.2] font-teko ${commentsInView ? "visible animate-fadeInDown delay-300" : ""} `}>
                  {t("Резултати евалуације", "home_eval_title")}
                </p>
                <p className={`font-playfair text-[15px] leading-[2] ${commentsInView ? "visible animate-flipInX delay-500" : ""}  mb-20`}>
                  {t("Неки од коментара учесника укључених у процес реализације тестирања након евалуације пројекта. Сврха евалуације је унапређење ефикасности и безбедности процеса тестирања кандидата.", "home_eval_subtitle")}
                </p>
              </div>

              <CommentsSlider inView={commentsInView} ref={commentsRef} />
            </div>
          </div>

        </div>
      </div>

      <TeammatesSlider />
    </>
  );
}
