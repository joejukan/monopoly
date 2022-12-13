import { Player } from './Player';

export interface Game {
  active: number;
  players: Array<Player>;
}
