import React from "react";

import s from "./AviaInfoBlock.module.scss";

interface AviaInfoBlockProps {
  timePathA: string;
  timePathB: string;
  scheme: string;
  inputValue0: string;
  inputValue1: string;
  inputValue2: string;
  baggage: string;
  indexTimePath: number;
  arrButton: { a: string; b: string }[];
  onChangeTimePath: (i: number, a: string, b: string) => void;
  reverce?: string;
  style?: object;
}

export const AviaInfoBlock: React.FC<AviaInfoBlockProps> = ({
  timePathA,
  timePathB,
  scheme,
  inputValue0,
  inputValue1,
  inputValue2,
  baggage,
  indexTimePath,
  arrButton,
  onChangeTimePath,
  reverce,
  style,
}) => {
  return (
    <div style={style} className={s.blockPath}>
      <div className={s.pathTime}>
        <div className={s.pathTimeBeforeAfter}>
          <p>{timePathA}</p>
          <div>
            <p>{inputValue0}</p>
            <p>{inputValue2}</p>
          </div>
        </div>
        <div className={s.pathScheme}>
          <img src={scheme} alt="scheme" />
        </div>
        <div className={s.pathTimeBeforeAfter}>
          <p>{timePathB}</p>
          <div>
            <p>{inputValue1}</p>
            <p>{inputValue2}</p>
          </div>
        </div>
        <div className={s.pathBaggage}>
          <img src={baggage} alt="baggage" />
        </div>
      </div>
      {!reverce && (
        <div className={s.btnTime}>
          {arrButton.map((elem, i) => (
            <button
              onClick={() => onChangeTimePath(i, elem.a, elem.b)}
              className={indexTimePath === i ? s.btnActive : s.btn}
              key={i}
            >
              {elem.a} - {elem.b}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
