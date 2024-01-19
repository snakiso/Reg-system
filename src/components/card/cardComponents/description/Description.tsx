import { Typography } from "@/components/ui/typography";

import s from "./decription.module.scss";

type DescriptionProps = {
  description: string;
  title: string;
};

export const Description = ({ description, title }: DescriptionProps) => {
  return (
    <div className={s.description}>
      <Typography as={"span"} variant={"body1m"}>
        {title}
      </Typography>
      <Typography variant={"body1m"}>{description}</Typography>
    </div>
  );
};
