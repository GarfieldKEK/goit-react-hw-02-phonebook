
import PropTypes from 'prop-types';
;

export const Filter = ({ filter, onFilterChange }) => (
  <input
   
    type="text"
    name="filter"
    value={filter}
    onChange={onFilterChange}
    placeholder="Search contacts"
  />
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
