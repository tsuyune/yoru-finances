import styles from './CardReceipt.module.scss';
import Typo from '../typo/Typo';
import ReceiptDate from '../receiptDate/ReceiptDate';

interface CardProps {
  isActive?: boolean;
  account: string;
  store: string;
  onClick?: () => void;
}

export default function CardReceipt({ account, store, onClick, isActive }: CardProps) {
  const cardClasses = `${styles.card} ${isActive ? styles.card_active : ''}`;

  return (
    <button className={cardClasses} onClick={onClick}>
      <ReceiptDate tag="time" type="date" />
      <Typo tag="h3" type="account">
        {account}
      </Typo>
      <Typo tag="h3" type="store">
        {store}
      </Typo>
    </button>
  );
}
