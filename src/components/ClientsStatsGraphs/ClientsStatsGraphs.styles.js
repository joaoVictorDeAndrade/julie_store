import styled from "styled-components";

export const GraphContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    padding: 2rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 425px) {
        grid-template-columns: 1fr;
    }
`

export const GraphWrapper = styled.div`
    border-radius: 1rem;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
`