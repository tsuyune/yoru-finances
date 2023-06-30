import ProductProperty from '../productProperty/ProductProperty';
import Typo from '../typo/Typo';
import styles from './Product.module.scss';

interface ProductProps {
  productName: string;
  category: string;
  costForOne: number;
  costUnit: string;
  amount: number;
  amountUnit: string;
}

export default function Product({ productName, category, costForOne, costUnit, amount, amountUnit }: ProductProps) {
  return (
    <section className={styles.product}>
      <Typo tag="h3" type="store">
        {productName}:
      </Typo>
      <ul className={styles.list}>
        <ProductProperty propertyKey="Category" value={category} />
        <ProductProperty propertyKey="Cost for 1 unit" value={costForOne.toString() + ' ' + costUnit} />
        <ProductProperty propertyKey="Amount" value={amount.toString() + ' ' + amountUnit} />
        <ProductProperty propertyKey="Total cost" value={(amount * costForOne).toString() + ' ' + costUnit} />
      </ul>
    </section>
  );
}
