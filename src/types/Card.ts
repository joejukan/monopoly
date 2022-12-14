import { Entity } from './Entity';
import { Player } from './Player';

export interface Card extends Entity {
  name: string;
  description: string;
  type: CardType;
  action: (player: Player, others?: Array<Player>) => void | Promise<void>;
}

type CardType = 'chance' | 'chest';
