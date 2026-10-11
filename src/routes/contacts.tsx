import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { useLang } from "@/lib/i18n";
import { meta } from "@/lib/meta";
import { SITE, UI } from "@/data/site";

export const Route = createFileRoute("/contacts")({
  head: () => meta("Контакты", "Адрес, отделы и реквизиты ККПБ №3 «Северная Заря»."),
  component: Contacts,
});

function Contacts() {
  const { t } = useLang();
  const T = (ru: string, en: string) => t({ ru, en });
  return (
    <Layout crumb={UI.contacts}>
      <h1>{T("Контакты", "Contacts")}</h1>
      <p><b>{T("Адрес", "Address")}:</b> {t(SITE.address)}</p>
      <table className="tbl"><tbody>
        <tr><td>{T("Приёмная главного врача", "Chief Physician's office")}</td><td className="meta">{T("номер не обслуживается", "number not in service")}</td></tr>
        <tr><td>{T("Справочная", "Information desk")}</td><td className="meta">{T("номер не обслуживается", "number not in service")}</td></tr>
        <tr><td>{T("Приёмное отделение", "Admissions")}</td><td className="meta">{T("номер не обслуживается", "number not in service")}</td></tr>
        <tr><td>{T("Отдел кадров", "Personnel")}</td><td className="meta">{T("номер не обслуживается", "number not in service")}</td></tr>
        <tr><td>{T("Архив", "Archive")}</td><td className="meta">{T("номер не обслуживается", "number not in service")}</td></tr>
        <tr><td>{T("Корпус Б, пост №2", "Building B, station No. 2")}</td><td className="meta">{T("номер не обслуживается", "number not in service")}</td></tr>
      </tbody></table>
      <h2>{T("Проезд", "Directions")}</h2>
      <p>{T("Автобус №4 от автовокзала до остановки «Больничный городок», далее 300 м по аллее.", "Bus No. 4 from the bus station to the \"Bolnichny Gorodok\" stop, then 300 m along the avenue.")}</p>
      <p className="meta">{T("Все сведения на сайте носят вымышленный характер.", "All information on this site is fictional.")}</p>
    </Layout>
  );
}
