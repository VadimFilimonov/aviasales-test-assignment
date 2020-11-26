/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import logo from './logo.png';
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

const Sidebar = styled.section`
  padding: 20px 0;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, .1);
`;

const SidebarTitle = styled.h2`
  box-sizing: border-box;
  margin: 0 0 20px;
  padding: 0 20px;
  color: #4a4a4a;
  font-weight: 600;
  font-size: 12px;
  line-height: 1;
  letter-spacing: .5px;
  text-transform: uppercase;
`;

const SidebarCheckbox = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  clip: rect(0 0 0 0);
`;

const SidebarLabel = styled.label`
  position: relative;
  display: block;
  box-sizing: border-box;
  padding: 0 20px 0 50px;
  color: #4a4a4a;
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
    content: "";
  }

  &:hover {
    background: #f1fcff;
  }

  ${SidebarCheckbox}:focus + & {
    outline: -webkit-focus-ring-color auto 1px;
  }

  ${SidebarCheckbox}:checked + &:before {
    background-image: url("/images/checked.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 12px auto;
    border-color: #2196f3;
  }
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
        <Sidebar>
          <SidebarTitle>Количество пересадок</SidebarTitle>
          <SidebarCheckbox
            id="all"
            value="all"
            type="checkbox"
            name="transfers"
          />
          <SidebarLabel htmlFor="all">Все</SidebarLabel>
          <SidebarCheckbox
            id="transfer0"
            value="transfer0"
            type="checkbox"
            name="transfers"
          />
          <SidebarLabel htmlFor="transfer0">Без пересадок</SidebarLabel>
          <SidebarCheckbox
            id="transfer1"
            value="transfer1"
            type="checkbox"
            name="transfers"
          />
          <SidebarLabel htmlFor="transfer1">1 пересадка</SidebarLabel>
          <SidebarCheckbox
            id="transfer2"
            value="transfer2"
            type="checkbox"
            name="transfers"
          />
          <SidebarLabel htmlFor="transfer2">2 пересадки</SidebarLabel>
          <SidebarCheckbox
            id="transfer3"
            value="transfer3"
            type="checkbox"
            name="transfers"
          />
          <SidebarLabel htmlFor="transfer3">3 пересадки</SidebarLabel>
        </Sidebar>
      </Aside>
    </StyledApp>
  );
};

export default App;
