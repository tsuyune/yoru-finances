import Typo from '../typo/Typo';
import styles from './ProductProperty.module.scss';

interface ProductPropertyProps {
  propertyKey: string;
  value: string;
}

export default function ProductProperty({ propertyKey, value }: ProductPropertyProps) {
  return (
    <li className={styles['list-elem']}>
      <Typo tag="span" type="secondary">
        {propertyKey}:
      </Typo>
      <Typo tag="span" type="price">
        {value}
      </Typo>
    </li>
  );
}
