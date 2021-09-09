export const mediaQuery = (maxWidth: number) => `
  @media (max-width: ${maxWidth}px)
`;

const media = {
  large: mediaQuery(1920),
  medium: mediaQuery(1024), //Desktop
  small: mediaQuery(768), //tablet
  xsmall: mediaQuery(450), //mobile
  custom: mediaQuery,
};

export default media;
