/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import logo from './logo.png';
import Filter from './components/Filter';
import Sort from './components/Sort';
import Tickets from './components/Tickets';

const StyledApp = styled.div`
  display: grid;
  grid-template-areas: "header header"
    "aside main";
  grid-template-columns: 230px 1fr;
  align-content: start;
  box-sizing: border-box;
  max-width: 755px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 50px 0 120px;
  column-gap: 20px;
  row-gap: 60px;
`;

const Header = styled.header`
  display: flex;
  grid-area: header;
  justify-content: center;
`;

const Main = styled.main`
  grid-area: main;
`;

const Aside = styled.aside`
  grid-area: aside;
`;

const App = () => {
  const [searchId, setSearchId] = useState();
  const [params, setParams] = useState({
    sort: 'cheapest',
    stopsCount: {
      all: true,
      0: true,
      1: true,
      2: true,
      3: true,
    },
  });

  useEffect(() => {
    const fetchSearchId = async () => {
      const response = await axios.get('https://front-test.beta.aviasales.ru/search');
      setSearchId(response.data.searchId);
    };
    fetchSearchId();
  }, []);

  const handleSortChange = ({ target }) => {
    setParams((prevParams) => ({ ...prevParams, sort: target.value }));
  };

  const handleFilterChange = ({ target }) => {
    const { name, checked } = target;
    setParams((prevParams) => {
      const { stopsCount } = prevParams;
      if (name === 'all') {
        return {
          ...prevParams,
          stopsCount: {
            all: checked,
            0: checked,
            1: checked,
            2: checked,
            3: checked,
          },
        };
      }
      const updatedStopsCount = { ...stopsCount, [name]: checked };
      const all = Object.entries(updatedStopsCount)
        .filter(([key]) => key !== 'all')
        .every(([, value]) => value);
      return { ...prevParams, stopsCount: { ...updatedStopsCount, all } };
    });
  };

  if (!searchId) {
    return null;
  }

  return (
    <StyledApp>
      <Header>
        <img src={logo} alt="logo" />
      </Header>
      <Main>
        <Sort handleChange={handleSortChange} sort={params.sort} />
        <Tickets params={params} searchId={searchId} />
      </Main>
      <Aside>
        <Filter handleChange={handleFilterChange} stopsCount={params.stopsCount} />
      </Aside>
    </StyledApp>
  );
};

export default App;
