import { ControlPanel, Logo } from "./components";
import styled from "styled-components";

const Description = styled.div`
  font-style: italic;
`;

const HeaderContainer = ({ className }) => (
  <header className={className}>
    <Logo />
    <Description>
      Веб-технологии
      <br />
      Написание кода
      <br />
      Разбор ошибок
    </Description>
    <ControlPanel />
  </header>
);

export const Header = styled(HeaderContainer)`
  display: flex;
  justify-content: space-between;
  height: 120px;
  position: fixed;
  top: 0;
  width: 1000px;
  padding: 20px 40px;
  box-shadow: 0px 10px 20px #000;
  background-color: #fff;
`;
