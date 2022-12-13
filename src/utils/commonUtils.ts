import { Direction, Orientation } from 'types';

export function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function getCurrency(value: number, decimals = 0) {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(value);
}
//@ts-ignore
export function getValue<K = any, V = any>(key: Direction, record: Partial<Record<K, V>>): V {
  return record[key];
}

export function getOrientation(direction: Direction): Orientation {
  switch (direction) {
    case 'bottom':
    case 'top':
      return 'vertical';
    default:
      return 'horizontal';
  }
}

export function isBetween(value: number, min: number, max: number, exclusive = false) {
  return exclusive ? value > min && value < max : value >= min && value <= max;
}

export function wait(timeout = 1000) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });
}
