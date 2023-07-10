import styled from "styled-components"
// import pelo styles.js o select do react para estilizarmos ele por aqui
import Select from "react-select"

export const Container = styled.div`
display: flex;
gap: 1rem;
`

export const SelectElement = styled(Select)`
  font-size: .9rem;

  // para o control do nosso select (o input basicamente)
  .custom-select__control {
    background-color: ${({ theme }) => theme.COLORS.INPUT_BACKGROUND};
    border: none;
    box-shadow: none;
    padding-left: .5rem;
  }

  .custom-select__control:hover,
  .custom-select__control:focus {
  }
`;