import type { L } from "@/lib/i18n";

/** Institution identity and shared UI strings. */
export const SITE = {
  short: { ru: "ККПБ №3 «Северная Заря»", en: "KKPB No. 3 \"Severnaya Zarya\"" },
  full: {
    ru: "Государственное учреждение здравоохранения «Краевая клиническая психиатрическая больница №3 „Северная Заря“»",
    en: "State Healthcare Institution \"Regional Clinical Psychiatric Hospital No. 3 'Severnaya Zarya' (Northern Dawn)\"",
  },
  dept: { ru: "Комитет здравоохранения Верхнеозёрского края", en: "Healthcare Committee of the Verkhneozyorsk Region" },
  address: {
    ru: "662914, Верхнеозёрский край, г. Верхнеозёрск, ул. Больничный городок, д. 1",
    en: "1 Bolnichny Gorodok St., Verkhneozyorsk, Verkhneozyorsk Region, 662914",
  },
  updated: "14.03.2005",
};

export const UI: Record<string, L> = {
  home: { ru: "Главная", en: "Home" },
  about: { ru: "О больнице", en: "About Us" },
  departments: { ru: "Отделения", en: "Departments" },
  specialists: { ru: "Специалисты", en: "Specialists" },
  history: { ru: "История", en: "History" },
  patients: { ru: "Пациентам", en: "Patient Information" },
  documentation: { ru: "Документация", en: "Documentation" },
  contacts: { ru: "Контакты", en: "Contacts" },
  announcements: { ru: "Объявления", en: "Announcements" },
  hours: { ru: "Часы приёма", en: "Office Hours" },
  hoursText: {
    ru: "Регистратура: пн–пт 8:00–16:30\nПосещения: вт, чт, сб 15:00–18:00\nСправочная: круглосуточно",
    en: "Registry: Mon–Fri 8:00–16:30\nVisiting: Tue, Thu, Sat 15:00–18:00\nInformation desk: 24 hours",
  },
  visitors: { ru: "Посетителей с 01.09.1999", en: "Visitors since 01.09.1999" },
  updated: { ru: "Последнее обновление", en: "Last updated" },
  rights: { ru: "Все права защищены.", en: "All rights reserved." },
  best: { ru: "Сайт оптимизирован для разрешения 800×600 и Internet Explorer 5.0", en: "Best viewed at 800×600 in Internet Explorer 5.0" },
  search: { ru: "Поиск", en: "Search" },
  find: { ru: "Найти", en: "Find" },
  reset: { ru: "Сбросить", en: "Reset" },
  nothing: { ru: "По вашему запросу ничего не найдено.", en: "No records match your query." },
  found: { ru: "Найдено записей", en: "Records found" },
  more: { ru: "подробнее »", en: "more »" },
  back: { ru: "« Назад к архиву", en: "« Back to archive" },
  download: { ru: "скачать", en: "download" },
  fileMissing: { ru: "файл отсутствует в архиве", en: "file not present in archive" },
  youAreHere: { ru: "Вы находитесь", en: "You are here" },
};
