import styled from "styled-components";

interface StyledResultHeaderProps {
  name?: string;
}

export const StyledResultHeaderText = styled.h1`
  font-size: 28px;
  line-height: 32px;
`;

export const StyledResultLabelText = styled.h2`
  font-size: 20px;
  color: ${(props: StyledResultHeaderProps) =>
    props.name === "[ Unknown Label ]" ? "red" : "black"};
`;

export const StyledResultBandText = styled.h3`
  font-size: 18px;
`;

export const StyledResultFestivalText = styled.p`
  font-size: 15px;
`;

export const StyledResult = styled.div`
  min-width: 100%;
`;

export const StyledResultFestival = styled.div`
  box-sizing: border-box;
  border-radius: 25px;
  min-width: 100%;
  margin: 1rem 0;
  padding: 0 1rem;
  border: 1px solid #92bf1e;
`;
