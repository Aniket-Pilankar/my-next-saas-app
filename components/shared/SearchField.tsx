import Image from "next/image";
import React from "react";
import { Input } from "../ui/input";

const SearchField = () => {
  return (
    <div className="search">
      <Image
        src="/assets/icons/search.svg"
        alt="search"
        width={24}
        height={24}
      />

      <Input
        className="search-field"
        placeholder="Search"
        // onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchField;
