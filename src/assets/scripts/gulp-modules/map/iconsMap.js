import mainPin from '../../../images/map/logo.svg';
import metroPin from '../../../images/map/metro.svg';

const ICON_NAMES = {
  main: 'main',
  metro: 'metro',
};

export const MAP_ICONS_NAME = {
  [ICON_NAMES.main]: 'icon-logo',
  [ICON_NAMES.metro]: 'icon-metro',
};

export const MARKER_ICONS = {
  [ICON_NAMES.main]: mainPin,
  [ICON_NAMES.metro]: metroPin,
};
