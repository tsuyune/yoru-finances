import styles from './CardsList.module.scss';

import Button from '../buttons/Button';
import Typo from '../typo/Typo';
import CardReceipt from '../cardReceipt/CardReceipt';
import { useState } from 'react';

const account = 'ABN Amro';
const store = 'Pyaterochka';

export default function CardsList() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className={styles.column}>
      <div className={styles['button-container']}>
        <Typo className="title" tag="h1">
          |&nbsp;Checks
        </Typo>
        <Button className="button" text="add check" icon="plus" />
      </div>
      <div className={styles['cards-container']}>
        {[...Array(12).keys()].map((_elem, i) => (
          <CardReceipt
            onClick={() => setActiveIndex(i)}
            isActive={activeIndex == i}
            account={account}
            store={store}
          />
        ))}
      </div>
    </div>
  );
}
