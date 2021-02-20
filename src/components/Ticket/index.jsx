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
  background: ${(props) => props.theme.color.white};
  border-radius: 5px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, .1);
`;

const Price = styled.div`
  color: ${(props) => props.theme.color.blue};
  font-weight: 600;
  font-size: 24px;
`;

const Logo = styled.img`
  max-width: 110px;
  margin-right: 30px;

  @media screen and (max-width: 700px) {
    margin-right: 0;
  }
`;

const InfoList = styled.dl`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  font-weight: 600;
  column-gap: 20px;

  @media screen and (max-width: 700px) {
    column-gap: 5px;
  }
`;

const InfoTitle = styled.dt`
  color: ${(props) => props.theme.color.gullGray};
  font-size: 12px;
  letter-spacing: .5px;
  text-transform: uppercase;

  @media screen and (max-width: 700px) {
    font-size: 10px;
  }
`;

const InfoDescription = styled.dd`
  margin: 0;
  color: ${(props) => props.theme.color.black};
  font-size: 14px;

  @media screen and (max-width: 700px) {
    font-size: 12px;
  }
`;

const Ticket = ({ ticket }) => (
  <Wrapper>
    <Price>{formatPrice(ticket.price)}</Price>
    <Logo src={`https://pics.avs.io/99/36/${ticket.carrier}.png`} alt="" />
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
        {/* TODO: при отсутствии пересадок в description написать "Прямой" */}
        {segment.stops.length > 0
          && (
          <div>
            <InfoTitle>
              {/* TODO: add plural */}
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
