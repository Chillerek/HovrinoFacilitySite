import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { useLang } from "@/lib/i18n";
import { meta } from "@/lib/meta";
import { DEPTS } from "@/data/content";
import { UI } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => meta("Главная", "Официальный сайт Краевой клинической психиатрической больницы №3 «Северная Заря»: отделения, специалисты, информация для пациентов."),
  component: Home,
});

function Home() {
  const { t } = useLang();
  const T = (ru: string, en: string) => t({ ru, en });
  return (
    <Layout>
      <h1>{T("Добро пожаловать на официальный сайт", "Welcome to the official website")}</h1>
      <p>
        {T(
          "Краевая клиническая психиатрическая больница №3 «Северная Заря» — одно из старейших специализированных лечебных учреждений Верхнеозёрского края. С 1952 года больница оказывает стационарную и амбулаторную психиатрическую помощь, проводит психологическое обследование, неврологическое наблюдение и медико-социальную реабилитацию.",
          "Regional Clinical Psychiatric Hospital No. 3 \"Severnaya Zarya\" is one of the oldest specialised medical institutions in the Verkhneozyorsk Region. Since 1952 the hospital has provided inpatient and outpatient psychiatric care, psychological assessment, neurological observation and medical and social rehabilitation.",
        )}
      </p>
      <p>
        {T(
          "Учреждение располагает коечным фондом на 420 мест, собственной лабораторией, физиотерапевтическим кабинетом, трудовыми мастерскими и библиотекой для пациентов.",
          "The institution has 420 beds, its own laboratory, a physiotherapy unit, occupational therapy workshops and a patient library.",
        )}
      </p>

      <h2>{T("Отделения", "Departments")}</h2>
      <table className="tbl">
        <tbody>
          {DEPTS.map((d) => (
            <tr key={d.code}>
              <td style={{ width: 40 }}><b>{d.code}</b></td>
              <td><b>{t(d.name)}</b><br />{t(d.short)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/departments">{t(UI.more)}</Link>

      <h2>{T("Специалисты", "Our Staff")}</h2>
      <p>
        {T(
          "В больнице работают 391 сотрудник, в том числе 42 врача (из них 3 кандидата медицинских наук и 19 врачей высшей категории) и 168 специалистов среднего медицинского персонала.",
          "The hospital employs 391 staff, including 42 physicians (3 holding Candidate of Medical Sciences degrees and 19 with the highest qualification grade) and 168 nursing staff.",
        )}{" "}
        <Link to="/specialists">{t(UI.more)}</Link>
      </p>

      <h2>{T("Из истории больницы", "History in Brief")}</h2>
      <p>
        {T(
          "Больница основана в 1952 году на базе бывшего санатория «Северная Заря». В 1960–1980-е годы были построены корпуса Б и В, открыты новые отделения. В 1999 году больнице присвоен статус клинической.",
          "The hospital was founded in 1952 on the site of the former \"Severnaya Zarya\" sanatorium. Buildings B and C were constructed in the 1960s–1980s and new departments opened. In 1999 the hospital was granted clinical status.",
        )}{" "}
        <Link to="/history">{t(UI.more)}</Link>
      </p>

      <h2>{T("Пациентам и родственникам", "Patients and Relatives")}</h2>
      <ul>
        <li><Link to="/patients">{T("Порядок госпитализации", "Admission procedure")}</Link></li>
        <li><Link to="/patients">{T("Правила посещения", "Visiting rules")}</Link></li>
        <li><Link to="/patients">{T("Перечень разрешённых передач", "Permitted items")}</Link></li>
      </ul>

      <h2>{T("Контактная информация", "Contact Information")}</h2>
      <p>
        {T("Телефоны приёмной главного врача и справочной не обслуживаются.", "The telephone numbers of the chief physician's office and the information desk are not in service.")}{" "}
        <Link to="/contacts">{t(UI.more)}</Link>
      </p>
    </Layout>
  );
}
