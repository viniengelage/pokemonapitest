import { render, screen } from '@testing-library/react';

import Home from 'pages';

jest.mock('react-redux', () => {
  return {
    useDispatch: () => ({}),
    useSelector: () => [],
  };
});

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        back: () => ({}),
        pathname: '/',
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

describe('Home page', () => {
  it('should renders correctly', () => {
    render(<Home />);

    expect(screen.getByText('components.header.title')).toBeInTheDocument();
  });
});
