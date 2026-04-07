import "server-only";

const dictionaries = {
    // Usamos (module as any) para o TS ignorar se é default ou nomeado
    en: () => import("@/dictionaries/en").then(module => (module as any).en || (module as any).default),
    pt: () => import("@/dictionaries/pt").then(module => (module as any).pt || (module as any).default)
};

export async function getDictionary(locale: "en" | "pt") { 
    // 1. Seleciona a função (loader) baseada no locale
    const loader = dictionaries[locale] || dictionaries.pt;
    
    // 2. Executa a função e dá o await nos dados
    return await loader();
}