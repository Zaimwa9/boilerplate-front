const pxtorem = (size: number) => `${size / 16}rem`;

export type Spacing =
  | 'none'
  | 'space0'
  | 'space1'
  | 'space2'
  | 'space3'
  | 'space4'
  | 'space5'
  | 'space6'
  | 'space7'
  | 'space8'
  | 'space9'
  | 'space10'
  | 'space11'
  | 'space14'
  | 'space16'
  | 'space19'
  | 'space20'
  | 'space25'
  | 'space26'
  | 'space32'
  | 'space34'
  | 'space56'
  | 'space60'
  | 'space76'
  | number;

export type spacingTypes = {
  [space in Spacing]: string;
};

export const spacing: spacingTypes = {
  none: '0',
  space0: `${pxtorem(5)}`,
  space1: `${pxtorem(10)}`,
  space2: `${pxtorem(20)}`,
  space3: `${pxtorem(30)}`,
  space4: `${pxtorem(40)}`,
  space5: `${pxtorem(50)}`,
  space6: `${pxtorem(60)}`,
  space7: `${pxtorem(70)}`,
  space8: `${pxtorem(80)}`,
  space9: `${pxtorem(90)}`,
  space10: `${pxtorem(100)}`,
  space11: `${pxtorem(110)}`,
  space14: `${pxtorem(140)}`,
  space16: `${pxtorem(160)}`,
  space19: `${pxtorem(190)}`,
  space20: `${pxtorem(200)}`,
  space25: `${pxtorem(250)}`,
  space26: `${pxtorem(260)}`,
  space32: `${pxtorem(320)}`,
  space34: `${pxtorem(340)}`,
  space56: `${pxtorem(560)}`,
  space60: `${pxtorem(600)}`,
  space76: `${pxtorem(760)}`,
};
