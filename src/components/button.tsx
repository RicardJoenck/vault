import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  gap: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  color: #fff;
  padding: 1.1rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  transition: background 0.2s ease-in-out;

  &:hover {
    background-color: #333;
  }
`;

export { Button };
