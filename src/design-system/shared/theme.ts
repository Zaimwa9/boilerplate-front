import {
  breakpoints as breakpointsv2,
  breakpointsTypes as breakpointsTypesv2,
} from "./breakpointsv2";

import { alignments, alignmentsTypes, positionsTypes, positions } from "./flex";

import { spacing, spacingTypes } from "./spacing";
import { colors, colorsTypes } from "./colors";

import { size, sizeTypes } from "./size";

export interface ThemeProps {
  alignments: alignmentsTypes;
  positions: positionsTypes;
  breakpointsv2: breakpointsTypesv2;
  colors: colorsTypes;
  size: sizeTypes;
  spacing: spacingTypes;
}

export const theme: ThemeProps = {
  alignments,
  positions,
  breakpointsv2,
  colors,
  size,
  spacing,
};
