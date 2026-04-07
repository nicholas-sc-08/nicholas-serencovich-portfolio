import "server-only";

const dictionaries = {
    en: () => import("@/dictionaries/en").then(module => (module as any).en || (module as any).default),
    pt: () => import("@/dictionaries/pt").then(module => (module as any).pt || (module as any).default)
};

export async function getDictionary(locale: "en" | "pt") { 
    const loader = dictionaries[locale] || dictionaries.pt;
    
    return await loader();
}