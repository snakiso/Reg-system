import s from "./closeButton.module.scss";

export const CloseButton = () => {
  return (
    <div className={s.closeButtonWrapper}>
      <button className={s.closeButton}></button>
    </div>
  );
};
