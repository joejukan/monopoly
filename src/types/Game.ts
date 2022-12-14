import { Entity } from './Entity';
import { Player } from './Player';
import { Transfer } from './Transfer';

export interface Game extends Entity {
  active?: boolean;
  startTime: Date;
  endTime: Date;
  players?: Array<Player>;
  transfers?: Array<Transfer>;
}
