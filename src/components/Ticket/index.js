/* eslint-disable react/prop-types */
import React from 'react';
import uuid from 'react-uuid';
import styled from 'styled-components';

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
    <Price>
      {ticket.price}
      Р
    </Price>
    <img src={`http://pics.avs.io/99/36/${ticket.carrier}.png`} alt="" />
    {ticket.segments.map((segment) => (
      <InfoList key={uuid()}>
        <div>
          <InfoTitle>{[segment.origin, segment.destination].join(' - ')}</InfoTitle>
          {/* TODO: нормализовать. Из timestamp в человеко-читабельную дату */}
          <InfoDescription>{segment.date}</InfoDescription>
        </div>
        <div>
          <InfoTitle>В пути</InfoTitle>
          {/* TODO: нормализовать. Например: 90 -> 1ч 30м */}
          <InfoDescription>{segment.duration}</InfoDescription>
        </div>
        <div>
          {/* TODO: Не выводить если нет пересадок; Проверить нужна ли плюрализация */}
          <InfoTitle>
            {segment.stops.length}
            пересадки
          </InfoTitle>
          <InfoDescription>{segment.stops.join(', ')}</InfoDescription>
        </div>
      </InfoList>
    ))}
  </Wrapper>
);

export default Ticket;
