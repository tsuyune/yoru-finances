import Product from '../product/Product';
import styles from './ReceiptOverviewList.module.scss';

export default function ReceiptOverviewList() {
  return (
    <>
      <ul className={styles.list}>
        <Product
          productName="Smetana"
          category="Food"
          amount={2}
          amountUnit="pieces"
          costForOne={2}
          costUnit="$"
        />
        <Product
          productName="Bread"
          category="Food"
          amount={2}
          amountUnit="pieces"
          costForOne={2}
          costUnit="$"
        />
        <Product
          productName="Smetana"
          category="Food"
          amount={23}
          amountUnit="pieces"
          costForOne={2}
          costUnit="$"
        />
        <Product
          productName="Olives"
          category="Food"
          amount={42}
          amountUnit="jars"
          costForOne={2}
          costUnit="$"
        />
      </ul>
    </>
  );
}
