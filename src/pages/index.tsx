import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from 'pages/styles.module.scss';
import api from 'services/api';

import { addCardsToList } from 'store/modules/card/actions';

import { Header } from 'components/Header';
import { SearchInput } from 'components/SearchInput';
import { ListCards } from 'components/ListCards';
import { CarouselCards } from 'components/CarouselCards';

function Home() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/cards?orderBy=name').then(({ data: { data: cards } }) => {
      dispatch(addCardsToList(cards));
      setLoading(false);
    });
  }, [dispatch]);

  const handleSearchCards = useCallback(
    async (value: string) => {
      if (value) {
        const {
          data: { data: cards },
        } = await api.get(`/cards?q=name:${value}`);

        dispatch(addCardsToList(cards));
      } else {
        const {
          data: { data: cards },
        } = await api.get('/cards');

        dispatch(addCardsToList(cards));
      }
    },
    [dispatch],
  );

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.searchInput}>
        <SearchInput onSubmit={handleSearchCards} />
      </div>

      {!loading && (
        <>
          <div className={styles.mobileCarousel}>
            <CarouselCards />
          </div>

          <div className={styles.desktopGrid}>
            <ListCards />
          </div>
        </>
      )}
    </div>
  );
}
export default Home;
