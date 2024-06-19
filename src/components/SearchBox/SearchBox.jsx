import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, filterSelector } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(filterSelector);
  const onChangeFilter = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <label className={s.SearchBox}>
      <span className={s.SearchTitle}>Find contacts by name</span>
      <input
        className={s.SearchInput}
        type="name"
        name="findUser"
        onChange={onChangeFilter}
        value={filter}
      />
    </label>
  );
};

export default SearchBox;