import language from "../Header/icons/language.jpg"
import i18n from "../../i18n";
import { useState } from "react";

const Language = () =>{
  const [lang, setLang] = useState<string>("de");
  function changeLang(ln){
    setLang(ln);
    i18n.changeLanguage(ln);
  }
  return(
    <div className="Lang">
    <select
          className="rootLang"
          value={lang}
          onChange={(h)=> changeLang(h.target.value)}
          placeholder="Lang"
        >
        <option data-icon={language} className="menuitem" value={"en"} >
          EN
        </option>
        <option data-icon={language} className="menuitem" value={"de"}>
          DE
        </option>
    </select>
    </div>
  )
}

export default Language;