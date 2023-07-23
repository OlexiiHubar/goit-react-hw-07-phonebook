import { useDispatch, useSelector } from 'react-redux';

import { filterContacts } from 'redux/redux/filter/filterSlice';
import { selectFilter } from 'redux/redux/selectors';

import css from './SearchBox.module.css';

export default function SearchBox() {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();
  const onChange = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };

  return (
    <label className={css.filter}>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
}