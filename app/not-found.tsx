'use client'

import { getMediaPathname } from '@/common/pathHelper'
import { useLang } from '@/contexts/langContext'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
    const { t } = useLang();

    return (
        <div className="relative overflow-hidden bg-cover bg-no-repeat shadow-brand bg-[#f8f4f3]" style={{ height: "80vh" }}>
            <div className="flex h-full items-center justify-center flex-col">
                <div>
                    <Image
                        src={getMediaPathname("error-404.png")}
                        alt="Testmaster Solutions"
                        width={560}
                        height={60}
                    />
                </div>
                <p className="text-primary text-2xl font-bold mx-5">{t("Страница није пронађена!", "not_found_title")}</p>
                <Link href="/" className="mt-3 text-primary text-base mx-5 mb-3 underline hover:text-gray-500">{t("Назад на почетну", "not_found_subtitle")}</Link>
            </div>
        </div>
    )
}