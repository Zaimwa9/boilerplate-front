export type Alignments = 'center' | 'start' | 'end' | 'between' | 'baseline';

export type alignmentsTypes = {
  [alignment in Alignments]: string;
};

export type positionsTypes = {
  [position in Positions]: string;
};

export const alignments = {
  center: 'center',
  start: 'flex-start',
  end: 'flex-end',
  between: 'space-between',
  baseline: 'baseline',
};

export type Directions = 'row' | 'row-reverse' | 'column' | 'column-reverse';

export type Positions =
  | 'absolute'
  | 'relative'
  | 'fixed'
  | 'static'
  | 'inherit'
  | 'initial';

export const positions = {
  absolute: 'absolute',
  relative: 'relative',
  fixed: 'fixed',
  static: 'static',
  inherit: 'inherit',
  initial: 'initial',
};
