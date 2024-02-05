import { Ref, useEffect, useRef, useState } from "react";

import { PersonList } from "@/components/PersonList/PersonList";
import { Keyboard } from "@/components/keyboard";
import { Key } from "@/components/ui/key";
import { useGetParticipantQuery } from "@/services/baseApi";
import { Participant } from "@/services/secvices.type";

export const TableList = () => {
  const [currentTable, setCurrentTable] = useState("1");
  const [keyBoardHeight, setKeyBoardHeight] = useState(0);
  const { data } = useGetParticipantQuery();
  let filteredParticipants: Participant[] = [];
  let tableNumber: string[] = [];
  const divRef: Ref<HTMLDivElement> = useRef(null);

  if (data) {
    filteredParticipants = data?.filter((el) => el.table === currentTable);
    tableNumber = [...new Set(data?.map((el) => el.table))].sort(
      (a, b) => Number(a) - Number(b),
    );
  }

  useEffect(() => {
    const table = localStorage.getItem("table");

    if (divRef.current) {
      setKeyBoardHeight(divRef.current.clientHeight);
    }
    if (table) {
      setCurrentTable(JSON.parse(table));
    } else {
      setCurrentTable(tableNumber[0]);
      localStorage.setItem("table", JSON.stringify(tableNumber[0]));
    }
  }, [data, divRef]);

  const ClickHandler = (key: string) => {
    setCurrentTable(key);
    localStorage.setItem("table", JSON.stringify(key));
  };

  return (
    <div>
      <PersonList
        data={filteredParticipants ?? []}
        marginBottom={keyBoardHeight}
      />
      <Keyboard ref={divRef} title={"Выберите стол"}>
        {tableNumber?.map((el) => (
          <Key key={el} keyDown={() => ClickHandler(el)}>
            {el}
          </Key>
        ))}
      </Keyboard>
    </div>
  );
};
