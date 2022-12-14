import { createContext, FC, useContext, useCallback, useState, PropsWithChildren } from 'react';
import { Chest } from 'types';
import { Context } from './types';
import { chests } from 'consts';

const context = createContext({} as Context);

export function useMonopoly() {
  return useContext(context);
}

const { Provider } = context;

export const MonopolyProvider: FC<PropsWithChildren> = ({ children }) => {
  const [chest, setChest] = useState<Context['chest']>(null);
  const pickChest: Context['pickChest'] = useCallback(() => {
    const list = Array.from(chests.values());
    const index = Math.floor(Math.random() * list.length);
    const item = list[index];
    setChest(item);
    return Promise.resolve(item);
  }, []);
  return <Provider value={{ chest, setChest, pickChest }}>{children}</Provider>;
};

export default MonopolyProvider;
