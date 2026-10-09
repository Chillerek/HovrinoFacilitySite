/**
 * Bilingual system. Every piece of text is an `L` object: { ru, en }.
 * To add a translation: add the key to UI below (or add an L object inside
 * a data file in src/data). Russian is the default; choice persists in localStorage.
 */
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "ru" | "en";
export type L = { ru: string; en: string };

const KEY = "kkpb3_lang";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (l: L) => string };
const LangCtx = createContext<Ctx>({ lang: "ru", setLang: () => {}, t: (l) => l.ru });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ru");
  useEffect(() => {
    const s = localStorage.getItem(KEY);
    if (s === "en" || s === "ru") setLangState(s);
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem(KEY, l);
  };
  return <LangCtx.Provider value={{ lang, setLang, t: (l) => l[lang] }}>{children}</LangCtx.Provider>;
}

export const useLang = () => useContext(LangCtx);
