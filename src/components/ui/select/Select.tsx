import { ComponentPropsWithoutRef } from "react";

import { ArrowIcon } from "@/assets/icons/arrowIcon";
import { Typography } from "@/components/ui/typography";
import * as SelectRadix from "@radix-ui/react-select";

import s from "./select.module.scss";

export const Select = ({
  defaultValue,
  onValueChange,
  value,
}: ComponentPropsWithoutRef<typeof SelectRadix.Root>) => {
  return (
    <SelectRadix.Root
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      value={value}
    >
      <SelectRadix.Trigger className={s.select}>
        <SelectRadix.Value
          defaultValue={"all"}
          placeholder={<Typography variant={"body2s"}>Все</Typography>}
        />
        <SelectRadix.Icon className={s.arrow}>
          <ArrowIcon />
        </SelectRadix.Icon>
      </SelectRadix.Trigger>
      <SelectRadix.Portal>
        <SelectRadix.Content className={s.portal} position={"popper"}>
          <SelectRadix.Viewport asChild>
            <SelectRadix.Group>
              <SelectRadix.Item className={s.item} value={"all"}>
                <SelectRadix.ItemText>
                  <Typography variant={"body2s"}>Все</Typography>
                </SelectRadix.ItemText>
              </SelectRadix.Item>
              <SelectRadix.Item className={s.item} value={"uncheck"}>
                <SelectRadix.ItemText>
                  <Typography variant={"body2s"}>Не пришедшие</Typography>
                </SelectRadix.ItemText>
              </SelectRadix.Item>
              <SelectRadix.Item className={s.item} value={"check"}>
                <SelectRadix.ItemText>
                  <Typography variant={"body2s"}>Пришедшие</Typography>
                </SelectRadix.ItemText>
              </SelectRadix.Item>
            </SelectRadix.Group>
          </SelectRadix.Viewport>
        </SelectRadix.Content>
      </SelectRadix.Portal>
    </SelectRadix.Root>
  );
};
