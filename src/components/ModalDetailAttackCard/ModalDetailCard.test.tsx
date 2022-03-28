import { render, screen, fireEvent } from '@testing-library/react';

import { DetailAttackCard } from '.';

jest.mock('react-redux', () => {
  return {
    useSelector() {
      return {
        name: 'Jhon Doe',
        cost: ['Damage'],
        convertedEnergyCost: 30,
        damage: '30',
        text: 'Description',
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

describe('DetailAttackCard component', () => {
  it('should renders correctly', () => {
    render(<DetailAttackCard onClose={() => ({})} />);

    expect(
      screen.getByText('components.modalDetailAttack.close'),
    ).toBeInTheDocument();
  });

  it('should close on click close button', () => {
    const closeFunction = jest.fn();

    render(<DetailAttackCard onClose={closeFunction} />);

    const closeButton = screen.getByText('components.modalDetailAttack.close');

    fireEvent.click(closeButton);

    expect(closeFunction).toHaveBeenCalled();
  });
});
