import { FC, useCallback, useMemo, useState } from 'react';
import { rollDice, wait } from 'utils';

import { Button, DieUi, Text } from 'components';

import styles from './board.module.scss';

interface Props {
  dice: [number, number];
  onRoll: (dice: [number, number], rolling: boolean) => any;
}

export const BoardDiceUi: FC<Props> = ({ dice, onRoll }) => {
  const [rolling, setRolling] = useState(false);
  const handleRoll = useCallback(async () => {
    setRolling(true);
    for (let i = 0; i < 3; i++) {
      onRoll([rollDice(), rollDice()], true);
      await wait(300);
    }
    setRolling(false);
    onRoll([rollDice(), rollDice()], false);
  }, [onRoll]);
  return (
    <div className={styles.dice}>
      <DieUi
        value={dice[0]}
        spin={rolling}
      />
      <div className={styles.roll}>
        <Text
          bold
          size={'large'}>
          {dice[0] + dice[1]}
        </Text>
        <Button
          bold
          disabled={rolling}
          onClick={handleRoll}
          style={{ opacity: rolling ? 0.5 : 1 }}>
          ROLL
        </Button>
      </div>
      <DieUi
        value={dice[1]}
        spin={rolling}
      />
    </div>
  );
};

BoardDiceUi.defaultProps = {
  dice: [1, 1],
  onRoll: () => {}
};

export default BoardDiceUi;
