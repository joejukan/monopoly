import clsx from 'clsx';
import { DetailedHTMLProps, FC, HTMLAttributes, useMemo } from 'react';
import { Size } from 'types';

import styles from './text.module.scss';

type HtmlProps = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

interface Props extends HtmlProps {
  bold?: boolean;
  size?: Size;
}

export const Text: FC<Props> = ({ bold, size, ...props }) => {
  const className = useMemo(() => {
    const results = ['text', styles.text, styles[size]];
    if (bold) {
      results.push(styles.bold);
    }
    return clsx(results);
  }, [bold, size]);
  return (
    <span
      {...props}
      className={className}
    />
  );
};

Text.defaultProps = {
  bold: false,
  size: 'medium'
};

export default Text;
