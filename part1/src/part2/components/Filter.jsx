/* eslint-disable react/prop-types */

const Filter = ({ searchValue, setSearchValue }) => {
  return (
    <div className="filter">
      filter shown with{" "}
      <input
        type="text"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
    </div>
  );
};

export default Filter;
