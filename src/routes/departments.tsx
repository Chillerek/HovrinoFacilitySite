import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { useLang } from "@/lib/i18n";
import { meta } from "@/lib/meta";
import { UI } from "@/data/site";
import { DEPTS } from "@/data/content";
import { downloadText } from "@/lib/archive";

export const Route = createFileRoute("/departments")({
  head: () => meta("Отделения", "Отделения ККПБ №3: общая психиатрия, клиническая психология, неврологическое наблюдение, реабилитация, длительное пребывание."),
  component: Depts,
});

const PUBS = [
  { ru: "Ковалёв С. П. Трудотерапия в реабилитации пациентов с хроническими психозами // Сб. науч. трудов. — Верхнеозёрск, 2001.", en: "Kovalyov S. P. Occupational therapy in the rehabilitation of patients with chronic psychoses // Proceedings. Verkhneozyorsk, 2001.", file: "kovalev_2001.txt" },
  { ru: "Смирнова О. А., Орлова Т. М. Опыт применения групповой психокоррекции. — 2003.", en: "Smirnova O. A., Orlova T. M. Experience with group psychotherapy. 2003.", file: "smirnova_2003.txt" },
];

function Depts() {
  const { t } = useLang();
  const T = (ru: string, en: string) => t({ ru, en });
  return (
    <Layout crumb={UI.departments}>
      <h1>{T("Отделения больницы", "Hospital Departments")}</h1>
      {DEPTS.map((d) => (
        <div key={t(d.name)}>
          <h2>{d.code} {t(d.name)}</h2>
          <p>{t(d.text)}</p>
          <p className="meta">{t(d.head)}{d.beds ? ` · ${T("коек", "beds")}: ${d.beds}` : ""}</p>
        </div>
      ))}
      <hr className="hr" />
      <h2>{T("Публикации и отчёты", "Publications and Reports")}</h2>
      <ul>
        <li><Link to="/documentation/$slug" params={{ slug: "001-annual-report-2002" }}>{T("Годовой отчёт о деятельности учреждения за 2002 год", "Annual Activity Report for 2002")}</Link></li>
        {PUBS.map((p) => (
          <li key={p.file}>
            {t(p)} [<a href="#" onClick={(e) => { e.preventDefault(); downloadText(p.file, t({ ru: "Тезисы публикации:\n" + p.ru, en: "Abstract:\n" + p.en })); }}>{t(UI.download)}</a>]
          </li>
        ))}
      </ul>
    </Layout>
  );
}
