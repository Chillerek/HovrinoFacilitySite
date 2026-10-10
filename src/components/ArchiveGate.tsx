import { useState } from "react";
import { useLang } from "@/lib/i18n";

export function ArchiveGate({ onTry }: { onTry: (pw: string) => boolean }) {
  const { t } = useLang();
  const T = (ru: string, en: string) => t({ ru, en });
  const [pw, setPw] = useState("");
  const [err, setErr] = useState(false);
  return (
    <div className="box">
      <div className="box-h alt">{T("Архив исторических документов — доступ ограничен", "Historical Records Archive — restricted access")}</div>
      <div className="box-b">
        <div className="notice">
          {T("Документы архива содержат сведения ограниченного распространения и предоставляются сотрудникам учреждения и уполномоченным лицам. Порядок выдачи кода доступа установлен Приказом №14 (п. 3).", "Archive documents contain restricted information and are available to staff and authorised persons. The access code procedure is set out in Order No. 14 (clause 3).")}
        </div>
        <form onSubmit={(e) => { e.preventDefault(); setErr(!onTry(pw)); }}>
          {T("Код доступа", "Access code")}: <input className="field" type="password" value={pw} onChange={(e) => setPw(e.target.value)} />{" "}
          <button className="btn" type="submit">{T("Войти", "Enter")}</button>
        </form>
        {err && <p className="err" style={{ marginTop: 6 }}>{T("Неверный код доступа. Попытка зарегистрирована.", "Invalid access code. Attempt logged.")}</p>}
      </div>
    </div>
  );
}
