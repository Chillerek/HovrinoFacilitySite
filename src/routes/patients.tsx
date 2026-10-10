import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { useLang } from "@/lib/i18n";
import { meta } from "@/lib/meta";
import { UI } from "@/data/site";

export const Route = createFileRoute("/patients")({
  head: () => meta("Пациентам", "Порядок госпитализации, правила посещения и передач в ККПБ №3."),
  component: Patients,
});

function Patients() {
  const { t } = useLang();
  const T = (ru: string, en: string) => t({ ru, en });
  return (
    <Layout crumb={UI.patients}>
      <h1>{T("Информация для пациентов и родственников", "Information for Patients and Relatives")}</h1>
      <h2>{T("Порядок госпитализации", "Admission Procedure")}</h2>
      <p>{T("Плановая госпитализация осуществляется по направлению участкового психиатра при наличии паспорта, полиса ОМС и выписки из амбулаторной карты. Приёмное отделение работает круглосуточно.", "Planned admission requires a referral from a district psychiatrist, a passport, a medical insurance policy and an outpatient record extract. The admissions unit operates 24 hours.")}</p>
      <h2>{T("Правила посещения", "Visiting Rules")}</h2>
      <ul>
        <li>{T("Посещения: вторник, четверг, суббота с 15:00 до 18:00.", "Visiting: Tuesday, Thursday, Saturday 15:00–18:00.")}</li>
        <li>{T("Посещения согласовываются с лечащим врачом.", "Visits must be agreed with the attending physician.")}</li>
        <li>{T("В корпус Б посещения временно не осуществляются.", "Visits to Building B are temporarily suspended.")}</li>
      </ul>
      <h2>{T("Разрешённые передачи", "Permitted Items")}</h2>
      <table className="tbl">
        <thead><tr><th>{T("Разрешено", "Permitted")}</th><th>{T("Запрещено", "Prohibited")}</th></tr></thead>
        <tbody>
          <tr><td>{T("Фрукты (мытые), печенье, соки в картонной упаковке", "Washed fruit, biscuits, juice in cartons")}</td><td>{T("Стеклянная тара, острые предметы", "Glass containers, sharp objects")}</td></tr>
          <tr><td>{T("Средства личной гигиены", "Personal hygiene items")}</td><td>{T("Спички, зажигалки, лекарства", "Matches, lighters, medicines")}</td></tr>
          <tr><td>{T("Книги, журналы", "Books, magazines")}</td><td>{T("Электроприборы", "Electrical appliances")}</td></tr>
        </tbody>
      </table>
      <h2>{T("Права пациента", "Patient Rights")}</h2>
      <p>{T("Пациент имеет право на уважительное отношение, получение информации о своём состоянии, подачу жалоб главному врачу и в надзорные органы.", "Patients have the right to respectful treatment, information about their condition, and to submit complaints to the Chief Physician and supervisory bodies.")}</p>
    </Layout>
  );
}
