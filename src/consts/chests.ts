import { Card } from 'types';
const type: Card['type'] = 'chest';
export const chests = (
  [
    {
      name: 'advance-to-go',
      description: `advance to go (collect $200)`,
      type,
      action: () => {}
    },
    {
      name: 'favorable-bank-error',
      description: `bank error in your favor (collect $200)`,
      type,
      action: () => {}
    }
  ] as Array<Card>
).reduce((collector, chance) => {
  collector.set(chance.name, chance);
  return collector;
}, new Map<string, Card>());
