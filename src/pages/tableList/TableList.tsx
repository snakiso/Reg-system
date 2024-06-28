import { Ref, useEffect, useRef, useState } from "react";

import { PersonList } from "@/components/PersonList/PersonList";
import { Keyboard } from "@/components/keyboard";
import { Key } from "@/components/ui/key";
import { useGetParticipantQuery } from "@/services/baseApi";
import { Participant } from "@/services/services.type";

export const TableList = () => {
  const [currentTable, setCurrentTable] = useState("");
  const [keyBoardHeight, setKeyBoardHeight] = useState(0);
  const { data } = useGetParticipantQuery(undefined, {
    pollingInterval: 1000,
  });
  let filteredParticipants: Participant[] = [];
  const divRef: Ref<HTMLDivElement> = useRef(null);

  if (data) {
    filteredParticipants = data?.participant.filter(
      (el) => el.table === currentTable,
    );
  }

  useEffect(() => {
    const table = localStorage.getItem("table");

    if (data) {
      if (divRef.current) {
        setKeyBoardHeight(divRef.current.clientHeight);
      }
      if (table && table !== "undefined") {
        setCurrentTable(JSON.parse(table));
      } else {
        setCurrentTable(data.table[0]);
        localStorage.setItem("table", JSON.stringify(data.table[0]));
      }
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
        {data?.table?.map((el) => (
          <Key
            isActive={el === currentTable}
            key={el}
            keyDown={() => ClickHandler(el)}
          >
            {el}
          </Key>
        ))}
      </Keyboard>
    </div>
  );
};
