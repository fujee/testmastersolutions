'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import { getMediaPathname } from "@/common/pathHelper";
import Link from "next/link";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    const [color, setColor] = useState<boolean>(false);

    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true);
        } else {
            setColor(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeColor);
        changeColor();
        return () => {
            window.removeEventListener('scroll', changeColor);
        }
    }, [])

    return (
        <Disclosure as='nav' className={`fixed z-50 w-full border-b transition duration-300 ease-in-out border-b-white/10 ${color ? "bg-[#fff] shadow-xl" : "bg-navBg lg:bg-transparent"}`}>
            <div className="container mx-auto">
                <div className="flex align-middle justify-between px-4 lg:mx-48">
                    <Link href="/">
                        <Image
                            className="p-3"
                            src={color ? getMediaPathname("logo-dark.png") : getMediaPathname("logo-light.png")}
                            alt="Testmaster Solutions"
                            width={220}
                            height={40}
                        />
                    </Link>
                    <div className="hidden lg:flex items-center gap-5 text-sm font-semibold">
                        <Link href="/" className={`${color ? "text-[#191514]" : "text-white"} hover:text-primary transition-colors duration-100`}>
                            Почетна
                        </Link>
                        <Link href="/about" className={`${color ? "text-[#191514]" : "text-white"} hover:text-primary transition-colors duration-100`}>
                            О нама
                        </Link>
                        <Link href="/results" className={`${color ? "text-[#191514]" : "text-white"} hover:text-primary transition-colors duration-100`}>
                            Резултати
                        </Link>
                        <Link href="/contact" className={`${color ? "text-[#191514]" : "text-white"} hover:text-primary transition-colors duration-100 lg:border-r-2 ${color ? "border-black/30" : "border-white/30"} lg:pe-3`}>
                            Контакт
                        </Link>
                    </div>
                    <div className="absolute right-2 inset-y-5 lg:hidden">
                        <DisclosureButton className="ms-auto group inline-flex items-center justify-center rounded-md p-2">
                            <span className="sr-only">Open main menu</span>
                            <FontAwesomeIcon icon={faBars} aria-hidden="true" className={`block h-6 w-6 group-data-[open]:hidden ${color ? "text-black/70" : "text-white/70"}`} />
                            <FontAwesomeIcon icon={faTimes} aria-hidden="true" className={`hidden h-6 w-6 group-data-[open]:block ${color ? "text-black/70" : "text-white/70"}`} />
                        </DisclosureButton>
                    </div>
                </div>
            </div>


            <DisclosurePanel className='lg:hidden bg-navBg absolute w-full rounded-b-xl text-sm font-semibold'>
                {({ close }: { close: () => void }) => (
                    <div className="flex items-center gap-4 flex-col">
                        <Link href="/" onClick={close} className="text-white hover:text-primary transition-colors duration-100 mt-3">
                            Почетна
                        </Link>
                        <Link href="/about" onClick={close} className="text-white hover:text-primary transition-colors duration-100">
                            О нама
                        </Link>
                        <Link href="/results" onClick={close} className="text-white hover:text-primary transition-colors duration-100">
                            Резултати
                        </Link>
                        <Link href="/contact" onClick={close} className="text-white hover:text-primary transition-colors duration-100 mb-3 lg:border-r-2 border-white/30">
                            Контакт
                        </Link>
                    </div>
                )}

            </DisclosurePanel>
        </Disclosure>
    );
}