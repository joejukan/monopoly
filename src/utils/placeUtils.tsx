import type { CSSProperties } from 'react';
import { Direction, Place } from 'types';

export function sortPlaceByPosition(a: Place, b: Place) {
  return a.position - b.position;
}

export function getPlaceTransform(direction: Direction): CSSProperties['transform'] {
  switch (direction) {
    case 'top':
      return 'rotate(180deg)';
    case 'left':
      return 'rotate(90deg)';
    case 'right':
      return 'rotate(270deg)';
  }
}
