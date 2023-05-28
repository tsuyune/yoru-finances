import Button from '../buttons/Button';
import ReceiptDate from '../receiptDate/ReceiptDate';
import styles from './ReceiptOverview.module.scss';

export default function ReceiptOverview() {
  return (
    <div className={styles['column']}>
      <Button text="Edit receipt" color="peach" icon="pen"></Button>
      <ReceiptDate tag="time" type="date" />
    </div>
  );
}
