import "./Header.css";
import { useTranslation } from "react-i18next";
const Header = () => {
  const {t} = useTranslation();
  return (
    <div className="header__container">
      <button className="header" onClick={()=>window.open("https://forms.gle/YNagaK7RyNroiqfn9")}>
        {t("Beta Testing Survey")}
      </button>
    </div>
  );
};

export default Header;
