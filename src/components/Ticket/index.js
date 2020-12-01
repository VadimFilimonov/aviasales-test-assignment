/* eslint-disable react/prop-types */
import React from 'react';
import uuid from 'react-uuid';
import styled from 'styled-components';
import { convertToTime, convertToDuration } from '../../utilities/date';

const formatPrice = (price) => (
  new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(price).replace(',00', '')
);

const Wrapper = styled.article`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, .1);
`;

const Price = styled.div`
  color: #2196f3;
  font-weight: 600;
  font-size: 24px;
`;

const InfoList = styled.dl`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  font-weight: 600;
  column-gap: 20px;
`;

const InfoTitle = styled.dt`
  color: #a0b0b9;
  font-size: 12px;
  letter-spacing: .5px;
  text-transform: uppercase;
`;

const InfoDescription = styled.dd`
  margin: 0;
  color: #4a4a4a;
  font-size: 14px;
`;

const Ticket = ({ ticket }) => (
  <Wrapper>
    <Price>{formatPrice(ticket.price)}</Price>
    <img src={`http://pics.avs.io/99/36/${ticket.carrier}.png`} alt="" />
    {ticket.segments.map((segment) => (
      <InfoList key={uuid()}>
        <div>
          <InfoTitle>{[segment.origin, segment.destination].join(' - ')}</InfoTitle>
          <InfoDescription>{convertToTime(segment.date)}</InfoDescription>
        </div>
        <div>
          <InfoTitle>В пути</InfoTitle>
          <InfoDescription>{convertToDuration(segment.duration)}</InfoDescription>
        </div>
        {segment.stops.length > 0
          && (
          <div>
            <InfoTitle>
              {/* TODO: Добавить плюрализацию */}
              {[segment.stops.length, 'пересадки'].join(' ')}
            </InfoTitle>
            <InfoDescription>{segment.stops.join(', ')}</InfoDescription>
          </div>
          )}
      </InfoList>
    ))}
  </Wrapper>
);

export default Ticket;
