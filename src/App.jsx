import React from 'react';
import styled from 'styled-components';
import logo from './logo.png';
import 'fontsource-open-sans/400-normal.css';
import 'fontsource-open-sans/600-normal.css';

const StyledApp = styled.div`
  display: grid;
  grid-template-areas: "header header"
    "aside main";
  grid-template-columns: 230px 1fr;
  align-content: start;
  min-height: 100vh;
  padding: 50px 100px 120px;
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

function App() {
  return (
    <StyledApp>
      <Header>
        <img src={logo} className="logo" alt="logo" />
      </Header>
      <Main>
        <div>
          <button type="button">Самый дешевый</button>
          <button type="button">Самый быстрый</button>
        </div>
        <section>
          <article>
            <div>13 400 Р</div>
            <img src="http://picsum.photos/130/25" alt="" />
            <dl>
              <div>
                <dt>MOW - HKT</dt>
                <dd>10:45 - 08:00</dd>
              </div>
              <div>
                <dt>В пути</dt>
                <dd>21ч 15м</dd>
              </div>
              <div>
                <dt>2 пересадки</dt>
                <dd>HKG, JNB</dd>
              </div>
            </dl>
            <dl>
              <div>
                <dt>MOW - HKT</dt>
                <dd>11:20 - 00:50</dd>
              </div>
              <div>
                <dt>В пути</dt>
                <dd>13ч 30м</dd>
              </div>
              <div>
                <dt>1 пересадка</dt>
                <dd>HKG</dd>
              </div>
            </dl>
          </article>
        </section>
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
}

export default App;
