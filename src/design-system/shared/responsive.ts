import { Spacing } from "./spacing";
import { Alignments } from "./flex";
import { sm, md, lg, xl } from "./mediav2";
import { theme } from "../index";

// Spacing prop per breakpoint
export type BreakpointsSpacing = {
  xs?: Spacing;
  sm?: Spacing;
  md?: Spacing;
  lg?: Spacing;
  xl?: Spacing;
};

// Converted spacing prop into css rule
export type ConvertedSpacing = {
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
};

export type BreakpointsAlignments = {
  xs?: Alignments;
  sm?: Alignments;
  md?: Alignments;
  lg?: Alignments;
  xl?: Alignments;
};

export type ConvertedAlignments = {
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
};

export const getAlignments = (
  elem?: BreakpointsAlignments
): { xs: string; sm: string; md: string; lg: string; xl: string } => ({
  xs: parseAlignments(elem?.xs),
  sm: parseAlignments(elem?.sm),
  md: parseAlignments(elem?.md),
  lg: parseAlignments(elem?.lg),
  xl: parseAlignments(elem?.xl),
});

export const parseAlignments = (input?: Alignments): string => {
  if (input) {
    const value = theme.alignments[input];
    return `align-items: ${value}`;
  } else {
    return "";
  }
};

// Convert Spacing values to css rules, per breakpoint
export const convertSpacing = (
  rule: string,
  elem?: BreakpointsSpacing
): { xs: string; sm: string; md: string; lg: string; xl: string } => ({
  xs: getSpacing(rule, elem?.xs),
  sm: getSpacing(rule, elem?.sm),
  md: getSpacing(rule, elem?.md),
  lg: getSpacing(rule, elem?.lg),
  xl: getSpacing(rule, elem?.xl),
});

// Convert Spacing value to css rule
const getSpacing = (rule: string, input?: Spacing): string => {
  if (input) {
    const value =
      typeof input === "number" ? `${input}px` : theme.spacing[input];
    return `${rule}: ${value}`;
  } else {
    return "";
  }
};

// Print variations of a CSS rule for all breakpoints
export const printBreakpointRules = (
  rule: ConvertedSpacing | ConvertedAlignments
): string => `
  ${rule.xs};
  ${sm(`
    ${rule.sm};
  `)}
  ${md(`
    ${rule.md};
  `)}
  ${lg(`
    ${rule.lg};
  `)}
  ${xl(`
    ${rule.xl};
  `)}
`;
