import s from "./SearchBox.module.css";

const SearchBox = () => {
  return (
    <div className={s.searchWrap}>
      <label className={s.label}>
        <span className={s.span}>Find contacts by name</span>
        <input className={s.input} type="text" name="search" />
      </label>
    </div>
  );
};

export default SearchBox;
