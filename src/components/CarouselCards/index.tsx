import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import styles from 'components/CarouselCards/styles.module.scss';

import { IState } from 'store';
import { ICardProps } from 'types/card';

import { Card } from 'components/Card';
import { Carousel, CarouselItem } from 'components/Carousel';

export function CarouselCards() {
  const cards = useSelector<IState, ICardProps[]>(state => state.card.cards);

  const { push } = useRouter();

  return (
    <>
      {cards.length > 0 ? (
        <Carousel>
          {cards.map(card => (
            <CarouselItem>
              <Card onClick={() => push(`/detail/${card.id}`)} card={card} />
            </CarouselItem>
          ))}
        </Carousel>
      ) : (
        <div className={styles.notFound}>
          <p>Nenhuma carta encontrada</p>
        </div>
      )}
    </>
  );
}
