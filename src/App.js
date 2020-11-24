import styled from "styled-components";
import logo from "./logo.png";

const StyledApp = styled.div`
  display: grid;
  grid-template-areas:
    "header header"
    "aside main";
  grid-template-columns: 230px 1fr;
  column-gap: 20px;
  row-gap: 60px;
  min-height: 100vh;
  align-content: start;
  padding: 50px 100px 120px;
`;

const Header = styled.header`
  grid-area: header;
  display: flex;
  justify-content: center;
`;

const Main = styled.main`
  grid-area: main;
`;

const Aside = styled.aside`
  grid-area: aside;
`;

const Sidebar = styled.section`
  background: #fff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 20px 0;
`;

const SidebarTitle = styled.h2`
  color: #4a4a4a;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
  line-height: 1;
  text-transform: uppercase;
  box-sizing: border-box;
  padding: 0 20px;
  margin: 0 0 20px;
`;

const SidebarCheckbox = styled.input`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
`;

const SidebarLabel = styled.label`
  position: relative;
  font-size: 13px;
  display: block;
  color: #4a4a4a;
  line-height: 40px;
  box-sizing: border-box;
  padding: 0 20px 0 50px;
  cursor: pointer;
  user-select: none;

  &:before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    top: 50%;
    left: 20px;
    margin-top: -10px;
    border: 1px solid #9abbce;
    border-radius: 2px;
    box-sizing: border-box;
  }

  &:hover {
    background: #f1fcff;
  }

  ${SidebarCheckbox}:focus + & {
    outline: -webkit-focus-ring-color auto 1px;
  }

  ${SidebarCheckbox}:checked + &:before {
    background-image: url("/images/checked.svg");
    background-position: center;
    background-size: 12px auto;
    background-repeat: no-repeat;
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
