import styles from './CardReceipt.module.scss';
import Typo from '../typo/Typo';

interface CardProps {
  className?: string;
  isActive?: boolean;
  date: string;
  account: string;
  store: string;
  onClick?: () => void;
}

export default function CardReceipt({ date, account, store, onClick, isActive }: CardProps) {
  const cardClasses = `${styles.card} ${isActive ? styles.card_active : ''}`
  
  return (
    <button className={cardClasses} onClick={onClick}>
      <Typo className={styles.date} tag="time" type="primary" dateTime={date}>
        {date}
      </Typo>
      <Typo className={styles.account} tag="h3" type="account">
        {account}
      </Typo>
      <Typo className={styles.store} tag="h3" type="store">
        {store}
      </Typo>
    </button>
  );
}
