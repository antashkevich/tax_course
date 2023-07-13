import cn from "classnames";
import styles from "./Textarea.module.css";
import { FC } from "react";
import { Path, UseFormRegister } from "react-hook-form";
import { PropsValues } from "components/form/Form";

type Props = {
  label: Path<PropsValues>;
  register: UseFormRegister<PropsValues>;
  value: string;
  className?: string;
};

export const Textarea: FC<Props> = ({label, value, register }) => {
  const textareaClassName = cn(styles.textarea)
  
  return (
    <label>
      <span>{value}</span>
      <textarea
        className={textareaClassName}
        {...register(label)}
        placeholder={value}
      />
    </label>
  );
};
