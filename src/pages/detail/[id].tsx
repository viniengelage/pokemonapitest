import { useCallback } from 'react';
import { GetServerSideProps } from 'next';
import { useDispatch } from 'react-redux';
import Head from 'next/head';

import styles from 'pages/detail/styles.module.scss';
import api from 'services/api';

import { IAttackProps, ICardProps } from 'types/card';
import { selectCardAttack } from 'store/modules/card/actions';
import { useModal } from 'hooks/useModal';
import { Modal } from 'components/Modal';
import { DetailAttackCard } from 'components/ModalDetailAttackCard';
import { Header } from 'components/Header';

interface ICardDetailProps {
  card: ICardProps;
}

export default function Detail({ card }: ICardDetailProps) {
  const dispatch = useDispatch();
  const { isShown, toggle } = useModal();

  const handleSelectAttack = useCallback(
    (attack: IAttackProps) => {
      dispatch(selectCardAttack(attack));
    },
    [dispatch],
  );

  return (
    <>
      <Head>
        <title>Card - {card.id}</title>
      </Head>

      <Header />
      <main className={styles.container}>
        <div className={styles.imageBackground}>
          <div className={styles.cardImage}>
            <img src={card.images.large} alt={`${card.name}-large`} />
          </div>
        </div>

        <div className={styles.cardSection}>
          <h3 className={styles.name}>{card.name}</h3>
          <span>{card.id}</span>

          {card.types && (
            <section className={styles.card}>
              <strong className={styles.cardTitle}>Tipos</strong>
              <ul className={styles.descriptionSection}>
                {card.types.map((type, index) => (
                  <li key={index} className={styles.descriptionText}>
                    {type}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {card.resistances && (
            <section className={styles.card}>
              <strong className={styles.cardTitle}>Resistencias</strong>
              <ul className={styles.descriptionSection}>
                {card.resistances.map((resistance, index) => (
                  <li className={styles.descriptionText} key={index}>
                    {resistance.type}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {card.weaknesses && (
            <section className={styles.card}>
              <strong className={styles.cardTitle}>Fraquezas</strong>
              <ul className={styles.descriptionSection}>
                {card.weaknesses.map((weakness, index) => (
                  <li className={styles.descriptionText} key={index}>
                    {weakness.type}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {card.attacks && (
            <section className={styles.attackCard} id="attack-section">
              <strong className={styles.cardTitle}>Ataques</strong>
              {card.attacks.map((attack, index) => (
                <div className={styles.detailSection} key={index}>
                  <p>{attack.name}</p>
                  <button
                    className={styles.detailButton}
                    type="button"
                    onClick={() => {
                      handleSelectAttack(attack);
                      toggle();
                    }}
                  >
                    Detalhes
                  </button>
                </div>
              ))}
            </section>
          )}
        </div>
      </main>

      <Modal
        isShown={isShown}
        hide={toggle}
        modalContent={<DetailAttackCard onClose={toggle} />}
        headerText="Detalhes de ataque"
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  try {
    const {
      data: { data: card },
    } = await api.get(`/cards/${params.id}`);

    return {
      props: {
        card,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
