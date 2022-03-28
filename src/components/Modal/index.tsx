import ReactDOM from 'react-dom';
import { IoCloseOutline } from 'react-icons/io5';

import styles from 'components/Modal/styles.module.scss';

export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element;
  headerText: string;
}

export function Modal({ isShown, hide, modalContent, headerText }: ModalProps) {
  const modal = (
    <>
      <div className={styles.appContainer} />
      <main className={styles.wrapper}>
        <div className={styles.modal}>
          <header className={styles.header}>
            <h3 className={styles.headerText}>{headerText}</h3>
            <button
              className={styles.button}
              type="button"
              title="closeButton"
              onClick={hide}
            >
              <IoCloseOutline />
            </button>
          </header>
          <section className={styles.content}>{modalContent}</section>
        </div>
      </main>
    </>
  );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
}
