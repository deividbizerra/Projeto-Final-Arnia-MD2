import React, { useState } from "react";
import { IconSearch, InputFilterSearch, InputWrapper } from "./styled";

interface FilterSearchProps {
  onSearch: (searchTerm: string) => void;
}

const FilterSearch: React.FC<FilterSearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm);
  };

  return (
    <InputWrapper>
      <InputFilterSearch
        type="text"
        placeholder="Pesquise uma palavra-chave"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <IconSearch />
    </InputWrapper>
  );
};

export default FilterSearch;
