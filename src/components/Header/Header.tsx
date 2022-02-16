import "./Header.css";
import { useTranslation } from "react-i18next";
const Header = () => {
  const {t, i18n} = useTranslation();
  return (
    <div className="header__container">
      <button className="header" onClick={()=>window.open("https://docs.google.com/forms/d/13C7YlT0Sb8beejj-eDYzHWfHDgo7kcIxOqLZ9Qc_dJ4/edit")}>
        {t("Beta Testing Survey")}
      </button>
    </div>
  );
};

export default Header;
