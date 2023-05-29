import Button from '../buttons/Button';
import ReceiptDate from '../receiptDate/ReceiptDate';
import Typo from '../typo/Typo';
import styles from './ReceiptOverviewHeader.module.scss';

const account = 'ABN Amro';
const store = 'Pyaterochka';

export default function ReceiptOverviewHeader() {
  return (
      <header className={styles.header}>
        <div className={styles['header-info']}>
          <ReceiptDate tag="time" type="date" />
          <div className={styles['payment-info']}>
            <Typo tag="h3" type="account">
              {account}
            </Typo>
            <Typo tag="h3" type="decor">
              |
            </Typo>
            <Typo tag="h3" type="store">
              {store}
            </Typo>
          </div>
        </div>
        <Button text="Edit receipt" color="peach" icon="pen" />
      </header>
  );
}
