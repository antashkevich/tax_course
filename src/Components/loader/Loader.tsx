import { FC } from "react";
import { LoaderType } from "types/entities/loader";
import styles from "./Loader.module.css"

export const Loader: FC<LoaderType> = ({staticPosition}) => {
  const getClass = () => {
    if (staticPosition) {
      return `${styles.loader} ${styles.loaderStatic}`;
    }

    return `${styles.loader}`;
  };

  return (
    <div className={getClass()}>Loader</div>
  )
}
