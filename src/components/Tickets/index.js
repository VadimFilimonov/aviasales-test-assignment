/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import styled from 'styled-components';
import axios from 'axios';
import Ticket from '../Ticket';

const COUNT_TICKETS_TO_SHOW = 5;

const Wrapper = styled.section`
  display: grid;
  row-gap: 20px;
`;

const Tickets = (props) => {
  const { searchId, params } = props;
  const [tickets, setTickets] = useState([]);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const fetchTickets = async () => {
      const response = await axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`)
        .catch((e) => {
          if (e.response) {
            // eslint-disable-next-line no-console
            console.error(e.response.status);
          }
        });
      const newTickets = response ? response.data.tickets : [];
      setTickets((t) => [...t, ...newTickets]);
      if (response?.data.stop) {
        setFinished(true);
      } else {
        fetchTickets();
      }
    };
    fetchTickets();
  }, []);

  if (!finished) {
    return null;
  }

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
      })
        .slice(0, COUNT_TICKETS_TO_SHOW)
        .map((ticket) => <Ticket ticket={ticket} key={uuid()} />)}
    </Wrapper>
  );
};

export default Tickets;
