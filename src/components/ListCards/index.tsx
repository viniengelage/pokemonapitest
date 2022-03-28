import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import styles from 'components/ListCards/styles.module.scss';

import { IState } from 'store';
import { ICardProps } from 'types/card';
import { Card } from 'components/Card';
import { useTranslation } from 'react-i18next';

export function ListCards() {
  const cards = useSelector<IState, ICardProps[]>(state => state.card.cards);

  const { push } = useRouter();
  const { t } = useTranslation();

  return (
    <>
      {cards.length > 0 ? (
        cards.map(card => (
          <div className={styles.listItem} key={card.id}>
            <Card card={card} onClick={() => push(`/detail/${card.id}`)} />
          </div>
        ))
      ) : (
        <div className={styles.notFound}>
          <p>{t('components.listCards.notFound')}</p>
        </div>
      )}
    </>
  );
}
