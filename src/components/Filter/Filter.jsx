// import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';
import { filterContact } from 'redux/filter/filterSlice';
import { useDispatch } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <Label>
      Find Contacts
      <Input
        type="text"
        onChange={e => dispatch(filterContact(e.target.value))}
      />
    </Label>
  );
};

// Filter.propTypes = {
//   filterContact: PropTypes.func.isRequired,
// };

export default Filter;
