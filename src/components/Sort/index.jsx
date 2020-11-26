import React, { useState } from 'react';
import styled from 'styled-components';

const Fieldset = styled.fieldset`
  margin-bottom: 20px;
  padding: 0;
  overflow: hidden;
  border: 0;
  border: 1px solid #dfe5ec;
  border-radius: 5px;
`;

const Radio = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  clip: rect(0 0 0 0);
`;

const Label = styled.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 50px;
  padding: 0;
  color: #4a4a4a;
  font-size: 12px;
  letter-spacing: .5px;
  text-transform: uppercase;
  background: #fff;
  border: 0;
  cursor: pointer;

  ${Radio}:checked + & {
    color: #fff;
    background: #2196f3;
  }
`;

const Sort = () => {
  const [sort, setSort] = useState('cheapest');

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <Fieldset>
      <Radio id="cheapest" value="cheapest" type="radio" name="sort" onChange={handleChange} checked={sort === 'cheapest'} />
      <Label htmlFor="cheapest">Самый дешевый</Label>
      <Radio id="fastest" value="fastest" type="radio" name="sort" onChange={handleChange} checked={sort === 'fastest'} />
      <Label htmlFor="fastest">Самый быстрый</Label>
    </Fieldset>
  );
};

export default Sort;
