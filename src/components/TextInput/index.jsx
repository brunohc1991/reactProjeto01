import P from 'prop-types';
import './styles.css';

export const TextInput = (props) => {
  const { searchValue, handleChange } = props;
  return <input className="text-input" onChange={handleChange} value={searchValue} type="search" />;
};

TextInput.propTypes = {
  searchValue: P.string.isRequired,
  handleChange: P.func.isRequired,
};
