import React, { useState } from "react";
import { AviaInfoBlock } from "../../components/AviaInfoBlock/AviaInfoBlock";
import logoImage from "./img/logo.png";
import scheme from "./img/scheme.png";
import baggage from "./img/baggage.png";

import s from "./AviaInfo.module.scss";
import style from "./AviaInfoReverce.module.scss";

const arrButton = [
  {
    a: "09:20",
    b: "11:05",
  },
  {
    a: "10:20",
    b: "12:05",
  },
  {
    a: "11:20",
    b: "13:05",
  },
];

interface AviaInfoProps {
  inputValue: string[];
  reverce?: string;
}

export const AviaInfo: React.FC<AviaInfoProps> = ({ inputValue, reverce }) => {
  const [indexTimePath, setIndexTimePath] = useState(0);
  const [timePath, setTimePath] = useState({
    a: "09:20",
    b: "11:05",
  });

  function onChangeTimePath(i: number, a: string, b: string): void {
    setIndexTimePath(i);
    setTimePath({ a: a, b: b });
  }

  return (
    <>
      {!reverce ? (
        <div className={s.block}>
          <div className={s.blockLogo}>
            <img src={logoImage} alt="logo" />
            <p>S7 Airlines</p>
          </div>
          <AviaInfoBlock
            timePathA={timePath.a}
            timePathB={timePath.b}
            scheme={scheme}
            inputValue0={inputValue[0]}
            inputValue1={inputValue[1]}
            inputValue2={inputValue[2].split("-").reverse().join(".")}
            baggage={baggage}
            indexTimePath={indexTimePath}
            arrButton={arrButton}
            onChangeTimePath={onChangeTimePath}
          />
          <p className={s.total}>4 150 ₽</p>
        </div>
      ) : (
        <div className={style.mainBlock}>
          <div className={s.blocks}>
            <div className={style.block}>
              <div className={style.blockLogo}>
                <img src={logoImage} alt="logo" />
                <p>S7 Airlines</p>
              </div>
              <AviaInfoBlock
                style={{
                  paddingRight: "38px",
                }}
                timePathA={timePath.a}
                timePathB={timePath.b}
                scheme={scheme}
                inputValue0={inputValue[0]}
                inputValue1={inputValue[1]}
                inputValue2={inputValue[2].split("-").reverse().join(".")}
                baggage={baggage}
                indexTimePath={indexTimePath}
                arrButton={arrButton}
                onChangeTimePath={onChangeTimePath}
                reverce={reverce}
              />
            </div>
            <div className={style.block}>
              <div className={style.blockLogo}>
                <img src={logoImage} alt="logo" />
                <p>S7 Airlines</p>
              </div>
              <AviaInfoBlock
                style={{
                  borderTop: "1px dashed #5C87DB",
                  paddingRight: "38px",
                }}
                timePathA={timePath.a}
                timePathB={timePath.b}
                scheme={scheme}
                inputValue0={inputValue[1]}
                inputValue1={inputValue[0]}
                inputValue2={reverce.split("-").reverse().join(".")}
                baggage={baggage}
                indexTimePath={indexTimePath}
                arrButton={arrButton}
                onChangeTimePath={onChangeTimePath}
                reverce={reverce}
              />
            </div>
          </div>
          <p className={style.total}>{4150 * 2} ₽</p>
        </div>
      )}
    </>
  );
};
