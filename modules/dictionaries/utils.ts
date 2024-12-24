import { Lang } from "../app-config";

const dictionaries = {
  en: () => import("./assets/en.json").then((module) => module.default),
  vi: () => import("./assets/vi.json").then((module) => module.default),
};

export const getDictionary = async (lang: Lang) => dictionaries[lang]();
