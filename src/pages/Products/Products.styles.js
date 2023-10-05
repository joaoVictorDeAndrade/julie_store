import styled from "styled-components";
import Colors from "../../Theme/Colors";

export const ProductForm = styled.form`
  background: ${Colors.shape};
  border-radius: 1rem;
  margin: 1rem 0;
  padding: 1.2rem;
`;

export const SearchProductWrapper = styled.div`
  display: flex;
  align-items: end;
  gap: 10px;

   @media (max-width: 425px) {
    flex-direction: column;
   }
`;