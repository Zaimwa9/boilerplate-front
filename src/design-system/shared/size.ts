const pxtorem = (size: number) => `${size / 16}rem`;

export type Sizes =
  | 'size1'
  | 'size2'
  | 'size3'
  | 'size4'
  | 'size5'
  | 'size6'
  | 'size7'
  | 'size8'
  | 'size9'
  | 'size10';

export type sizeTypes = {
  [size in Sizes]: string;
};

export const size: sizeTypes = {
  size1: `${pxtorem(10)}`,
  size2: `${pxtorem(11)}`,
  size3: `${pxtorem(13)}`,
  size4: `${pxtorem(14)}`,
  size5: `${pxtorem(15)}`,
  size6: `${pxtorem(18)}`,
  size7: `${pxtorem(20)}`,
  size8: `${pxtorem(25)}`,
  size9: `${pxtorem(30)}`,
  size10: `${pxtorem(40)}`,
};

export type Heights =
  | 'height1'
  | 'height2'
  | 'height3'
  | 'height4'
  | 'height5'
  | 'height6'
  | 'height7'
  | 'height8'
  | 'height9';
export type heightTypes = {
  [height in Heights]: string;
};

export const height: heightTypes = {
  height1: `${pxtorem(15)}`,
  height2: `${pxtorem(20)}`,
  height3: `${pxtorem(21)}`,
  height4: `${pxtorem(26)}`,
  height5: `${pxtorem(27)}`,
  height6: `${pxtorem(28)}`,
  height7: `${pxtorem(30)}`,
  height8: `${pxtorem(36)}`,
  height9: `${pxtorem(46)}`,
};

export type Weights = 'regular' | 'medium' | 'semi' | 'bold';

export type weightTypes = {
  [weight in Weights]: string;
};

export const weight: weightTypes = {
  regular: '400',
  medium: '500',
  semi: '600',
  bold: '700',
};
