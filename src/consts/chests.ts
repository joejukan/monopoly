import { Card } from 'types';
const type: Card['type'] = 'chest';
export const chests = (
  [
    {
      name: 'advance-to-go',
      description: `advance to go (collect $200)`,
      type
    },
    {
      name: 'favorable-bank-error',
      description: `bank error in your favor (collect $200)`,
      type
    },
    {
      name: 'gains-from-stock-sale',
      description: 'from sale of stock you get $45',
      type
    },
    {
      name: 'get-out-of-jail-free',
      description: 'get out of jail free',
      type
    },
    {
      name: 'go-directly-to-jail',
      description: 'go to jail, go directly to jail, do not pass go, do not collect $200',
      type
    },
    {
      name: 'grand-opera-opening',
      description: 'grand opera opening, collect $50 from every player for opening night seats',
      type
    },
    {
      name: 'income-tax-refund',
      description: 'income tax refund (collect $20)'
    }
  ] as Array<Card>
).reduce((collector, chance) => {
  collector.set(chance.name, chance);
  return collector;
}, new Map<string, Card>());
