import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 20px 0;
  background: ${(props) => props.theme.color.white};
  border-radius: 5px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  box-sizing: border-box;
  margin: 0 0 20px;
  padding: 0 20px;
  color: ${(props) => props.theme.color.black};
  font-weight: 600;
  font-size: 12px;
  line-height: 1;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

const Checkbox = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  clip: rect(0 0 0 0);
`;

const Label = styled.label`
  position: relative;
  display: block;
  box-sizing: border-box;
  padding: 0 20px 0 50px;
  color: ${(props) => props.theme.color.black};
  font-size: 13px;
  line-height: 40px;
  cursor: pointer;
  user-select: none;

  &:before {
    position: absolute;
    top: 50%;
    left: 20px;
    box-sizing: border-box;
    width: 20px;
    height: 20px;
    margin-top: -10px;
    border: 1px solid #9abbce;
    border-radius: 2px;
    content: '';
  }

  &:hover {
    background: #f1fcff;
  }

  ${Checkbox}:focus + & {
    outline: -webkit-focus-ring-color auto 1px;
  }

  ${Checkbox}:checked + &:before {
    background-image: url("data:image/svg+xml,%3Csvg fill='%232196F3' viewBox='0 0 12 8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 8L0 4l1-1 3 3 7-6 1 1-8 7z' /%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 12px auto;
    border-color: ${(props) => props.theme.color.blue};
  }
`;

const Filter = ({ stopsCount, handleChange }) => (
  <Wrapper>
    <Title>Количество пересадок</Title>
    <Checkbox
      id="all"
      name="all"
      type="checkbox"
      checked={stopsCount.all}
      onChange={handleChange}
    />
    <Label htmlFor="all">Все</Label>
    <Checkbox
      id="zero"
      name="0"
      type="checkbox"
      checked={stopsCount['0']}
      onChange={handleChange}
    />
    <Label htmlFor="zero">Без пересадок</Label>
    <Checkbox
      id="one"
      name="1"
      type="checkbox"
      checked={stopsCount['1']}
      onChange={handleChange}
    />
    <Label htmlFor="one">1 пересадка</Label>
    <Checkbox
      id="two"
      name="2"
      type="checkbox"
      checked={stopsCount['2']}
      onChange={handleChange}
    />
    <Label htmlFor="two">2 пересадки</Label>
    <Checkbox
      id="three"
      name="3"
      type="checkbox"
      checked={stopsCount['3']}
      onChange={handleChange}
    />
    <Label htmlFor="three">3 пересадки</Label>
  </Wrapper>
);

export default Filter;
