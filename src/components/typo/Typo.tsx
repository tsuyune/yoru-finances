import { ReactNode } from 'react';
import styles from './Typo.module.scss';

interface TypoProps {
  className?: string;
  tag: 'h1' | 'h2' | 'h3' | 'span' | 'div' | 'p' | 'time';
  type?: string;
  children?: ReactNode;
  dateTime?: string;
}

export default function Typo({ tag: Tag, type, className, children }: TypoProps) {
  const className1 = styles[Tag];
  const className2 = type ? styles[Tag + `_${type}`] : '';
  const classNameResult = `${className1} ${className2} ${className || ''}`;

  return <Tag className={classNameResult}>{children}</Tag>;
}
