import { render, screen, fireEvent } from '@testing-library/react';

import { SearchInput } from '.';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str: string): string => str,
    };
  },
}));

describe('SearchInput component', () => {
  it('should renders correctly', () => {
    render(<SearchInput onSubmit={value => value} />);

    expect(
      screen.getByPlaceholderText('components.searchInput.placeholder'),
    ).toBeInTheDocument();
  });

  it('should submit search form', () => {
    const submitFunction = jest.fn();

    render(<SearchInput onSubmit={submitFunction} />);

    const searchButton = screen.getByText('components.searchInput.button');

    fireEvent.click(searchButton);

    expect(submitFunction).toHaveBeenCalled();
  });
});
