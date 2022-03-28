import { render, screen, fireEvent } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { createMockRouter } from 'tests-utils/createMockRouter';

import { Header } from '.';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str: string): string => str,
    };
  },
}));

describe('Header component', () => {
  it('should renders correctly', () => {
    const router = createMockRouter({ pathname: '/' });

    render(
      <RouterContext.Provider value={router}>
        <Header />
      </RouterContext.Provider>,
    );

    expect(screen.getByText('components.header.title')).toBeInTheDocument();
  });

  it('should show back page button', () => {
    const router = createMockRouter({ pathname: '/detail' });

    render(
      <RouterContext.Provider value={router}>
        <Header />
      </RouterContext.Provider>,
    );

    expect(screen.queryByTitle('backButton')).toBeInTheDocument();
  });

  it('should not show back page button', () => {
    const router = createMockRouter({ pathname: '/' });

    render(
      <RouterContext.Provider value={router}>
        <Header />
      </RouterContext.Provider>,
    );

    expect(screen.queryByTitle('backButton')).not.toBeInTheDocument();
  });

  it('should back page', () => {
    const router = createMockRouter({ pathname: '/detail' });

    render(
      <RouterContext.Provider value={router}>
        <Header />
      </RouterContext.Provider>,
    );

    const backButton = screen.getByTitle('backButton');

    fireEvent.click(backButton);

    expect(router.back).toHaveBeenCalled();
  });
});
