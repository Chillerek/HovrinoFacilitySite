/** Builds per-route head metadata. */
export const meta = (title: string, description: string) => ({
  meta: [
    { title: `${title} — ККПБ №3 «Северная Заря»` },
    { name: "description", content: description },
    { property: "og:title", content: `${title} — ККПБ №3` },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ],
});
