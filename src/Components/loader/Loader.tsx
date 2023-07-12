import { LoaderType } from 'types/entities/loader';
import styles from './Loader.module.css'
import cn from 'classnames';
import { FC } from 'react'

export const Loader: FC<LoaderType> = ({staticPosition}) => {
  return (
    <div className={cn(styles.loader, {
      [styles.loaderStatic as string]: staticPosition,
    })}>Loader</div>
  )
}
