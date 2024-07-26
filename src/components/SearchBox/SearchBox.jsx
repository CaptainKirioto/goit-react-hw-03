import s from "./SearchBox.module.css";

const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={s.searchWrap}>
      <label className={s.label}>
        <span className={s.text}>Find contacts by name</span>
        <input
          className={s.input}
          value={value}
          onChange={(e) => onFilter(e.target.value)}
          type="text"
          name="search"
        />
      </label>
    </div>
  );
};

export default SearchBox;
