import styles from 'components/Card/styles.module.scss';

import { ICardProps } from 'types/card';

interface IProps {
  card: ICardProps;
  onClick?(): void;
}

export function Card({ card, onClick }: IProps) {
  const cardTypes = card.types && card.types.join(',');

  return (
    <main
      className={styles.block}
      id="card-button"
      onClick={() => onClick && onClick()}
    >
      <section className={styles.container}>
        <div className={styles.iconCircle}>
          <div className={styles.icon}>
            <img src="/images/pokeball.png" alt="pokeball" />
          </div>
        </div>
        <div className={styles.image}>
          <img src={card.images.small} alt="card" />
        </div>
        <div className={styles.information}>
          <p className={styles.title}>{card.name}</p>
          <p className={styles.subtitle}>{card.id}</p>
          <p className={styles.description}>{cardTypes}</p>
        </div>
      </section>
    </main>
  );
}
