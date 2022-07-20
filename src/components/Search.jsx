import React, { useEffect, useState } from "react";

const Search = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleChannge = (e) => {
    setSearchText(e.target.value);
  };
  useEffect(() => onSearch(searchText), [searchText]);
  return (
    <div style={{ textAlign: "center" }}>
      <input
        type="text"
        onChange={handleChannge}
        placeholder="Search Country"
        value={searchText}
      />
    </div>
  );
};

export default Search;
