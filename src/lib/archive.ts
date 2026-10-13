import { useEffect, useState } from "react";
import { ARCHIVE_PASSWORD } from "@/data/documents";

/** Frontend-only archive unlock state (sessionStorage). Not secure — prototype only. */
const KEY = "kkpb3_archive";

export function useArchive() {
  const [unlocked, setUnlocked] = useState(false);
  useEffect(() => {
    const sync = () => setUnlocked(sessionStorage.getItem(KEY) === "1");
    sync();
    window.addEventListener("kkpb3-archive", sync);
    return () => window.removeEventListener("kkpb3-archive", sync);
  }, []);
  const tryUnlock = (pw: string) => {
    const ok = pw.trim().toUpperCase() === ARCHIVE_PASSWORD;
    if (ok) {
      sessionStorage.setItem(KEY, "1");
      setUnlocked(true);
      window.dispatchEvent(new Event("kkpb3-archive"));
    }
    return ok;
  };
  const lock = () => {
    sessionStorage.removeItem(KEY);
    setUnlocked(false);
    window.dispatchEvent(new Event("kkpb3-archive"));
  };
  return { unlocked, tryUnlock, lock };
}

export function downloadText(name: string, content: string) {
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = name;
  a.click();
  URL.revokeObjectURL(a.href);
}

/**
 * Renders archived text as a corrupted file: deterministic per input string,
 * so the garble is stable across renders. Keeps short readable fragments,
 * replaces the rest with random glyphs ("??dfsdf?65fg?" style).
 */
const GLYPHS = "?#%&@§¤=+*/\\<>[]{}~^65fgdfs01xXжЯћ";
export function corruptText(input: string): string {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  const rnd = () => {
    h ^= h << 13;
    h ^= h >>> 17;
    h ^= h << 5;
    return (h >>> 0) / 4294967296;
  };
  let out = "";
  let i = 0;
  while (i < input.length) {
    const ch = input[i];
    if (ch === "\n") {
      out += "\n";
      i++;
      continue;
    }
    if (rnd() < 0.18) {
      // keep a short readable fragment
      const len = 2 + Math.floor(rnd() * 5);
      out += input.slice(i, i + len);
      i += len;
    } else {
      const len = 1 + Math.floor(rnd() * 6);
      for (let k = 0; k < len; k++) out += GLYPHS[Math.floor(rnd() * GLYPHS.length)];
      i += len;
    }
  }
  return out;
}
