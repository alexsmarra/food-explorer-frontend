import styled from "styled-components"
// import pelo styles.js o select do react para estilizarmos ele por aqui
import Select from "react-select"

export const Container = styled.div`
display: flex;
gap: 1rem;
`

export const SelectElement = styled(Select)`
  font-size: .9rem;

  .custom-select__input-container {
    color: ${({ theme }) => theme.COLORS.PLACEHOLDER_INPUT_COLOR};
  }

  // para o control do nosso select (o input basicamente)
  .custom-select__control {
    background-color: ${({ theme }) => theme.COLORS.INPUT_BACKGROUND};
    border: none;
    box-shadow: none;
    padding-left: .5rem;
  }

  .custom-select__option-- {
    color: black;
    background-color: ${({ theme }) => theme.COLORS.INPUT_BACKGROUND};
  }

  .css-1jj59y3-MenuList2 {
    background: black;
  }

  .custom-select__option--is-selected {
    color: black;
  }

  .css-d7l1ni-option {
    background-color: ${({ theme }) => theme.COLORS.INPUT_BACKGROUND};
  }

  .css-10wo9uf-option {
    background-color: ${({ theme }) => theme.COLORS.INPUT_BACKGROUND};
  }

  .css-1dimb5e-singleValue {
    color: ${({ theme }) => theme.COLORS.LABEL_COLOR};
  }
`;
