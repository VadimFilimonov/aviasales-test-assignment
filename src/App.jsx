/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import logo from './logo.png';
import Sidebar from './components/Sidebar';
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

  useEffect(() => {
    const fetchSearchId = async () => {
      const response = await axios.get('https://front-test.beta.aviasales.ru/search');
      setSearchId(response.data.searchId);
    };
    fetchSearchId();
  }, []);

  if (!searchId) {
    return null;
  }

  return (
    <StyledApp>
      <Header>
        <img src={logo} alt="logo" />
      </Header>
      <Main>
        <Sort />
        <Tickets searchId={searchId} />
      </Main>
      <Aside>
        <Sidebar />
      </Aside>
    </StyledApp>
  );
};

export default App;
