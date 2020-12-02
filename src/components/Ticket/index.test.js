import React from 'react';
import { render } from '@testing-library/react';
import Ticket from './index';

test('Ticket 1', () => {
  const ticket = {
    carrier: 'EY',
    price: 44327,
    segments: [
      {
        date: '2020-12-12T11:24:00.000Z',
        destination: 'HKT',
        duration: 1171,
        origin: 'MOW',
        stops: ['SHA', 'BKK', 'DXB'],
      },
      {
        date: '2021-01-01T06:06:00.000Z',
        destination: 'MOW',
        duration: 702,
        origin: 'HKT',
        stops: [],
      },
    ],
  };
  // eslint-disable-next-line react/jsx-props-no-spreading
  const { asFragment } = render(<Ticket ticket={ticket} />);
  expect(asFragment()).toMatchSnapshot();
});
