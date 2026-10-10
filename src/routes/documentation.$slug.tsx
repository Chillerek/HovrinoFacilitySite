import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ArchiveGate } from "@/components/ArchiveGate";
import { useLang } from "@/lib/i18n";
import { UI } from "@/data/site";
import { DOCS } from "@/data/documents";
import { useArchive, downloadText } from "@/lib/archive";

export const Route = createFileRoute("/documentation/$slug")({
  loader: ({ params }) => {
    const doc = DOCS.find((d) => d.slug === params.slug);
    if (!doc) throw notFound();
    return { slug: doc.slug, title: doc.title.ru };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Архив ККПБ №3` },
          { name: "description", content: `Архивный документ: ${loaderData.title}` },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: "Архив исторических документов ККПБ №3" },
          { property: "og:type", content: "article" },
          { name: "twitter:card", content: "summary" },
          { name: "robots", content: "noindex" },
        ]
      : [{ title: "Документ не найден" }, { name: "robots", content: "noindex" }],
  }),
  component: DocView,
});

function DocView() {
  const { slug } = Route.useLoaderData();
  const doc = DOCS.find((d) => d.slug === slug)!;
  const { t } = useLang();
  const T = (ru: string, en: string) => t({ ru, en });
  const { unlocked, tryUnlock } = useArchive();
  const back = <Link to="/documentation">{t(UI.back)}</Link>;
  if (!doc.public && !unlocked)
    return <Layout crumb={UI.documentation}>{back}<ArchiveGate onTry={tryUnlock} /></Layout>;
  return (
    <Layout crumb={UI.documentation} side={false}>
      {back}
      <table className="tbl" style={{ marginTop: 8 }}><tbody>
        <tr><th>{T("Номер документа", "Document No.")}</th><td>{doc.no}</td><th>{T("Дата", "Date")}</th><td>{doc.date}{doc.revised && <> ({T("ред.", "rev.")} {doc.revised})</>}</td></tr>
        <tr><th>{T("Автор / подразделение", "Author / unit")}</th><td>{t(doc.author)}</td><th>{T("Категория", "Category")}</th><td>{t(doc.category)}</td></tr>
        <tr><th>{T("Гриф", "Distribution")}</th><td colSpan={3}>{t(doc.access)}</td></tr>
      </tbody></table>
      <div className="paper">
        <div style={{ textAlign: "right" }}><span className="stamp">{t(doc.access)}</span></div>
        <h3>{t(doc.title)}</h3>
        {doc.body.map((b, i) => {
          if (b.t === "table") return (
            <table key={i} className="tbl"><thead><tr>{b.head.map((h, j) => <th key={j}>{t(h)}</th>)}</tr></thead>
              <tbody>{b.rows.map((r, j) => <tr key={j}>{r.map((c, k) => <td key={k}>{t(c)}</td>)}</tr>)}</tbody></table>
          );
          if (b.t === "h") return <h3 key={i}>{t(b.v)}</h3>;
          if (b.t === "sig") return <p key={i} className="sig">{t(b.v)}</p>;
          if (b.t === "note") return <p key={i} className="meta">{t(b.v)}</p>;
          return <p key={i}>{t(b.v)}</p>;
        })}
      </div>
      {doc.attachments && (
        <>
          <h2>{T("Приложения", "Attachments")}</h2>
          <ul>
            {doc.attachments.map((a) => (
              <li key={a.name}>
                {a.content ? (
                  <>{a.name} [<a href="#" onClick={(e) => { e.preventDefault(); downloadText(a.name, t(a.content!)); }}>{t(UI.download)}</a>]</>
                ) : (
                  <><span className="missing">{a.name}</span> — <span className="meta">{t(UI.fileMissing)}</span></>
                )}
              </li>
            ))}
          </ul>
        </>
      )}
    </Layout>
  );
}
