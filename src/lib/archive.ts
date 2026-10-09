import { useEffect, useState } from "react";
import { ARCHIVE_PASSWORD } from "@/data/documents";

/** Frontend-only archive unlock state (sessionStorage). Not secure — prototype only. */
const KEY = "kkpb3_archive";

export function useArchive() {
  const [unlocked, setUnlocked] = useState(false);
  useEffect(() => setUnlocked(sessionStorage.getItem(KEY) === "1"), []);
  const tryUnlock = (pw: string) => {
    const ok = pw.trim().toUpperCase() === ARCHIVE_PASSWORD;
    if (ok) {
      sessionStorage.setItem(KEY, "1");
      setUnlocked(true);
    }
    return ok;
  };
  const lock = () => {
    sessionStorage.removeItem(KEY);
    setUnlocked(false);
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
