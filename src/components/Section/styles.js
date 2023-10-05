import styled from "styled-components"

export const Container = styled.div`
   h2 {
      font-size: 1.19rem;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.WHITE_GRAY};
      user-select: none;
   }
`