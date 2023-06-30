import Button from '../buttons/Button';
import ReceiptOverviewFooter from '../receiptOverviewFooter/ReceiptOverviewFooter';
import ReceiptOverviewHeader from '../receiptOverviewHeader/ReceiptOverviewHeader';
import ReceiptOverviewList from '../receiptOverviewList/ReceiptOverviewList';
import styles from './ReceiptOverview.module.scss';

export default function ReceiptOverview() {
  const price = 233;
  return (
    <div className={styles['column']}>
      <ReceiptOverviewHeader />
      <ReceiptOverviewList />
      <Button className={styles.button} color="green" icon="plus" text="add product" type="outline" />
      <ReceiptOverviewFooter price={price} />
    </div>
  );
}
