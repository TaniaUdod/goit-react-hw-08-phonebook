import { useDispatch, useSelector } from 'react-redux';
import { Input, Label } from './Filter.styled';
import { selectFilterContacts } from '../../redux/selectors';
import { filterContact } from '../../redux/filter/filterSlice';

export const Filter = () => {
  const filter = useSelector(selectFilterContacts);
  const dispatch = useDispatch();

  const onFilterChange = event => {
    dispatch(filterContact(event.target.value));
  };

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterChange}
        placeholder="Search by name"
      />
    </Label>
  );
};
