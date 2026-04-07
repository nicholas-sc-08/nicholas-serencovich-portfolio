import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export function toggleLanguage(pathName: string, router: AppRouterInstance, newLanguage: string) {

    const segments = pathName.split("/");
    segments[1] = newLanguage;

    const newPath = segments.join("/");
    router.push(newPath);
}