import { ReactComponent as Plus } from '../../assets/svg/plus.svg';
import { ReactComponent as Pen } from '../../assets/svg/pen.svg';

import styles from './Button.module.scss';
import { ReactNode } from 'react';

interface ButtonProps {
  className?: string;
  text?: string;
  icon?: string;
  color?: string;
  type?: string;
  children?: ReactNode;
}

export default function Button({ className, text = '', icon = 'plus', color = '', type = '', children }: ButtonProps) {
  const className1 = color === 'peach' ? styles.button_peach : '';
  const className2 = type === 'outline' ? styles.button_outline : '';
  const classNameResult = `${styles.button__text} ${className1} ${className2} ${styles.button}`;

  const IconComponent = icon === 'plus' ? Plus : Pen;

  return (
    <button className={className + " " + classNameResult}>
      {text} {IconComponent && <IconComponent className={styles.button__icon} />}
      {children}
    </button>
  );
}
