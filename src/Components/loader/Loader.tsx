import { LoaderType } from 'types/entities/loader';
import styles from './Loader.module.css'
import cn from 'classnames';

export const Loader: React.FC<LoaderType> = ({staticPosition}) => {
  return (
    <div className={cn(styles.loader, {
      [styles.loaderStatic]: staticPosition,
    })}>Loader</div>
  )
}
