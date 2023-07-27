import Colors from "../../Theme/Colors";
import styled from "styled-components";

export const SelectWrapper = styled.div`
  width: 100%;
  padding: 20px 0;
`;

export const Select = styled.select`
  width: 100%;
  border: 1px solid ${Colors.inputBackground};
  display: block;
  font-size: 1rem;
  padding: 0.8rem;
  border-radius: 1.5rem;
  background: ${Colors.inputBackground};
  transition: 0.2s;
  &:hover {
    outline: none;
    border-color: ${Colors.primary};
  }
  &:focus {
    outline: none;
    border-color: ${Colors.primary};
  }
`; 