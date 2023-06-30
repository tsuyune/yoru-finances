import Typo from '../typo/Typo';
import styles from './ReceiptOverviewfooter.module.scss';

interface ReceiptProps {
  price: number;
}

export default function ReceiptOverviewFooter({ price }: ReceiptProps) {
  return (
    <footer className={styles.footer}>
      <Typo tag="span" type="secondary">
        Total:
      </Typo>
      <Typo tag="span" type="total">
        {price} $
      </Typo>
    </footer>
  );
}
