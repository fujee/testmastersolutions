'use client'

import { getMediaPathname } from "@/common/pathHelper";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faIdCard, faMap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
    return (
        <>
            <div className="relative overflow-hidden bg-cover bg-no-repeat" style={{ backgroundImage: `url('${getMediaPathname("contact.png")}')`, height: "50vh" }}>
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                    <div className="flex h-full items-center justify-center">
                        <div className="text-white">
                            <p className="mb-4 text-4xl lg:text-7xl font-bold">Како до нас?</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="block">
                <div className="py-10 lg:py-20">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-4 max-w-screen-lg mx-4 lg:mx-auto">
                            <div className="col-span-1">
                                <div className="border border-solid border-[#a6896854] rounded-xl p-5 shadow-contactItem flex items-center flex-col justify-center">
                                    <div className="w-10 h-10 text-2xl flex items-center justify-center text-[#a68968] mb-2">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </div>
                                    <div className="text-center">
                                        <h6 className="text-[#1e2236] font-bold lg:text-lg mb-1">Електронска пошта</h6>
                                        <a href="mailto:contact@testmastersolutions.com" className={`font-poppins cursor-pointer underline ease-in-out hover:text-primary transition-colors duration-100`}>contact@testmastersolutions.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="border border-solid border-[#a6896854] rounded-xl p-5 shadow-contactItem flex items-center flex-col justify-center">
                                    <div className="w-10 h-10 text-2xl flex items-center justify-center text-[#a68968] mb-2">
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </div>
                                    <div className="text-center">
                                        <h6 className="text-[#1e2236] font-bold lg:text-lg mb-1">LinkedIn</h6>
                                        <a href="https://www.linkedin.com/company/testmastersolutions/" target="_blank" className={`font-poppins cursor-pointer underline ease-in-out hover:text-primary transition-colors duration-100`}>testmastersolutions</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="border border-solid border-[#a6896854] rounded-xl p-5 shadow-contactItem flex items-center flex-col justify-center">
                                    <div className="w-10 h-10 text-2xl flex items-center justify-center text-[#a68968] mb-2">
                                        <FontAwesomeIcon icon={faIdCard} />
                                    </div>
                                    <div className="text-center">
                                        <h6 className="text-[#1e2236] font-bold lg:text-lg mb-1">Матични број</h6>
                                        <p className="text-[#888] text-sm leading-6 font-poppins">21850802</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="border border-solid border-[#a6896854] rounded-xl p-5 shadow-contactItem flex items-center flex-col justify-center">
                                    <div className="w-10 h-10 text-2xl flex items-center justify-center text-[#a68968] mb-2">
                                        <FontAwesomeIcon icon={faMap} />
                                    </div>
                                    <div className="text-center">
                                        <h6 className="text-[#1e2236] font-bold lg:text-lg mb-1">ПИБ</h6>
                                        <p className="text-[#888] text-sm leading-6 font-poppins">113350682</p>
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