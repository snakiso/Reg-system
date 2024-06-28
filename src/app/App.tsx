import { createContext, useEffect } from "react";
import { Helmet } from "react-helmet";

import { Router } from "@/app/router/router";
import { useSettings } from "@/hooks/useSettings";
import { useGetStylesQuery } from "@/services/baseApi";
import { SettingsData } from "@/services/services.type";
import { DynamicStyles } from "@/styles/DynamicStyles";

export const SettingsContext = createContext<SettingsData | undefined>(
  undefined,
);

export function App() {
  const { data: app } = useGetStylesQuery();

  const settings = useSettings();

  useEffect(() => {
    console.log(settings);
  }, [settings]);

  return (
    <>
      <Helmet>
        <title>{app?.event_title}</title>
      </Helmet>
      <DynamicStyles />
      <SettingsContext.Provider value={settings}>
        <Router />
      </SettingsContext.Provider>
    </>
  );
}
