import { ChangeEvent, useEffect, useState } from "react";

import { PersonList } from "@/components/PersonList/PersonList";
import { Select } from "@/components/ui/select";
import { TextField } from "@/components/ui/textField";
import { Participant } from "@/services/secvices.type";
import { useAppSelector } from "@/services/store";

import s from "./fullList.module.scss";

type IsRegistered = "all" | "check" | "uncheck";

export const FullList = () => {
  const participants = useAppSelector(
    (state) => state.participantList.participants,
  );
  let resultData: Participant[] = [];
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Participant[]>([]);
  const [selectValue, setSelectValue] = useState<IsRegistered>("all");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);
    search(e.currentTarget.value);
  };

  const changeSelectValue = (value: IsRegistered) => {
    setSelectValue(value);
    if (value === "check") {
      resultData = participants.filter((item) => item.registered);
      setSelectValue("check");
      setSearchResults(resultData);
    } else if (value === "uncheck") {
      resultData = participants.filter((item) => !item.registered);
      setSelectValue("uncheck");
      setSearchResults(resultData);
    } else {
      setSearchResults(participants);
    }
  };

  useEffect(() => {
    changeSelectValue(selectValue);
  }, [participants]);

  const search = (query: string) => {
    resultData = participants.filter(
      (item) =>
        item.name.toLowerCase().startsWith(query.toLowerCase()) ||
        item.thirdName.toLowerCase().startsWith(query.toLowerCase()),
    );
    setSelectValue("all");
    setSearchResults(resultData);
  };

  return (
    <div>
      <TextField onChange={handleChange} value={searchTerm} />
      <div className={s.selectContainer}>
        <Select onValueChange={changeSelectValue} value={selectValue} />
      </div>
      <PersonList data={searchResults} />
    </div>
  );
};
