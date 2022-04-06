import "./Header.css";
// import { useTranslation } from "react-i18next";
import language from "./icons/language.jpg"
import i18n from "../../i18n";
import { useState } from "react";
import { useTranslation } from "react-i18next";
const Header = () => {
  const [lang, setLang] = useState<string>("de");
  const {t} = useTranslation();
  function changeLang(ln){
    setLang(ln);
    i18n.changeLanguage(ln);
  }
  return (
    <div className="header__container">
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
      {/* <button className="header" onClick={()=>window.open("https://forms.gle/D3AbbSA4GGQ6TMzu9")}>
        {t("Beta Testing Survey")} - inclus
      </button> */}
      <button className="header" onClick={()=>window.open("https://defiant-frog-ca1.notion.site/Anleitung-to-save-webapp-to-Homescreen-23a173a74ab446ba92b80b4f7a0dcac7")}>{t("Introduction")}</button>
    </div>
  );
};

export default Header;
