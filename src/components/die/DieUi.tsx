import { FC, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix
} from '@fortawesome/free-solid-svg-icons';
import styles from './die.module.scss';

interface Props {
  value?: number;
}

export const DieUi: FC<Props> = ({ value }) => {
  const icon = useMemo(() => {
    switch (value) {
      case 1:
        return faDiceOne;
      case 2:
        return faDiceTwo;
      case 3:
        return faDiceThree;
      case 4:
        return faDiceFour;
      case 5:
        return faDiceFive;
      case 6:
        return faDiceSix;
    }
  }, [value]);
  return (
    <div className={styles.die}>
      <FontAwesomeIcon
        inverse
        className={styles.icon}
        icon={icon}
        size={'8x'}
      />
      <div className={styles.background} />
    </div>
  );
};

DieUi.defaultProps = { value: 1 };

export default DieUi;
