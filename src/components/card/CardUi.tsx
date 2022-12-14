import { CSSProperties, FC, useMemo } from 'react';
import clsx from 'clsx';
import { Card } from 'types';
import { chests } from 'consts';

import styles from './card.module.scss';

interface Props {
  name?: string;
  type?: Card['type'];
  style?: CSSProperties;

  onClick?: () => void;
}
export const CardUi: FC<Props> = ({ name, type, onClick, ...props }) => {
  const src = useMemo(() => {
    const path = chests.has(name) ? `images/${type}s/${name}.webp` : `images/places/${type}.png`;
    return path;
  }, [name, type]);

  const height = useMemo(() => (name ? 150 : 100), [name]);

  const cls = useMemo(() => {
    const segments = [styles.card];
    if (!name) {
      segments.push(styles.none);
    }
    return clsx(segments);
  }, [name]);

  const style: CSSProperties = useMemo(
    () => ({
      ...props.style,
      transform: name ? 'rotate(0deg)' : props.style.transform
    }),
    [name, props.style]
  );

  const contentCls = useMemo(() => {
    const segments = [styles.content];
    if (!name) {
      segments.push(styles.none);
    }
    return clsx(segments);
  }, [name]);

  return (
    <div
      className={cls}
      style={style}
      onClick={onClick}>
      <div className={contentCls}>
        <img
          src={src}
          alt={src}
          height={height}
        />
      </div>
    </div>
  );
};

CardUi.defaultProps = {
  type: 'chest',
  style: {
    top: 320,
    left: 550,
    transform: 'rotate(135deg)'
  },
  onClick: () => {}
};

export default CardUi;
