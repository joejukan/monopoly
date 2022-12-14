import { CSSProperties } from 'react';
import { Direction, Place } from 'types';
import { getPlaceTransform, getOrientation, capitalize, getCurrency, getValue } from 'utils';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiamond, faFaucet, faLightbulb, faQuestion } from '@fortawesome/free-solid-svg-icons';

import chestSrc from 'images/places/chest.png';
import goSrc from 'images/places/go.png';
import jailSrc from 'images/places/jail.png';
import luxurySrc from 'images/places/luxury.png';
import parkingSrc from 'images/places/parking.png';
import policeSrc from 'images/places/police.png';
import trainSrc from 'images/places/train.png';

import styles from './place.module.scss';

export function renderPlace(place: Place, direction: Direction) {
  switch (place.type) {
    case 'chance':
      return renderChancePlace(place, direction);
    case 'chest':
      return renderChestPlace(place, direction);
    case 'go':
      return renderGoPlace(place, direction);
    case 'jail':
      return renderJailPlace(place, direction);
    case 'land':
      return renderLandPlace(place, direction);
    case 'parking':
      return renderParkingPlace(place, direction);
    case 'police':
      return renderPolicePlace(place, direction);
    case 'station':
      return renderStationPlace(place, direction);
    case 'tax':
      return renderTaxPlace(place, direction);
    case 'utility':
      return renderUtilityPlace(place, direction);
  }
}

export function renderChancePlace(place: Place, direction: Direction) {
  const transform = getPlaceTransform(direction);
  const orientation = getOrientation(direction);
  return (
    <>
      <div
        className={styles.container}
        style={{ width: orientation === 'horizontal' && 30, [`margin${capitalize(direction)}`]: 20 }}>
        <div style={{ transform }}>
          <span className={styles.bold}>CHANCE</span>
        </div>
      </div>
      <div className={styles.container}>
        <div style={{ transform, color: place.color }}>
          <FontAwesomeIcon
            icon={faQuestion}
            size={'6x'}
          />
        </div>
      </div>
    </>
  );
}

export function renderChestPlace(place: Place, direction: Direction) {
  const size = 64;
  const transform = getPlaceTransform(direction);
  const orientation = getOrientation(direction);

  return (
    <>
      <div
        className={styles.container}
        style={{ width: orientation === 'horizontal' && 30, [`margin${capitalize(direction)}`]: 20 }}>
        <div style={{ transform }}>
          <span className={styles.bold}>Community Chest</span>
        </div>
      </div>
      <div className={styles.container}>
        <img
          src={chestSrc}
          alt={chestSrc}
          width={size}
          style={{ transform }}
        />
      </div>
    </>
  );
}

export function renderGoPlace(place: Place, direction: Direction) {
  const fontSize = 64;
  const fontFamily = `'Monda', sans-serif`;
  const imgSize = 96;
  return (
    <div
      className={styles.container}
      style={{ width: '100%', height: '100%', fontSize: 11, flexDirection: 'column' }}>
      <div style={{ transform: 'rotate(315deg)' }}>
        <span className={styles.bold}>COLLECT</span>
        <br />
        <span className={styles.bold}>{getCurrency(200)} SALARY</span>
        <br />
        <span className={styles.bold}>AS YOU PASS BY</span>
        <br />
        <span
          className={styles.bold}
          style={{ fontSize, fontFamily, position: 'relative', bottom: 16 }}>
          GO
        </span>
      </div>
      <img
        src={goSrc}
        alt={goSrc}
        width={imgSize}
        style={{ position: 'relative', bottom: 8 }}
      />
    </div>
  );
}

export function renderJailPlace(place: Place, direction: Direction) {
  const position = 'relative';
  const transform = 'rotate(45deg)';
  const width = 200;
  const bottom = 33;
  const left = 19;
  return (
    <div>
      <img
        src={jailSrc}
        alt={jailSrc}
        width={width}
        style={{ position, left, bottom, transform }}
      />
    </div>
  );
}

export function renderLandPlace(place: Place, direction: Direction) {
  const orientation = getOrientation(direction);
  const gap = 35;
  const border = '1px solid black';

  const moneyStyle: CSSProperties = {
    position: 'absolute',
    transform: getPlaceTransform(direction),
    top: getValue<Direction>(direction, { top: 13 }),
    bottom: getValue<Direction>(direction, { bottom: 13, left: 46, right: 46 }),
    left: getValue<Direction>(direction, { left: 4 }),
    right: getValue<Direction>(direction, { right: 4 })
  };
  return (
    <>
      <div
        className={styles.container}
        style={{
          backgroundColor: place.color,
          width: orientation === 'horizontal' && gap,
          height: orientation === 'vertical' && gap,
          [`border${capitalize(direction)}`]: border
        }}>
        <div style={{ transform: getPlaceTransform(direction) }}>
          <span className={styles.bold}>{place.name}</span>
        </div>
      </div>
      <div
        className={styles.bold}
        style={moneyStyle}>
        <span>{getCurrency(place.cost)}</span>
      </div>
    </>
  );
}

