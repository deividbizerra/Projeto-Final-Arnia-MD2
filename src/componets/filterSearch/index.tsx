import { IconSearch, InputFilterSearch, InputWrapper } from "./styled";

const FilterSearch = () => {
  return (
    <InputWrapper>
      <InputFilterSearch type="text" placeholder="Pesquise uma palavra-chave" />
      <IconSearch />
    </InputWrapper>
  );
};

export default FilterSearch;
