import { Direction, Place, Range } from 'types';
import { places } from 'consts';
import { isBetween, sortPlaceByPosition } from 'utils';

function getBoardRange(direction: Direction): Range {
  switch (direction) {
    case 'top':
      return { min: 20, max: 30 };
    case 'bottom':
      return { min: 0, max: 10 };
    case 'left':
      return { min: 11, max: 19 };
    case 'right':
      return { min: 31, max: 39 };
  }
}
export function getBoardUiPlaces(direction: Direction): Array<Place> {
  const { min, max } = getBoardRange(direction);
  return Array.from(places.values())
    .filter(({ position }) => isBetween(position, min, max))
    .sort(sortPlaceByPosition);
}
