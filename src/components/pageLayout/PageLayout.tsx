import CardsList from '../cardsList/CardsList';
import ReceiptOverview from '../receiptOverview/ReceiptOverview';
import styles from './PageLayout.module.scss';

export default function PageLayout() {
  return (
    <main className={styles.container}>
      <CardsList />
      <ReceiptOverview />
    </main>
  );
}
