import { FC } from "react";

import styles from "./base-part.module.scss";
import { BasePartProps } from "./base-part-types";

export const BasePart: FC<BasePartProps> = ({
  title,
  subtitle,
  children,
  propsList,
  codeExample,
}) => {
  return (
    <div className={styles.basePart}>
      <div className={styles.baseHeader}>
        <h2 className={styles.baseTitle}>{title}</h2>
        <h3 className={styles.baseSubtitle}>{subtitle}</h3>
        <pre>
          <p>Пример использования:</p>
          <br />
          <code>{codeExample}</code>
        </pre>
      </div>
      <div className={styles.parts}>{children}</div>
      {propsList && (
        <div>
          <h4>Список параметров, которые можно передать в ui-kit компонент</h4>
          {propsList}
        </div>
      )}
    </div>
  );
};
