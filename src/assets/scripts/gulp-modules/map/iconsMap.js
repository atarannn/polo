import mainPin from '../../../images/map/logo.svg';
import metroPin from '../../../images/map/metro.svg';
import barPin from '../../../images/map/bar.svg';


const ICON_NAMES = {
  main: 'main',
  metro: 'metro',
  bar: 'bar',
};

export const MAP_ICONS_NAME = {
  [ICON_NAMES.main]: 'icon-logo',
  [ICON_NAMES.metro]: 'icon-metro',
  [ICON_NAMES.bar]: 'icon-bar',
};

export const MARKER_ICONS = {
  [ICON_NAMES.main]: mainPin,
  [ICON_NAMES.metro]: metroPin,
  [ICON_NAMES.bar]: barPin,
};
