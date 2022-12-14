import { Player } from './Player';
import { Reason } from './Reason';

export interface Transfer {
  amount: number;
  from?: Player;
  to?: Player;
  reason?: Reason;
}
