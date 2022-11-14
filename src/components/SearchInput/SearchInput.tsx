import React from "react";

import s from "./SearchInput.module.scss";

interface SearchInputProps {
  title: string;
  type: string;
  placeholder: string;
  required: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  id: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  title,
  type,
  placeholder,
  required,
  onChange,
  value,
  id,
}) => {
  return (
    <label className={s.searchTitle}>
      {title}
      <input
        className={s.searchInput}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        id={id}
      />
    </label>
  );
};
