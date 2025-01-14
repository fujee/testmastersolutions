'use client'

import { useLang } from "@/contexts/langContext";

export default function Loader() {
    const { t } = useLang();

    return (
        <div className="w-full h-full overflow-hidden fixed z-50 bg-[#1e2236]">
            <div className="relative flex justify-center items-center w-full h-full">

                <div className="font-light uppercase tracking-[10px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary font-teko z-40 text-center">
                    {t("Учитавање", "loading_title")}
                </div>

                <div className="absolute top-[calc(50%+25px)] left-1/2 transform -translate-x-1/2 w-full border-b-2 border-transparent animate-border"></div>
            </div>
        </div>
    );
}
