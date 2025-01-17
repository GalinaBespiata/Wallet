import styled from 'styled-components';

// export const LayoutWrapper = styled.div`
//   min-height: 100vh;
//   display: grid;
//   grid-template-columns: 1fr 5fr;
//   grid-template-rows: auto 1fr auto;
//   grid-template-areas:
//     'header header'
//     'main main'
//     'footer footer';
//   @media screen and (min-width: 768px) {
//     grid-template-areas:
//       'header header'
//       'sidebar main'
//       'footer footer';
//   }
// `;
export const ThemeButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${p => p.theme.color.text_dark};

  position: absolute;
  top: 17px;
  right: 20px;
`;