export function renderParkingPlace(place: Place, direction: Direction) {
  const size = 96;
  return (
    <div
      className={styles.container}
      style={{ width: '100%', height: '100%', fontSize: 16 }}>
      <div style={{ transform: 'rotate(135deg)' }}>
        <span className={styles.bold}>FREE</span>
        <img
          src={parkingSrc}
          alt={parkingSrc}
          width={size}
        />
        <span className={styles.bold}>PARKING</span>
      </div>
    </div>
  );
}

export function renderPolicePlace(place: Place, direction: Direction) {
  const size = 96;
  return (
    <div
      className={styles.container}
      style={{ width: '100%', height: '100%', fontSize: 16 }}>
      <div style={{ transform: 'rotate(225deg)' }}>
        <span className={styles.bold}>GO TO</span>
        <img
          src={policeSrc}
          alt={policeSrc}
          width={size}
        />
        <span className={styles.bold}>JAIL</span>
      </div>
    </div>
  );
}

export function renderStationPlace(place: Place, direction: Direction) {
  const size = 64;
  const transform = getPlaceTransform(direction);
  const orientation = getOrientation(direction);
  const flexDirection: CSSProperties['flexDirection'] =
    direction === 'left'
      ? 'row-reverse'
      : direction === 'right'
      ? 'row'
      : direction === 'top'
      ? 'column-reverse'
      : 'column';
  return (
    <>
      <div
        className={styles.container}
        style={{ width: orientation === 'horizontal' && 30, [`margin${capitalize(direction)}`]: 20 }}>
        <div style={{ transform }}>
          <span className={styles.bold}>{place.name}</span>
        </div>
      </div>
      <div
        className={styles.container}
        style={{ flexDirection }}>
        <img
          src={trainSrc}
          alt={trainSrc}
          width={size}
          style={{ transform }}
        />
        <div
          className={styles.bold}
          style={{ transform, marginBottom: direction === 'top' && 20, marginTop: direction === 'bottom' && 20 }}>
          <span>{getCurrency(place.cost)}</span>
        </div>
      </div>
    </>
  );
}

export function renderTaxPlace(place: Place, direction: Direction) {
  const size = 64;
  const transform = getPlaceTransform(direction);
  const orientation = getOrientation(direction);

  const moneyStyle: CSSProperties = {
    position: 'absolute',
    transform: getPlaceTransform(direction),
    bottom: getValue<Direction>(direction, { bottom: 13, right: 48 }),
    right: getValue<Direction>(direction, { right: 4 })
  };

  return (
    <>
      <div
        className={styles.container}
        style={{ width: orientation === 'horizontal' && 30, [`margin${capitalize(direction)}`]: 20 }}>
        <div style={{ transform }}>
          <span className={styles.bold}>{place.name}</span>
        </div>
      </div>
      <div
        className={styles.container}
        style={{ marginTop: place.name === 'Income Tax' && 25 }}>
        {place.name === 'Luxury Tax' ? (
          <img
            src={luxurySrc}
            alt={luxurySrc}
            width={size}
            style={{ transform }}
          />
        ) : (
          <FontAwesomeIcon
            icon={faDiamond}
            size={'2x'}
          />
        )}
      </div>
      <div
        className={styles.bold}
        style={moneyStyle}>
        <span>{getCurrency(place.cost)}</span>
      </div>
    </>
  );
}

export function renderUtilityPlace(place: Place, direction: Direction) {
  const transform = getPlaceTransform(direction);
  const orientation = getOrientation(direction);

  return (
    <>
      <div
        className={styles.container}
        style={{ width: orientation === 'horizontal' && 30, [`margin${capitalize(direction)}`]: 20 }}>
        <div style={{ transform }}>
          <span className={styles.bold}>{place.name}</span>
        </div>
      </div>
      <div
        className={styles.container}
        style={{ flexDirection: orientation === 'horizontal' ? 'row-reverse' : 'column-reverse' }}>
        <div style={{ transform, color: place.name === 'Electric Company' ? 'yellow' : 'blue' }}>
          <FontAwesomeIcon
            icon={place.name === 'Electric Company' ? faLightbulb : faFaucet}
            size={place.name === 'Electric Company' ? '5x' : '6x'}
          />
        </div>
        <div
          className={styles.bold}
          style={{
            transform,
            marginRight: getValue<Direction>(direction, { left: 16 }),
            marginBottom: getValue<Direction>(direction, { top: 6 })
          }}>
          <span>{getCurrency(place.cost)}</span>
        </div>
      </div>
    </>
  );
}
