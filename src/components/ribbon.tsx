import styled from "styled-components";

const RibbonWrapper = styled.div<{ type: "success" | "error" }>`
  width: 100%;
  padding: 0.8rem;
  text-align: center;
  font-weight: bold;
  color: #fff;
  background-color: ${({ type }) =>
    type === "success" ? "#66FF66" : "#FF6666"};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

type RibbonProps = {
  message: string;
  type: "success" | "error";
};
const Ribbon = ({ message, type }: RibbonProps) => {
  return <RibbonWrapper type={type}>{message}</RibbonWrapper>;
};

export { Ribbon };
