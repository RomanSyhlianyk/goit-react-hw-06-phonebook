import { changeFilterAction } from '../../redax/filter/slice.filter';
import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';

export const Filter = () => {
  const {filter} = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    const { value } = e.target;
    dispatch(changeFilterAction(value));
  };

  return (
    <div className={css.box}>
      <p>Find contact by name:</p>
      <label htmlFor="">
        <input
          className={css.input}
          type="search"
          name="filter"
          value={filter}
          onChange={handleFilterChange}
        />
      </label>
    </div>
  );
};
