import clsx from 'clsx';
import { ButtonHTMLAttributes, DetailedHTMLProps, FC, useMemo } from 'react';
import { Size } from 'types';
import styles from './button.module.scss';
type HtmlProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

interface Props extends HtmlProps {
  bold?: boolean;
  size?: Size;
}
export const Button: FC<Props> = ({ bold, size, ...props }) => {
  const className = useMemo(() => {
    const results = ['button', styles.button, props.className];

    results.push(styles[size]);

    if (bold) {
      results.push(styles.bold);
    }

    return clsx(results);
  }, [bold, size, props.className]);
  return (
    <button
      {...props}
      className={className}
    />
  );
};

Button.defaultProps = {
  bold: false,
  size: 'medium'
};

export default Button;
