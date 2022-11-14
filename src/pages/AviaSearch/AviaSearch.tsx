import React from "react";
import { useNavigate } from "react-router-dom";
import { SearchInput } from "../../components/SearchInput/SearchInput";

import s from "./AviaSearch.module.scss";

const inputArr = [
  {
    id: "1",
    title: "Откуда",
    type: "text",
    placeholder: "Город вылета",
    required: true,
  },
  {
    id: "2",
    title: "Куда",
    type: "text",
    placeholder: "Город прилёта",
    required: true,
  },
  {
    id: "3",
    title: "Туда",
    type: "date",
    placeholder: "дд.мм.гг",
    required: true,
  },
  {
    id: "4",
    title: "Обратно",
    type: "date",
    placeholder: "дд.мм.гг",
    required: false,
  },
];

interface AviaSearchProps {
  inputValue: string[];
  setInputValue: (prev: any | string[]) => void;
  reverce?: string;
  setReverce: (str: string) => void;
}

export const AviaSearch: React.FC<AviaSearchProps> = ({
  inputValue,
  setInputValue,
  reverce,
  setReverce,
}) => {
  const navigate = useNavigate();

  function onChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    const id = Number(e.target.getAttribute("id")) - 1;
    const value = e.target.value;
    setInputValue((prev: any) => {
      const newArr = [...prev];
      newArr[id] = value;
      return newArr;
    });
  }

  function onChangeReverceInput(e: React.ChangeEvent<HTMLInputElement>) {
    setReverce(e.target.value);
  }

  const nextDisabled = inputValue.some((val) => !val);

  return (
    <div className={s.block}>
      <form action="">
        <div className={s.blockSearch}>
          {inputArr.map((elem, i) =>
            elem.required == true ? (
              <SearchInput
                key={elem.id}
                {...elem}
                value={inputValue[i]}
                onChange={(e) => onChangeInput(e)}
              />
            ) : (
              <SearchInput
                key={elem.id}
                {...elem}
                value={reverce}
                onChange={onChangeReverceInput}
              />
            )
          )}
        </div>
        <div className={s.blockBtn}>
          <button
            type="submit"
            onClick={() => navigate("/avia/info")}
            disabled={nextDisabled}
            className={s.btn}
          >
            Найти билеты
          </button>
        </div>
      </form>
    </div>
  );
};
