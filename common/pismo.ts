import englishTranslations from '../lang/translations-en.json'
const translations: { [key: string]: string } = englishTranslations;


export const cirilica = "cir";
export const latinica = "lat";
export const english = "en";

export const all = [cirilica, latinica, english] as const;

export type Pismo = typeof all[number];

export function translate(pismo: Pismo, textCirilica: string, key?: string): string {
    if (pismo === english) {
        if (key && key in translations && translations[key]) {
            return translations[key]
        }

        return textCirilica;
    }

    return pismo === cirilica ? textCirilica : cyrillicToLatin(textCirilica);
}

export function getLang(pismo: Pismo): string {
    if (pismo === english) {
        return "en-US";
    }

    return pismo === cirilica ? "sr-Cyrl-RS" : "sr-Latn-RS";
}

export function getLabel(pismo: Pismo): string {
    if (pismo === english) {
        return "English";
    }

    return pismo === cirilica ? "Српски (ћир)" : "Srpski (lat)";
}

// copied from https://github.com/stojanovic/cyrillic-to-latin/blob/07c2bf48cd707d8c30d9ce766abd4f64baf1e43c/cyrillicToLatin.js#L25
function cyrillicToLatin(text: string): string {
    const cyrillic =
        "А_Б_В_Г_Д_Ђ_Е_Ё_Ж_З_И_Й_Ј_К_Л_Љ_М_Н_Њ_О_П_Р_С_Т_Ћ_У_Ф_Х_Ц_Ч_Џ_Ш_Щ_Ъ_Ы_Ь_Э_Ю_Я_а_б_в_г_д_ђ_е_ё_ж_з_и_й_ј_к_л_љ_м_н_њ_о_п_р_с_т_ћ_у_ф_х_ц_ч_џ_ш_щ_ъ_ы_ь_э_ю_я".split(
            "_"
        );
    const latin =
        "A_B_V_G_D_Đ_E_Ë_Ž_Z_I_J_J_K_L_Lj_M_N_Nj_O_P_R_S_T_Ć_U_F_H_C_Č_Dž_Š_Ŝ_ʺ_Y_ʹ_È_Û_Â_a_b_v_g_d_đ_e_ë_ž_z_i_j_j_k_l_lj_m_n_nj_o_p_r_s_t_ć_u_f_h_c_č_dž_š_ŝ_ʺ_y_ʹ_è_û_â".split(
            "_"
        );

    return text
        .split("")
        .map(function (char) {
            const index = cyrillic.indexOf(char);
            if (!~index) return char;
            return latin[index];
        })
        .join("");
}