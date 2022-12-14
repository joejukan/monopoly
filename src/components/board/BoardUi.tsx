import { FC, useState } from 'react';
import clsx from 'clsx';
import { getBoardUiPlaces } from 'utils';
import { useMonopoly } from 'contexts/monopoly';
import { CardUi, PlaceUi } from 'components';
import DiceUi from './BoardDiceUi';
import styles from './board.module.scss';

export const BoardUi: FC = () => {
  const { chest, pickChest, setChest } = useMonopoly();
  const [dice, setDice] = useState<[number, number]>([1, 1]);
  return (
    <div className={clsx('board', styles.board)}>
      <CardUi
        type={'chest'}
        name={chest?.name}
        onClick={() => {
          if (chest) {
            setChest(null);
          } else {
            pickChest();
          }
        }}
      />

      <div className={styles.container}>
        <div className={styles.top}>
          {getBoardUiPlaces('top').map((place) => (
            <PlaceUi
              key={place.name}
              direction={'top'}
              place={place}
            />
          ))}
        </div>
        <div className={styles.middle}>
          <div className={styles.left}>
            {getBoardUiPlaces('left').map((place) => (
              <PlaceUi
                key={place.name}
                direction={'left'}
                place={place}
              />
            ))}
          </div>
          <div className={styles.center}>
            <div className={styles.panel}>
              <DiceUi
                dice={dice}
                onRoll={(values) => setDice([...values])}
              />
            </div>
          </div>
          <div className={styles.right}>
            {getBoardUiPlaces('right').map((place) => (
              <PlaceUi
                key={place.name}
                direction={'right'}
                place={place}
              />
            ))}
          </div>
        </div>
        <div className={styles.bottom}>
          {getBoardUiPlaces('bottom').map((place) => (
            <PlaceUi
              key={place.name}
              direction={'bottom'}
              place={place}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoardUi;
