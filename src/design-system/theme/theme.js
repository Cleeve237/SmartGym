import * as tokens from '../tokens';

const theme = {
  colors: tokens.colors,
  semantic: tokens.semantic,
  typography: tokens.typography,
  spacing: tokens.spacing,
  radius: tokens.radius,
  shadows: tokens.shadows,
  breakpoints: tokens.breakpoints,
  mediaQueries: tokens.mediaQueries,
  animations: tokens.animations,
  zIndex: tokens.zIndex,
  transitions: tokens.transitions,
  layout: tokens.layout,
};

export function tokenValue(path) {
  return path.split('.').reduce((obj, key) => obj?.[key], theme) ?? path;
}

export default theme;
