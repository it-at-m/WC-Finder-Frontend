import { BiArrowBack } from "react-icons/bi";
import "./Search.css";
import { Place } from "../../state/state-types/place";
import { useActions } from "../../hooks/useActions";
import { useSelector } from "../../hooks/useTypedSelector";

const Search = ({ searchIsVisible }: any) => {
  const { nullSelectPlace, selectPlace } = useActions();

  const { data: places } = useSelector((state) => state.placesList);

  return (
    <div
      className={`search__container search__container--${
        searchIsVisible && "active"
      }`}
    >
      <div className="search__header">
        <span
          className="search__header__close"
          role="button"
          onClick={() => nullSelectPlace()}
        >
          <BiArrowBack />
        </span>
        <span className="search__header__title">Search</span>
      </div>
      <div className="search__list">
        {places.map((place: Place) => (
          <div
            key={place.title}
            className="search__list__item"
            style={{ backgroundImage: `url(${place.photo})` }}
            onClick={() => selectPlace(place.id)}
          >
            {place.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;