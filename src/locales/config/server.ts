import { createI18nServer } from "next-international/server";

export const { getI18n, getCurrentLocale } = createI18nServer({
  en: () => import("../en"),
  vi: () => import("../vi"),
});