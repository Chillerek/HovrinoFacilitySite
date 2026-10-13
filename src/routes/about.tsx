import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { useLang } from "@/lib/i18n";
import { meta } from "@/lib/meta";
import { UI } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => meta("О больнице", "История, миссия, структура и руководство ККПБ №3 «Северная Заря»."),
  component: About,
});

function About() {
  const { t } = useLang();
  const T = (ru: string, en: string) => t({ ru, en });
  return (
    <Layout crumb={UI.about}>
      <h1>{T("О больнице", "About the Hospital")}</h1>
      <p>{T("Учреждение основано в 1952 году и является ведущим специализированным психиатрическим стационаром Верхнеозёрского края. Больница обслуживает население четырёх районов края и г. Верхнеозёрска.", "Founded in 1952, the institution is the leading specialised psychiatric hospital of the Verkhneozyorsk Region, serving four districts and the city of Verkhneozyorsk.")}</p>
      <h2>{T("Миссия", "Mission")}</h2>
      <p>{T("Оказание доступной, своевременной и качественной психиатрической помощи, основанной на принципах гуманности, законности и уважения прав пациента в соответствии с Законом РФ «О психиатрической помощи и гарантиях прав граждан при её оказании».", "To provide accessible, timely and high-quality psychiatric care based on humanity, legality and respect for patients' rights, in accordance with the Russian Federation Law on Psychiatric Care.")}</p>
      <h2>{T("Структура учреждения", "Organisational Structure")}</h2>
      <table className="tbl"><tbody>
        <tr><th>{T("Главный врач", "Chief Physician")}</th><td>{T("Громов Виктор Николаевич", "Viktor N. Gromov")}</td></tr>
        <tr><th>{T("Зам. по медицинской части", "Deputy (Medical)")}</th><td>{T("Тихонова Валентина Сергеевна", "Valentina S. Tikhonova")}</td></tr>
        <tr><th>{T("Отдел кадров", "Personnel")}</th><td>{T("Лебедев Константин Олегович", "Konstantin O. Lebedev")}</td></tr>
        <tr><th>{T("Клинические отделения", "Clinical departments")}</th><td>5</td></tr>
        <tr><th>{T("Вспомогательные службы", "Support services")}</th><td>{T("лаборатория, ЭЭГ, физиотерапия, аптека, архив, пищеблок", "laboratory, EEG, physiotherapy, pharmacy, archive, catering")}</td></tr>
      </tbody></table>
      <h2>{T("Материально-техническая база", "Facilities")}</h2>
      <p>{T("Больница располагается на территории парка площадью 14 га. В состав комплекса входят три лечебных корпуса (А, Б, В), административное здание, клуб, мастерские и котельная.", "The hospital is set in a 14-hectare park. The complex includes three clinical buildings (A, B, C), an administrative building, a club, workshops and a boiler house.")}</p>
      <h2>{T("Руководство", "Leadership")}</h2>
      <p>{T("Главный врач В. Н. Громов — врач-психиатр высшей категории, заслуженный врач РФ, работает в учреждении с 1986 года.", "Chief Physician V. N. Gromov is a senior psychiatrist and Honoured Physician of the Russian Federation who has worked at the hospital since 1986.")}</p>
      <h2>{T("Нормативные документы", "Regulations")}</h2>
      <ul>
        <li>{T("Устав учреждения (ред. 1999 г.)", "Charter (1999 revision)")}</li>
        <li>{T("Правила внутреннего распорядка для пациентов", "Internal rules for patients")}</li>
        <li>
          {T("Приказ №14 от 11.01.2002 «О порядке доступа к архиву исторических документов». П. 3: в целях сохранности код доступа записан в обратном порядке — EILASTI. Для получения кода его следует прочитать справа налево.", "Order No. 14 of 11.01.2002 \"On Access to the Historical Records Archive\". Clause 3: for safekeeping, the access code is written in reverse — EILASTI. To obtain the code, read it from right to left.")}
        </li>
      </ul>
    </Layout>
  );
}
