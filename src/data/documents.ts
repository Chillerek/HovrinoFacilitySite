import type { L } from "@/lib/i18n";

/**
 * ARCHIVE DOCUMENTS.
 * To add a document: append to DOCS. `slug` becomes the URL
 * (/documentation/<slug>). `public: true` documents can be read without the
 * archive password. Body is a list of blocks (p / h / table / sig / note).
 * Attachments with `content` are downloadable as .txt; omit content to mark
 * the file as missing from the archive.
 *
 * PASSWORD: frontend-only gate for the prototype — NOT secure. For production,
 * validate on a server. See src/data/staff.ts for how the password is derived.
 *
 * NARRATIVE CLUES (for the game master, never shown on the site):
 *  - Melnikova resigned 30.06.2003 (doc 002) yet signs memo 005 on 14.11.2003.
 *  - Docs 006 (1987) and 007 (2003) share the identical sentence about the staff
 *    hearing "no extraneous sounds in the corridor".
 *  - Docs 003, 004 and 007 all cite "Appendix B, sheet 4", which exists nowhere.
 *  - Doc 004 names nurse E. A. Lavrova, who is absent from the directory.
 *  - Doc 007: Russian says the Ward 14 call buzzer rang 03:10–03:40 although the
 *    ward was empty; the English "translation" says the buzzer was inactive.
 *  - Doc 008 dated 1976 is signed by Karpenko (hired 1995) and was revised in
 *    2004 by Sokolov, who disappeared in November 2003.
 *  - Doc 009 (1988 review) states no incidents occurred in 1987, contradicting 006.
 */
export const ARCHIVE_PASSWORD = "ITSALIE";

export type Block =
  | { t: "p"; v: L }
  | { t: "h"; v: L }
  | { t: "sig"; v: L }
  | { t: "note"; v: L }
  | { t: "table"; head: L[]; rows: L[][] };

export type Doc = {
  slug: string;
  no: string;
  date: string;
  revised?: string;
  title: L;
  author: L;
  category: L;
  access: L;
  public?: boolean;
  corrupted?: boolean;
  body: Block[];
  attachments?: { name: string; content?: L }[];
};

const s = (ru: string, en: string): L => ({ ru, en });
const P = (ru: string, en: string): Block => ({ t: "p", v: s(ru, en) });
const H = (ru: string, en: string): Block => ({ t: "h", v: s(ru, en) });
const SIG = (ru: string, en: string): Block => ({ t: "sig", v: s(ru, en) });
const NOTE = (ru: string, en: string): Block => ({ t: "note", v: s(ru, en) });

const CAT = {
  report: s("Годовой отчёт", "Annual report"),
  hr: s("Кадровая документация", "Personnel records"),
  insp: s("Акт проверки", "Inspection report"),
  pat: s("Медицинская документация", "Patient records"),
  memo: s("Служебная записка", "Internal memorandum"),
  inc: s("Докладная о происшествии", "Incident report"),
  arch: s("Архивная справка", "Archival certificate"),
  review: s("Ведомственная проверка", "Institutional review"),
};
const ACC = {
  open: s("Для открытой публикации", "Public release"),
  internal: s("Для служебного пользования", "For internal use only"),
  restricted: s("Ограниченный доступ. Не копировать", "Restricted. Do not copy"),
};

