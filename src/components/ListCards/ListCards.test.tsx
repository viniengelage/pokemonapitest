import { render, screen } from '@testing-library/react';
import * as redux from 'react-redux';

import { ListCards } from '.';

jest.mock('react-redux');
jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        push: () => null,
      };
    },
  };
});

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str: string): string => str,
    };
  },
}));

const card = {
  id: 'fake-card-id',
  name: 'card-name',
  types: ['card-type'],
  images: {
    small: 'image',
    large: 'image',
  },
  resistances: [{ type: 'card-resistance', value: 'card-resistance-value' }],
  weaknesses: [{ type: 'card-weaknesses', value: 'card-weaknesses-value' }],
  attacks: [
    {
      name: 'card-attack',
      cost: ['card-cost'],
      convertedEnergyCost: 10,
      damage: 'damage',
      text: 'text-description',
    },
  ],
};

describe('ListCard component', () => {
  it('should renders correctly and with cards', () => {
    const state = { card: { cards: [card] } };

    jest
      .spyOn(redux, 'useSelector')
      .mockImplementation(callback => callback(state));

    render(<ListCards />);

    expect(screen.getByText('card-name')).toBeInTheDocument();
  });

  it('should show empty cards message', () => {
    const state = { card: { cards: [] } };

    jest
      .spyOn(redux, 'useSelector')
      .mockImplementation(callback => callback(state));

    render(<ListCards />);

    expect(
      screen.queryByText('components.listCards.notFound'),
    ).toBeInTheDocument();
  });
});
