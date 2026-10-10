import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { useLang } from "@/lib/i18n";
import { meta } from "@/lib/meta";
import { UI } from "@/data/site";
import { TIMELINE } from "@/data/content";

export const Route = createFileRoute("/history")({
  head: () => meta("История", "Хронология развития ККПБ №3 «Северная Заря» с 1952 года."),
  component: History,
});

function History() {
  const { t } = useLang();
  const T = (ru: string, en: string) => t({ ru, en });
  return (
    <Layout crumb={UI.history}>
      <h1>{T("История больницы", "Hospital History")}</h1>
      <p>{T("Ниже приведены основные этапы развития учреждения по материалам архива.", "Below are the main milestones of the institution, based on archive materials.")}</p>
      <table className="tbl"><tbody>
        {TIMELINE.map((e) => (
          <tr key={e.year}><td style={{ width: 50 }}><b>{e.year}</b></td><td>{t(e.text)}</td></tr>
        ))}
      </tbody></table>
      <p className="meta">{T("Материал подготовлен к 50-летию больницы (2002 г.).", "Prepared for the hospital's 50th anniversary (2002).")}</p>
    </Layout>
  );
}
