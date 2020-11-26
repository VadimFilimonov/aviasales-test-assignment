/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import logo from './logo.png';
import Sidebar from './components/Sidebar';
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

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 20px;
  overflow: hidden;
  border: 1px solid #dfe5ec;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 50%;
  height: 50px;
  padding: 0;
  color: ${(props) => (props.active ? '#fff' : '#4a4a4a')};
  font-size: 12px;
  letter-spacing: .5px;
  text-transform: uppercase;
  background: ${(props) => (props.active ? '#2196f3' : '#fff')};
  border: 0;
  cursor: pointer;
`;

const App = () => {
  const [active, setActive] = useState(0);
  const [searchId, setSearchId] = useState();

  useState(() => {
    const fetchSearchId = async () => {
      const response = await axios.get('https://front-test.beta.aviasales.ru/search');
      setSearchId(response.data.searchId);
    };
    fetchSearchId();
  }, []);

  const handleClick = (index) => () => {
    setActive(index);
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
        <ButtonGroup>
          <Button active={active === 0} onClick={handleClick(0)}>Самый дешевый</Button>
          <Button active={active === 1} onClick={handleClick(1)}>Самый быстрый</Button>
        </ButtonGroup>
        <Tickets searchId={searchId} />
      </Main>
      <Aside>
        <Sidebar />
      </Aside>
    </StyledApp>
  );
};

export default App;
