import ReceiptOverviewHeader from '../receiptOverviewHeader/ReceiptOverviewHeader';
import styles from './ReceiptOverview.module.scss';

export default function ReceiptOverview() {
  return (
    <div className={styles['column']}>
      <ReceiptOverviewHeader />
    </div>
  );
}
