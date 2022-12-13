import { FC, useMemo } from 'react';
import clsx from 'clsx';
import { Direction, Place } from 'types';
import { renderPlace } from './utils';
import styles from './place.module.scss';

interface Props {
  direction: Direction;
  place: Place;
}
export const PlaceUi: FC<Props> = ({ direction, place }) => {
  const className: string = useMemo(() => {
    const cls = new Array<string>();
    cls.push('place', styles.place, styles[place.type], styles[direction]);
    if (place?.type === 'parking' || place?.type === 'police' || place.type === 'go' || place?.type === 'jail') {
      cls.push(styles.wide);
    }
    return clsx(cls);
  }, [direction, place]);

  return <div className={className}>{renderPlace(place, direction)}</div>;
};

export default PlaceUi;
