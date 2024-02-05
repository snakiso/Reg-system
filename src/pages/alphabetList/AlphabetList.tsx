import { Ref, useEffect, useRef, useState } from "react";

import { PersonList } from "@/components/PersonList/PersonList";
import { Keyboard } from "@/components/keyboard";
import { Key } from "@/components/ui/key";
import { useGetParticipantQuery } from "@/services/baseApi";
import { Participant } from "@/services/secvices.type";

export const AlphabetList = () => {
  const [currentLetter, setCurrentLetter] = useState<string>("");
  const [keyBoardHeight, setKeyBoardHeight] = useState(0);
  const { data } = useGetParticipantQuery();
  const divRef: Ref<HTMLDivElement> = useRef(null);
  let filteredParticipants: Participant[] = [];
  let letters: string[] = [];

  if (data) {
    filteredParticipants = data
      .filter((el) => el.thirdName[0] === currentLetter)
      .sort((a, b) => a.thirdName.localeCompare(b.thirdName));
    letters = [...new Set(data.map((el) => el.thirdName[0]))].sort((a, b) =>
      a.localeCompare(b),
    );
  }

  useEffect(() => {
    const letter = localStorage.getItem("letter");

    if (divRef.current) {
      setKeyBoardHeight(divRef.current.clientHeight);
    }
    if (letter) {
      setCurrentLetter(JSON.parse(letter));
    } else {
      setCurrentLetter(letters[0]);
      localStorage.setItem("letter", JSON.stringify(letters[0]));
    }
  }, [data]);

  const ClickHandler = (key: string) => {
    setCurrentLetter(key);
    localStorage.setItem("letter", JSON.stringify(key));
  };

  return (
    <div>
      <PersonList data={filteredParticipants} marginBottom={keyBoardHeight} />
      <Keyboard ref={divRef} title={"Выберите первую букву фамилии"}>
        {letters?.map((el) => (
          <Key key={el} keyDown={() => ClickHandler(el)}>
            {el}
          </Key>
        ))}
      </Keyboard>
    </div>
  );
};
