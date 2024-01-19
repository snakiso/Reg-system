import { ChangeEvent, useState } from "react";

import { SearchIcon } from "@/assets/icons/searchIcon";

import s from "./textField.module.scss";

export const TextField = () => {
  const [value, setValue] = useState("");

  const changeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <div className={s.box}>
      <input
        className={s.textField}
        onChange={changeValueHandler}
        placeholder={"Искать по ФИО"}
        type={"text"}
        value={value}
      />
      <SearchIcon />
    </div>
  );
};
