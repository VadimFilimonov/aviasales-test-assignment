/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import uuid from 'react-uuid';
import styled from 'styled-components';
import axios from 'axios';
import Ticket from '../Ticket';

const Wrapper = styled.section`
  display: grid;
  row-gap: 20px;
`;

const Tickets = (props) => {
  const { searchId, params } = props;
  const [tickets, setTickets] = useState([]);

  useState(() => {
    const fetchTickets = async () => {
      const response = await axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`);
      setTickets(response.data.tickets);
    };
    fetchTickets();
  });

  return (
    <Wrapper>
      {tickets.filter((ticket) => {
        if (!params || params.stopsCount.length === 0) {
          return true;
        }
        const ticketStopsCount = ticket.segments.map((segment) => segment.stops.length);
        const intersection = params.stopsCount.filter(
          (stopCount) => ticketStopsCount.includes(stopCount),
        );
        return intersection > 0;
      }).map((ticket) => (
        <Ticket ticket={ticket} key={uuid()} />
      ))}
    </Wrapper>
  );
};

export default Tickets;
