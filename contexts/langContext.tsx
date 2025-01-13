'use client'

import React, { useEffect } from "react";
import { cirilica, Pismo, translate } from "../common/pismo";

interface LangContextType {
    lang: Pismo;
    setLang: React.Dispatch<React.SetStateAction<Pismo>>;
    t: (text: string, key?: string) => string;
}

const LangContext = React.createContext<LangContextType | undefined>(undefined);


function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLang] = React.useState<Pismo>(cirilica);

    const t = (text: string, key?: string) => translate(lang, text, key);


    useEffect(() => {
        const savedLang = localStorage.getItem('lang') as Pismo;
        if (savedLang) {
            setLang(savedLang);
        }
        else {
            setLang(cirilica);
        }
    }, []);


    useEffect(() => {
        localStorage.setItem('lang', lang);
    }, [lang]);

    return <LangContext.Provider value={{ lang, setLang, t }}>
        {children}
    </LangContext.Provider>;
}

export const useLang = () => {
    const context = React.useContext(LangContext);
    if (context === undefined) {
        throw new Error('useLang must be used within a LangProvider');
    }
    return context;
}


export default LanguageProvider;