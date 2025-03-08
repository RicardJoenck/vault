import styled from "styled-components";

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #999;
  }
`;

export { Input };
