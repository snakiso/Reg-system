import { useEffect } from "react";

import { Router } from "@/app/router/router";
import { useGetParticipantQuery } from "@/services/baseApi";
import { setData } from "@/services/participantList-reducer";
import { useAppDispatch } from "@/services/store";
import { DynamicStyles } from "@/styles/DynamicStyles";

export function App() {
  const { data } = useGetParticipantQuery(undefined, {
    //  pollingInterval: 5000,
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setData({ data }));
    }
  }, [data]);

  return (
    <>
      <DynamicStyles />
      <Router />
    </>
  );
}
