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
  const [displayedTickets, setDisplayedTickets] = useState([]);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`);
        setTickets((prevTickets) => [...prevTickets, ...response.data.tickets]);
        if (response?.data.stop) {
          setFinished(true);
        } else {
          fetchTickets();
        }
      } catch (e) {
        if (e.response.status === 500) {
          fetchTickets();
        }
      }
    };
    fetchTickets();
  }, []);

  useEffect(() => {
    setDisplayedTickets(() => (
      tickets
        .filter((ticket) => {
          if (!params || params.stopsCount.length === 0) {
            return true;
          }
          const ticketStopsCount = ticket.segments.map((segment) => segment.stops.length);
          const intersection = params.stopsCount.filter(
            (stopCount) => ticketStopsCount.includes(stopCount),
          );
          return intersection > 0;
        })
        .sort((a, b) => {
          if (params.sort === 'cheapest') {
            if (a.price < b.price) {
              return -1;
            }
            if (a.price > b.price) {
              return 1;
            }
            return 0;
          }
          const aDuration = a.segments.reduce((acc, { duration }) => acc + duration, 0);
          const bDuration = b.segments.reduce((acc, { duration }) => acc + duration, 0);
          if (aDuration < bDuration) {
            return -1;
          }
          if (aDuration > bDuration) {
            return 1;
          }
          return 0;
        })
        .slice(0, COUNT_TICKETS_TO_SHOW)
    ));
  }, [params, finished]);

  if (!finished) {
    return (
      <Wrapper>
        Подождите...
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {displayedTickets.map((ticket) => <Ticket ticket={ticket} key={uuid()} />)}
    </Wrapper>
  );
};

export default Tickets;
