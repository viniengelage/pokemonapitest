import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import styles from 'components/ModalDetailAttackCard/styles.module.scss';

import { IState } from 'store';
import { IAttackProps } from 'types/card';

interface IProps {
  onClose(): void;
}

export function DetailAttackCard({ onClose }: IProps) {
  const { t } = useTranslation();

  const attack = useSelector<IState, IAttackProps>(
    state => state.card.selectedAttack,
  );

  return (
    <div className={styles.container}>
      <div className={styles.informationSection}>
        <p className={styles.title}>Nome</p>
        <p className={styles.description}>{attack.name}</p>
      </div>

      {attack.damage && (
        <div className={styles.informationSection}>
          <p className={styles.title}>Dano</p>
          <p className={styles.description}>{attack.damage}</p>
        </div>
      )}

      {attack.cost && (
        <div className={styles.costSection}>
          <p className={styles.title}>Custo</p>
          <div className={styles.cost}>
            {attack.cost.map((cost, index) => (
              <p className={styles.description} key={index}>
                {cost}
              </p>
            ))}
          </div>
        </div>
      )}

      {attack.text && (
        <div className={styles.textSection}>
          <h5 className={styles.textTitle}>Descrição</h5>
          <p className={styles.text}>{attack.text}</p>
        </div>
      )}

      <button
        className={styles.button}
        type="button"
        id="close-button"
        onClick={() => onClose()}
      >
        {t('components.modalDetailAttack.close')}
      </button>
    </div>
  );
}
