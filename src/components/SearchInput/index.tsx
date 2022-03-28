import { FormEvent, useCallback, useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';

import styles from 'components/SearchInput/styles.module.scss';

interface IProps {
  onSubmit(_value: string): void;
}

export function SearchInput({ onSubmit }: IProps) {
  const { t } = useTranslation();

  const [value, setValue] = useState<string>('');

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      onSubmit(value);
    },
    [onSubmit, value],
  );

  return (
    <form className={styles.block} onSubmit={handleSubmit} id="form">
      <div className={styles.container}>
        <IoSearchOutline className={styles.icon} />
        <input
          name="search"
          placeholder={t('components.searchInput.placeholder')}
          className={styles.input}
          onChange={e => setValue(e.target.value)}
        />
      </div>
      <button type="submit" className={styles.button}>
        {t('components.searchInput.button')}
      </button>
    </form>
  );
}
