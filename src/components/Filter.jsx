export const Filter = ({ filter, onFilterChange }) => (
    <input
    className= {style.filter}
      type="text"
      name="filter"
      value={filter}
      onChange={onFilterChange}
      placeholder="Search contacts"
    />
  );
  