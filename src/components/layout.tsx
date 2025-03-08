import styled from "styled-components";

const Layout = styled.div`
  height: 100vh;
  margin: 0 6rem;
  display: grid;
  grid-template-rows: auto 1fr;
`;

const Header = styled.header`
  text-align: center;
  margin: 1rem 0;
  font-size: 1.2rem;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Field = styled.fieldset`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 0.5rem;
  border: none;
`;

export { Layout, Header, Main, Form, Field };
