import CardsList from '../cardsList/CardsList';
import styles from './PageLayout.module.scss';

export default function PageLayout() {
  return (
    <div className={styles.container}>
      <CardsList />
    </div>
  );
}