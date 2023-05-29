import ReceiptOverviewFooter from '../receiptOverviewFooter/ReceiptOverviewFooter';
import ReceiptOverviewHeader from '../receiptOverviewHeader/ReceiptOverviewHeader';
import styles from './ReceiptOverview.module.scss';

export default function ReceiptOverview() {
  const price = 233;
  return (
    <div className={styles['column']}>
      <ReceiptOverviewHeader />
      <ReceiptOverviewFooter price={price} />
    </div>
  );
}
