import { FC } from 'react';
import styles from './base-part-item.module.scss';
import { BasePartItemProps } from './base-part-item-types';

export const BasePartItem: FC<BasePartItemProps> = ({partDescription, children}) => {
    return (
        <div className={styles.partsItem}>
        <p className={styles.partDescription}>
            {partDescription}
        </p>
        <>
        {children}</>
      </div>
    )
}