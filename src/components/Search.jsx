import React, { useEffect, useState } from "react";

const Search = () => {
  const [searchText, setSearchText] = useState("");

  const handleChannge = (e) => {
    setSearchText(e.target.value);
    console.log(searchText);
  };
  useEffect(() => console.log(searchText), [searchText]);
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
