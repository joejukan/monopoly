import type { CSSProperties, FC, PropsWithChildren } from 'react';
import { Size } from 'types';

export type FlexAlignment = 'top' | 'bottom' | 'middle' | FlexSpacing;
export type FlexDirection = 'column' | 'row';
export type FlexJustification = 'left' | 'right' | 'center' | FlexSpacing;
export type FlexSpacing = 'around' | 'between' | 'evenly';
export type FlexWrapping = boolean | 'reverse';

export interface Props extends PropsWithChildren {
  align?: FlexAlignment;
  className?: string;
  direction?: FlexDirection;
  fullHeight?: boolean;
  fullWidth?: boolean;
  justify?: FlexJustification;
  margin?: Size;
  padding?: Size;
  reverse?: boolean;
  style?: CSSProperties;
  wrap?: FlexWrapping;
}

export type ColumnProps = Omit<Props, 'direction'>;
export type RowProps = Omit<Props, 'direction'>;

export interface Component {
  Column: FC<ColumnProps>;
  Row: FC<RowProps>;
}
