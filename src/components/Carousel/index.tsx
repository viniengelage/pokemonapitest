import React, { useCallback, useEffect, useState } from 'react';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import { useSwipeable } from 'react-swipeable';

import styles from 'components/Carousel/styles.module.scss';

interface ICarouselProps {
  children: JSX.Element[];
}

interface ICarouselItemProps {
  children: JSX.Element;
}

export function CarouselItem({ children }: ICarouselItemProps) {
  return <div className={styles.carouselItem}>{children}</div>;
}

export function Carousel({ children }: ICarouselProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    if (children) {
      setActiveIndex(0);
    }
  }, [children]);

  const handleUpdateIndex = useCallback(
    (index: number) => {
      let newIndex = index;

      if (newIndex < 0) {
        newIndex = 0;
      } else if (newIndex >= React.Children.count(children)) {
        newIndex = React.Children.count(children) - 1;
      }

      setActiveIndex(newIndex);
    },
    [children],
  );

  const handlers = useSwipeable({
    onSwipedLeft: () => handleUpdateIndex(activeIndex + 1),
    onSwipedRight: () => handleUpdateIndex(activeIndex - 1),
  });

  return (
    <div className={styles.container} id="carouselContainer">
      <button
        type="button"
        className={styles.slideButton}
        onClick={() => handleUpdateIndex(activeIndex - 1)}
      >
        <IoChevronBackOutline />
      </button>

      <div {...handlers} className={styles.carousel}>
        <div
          className={styles.inner}
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {children.map(slide => (
            <>{slide}</>
          ))}
        </div>
      </div>

      <button
        type="button"
        className={styles.slideButton}
        onClick={() => handleUpdateIndex(activeIndex + 1)}
      >
        <IoChevronForwardOutline />
      </button>
    </div>
  );
}
