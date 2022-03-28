import { render, screen } from '@testing-library/react';
import { GetServerSidePropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';

import api from 'services/api';
import Detail, { getServerSideProps } from 'pages/detail/[id]';

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

jest.mock('react-redux', () => {
  return {
    useDispatch: () => ({}),
  };
});

jest.mock('services/api');

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

describe('Detail page', () => {
  it('should renders correctly', () => {
    render(<Detail card={card} />);

    expect(screen.getByText('card-name')).toBeInTheDocument();
  });

  it('should loads initial data', async () => {
    const apiGetMocked = jest.mocked(api.get);

    apiGetMocked.mockResolvedValueOnce({
      data: {
        data: card,
      },
    });

    const context = {
      params: { id: 'card-id' } as ParsedUrlQuery,
    };

    const response = await getServerSideProps(
      context as GetServerSidePropsContext,
    );

    expect(response).toEqual({ props: { card } });
  });
});
