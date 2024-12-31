'use client'

import { getMediaPathname } from "@/common/pathHelper";
import CommentsSlider from "@/components/CommentsSlider";
import HeaderSlider from "@/components/HeaderSlider";
import TeammatesSlider from "@/components/TeammatesSlider";
import { faBell, faGraduationCap, faUniversity } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [activeLink, setActiveLink] = useState<number>(1);

  return (
    <>
      <header className="relative">
        <HeaderSlider />
      </header>

      <div className="block relative pt-8 pb-56 lg:py-28 mb-5" id="software">
        <div className="container max-w-screen-xl mx-auto">
          <div className="grid lg:grid-cols-2">

            <div className="col-span-1 flex mx-7 my-24 justify-center">
              <div className="visible animate-fadeInUp">
                <div className="visible relative z-20 bg-cover bg-no-repeat">
                  <Image
                    className="align-middle after:absolute after:top-10 after:left-10 after:right-10 after:bottom-10 after:-z-10 after:bg-mainLogoBg"
                    src={getMediaPathname("mainlogo.png")}
                    alt=""
                    width={400}
                    height={100}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-1 ml-5 mr-5 lg:ml-0 lg:mr-10 lg:pr-10">
              <div className="visible animate-fadeInUp relative z-20 after:w-[200px] after:h-[250px] after:absolute after:-top-10 after:right-0 after:lg:-right-10 after:border-[10px] after:border-[#fafafa] after:-z-10 after:box-border">
                <p className="text-primary font-teko uppercase font-normal text-sm leading-loose pl-16 mb-5 tracking-[4px] before:w-[50px] before:h-[1px] before:bg-primary before:absolute before:left-0 before:top-[16px] before:box-border">
                  О нама
                </p>
                <p className="mb-5 font-playfair font-semibold text-2xl lg:text-4xl">
                  ТестМастер
                </p>
                <p className="text-justify text-[#888] text-[15px] leading-[30px]">
                  Софтверско и организационо решење које дигитализује и оптимизује
                  целокупан процес тестирања кандидата. Пружа комплетну подршку у свим фазама тестирања – од
                  креирања и класификације питања, дизајнирања, штампања и дистрибуције тестова, до скенирања,
                  прегледања и објављивања резултата.
                  Примена ТестМастер-а унапређује процес тестирања повећањем објективности и поузданости, као
                  и уједначавањем услова за све кандидате. ТестМастер елиминише грешке узроковане људским
                  фактором, повећава ефикасност кроз рационалније коришћење ресурса и пружа високу
                  транспарентност кроз могућност онлајн увида у прегледане тестове и подношења приговора на
                  остварене резултате.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-[#f8f4f3] mx-3 lg:mx-0">
        <div className="container max-w-[1150px] absolute top-1/2 left-1/2 mt-0 -translate-x-1/2 -translate-y-1/2 py-10 px-8 bg-white rounded-[20px]" style={{ backgroundImage: `url('${getMediaPathname("box-pattern.png")}')` }}>
          <div className="grid lg:grid-cols-3 gap-x-10">

            <div className="col-span-1">
              <div className="visible animate-tada text-center my-[15px]">
                <span className="text-[3rem] text-[#1e2236] mb-0 leading-[0.8] font-teko">5</span>
                <p className="text-white mt-[6px] leading-[1.4] text-[15px]">завршних испита на крају основног образовања и васпитања</p>
              </div>
            </div>

            <div className="col-span-1">
              <div className="visible animate-tada text-center my-[15px]">
                <span className="text-[3rem] text-[#1e2236] mb-0 leading-[0.8] font-teko">50+</span>
                <p className="text-white mt-[6px] leading-[1.4] text-[15px]">пријемних испита на основним и мастер студијама</p>
              </div>
            </div>

            <div className="col-span-1">
              <div className="visible animate-tada text-center my-[15px]">
                <span className="text-[3rem] text-[#1e2236] mb-0 leading-[0.8] font-teko">200+</span>
                <p className="text-white mt-[6px] leading-[1.4] text-[15px]">реализованих колоквијума и испита на факултету</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="block pt-64 pb-64 lg:py-32 bg-[#f8f4f3]" id="phases">
        <div className="container mx-auto max-w-screen-lg">
          <div className="visible animate-fadeInUp">
            <p className="mb-10 text-3xl lg:text-[40px] font-playfair text-center leading-[1.4] font-semibold">
              Најзначајније <span className="text-primary">функционалности</span>
            </p>
          </div>

          <div className="lg:grid lg:grid-cols-3">
            <div className="lg:col-span-1">
              <div className="visible animate-fadeInUp">
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
                      <span className="font-poppins">01.</span>
                      <span className="max-lg:hidden">Дизајнирање тестова</span>
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
                      <span className="font-poppins">02.</span>
                      <span className="max-lg:hidden">Генерисање персонализованих тестова</span>
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
                      <span className="font-poppins">03.</span>
                      <span className="max-lg:hidden">Дистрибуција и пријем материјала</span>
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
                      <span className="font-poppins">04.</span>
                      <span className="max-lg:hidden">Скенирање тестова</span>
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
                      <span className="font-poppins">05.</span>
                      <span className="max-lg:hidden">Аутоматска обрада</span>
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
                      <span className="font-poppins">06.</span>
                      <span className="max-lg:hidden">Ручно прегледање</span>
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
                      <span className="font-poppins">07.</span>
                      <span className="max-lg:hidden">Објава резултата</span>
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
                      <span className="font-poppins">08.</span>
                      <span className="max-lg:hidden">Онлајн приговори</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-2 flex items-center px-10 lg:px-20">
              <div className="visible animate-fadeInUp relative bg-#f8f4f3 z-0 before:block before:absolute before:-top-[17px] before:-left-[17px] before:w-[60px] before:h-[60px] before:bg-#a68968b0 before:-z-10">

                <div className={`transition-all duration-700 ease-in-out ${activeLink === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  {activeLink === 1 && (
                    <div className="h-[200px] flex flex-col justify-start">
                      <p className="mb-5 font-semibold leading-[1.4] text-lg">Дизајнирање тестова</p>
                      <p className="text-[#888] text-[15px] leading-[2] m-0">
                        Савремена апликација која омогућава флексибилно креирање докумената у различитим форматима, уз једноставно додавање нових алата и елемената. Подржава напредне функције, као што су питања отвореног и затвореног типа, алати за дефинисање бодовања, тачних одговора и прегледање резултата, чиме пружа свеобухватну подршку за процес тестирања и евалуације.
                      </p>
                    </div>
                  )}
                </div>

                <div className={`transition-all duration-700 ease-in-out ${activeLink === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  {activeLink === 2 && (
                    <div className="h-[200px] flex flex-col justify-start">
                      <p className="mb-5 font-semibold leading-[1.4] text-lg">Генерисање персонализованих тестова</p>
                      <p className="text-[#888] text-[15px] leading-[2] m-0">
                        Апликација подржава аутоматску припрему докумената за штампу, уз могућност генерисања задатог броја јединствених примерака. Сваки кандидат добија јединствени тест, што обезбеђује да ниједан тест није идентичан, чиме се гарантује висок ниво безбедности и поузданости у процесу тестирања.
                      </p>
                    </div>
                  )}
                </div>

                <div className={`transition-all duration-700 ease-in-out ${activeLink === 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  {activeLink === 3 && (
                    <div className="h-[200px] flex flex-col justify-start">
                      <p className="mb-5 font-semibold leading-[1.4] text-lg">Дистрибуција и пријем материјала</p>
                      <p className="text-[#888] text-[15px] leading-[2] m-0">
                        Апликација за припрему дистрибуције омогућава организовано паковање и праћење испитног материјала у складу са планом дистрибуције, уз аутоматско генерисање све потребне пратеће документације, као што су налепнице и записници. Апликација за пријем материјала омогућава брзу и ефикасну евиденцију свих пристиглих материјала, чиме се поједностављује процес и осигурава тачност.
                      </p>
                    </div>
                  )}
                </div>

                <div className={`transition-all duration-700 ease-in-out ${activeLink === 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  {activeLink === 4 && (
                    <div className="h-[200px] flex flex-col justify-start">
                      <p className="mb-5 font-semibold leading-[1.4] text-lg">Скенирање тестова</p>
                      <p className="text-[#888] text-[15px] leading-[2] m-0">
                        Апликација омогућава дигитализацију, валидацију и евидентирање пристиглог испитног материјала, укључујући тестове и идентификационе обрасце. Свака кеса са тестовима се отвара, након чега се исправно попуњени тестови скенирају, валидају и уносе у систем. Идентичан процес се примењује за дигитализацију, валидацију и евидентирање идентификационих образаца, осигуравајући прецизност и интегритет података.
                      </p>
                    </div>
                  )}
                </div>

                <div className={`transition-all duration-700 ease-in-out ${activeLink === 5 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  {activeLink === 5 && (
                    <div className="h-[200px] flex flex-col justify-start">
                      <p className="mb-5 font-semibold leading-[1.4] text-lg">Аутоматска обрада</p>
                      <p className="text-[#888] text-[15px] leading-[2] m-0">
                        Путем специјално развијене апликације, током дизајнирања тестова, за свако питање се дефинише начин и број прегледа одговора. У случају вишеструког прегледања, резултати се упоређују, а уколико постоји неслагање, врши се усаглашавање резултата. Одговори на питања затвореног типа се аутоматски оцењују, док се одговори на питања отвореног типа додељују прегледачима који су евидентирани у систему.
                      </p>
                    </div>
                  )}
                </div>

                <div className={`transition-all duration-700 ease-in-out ${activeLink === 6 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  {activeLink === 6 && (
                    <div className="h-[200px] flex flex-col justify-start">
                      <p className="mb-5 font-semibold leading-[1.4] text-lg">Ручно прегледање</p>
                      <p className="text-[#888] text-[15px] leading-[2] m-0">
                        Развијена је посебна апликација која омогућава евидентиранем прегледачима да оцењују одговоре на питања отвореног типа. Одговори се распоређују према предметној области и језику теста. У случају вишеструког прегледања, резултати ће бити упоређени, а уколико постоји неслагање, апликација омогућава усаглашавање резултата и решавање евентуалних приговора.
                      </p>
                    </div>
                  )}
                </div>

                <div className={`transition-all duration-700 ease-in-out ${activeLink === 7 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  {activeLink === 7 && (
                    <div className="h-[200px] flex flex-col justify-start">
                      <p className="mb-5 font-semibold leading-[1.4] text-lg">Објава резултата</p>
                      <p className="text-[#888] text-[15px] leading-[2] m-0">
                        Увид у резултате омогућен је путем посебно развијене веб апликације. Након пријављивања у систем, кандидат може прегледати резултате свих тестова које је полагао. За сваки тест приказује се укупан број остварених бодова, као и број бодова појединачно за свако питање. На захтев, кандидатима могу бити достављени скенирани и означени тестови путем електронске поште, како би имали комплетан увид у своје одговоре.
                      </p>
                    </div>
                  )}
                </div>

                <div className={`transition-all duration-700 ease-in-out ${activeLink === 8 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  {activeLink === 8 && (
                    <div className="h-[200px] flex flex-col justify-start">
                      <p className="mb-5 font-semibold leading-[1.4] text-lg">Онлајн приговори</p>
                      <p className="text-[#888] text-[15px] leading-[2] m-0">
                        Корисницима је омогућено да преко специјализованог портала поднесу приговор на број остварених бодова за свако појединачно питање, а приговор се аутоматски заводи у систем. Портал такође омогућава праћење статуса приговора и одлука надлежних комисија. У зависности од исхода приговора, резултати ће бити аутоматски кориговани. Поред првостепеног, корисник може уложити и другостепени приговор, који се обрађује по истом механизму.
                      </p>
                    </div>
                  )}
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="block py-14 lg:py-28" id="results">
        <div className="container mx-auto font-playfair mb-16">
          <p className="text-center text-3xl lg:text-[40px] font-semibold mx-20">
            Најбољи <span className="text-primary">резултати</span>
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
                    <p className="text-lg font-semibold mt-1 leading-6">Завршни испити на крају основног образовања</p>
                  </div>
                  {/* card body */}
                  <div className="text-center">
                    <div className="mb-3 py-2 shadow-resultGroupItem rounded-xl">
                      <p className="text-primary text-2xl">62.659​</p>
                      <p className="text-xs text-[#888] font-medium">Дигитално прегледаних тестова</p>
                    </div>
                    <div className="mb-3 py-2 shadow-resultGroupItem rounded-xl">
                      <p className="text-primary text-2xl">1.065.203​</p>
                      <p className="text-xs text-[#888] font-medium">Прегледаних задатака затвореног типа​</p>
                    </div>
                    <div className="mb-3 py-2 shadow-resultGroupItem rounded-xl">
                      <p className="text-primary text-2xl">187.977​</p>
                      <p className="text-xs text-[#888] font-medium">Прегледаних задатака отвореног типа​</p>
                    </div>
                    <div className="mb-3 py-2 shadow-resultGroupItem rounded-xl">
                      <p className="text-primary text-2xl">5.000</p>
                      <p className="text-xs text-[#888] font-medium">Ангажованих учесника</p>
                    </div>
                    <div className="mb-3 py-2 shadow-resultGroupItem rounded-xl">
                      <p className="text-primary text-2xl">4 сата</p>
                      <p className="text-xs text-[#888] font-medium">Време прегледања</p>
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
                    <p className="text-lg font-semibold mt-1 leading-6">Пријемни испити на<br /> факултетима</p>
                  </div>
                  {/* card body */}
                  <div className="text-center">
                    <div className="mb-3 py-2 shadow-resultGroupItem rounded-xl">
                      <p className="text-primary text-2xl">2.250</p>
                      <p className="text-xs text-[#888] font-medium">Дигитално прегледаних тестова</p>
                    </div>
                    <div className="mb-3 py-2 shadow-resultGroupItem rounded-xl">
                      <p className="text-primary text-2xl">44.000</p>
                      <p className="text-xs text-[#888] font-medium">Прегледаних задатака затвореног типа​</p>
                    </div>
                    <div className="mb-3 py-2 shadow-resultGroupItem rounded-xl">
                      <p className="text-primary text-2xl">0​</p>
                      <p className="text-xs text-[#888] font-medium">Прегледаних задатака отвореног типа​</p>
                    </div>
                    <div className="mb-3 py-2 shadow-resultGroupItem rounded-xl">
                      <p className="text-primary text-2xl">5</p>
                      <p className="text-xs text-[#888] font-medium">Ангажованих учесника</p>
                    </div>
                    <div className="mb-3 py-2 shadow-resultGroupItem rounded-xl">
                      <p className="text-primary text-2xl">30 минута</p>
                      <p className="text-xs text-[#888] font-medium">Време прегледања</p>
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
                    <p className="text-lg font-semibold mt-1 leading-6">Колоквијуми/испити на факултетима</p>
                  </div>
                  {/* card body */}
                  <div className="text-center">
                    <div className="mb-3 py-2 shadow-resultGroupItem rounded-xl">
                      <p className="text-primary text-2xl">600</p>
                      <p className="text-xs text-[#888] font-medium">Дигитално прегледаних тестова</p>
                    </div>
                    <div className="mb-3 py-2 shadow-resultGroupItem rounded-xl">
                      <p className="text-primary text-2xl">18.000</p>
                      <p className="text-xs text-[#888] font-medium">Прегледаних задатака затвореног типа​</p>
                    </div>
                    <div className="mb-3 py-2 shadow-resultGroupItem rounded-xl">
                      <p className="text-primary text-2xl">6.000​</p>
                      <p className="text-xs text-[#888] font-medium">Прегледаних задатака отвореног типа​</p>
                    </div>
                    <div className="mb-3 py-2 shadow-resultGroupItem rounded-xl">
                      <p className="text-primary text-2xl">2</p>
                      <p className="text-xs text-[#888] font-medium">Ангажованих учесника</p>
                    </div>
                    <div className="mb-3 py-2 shadow-resultGroupItem rounded-xl">
                      <p className="text-primary text-2xl">1 сат и 30 минута</p>
                      <p className="text-xs text-[#888] font-medium">Време прегледања</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* card end */}

          </div>
        </div>
      </div>

      <div className="block bg-[#1e2236] text-white pt-28 pb-6 lg:pb-14">
        <div className="container mx-auto">
          <div className="relative text-center mx-auto mb-20">
            <div className="flex flex-wrap justify-center">
              <div className="mx-10 lg:mx-52">
                <p className="text-primary font-light text-lg uppercase tracking-[3px] mb-[10px] leading-[1.2] font-teko visible animate-fadeInDown delay-300">
                  Резултати евалуације
                </p>
                <p className="font-playfair text-[15px] leading-[2] visible animate-flipInX delay-500 mb-20">
                  Неки од коментара учесника
                  укључених у
                  процес реализације тестирања након евалуације пројекта. Сврха евалуације је унапређење
                  ефикасности и безбедности процеса тестирања кандидата.
                </p>
              </div>

              <CommentsSlider />
            </div>
          </div>

        </div>
      </div>

      <div className="block relative py-16 lg:py-24">
        <div className="absolute top-0 left-0 w-full h-full -z-[20] bg-auto bg-repeat shadow-brand" style={{ backgroundImage: `url('${getMediaPathname("dots.png")}')` }}>
        </div>

        <div className="container mx-auto">
          <div className="grid lg:grid-cols-5 gap-10 ">
            <TeammatesSlider />
          </div>
        </div>
      </div>
    </>
  );
}
