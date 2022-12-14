import { Entity } from './Entity';
import { Place } from './Place';
import { Player } from './Player';
import { Reason } from './Reason';

export interface Move extends Entity {
  from: Place;
  to: Place;
  reason: Reason;
  player: Player;
}
