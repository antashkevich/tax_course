import cn from "classnames";
import styles from "./Input.module.css";
import { FC } from "react";
import { Path, UseFormRegister } from "react-hook-form";
import { PropsValues } from "components/form/Form";
import { FieldErrors } from 'react-hook-form/dist/types/errors'


type Props = {
  label: Path<PropsValues>;
  register: UseFormRegister<PropsValues>;
  required?: boolean;
  errors: FieldErrors<PropsValues>;
  value: string;
  type: string;
  className?: string;
};

export const Input: FC<Props> = ({ type, label, value, register, required, errors, className }) => {
  const labelClassName = cn({
    [styles.labelColumn as string]: className === "column",
  })

  const inputClassName = cn(styles.input, {
    [styles.inputError as string]: errors[label],
  })

  return (
    <label className={labelClassName}>
      <span>{value}</span>
      <input
        className={inputClassName}
        {...register(label, { required, maxLength: 20 })}
        type={type}
        placeholder={value}
      />
      {errors[label]?.type === "required" && <p>{value} is required</p>}
    </label>
  );
};
