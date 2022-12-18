import clsx from 'clsx';
import { FC, useMemo } from 'react';
import { Component, ColumnProps, RowProps, Props } from './types';

import styles from './flex.module.scss';

export const Flex: FC<Props> & Component = ({
  align,
  className,
  children,
  direction,
  fullHeight,
  fullWidth,
  justify,
  margin,
  padding,
  reverse,
  style,
  wrap
}) => {
  const cls = useMemo(() => {
    const segments = new Array<any>();
    segments.push('flex');
    className && segments.push(className);
    segments.push(styles.root);
    segments.push(direction);
    segments.push({ reverse });

    if (fullHeight) {
      segments.push('full-height');
    }

    if (fullWidth) {
      segments.push('full-width');
    }

    if (align) {
      segments.push(`align-${align}`);
    }

    if (justify) {
      segments.push(`justify-${justify}`);
    }

    if (margin) {
      segments.push(`margin-${margin}`.toLowerCase());
    }

    if (padding) {
      segments.push(`padding-${padding}`.toLowerCase());
    }

    if (typeof wrap === 'boolean') {
      segments.push(wrap ? 'wrap' : 'no-wrap');
    } else if (wrap === 'reverse') {
      segments.push('wrap-reverse');
    }

    return clsx(segments);
  }, [align, className, direction, fullHeight, fullWidth, justify, margin, padding, reverse, wrap]);

  return (
    <div
      className={cls}
      style={style}>
      {children}
    </div>
  );
};

Flex.defaultProps = {
  align: 'top',
  className: null,
  direction: 'column',
  justify: 'left',
  reverse: false,
  style: {},
  wrap: false
};
export default Flex;

export const FlexColumn: FC<ColumnProps> = (props) => (
  <Flex
    {...props}
    direction={'column'}
  />
);

export const FlexRow: FC<RowProps> = (props) => (
  <Flex
    {...props}
    direction={'row'}
  />
);

Flex.Column = FlexColumn;
Flex.Row = FlexRow;