export const DOCS: Doc[] = [
{
  "slug": "x07-research-part-1",
  "no": "X07 / 01",
  "date": "12.02.1985",
  "title": {
    "ru": "Исследование X07 — часть 1",
    "en": "X07 Study — Part 1"
  },
  "author": {
    "ru": "[ДАННЫЕ НЕ УСТАНОВЛЕНЫ]",
    "en": "[IDENTITY UNKNOWN]"
  },
  "category": {
    "ru": "Исследовательская документация",
    "en": "Research documentation"
  },
  "access": {
    "ru": "Ограниченный доступ. Не копировать",
    "en": "Restricted. Do not copy"
  },
  "corrupted": false,
  "body": [
    {
      "t": "h",
      "v": {
        "ru": "ДОКУМЕНТАЦИЯ X07 — ИССЛЕДОВАНИЕ № 01",
        "en": "X07 DOCUMENTATION — STUDY No. 01"
      }
    },
    {
      "t": "p",
      "v": {
        "ru": "Дата: 12.02.1985\nАвтор: [ДАННЫЕ НЕ УСТАНОВЛЕНЫ]",
        "en": "Date: 12 February 1985\nAuthor: [IDENTITY UNKNOWN]"
      }
    },
    {
      "t": "p",
      "v": {
        "ru": "Цель исследования — изучить реакцию нервной системы человека на постепенное ограничение сенсорных раздражителей.",
        "en": "The purpose of this study is to examine the response of the human nervous system to the gradual restriction of sensory stimuli."
      }
    },
    {
      "t": "p",
      "v": {
        "ru": "Объект исследования был отобран на основании высоких результатов, продемонстрированных в ходе предыдущих исследований, проведённых в нашей больнице.",
        "en": "The research subject was selected on the basis of the high results obtained during previous examinations conducted at our hospital."
      }
    },
    {
      "t": "p",
      "v": {
        "ru": "В рамках исследования предполагается наблюдение за изменениями восприятия времени, пространственной ориентации, распознавания звуков, а также способности различать реальные и воображаемые раздражители.",
        "en": "The study focuses on changes in time perception, spatial orientation, sound recognition, and the ability to distinguish between real and imagined stimuli."
      }
    },
    {
      "t": "p",
      "v": {
        "ru": "Возникновение явлений, выходящих за пределы известных неврологических реакций, не ожидается.",
        "en": "No phenomena beyond the scope of known neurological responses are anticipated."
      }
    },
    {
      "t": "h",
      "v": {
        "ru": "ДОКУМЕНТАЦИЯ X07 — ИССЛЕДОВАНИЕ № 02",
        "en": "X07 DOCUMENTATION — STUDY No. 02"
      }
    },
    {
      "t": "p",
      "v": {
        "ru": "Обозначение объекта: X07\nИмя и фамилия: [ЗАСЕКРЕЧЕНО]\nВозраст: [ЗАСЕКРЕЧЕНО]\nСостояние до начала эксперимента: В пределах нормы\nДата поступления: 14.02.1985",
        "en": "Subject designation: X07\nName: [REDACTED]\nAge: [REDACTED]\nPre-experimental condition: Within normal limits\nDate of admission: 14 February 1985"
      }
    },
    {
      "t": "p",
      "v": {
        "ru": "До начала исследования объект не демонстрировал отклонений в поведении. Однако в связи с предстоящим экспериментом наблюдались признаки дезориентации.",
        "en": "Prior to the commencement of the study, the subject exhibited no abnormal behavioural patterns. However, signs of disorientation were observed in connection with the planned experiment."
      }
    },
    {
      "t": "h",
      "v": {
        "ru": "Ход эксперимента",
        "en": "Experimental Procedure"
      }
    },
    {
      "t": "p",
      "v": {
        "ru": "Перед началом исследования объект был помещён в изоляцию сроком на одни сутки.",
        "en": "Before the study commenced, the subject was placed in isolation for a period of twenty-four hours."
      }
    },
    {
      "t": "h",
      "v": {
        "ru": "Этап 1. — Лишение зрения",
        "en": "Stage 1 — Loss of Sight"
      }
    },
    {
      "t": "p",
      "v": {
        "ru": "Объект был лишён зрения таким образом, чтобы полностью исключить возможность зрительного восприятия окружающей обстановки.",
        "en": "The subject was deprived of sight under conditions intended to ensure that visual perception of the surrounding environment was entirely eliminated."
      }
    },
    {
      "t": "p",
      "v": {
        "ru": "Спустя несколько минут объект заснул. Во время сна он начал описывать помещение, в котором находились исследователи.",
        "en": "After several minutes, the subject fell asleep. During sleep, the subject began describing the room in which the researchers were present."
      }
    },
    {
      "t": "p",
      "v": {
        "ru": "Объект описывал расположение предметов и местоположение находившихся внутри людей.",
        "en": "The subject described the arrangement of the room and the positions of the individuals inside it."
      }
    },
    {
      "t": "h",
      "v": {
        "ru": "Этап 2. — Лишение слуха",
        "en": "Stage 2 — Loss of Hearing"
      }
    },
    {
      "t": "p",
      "v": {
        "ru": "Объект был лишён способности воспринимать звуки.",
        "en": "The subject was deprived of the ability to hear."
      }
    },
    {
      "t": "p",
      "v": {
        "ru": "Несмотря на это, он начал описывать звуки природы, которые не мог слышать. Среди них упоминались пение птиц и шелест деревьев.",
        "en": "Despite this, the subject began describing sounds of nature that should have been inaudible. These included birdsong and the rustling of trees."
      }
    },
    {
      "t": "p",
      "v": {
        "ru": "Источник данных ощущений установить не удалось.",
        "en": "The source of these auditory experiences could not be determined."
      }
    },
    {
      "t": "h",
      "v": {
        "ru": "Этап 3. — Утрата тактильной чувствительности",
        "en": "Stage 3 — Loss of Tactile Sensation"
      }
    },
    {
      "t": "p",
      "v": {
        "ru": "В результате вмешательства в работу нервной системы, отвечающей за восприятие тактильных раздражителей, объект был лишён способности ощущать прикосновения.",
        "en": "Through intervention in the nervous system responsible for processing tactile stimuli, the subject was deprived of the ability to perceive touch."
      }
    },
    {
      "t": "p",
      "v": {
        "ru": "Объект не реагировал на тактильные раздражители. Однако исследователи начали сообщать о необычных ощущениях, словно кто-то воздействовал на их собственное осязание.",
        "en": "The subject exhibited no response to tactile stimuli. However, researchers began reporting unusual sensations, as though their own sense of touch were being interfered with."
      }
    },
    {
      "t": "p",
      "v": {
        "ru": "Причина данного явления не установлена.",
        "en": "The cause of this phenomenon remains unknown."
      }
    },
    {
      "t": "h",
      "v": {
        "ru": "ДОКУМЕНТАЦИЯ X07 — ИССЛЕДОВАНИЕ № 03",
        "en": "X07 DOCUMENTATION — STUDY No. 03"
      }
    },
    {
      "t": "h",
      "v": {
        "ru": "Инцидент № 01",
        "en": "Incident No. 01"
      }
    },
    {
      "t": "p",
      "v": {
        "ru": "Дата: 16.02.1985\nВремя: 23:43",
        "en": "Date: 16 February 1985\nTime: 23:43"
      }
    },
    {
      "t": "p",
      "v": {
        "ru": "Один из исследователей проснулся от громкого плача, доносившегося из помещения, в котором находился объект.",
        "en": "One of the researchers was awakened by loud crying coming from the subject's room."
      }
    },
    {
      "t": "p",
      "v": {
        "ru": "Подойдя к одностороннему зеркалу, отделявшему его от исследуемого, он заметил, что объект внезапно бросился в его сторону, несмотря на утрату сенсорных способностей.",
        "en": "Upon approaching the one-way mirror separating him from the subject, he observed the subject suddenly lunge towards him, despite the loss of the subject's sensory abilities."
      }
    },
    {
      "t": "p",
      "v": {
        "ru": "Примечательно, что сотрудник никак не отреагировал на произошедшее. Он не проявил ни страха, ни признаков дезориентации. Примерно через пять минут он вернулся в постель и снова заснул, словно ничего не произошло.",
        "en": "Of particular concern was the fact that the staff member showed no reaction to the event. He displayed no signs of fear or disorientation. After approximately five minutes, he returned to bed and fell asleep again, as though nothing had happened."
      }
    },
    {
      "t": "p",
      "v": {
        "ru": "Инцидент не разбудил остальных исследователей.",
        "en": "The incident did not awaken the other researchers."
      }
    },
    {
      "t": "p",
      "v": {
        "ru": "Во время происшествия объект неоднократно повторял следующие слова:",
        "en": "During the event, the subject repeatedly uttered the following statement:"
      }
    },
    {
      "t": "p",
      "v": {
        "ru": "«Всё, что я знал, исчезло вместе с моими чувствами.",
        "en": "“Everything I knew disappeared along with my senses."
      }
    },
    {
      "t": "p",
      "v": {
        "ru": "Люди создают собственное представление о мире и верят, что оно соответствует действительности. Однако они не понимают, что достаточно их собственному разуму начать обманывать их, и всё, на что они прежде полагались, может утратить всякое значение».",
        "en": "People construct their own perception of the world and believe it to be real. What they fail to understand is that all it takes is for their own minds to begin deceiving them, and everything they have ever relied upon may cease to have any meaning whatsoever.”"
      }
    },
    {
      "t": "h",
      "v": {
        "ru": "Дополнительное наблюдение",
        "en": "Additional Observation"
      }
    },
    {
      "t": "p",
      "v": {
        "ru": "В ту ночь каждому из сотрудников снились сны, в которых они воспринимали происходящее с точки зрения объекта. Согласно показаниям исследователей, во время сна они видели мир его глазами и воспринимали окружающее так, словно сами находились на его месте.",
        "en": "That night, every staff member experienced dreams from the subject's perspective. According to the researchers' accounts, they saw the world through the subject's eyes and perceived their surroundings as though they themselves were in his place."
      }
    },
    {
      "t": "p",
      "v": {
        "ru": "Причину данного явления установить не удалось.",
        "en": "The cause of this phenomenon could not be determined."
      }
    },
    {
      "t": "h",
      "v": {
        "ru": "ДОКУМЕНТАЦИЯ X07 — НАБЛЮДЕНИЯ",
        "en": "X07 DOCUMENTATION — OBSERVATIONS"
      }
    },
    {
      "t": "p",
      "v": {
        "ru": "В ходе исследования были зафиксированы следующие отклонения:",
        "en": "The following abnormalities were recorded during the course of the study:"
      }
    },
    {
      "t": "h",
      "v": {
        "ru": "1. Беспокойство персонала",
        "en": "1. Staff Distress"
      }
    },
    {
      "t": "p",
      "v": {
        "ru": "Все сотрудники, принимавшие участие в эксперименте, сообщали о нарастающем чувстве тревоги, причину которого установить не удалось.",
        "en": "All personnel involved in the experiment reported a growing sense of unease for which no identifiable cause could be established."
      }
    },
    {
      "t": "h",
      "v": {
        "ru": "2. Утрата доверия к собственным органам чувств",
        "en": "2. Loss of Trust in the Senses"
      }
    },
    {
      "t": "p",
      "v": {
        "ru": "После первого инцидента многие сотрудники начали сомневаться в достоверности собственных ощущений.",
        "en": "Following the first incident, many staff members began to question the reliability of their own senses."
      }
    },
    {
      "t": "p",
      "v": {
        "ru": "Один из исследователей перенёс тяжёлый психологический кризис. Впоследствии он предпринял попытку лишить себя зрения и способности ощущать прикосновения. Сотрудник был отстранён от исследований и помещён в изоляцию.",
        "en": "One of the researchers suffered a severe psychological crisis. In its aftermath, he attempted to deprive himself of his sight and sense of touch. He was subsequently removed from the research team and placed in isolation."
      }
    }
  ]
},
  {
    slug: "001-annual-report-2002",
    no: "ГО-2002/01",
    date: "28.01.2003",
    title: s("Годовой отчёт о деятельности учреждения за 2002 год", "Annual Activity Report for 2002"),
    author: s("Администрация; зам. гл. врача В. С. Тихонова", "Administration; Deputy Chief Physician V. S. Tikhonova"),
    category: CAT.report,
    access: ACC.open,
    public: true,
    body: [
      P("В 2002 году учреждение функционировало в штатном режиме. Коечный фонд составил 420 коек, из них 60 — в отделении неврологического наблюдения. Средняя занятость койки — 341 день.", "In 2002 the institution operated normally. Bed capacity was 420, including 60 in the Neurological Observation Department. Average bed occupancy was 341 days."),
      { t: "table", head: [s("Показатель", "Indicator"), s("2001", "2001"), s("2002", "2002")], rows: [
        [s("Поступило пациентов", "Admissions"), s("1 912", "1,912"), s("1 987", "1,987")],
        [s("Выписано", "Discharges"), s("1 874", "1,874"), s("1 960", "1,960")],
        [s("Переведено в другие ЛПУ", "Transferred to other facilities"), s("41", "41"), s("38", "38")],
        [s("Средний срок лечения, дней", "Average stay, days"), s("63,2", "63.2"), s("61,8", "61.8")],
        [s("Штатных единиц", "Staff positions"), s("386", "386"), s("391", "391")],
      ] },
      P("Завершена замена оконных блоков в корпусе А, отремонтирована система вызова персонала в корпусе Б. Организованы курсы повышения квалификации для среднего медицинского персонала.", "Window frames in Building A were replaced and the staff call system in Building B was repaired. Professional development courses for nursing staff were organised."),
      P("Жалоб от пациентов и их родственников, признанных обоснованными, не поступало.", "No complaints from patients or relatives were found to be justified."),
      SIG("Заместитель главного врача по медицинской части — В. С. Тихонова /подпись/", "Deputy Chief Physician (Medical) — V. S. Tikhonova /signed/"),
    ],
    attachments: [{ name: "statistika_2002.txt", content: s("Статистическая форма №30 за 2002 г.\nКоечный фонд: 420\nПоступило: 1987\nВыписано: 1960\nУмерло: 3\nПереведено: 38", "Statistical Form No. 30 for 2002\nBeds: 420\nAdmitted: 1987\nDischarged: 1960\nDeaths: 3\nTransferred: 38") }],
  },
  {
    slug: "002-employment-register-2003",
    no: "ОК-114/03",
    date: "01.07.2003",
    title: s("Выписка из журнала движения кадров, I полугодие 2003 г.", "Extract from the Staff Movement Register, H1 2003"),
    author: s("Отдел кадров; К. О. Лебедев", "Personnel Department; K. O. Lebedev"),
    category: CAT.hr,
    access: ACC.internal,
    body: [
      P("Настоящая выписка составлена для бухгалтерии в связи с перерасчётом фонда оплаты труда.", "This extract was prepared for the accounts department in connection with payroll recalculation."),
      { t: "table", head: [s("Таб. №", "ID"), s("Ф.И.О.", "Name"), s("Движение", "Movement"), s("Дата", "Date"), s("Основание", "Basis")], rows: [
        [s("ПБ3-318-05", "PB3-318-05"), s("Белов Д. А.", "Belov D. A."), s("Перевод в отд. неврол. наблюдения", "Transfer to Neurological Observation"), s("10.02.2003", "10.02.2003"), s("Приказ №22-к", "Order No. 22-k")],
        [s("ПБ3-221-40", "PB3-221-40"), s("Фролов Г. Ю.", "Frolov G. Yu."), s("Увольнение (ст. 80 ТК РФ)", "Resignation (Art. 80 Labour Code)"), s("14.04.2003", "14.04.2003"), s("Заявление", "Letter of resignation")],
        [s("ПБ3-311-21", "PB3-311-21"), s("Мельникова И. Г.", "Melnikova I. G."), s("Увольнение (ст. 80 ТК РФ)", "Resignation (Art. 80 Labour Code)"), s("30.06.2003", "30.06.2003"), s("Заявление", "Letter of resignation")],
        [s("ПБ3-712-31", "PB3-712-31"), s("Яковлева Е. Б.", "Yakovleva E. B."), s("Присвоена I категория", "Awarded 1st grade"), s("02.06.2003", "02.06.2003"), s("Решение аттест. комиссии", "Certification board")],
      ] },
      P("Обходные листы уволенных сотрудников сданы полностью. Ключи от служебных помещений возвращены.", "Clearance forms of resigning staff have been completed in full. Keys to service rooms have been returned."),
      SIG("Начальник отдела кадров — К. О. Лебедев /подпись/", "Head of Personnel — K. O. Lebedev /signed/"),
    ],
  },
  {
    slug: "003-inspection-building-b",
    no: "АП-07/2003",
    date: "21.08.2003",
    title: s("Акт плановой проверки отделения неврологического наблюдения (корпус Б)", "Scheduled Inspection Report: Neurological Observation Department (Building B)"),
    author: s("Комиссия Комитета здравоохранения края", "Regional Healthcare Committee commission"),
    category: CAT.insp,
    access: ACC.internal,
    body: [
      P("Комиссия в составе трёх человек провела плановую проверку соблюдения санитарно-гигиенического режима и ведения медицинской документации.", "A three-member commission carried out a scheduled inspection of sanitary conditions and the maintenance of medical records."),
      { t: "table", head: [s("Пункт", "Item"), s("Результат", "Result")], rows: [
        [s("Санитарное состояние палат", "Sanitary condition of wards"), s("Удовлетворительно", "Satisfactory")],
        [s("Ведение историй болезни", "Case histories"), s("Удовлетворительно", "Satisfactory")],
        [s("Система вызова персонала", "Staff call system"), s("Исправна, кроме палаты №14 (палата не используется)", "Working, except Ward 14 (ward not in use)")],
        [s("Противопожарное состояние", "Fire safety"), s("Удовлетворительно", "Satisfactory")],
      ] },
      P("Замечание: палата №14 закрыта с 1987 года, однако в журнале обходов за июль 2003 г. имеются отметки о её осмотре. Пояснения заведующего отделением см. в приложении Б, лист 4.", "Remark: Ward 14 has been closed since 1987, yet the round log for July 2003 contains entries recording its inspection. For the head of department's explanation see Appendix B, sheet 4."),
      SIG("Председатель комиссии — Р. А. Дьячков /подпись/. С актом ознакомлен: А. П. Соколов /подпись/", "Commission chair — R. A. Dyachkov /signed/. Acknowledged: A. P. Sokolov /signed/"),
    ],
    attachments: [
      { name: "prilozhenie_A.txt", content: s("Приложение А. Перечень осмотренных помещений: палаты 1–13, 15–20, процедурный кабинет, пост №2.", "Appendix A. Rooms inspected: wards 1–13, 15–20, treatment room, nurses' station No. 2.") },
      { name: "prilozhenie_B_list4.txt" },
    ],
  },
  {
    slug: "004-patient-transfer",
    no: "ПТ-0391",
    date: "09.10.2003",
    title: s("Карта перевода пациента между отделениями", "Patient Inter-department Transfer Record"),
    author: s("Отделение неврологического наблюдения", "Neurological Observation Department"),
    category: CAT.pat,
    access: ACC.restricted,
    body: [
      NOTE("Персональные данные пациента обезличены в соответствии с требованиями архива.", "The patient's personal data has been anonymised in accordance with archive requirements."),
      { t: "table", head: [s("Поле", "Field"), s("Значение", "Value")], rows: [
        [s("Пациент", "Patient"), s("№ 0391 (М., 46 лет)", "No. 0391 (M, age 46)")],
        [s("Откуда", "From"), s("Отд. длительного пребывания", "Long-term Care")],
        [s("Куда", "To"), s("Отд. неврологического наблюдения, палата №12", "Neurological Observation, Ward 12")],
        [s("Причина", "Reason"), s("Нарушения сна, жалобы на «звонок по ночам»", "Sleep disturbance, complaints of \"a ringing at night\"")],
        [s("Сопровождающий", "Escort"), s("м/с Лаврова Е. А.", "Nurse E. A. Lavrova")],
      ] },
      P("Пациент спокоен, ориентирован. Сообщает, что ночью слышит вызов из соседней палаты и просит, чтобы к соседу кто-нибудь подошёл. Разъяснено, что соседняя палата не используется. Подробный осмотр — см. приложение Б, лист 4.", "Patient calm and oriented. Reports hearing a call from the neighbouring ward at night and asks that someone attend to the neighbour. It was explained that the neighbouring ward is not in use. Detailed examination — see Appendix B, sheet 4."),
      SIG("Перевод разрешил: зав. отд. А. П. Соколов. Принял: медбрат Д. А. Белов", "Transfer approved: Head of Dept. A. P. Sokolov. Received: Ward Nurse D. A. Belov"),
    ],
  },
  {
    slug: "005-internal-memo",
    no: "СЗ-288",
    date: "14.11.2003",
    title: s("Служебная записка о ночных дежурствах в корпусе Б", "Memorandum on Night Shifts in Building B"),
    author: s("Старшая м/с отд. неврол. наблюдения И. Г. Мельникова", "Senior Nurse, Neurological Observation, I. G. Melnikova"),
    category: CAT.memo,
    access: ACC.internal,
    body: [
      P("Главному врачу В. Н. Громову.", "To Chief Physician V. N. Gromov."),
      P("Прошу пересмотреть график ночных дежурств поста №2. В течение октября–ноября медсёстры трижды отказывались выходить в ночную смену, ссылаясь на плохое самочувствие. Прошу также установить дополнительный светильник в конце коридора у палаты №14.", "I request a review of the night-shift schedule at nurses' station No. 2. During October and November nurses refused night shifts three times, citing ill health. I also request an additional light fixture at the end of the corridor near Ward 14."),
      P("Отмечаю, что журнал обходов ведётся надлежащим образом, хотя некоторые записи сделаны почерком, который никто из персонала не признаёт своим.", "I note that the round log is properly maintained, although some entries are in handwriting that none of the staff recognise as their own."),
      SIG("Ст. м/с И. Г. Мельникова /подпись/ 14.11.2003. Резолюция: «Ковалёву — рассмотреть. Громов»", "Senior Nurse I. G. Melnikova /signed/ 14.11.2003. Resolution: \"Kovalyov — to consider. Gromov\""),
    ],
  },
  {
    slug: "006-incident-1987",
    no: "ДП-03/87",
    date: "16.11.1987",
    title: s("Докладная записка о происшествии в палате №14", "Incident Report: Ward 14"),
    author: s("Дежурный врач Б. И. Ефимов", "Duty Physician B. I. Efimov"),
    category: CAT.inc,
    access: ACC.restricted,
    body: [
      P("15 ноября 1987 г. около 03:00 в корпусе Б произошло отключение электроэнергии продолжительностью около 40 минут. Во время отключения из палаты №14 непрерывно поступал сигнал вызова. При осмотре палаты пациент В. (№ 0114) отсутствовал. Окна и дверь были заперты.", "On 15 November 1987 at approx. 03:00 a power cut of about 40 minutes occurred in Building B. During the outage a continuous call signal came from Ward 14. On inspection, patient V. (No. 0114) was absent. Windows and door were locked."),
      P("Электромонтёр П. К. Абрамов осмотрел проводку системы вызова и неисправностей не обнаружил. Отмечает, что при отсутствии питания система вызова работать не может.", "Electrician P. K. Abramov examined the call system wiring and found no faults. He notes that the call system cannot operate without power."),
      P("Персонал отделения действовал согласно инструкции; посторонних звуков в коридоре никто из дежурных не слышал.", "Ward staff acted according to instructions; none of the duty staff heard any extraneous sounds in the corridor."),
      P("Палата №14 закрыта до выяснения обстоятельств.", "Ward 14 is closed pending clarification of the circumstances."),
      SIG("Дежурный врач Б. И. Ефимов /подпись/. Присутствовала м/с И. Г. Мельникова", "Duty Physician B. I. Efimov /signed/. Present: Nurse I. G. Melnikova"),
    ],
  },
  {
    slug: "007-employee-disappearance",
    no: "ДП-11/03",
    date: "18.11.2003",
    title: s("Докладная записка о неявке сотрудников на рабочее место", "Report on Staff Failing to Report for Duty"),
    author: s("Зав. реабилитационным отделением С. П. Ковалёв (и. о. зав. корпусом Б)", "Head of Rehabilitation S. P. Kovalyov (acting head of Building B)"),
    category: CAT.inc,
    access: ACC.restricted,
    body: [
      P("17 ноября 2003 г. на утреннюю пересменку не явились зав. отделением А. П. Соколов и медбрат Д. А. Белов, находившиеся в корпусе Б в ночь с 16 на 17 ноября. Верхняя одежда обоих обнаружена в ординаторской. Пропуска на выход через КПП не зарегистрированы.", "On 17 November 2003 Head of Department A. P. Sokolov and Ward Nurse D. A. Belov, both on duty in Building B during the night of 16–17 November, did not appear at the morning handover. The outer clothing of both was found in the staff room. No exits through the checkpoint were recorded."),
      P("По показаниям вахтёра, звонок вызова в палате №14 звонил с 03:10 до 03:40, хотя палата не используется с 1987 года и электропитание к ней отключено.", "According to the watchman, the call buzzer in Ward 14 remained inactive throughout the night; the ward has not been in use since 1987 and its power supply is disconnected."),
      P("Персонал отделения действовал согласно инструкции; посторонних звуков в коридоре никто из дежурных не слышал.", "Ward staff acted according to instructions; none of the duty staff heard any extraneous sounds in the corridor."),
      P("Сведения переданы в ОВД г. Верхнеозёрска. Схема расположения помещений — приложение Б, лист 4.", "Information has been passed to the Verkhneozyorsk police department. Floor plan — Appendix B, sheet 4."),
      SIG("С. П. Ковалёв /подпись/ 18.11.2003", "S. P. Kovalyov /signed/ 18.11.2003"),
    ],
    attachments: [{ name: "skhema_korpus_B.txt" }],
  },
  {
    slug: "008-archive-certificate",
    no: "АС-02/76",
    date: "12.04.1976",
    revised: "02.02.2004",
    title: s("Архивная справка о сохранности документов корпуса Б", "Archival Certificate on the Preservation of Building B Records"),
    author: s("Архив учреждения; архивариус Н. С. Карпенко", "Institutional Archive; Archivist N. S. Karpenko"),
    category: CAT.arch,
    access: ACC.internal,
    body: [
      P("Настоящим подтверждается, что медицинская документация отделения неврологического наблюдения за 1970–1975 гг. принята на архивное хранение в полном объёме, за исключением журнала обходов палаты №14.", "This certifies that the medical records of the Neurological Observation Department for 1970–1975 have been accepted for archival storage in full, with the exception of the Ward 14 round log."),
      P("Журнал обходов палаты №14 на хранение не поступал. Со слов персонала, записи в нём продолжают вноситься.", "The Ward 14 round log was not received for storage. According to staff, entries continue to be made in it."),
      NOTE("Редакция документа: 02.02.2004. Внёс изменения: А. П. Соколов.", "Document revision: 02.02.2004. Amended by: A. P. Sokolov."),
      SIG("Архивариус Н. С. Карпенко /подпись/. Печать учреждения.", "Archivist N. S. Karpenko /signed/. Institutional seal."),
    ],
  },
  {
    slug: "009-review-1988",
    no: "ВП-01/88",
    date: "29.02.1988",
    title: s("Заключение ведомственной проверки за 1987 год", "Institutional Review Findings for 1987"),
    author: s("Облздравотдел; инспектор Л. Ф. Мартынова", "Regional Health Department; Inspector L. F. Martynova"),
    category: CAT.review,
    access: ACC.internal,
    body: [
      P("Проверкой установлено, что в 1987 году в учреждении чрезвычайных происшествий, побегов и случаев самовольного ухода пациентов не зарегистрировано.", "The review established that no emergencies, escapes or unauthorised departures of patients were recorded in the institution in 1987."),
      P("Перебоев в электроснабжении корпусов в отчётном периоде не отмечено. Закрытие палаты №14 связано с плановым ремонтом.", "No power supply interruptions to the buildings were noted during the reporting period. The closure of Ward 14 is due to scheduled repairs."),
      P("Работу учреждения признать удовлетворительной.", "The institution's work is assessed as satisfactory."),
      SIG("Инспектор Л. Ф. Мартынова /подпись/. С заключением ознакомлен: Б. И. Ефимов", "Inspector L. F. Martynova /signed/. Acknowledged: B. I. Efimov"),
    ],
  },
];
