import { Dispatch } from 'react';
import { Card, Chest } from 'types';

export interface Props {
  chest: Chest;
}

export interface Context extends Props {
  setChest: Dispatch<Chest>;
  pickChest: () => Promise<Chest>;
}
