export const breakpoints = {
  mobile: '576px',
  tablet: '768px',
  laptop: '992px',
  desktop: '1200px',
  wide: '1400px',
};

export const mediaQueries = {
  mobile: `(min-width: ${breakpoints.mobile})`,
  tablet: `(min-width: ${breakpoints.tablet})`,
  laptop: `(min-width: ${breakpoints.laptop})`,
  desktop: `(min-width: ${breakpoints.desktop})`,
  wide: `(min-width: ${breakpoints.wide})`,
  mobileDown: `(max-width: ${breakpoints.mobile})`,
  tabletDown: `(max-width: ${breakpoints.tablet})`,
  laptopDown: `(max-width: ${breakpoints.laptop})`,
};

export const container = {
  sm: '540px',
  md: '720px',
  lg: '960px',
  xl: '1140px',
  xxl: '1320px',
};
