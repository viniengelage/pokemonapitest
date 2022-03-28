import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { IoChevronBackOutline } from 'react-icons/io5';

import styles from 'components/Header/styles.module.scss';

export function Header() {
  const { back, pathname } = useRouter();
  const { t } = useTranslation();
  return (
    <header className={styles.container}>
      {pathname !== '/' && (
        <button
          type="button"
          title="backButton"
          className={styles.backIcon}
          onClick={() => back()}
        >
          <IoChevronBackOutline />
        </button>
      )}
      <div className={styles.content}>
        <img src="/images/pikachu.png" alt="pikachu" className={styles.logo} />
        <h1 className={styles.title}>{t('components.header.title')}</h1>
      </div>
    </header>
  );
}
