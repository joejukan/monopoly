import { Place } from 'types';

export const places = new Map<string, Place>()
  .set('Mediterranean Avenue', { name: 'Mediterranean Avenue', color: '#c68c53', cost: 60, position: 1, type: 'land' })
  .set('Baltic Avenue', { name: 'Baltic Avenue', color: '#c68c53', cost: 60, position: 3, type: 'land' })

  .set('Oriental Avenue', { name: 'Oriental Avenue', color: '#ccccff', cost: 100, position: 6, type: 'land' })
  .set('Vermont Avenue', { name: 'Vermont Avenue', color: '#ccccff', cost: 100, position: 8, type: 'land' })
  .set('Connecticut Avenue', { name: 'Connecticut Avenue', color: '#ccccff', cost: 120, position: 9, type: 'land' })

  .set('St. Charles Place', { name: 'St. Charles Place', color: '#ff80ff', cost: 140, position: 11, type: 'land' })
  .set('States Avenue', { name: 'States Avenue', color: '#ff80ff', cost: 140, position: 13, type: 'land' })
  .set('Virginia Avenue', { name: 'Virginia Avenue', color: '#ff80ff', cost: 160, position: 15, type: 'land' })

  .set('St. James Place', { name: 'St. James Place', color: '#ffb84d', cost: 180, position: 16, type: 'land' })
  .set('Tennessee Avenue', { name: 'Tennessee Avenue', color: '#ffb84d', cost: 180, position: 18, type: 'land' })
  .set('New York Avenue', { name: 'New York Avenue', color: '#ffb84d', cost: 200, position: 19, type: 'land' })

  .set('Kentucky Avenue', { name: 'Kentucky Avenue', color: '#ff0000', cost: 220, position: 21, type: 'land' })
  .set('Indiana Avenue', { name: 'Indiana Avenue', color: '#ff0000', cost: 220, position: 23, type: 'land' })
  .set('Illinois Avenue', { name: 'Illinois Avenue', color: '#ff0000', cost: 240, position: 24, type: 'land' })

  .set('Atlantic Avenue', { name: 'Atlantic Avenue', color: '#ffff00', cost: 260, position: 26, type: 'land' })
  .set('Ventnor Avenue', { name: 'Ventnor Avenue', color: '#ffff00', cost: 260, position: 27, type: 'land' })
  .set('Marvin Gardens', { name: 'Marvin Gardens', color: '#ffff00', cost: 280, position: 29, type: 'land' })

  .set('Pacific Avenue', { name: 'Pacific Avenue', color: '#00cc44', cost: 300, position: 31, type: 'land' })
  .set('North Carolina Avenue', {
    name: 'North Carolina Avenue',
    color: '#00cc44',
    cost: 300,
    position: 32,
    type: 'land'
  })
  .set('Pennsylvania Avenue', { name: 'Pennsylvania Avenue', color: '#00cc44', cost: 320, position: 34, type: 'land' })

  .set('Park Place', { name: 'Park Place', color: '#6666ff', cost: 350, position: 37, type: 'land' })
  .set('Boardwalk', { name: 'Boardwalk', color: '#6666ff', cost: 400, position: 39, type: 'land' })

  .set('Reading Railroad', { name: 'Reading Railroad', color: 'transparent', cost: 200, position: 5, type: 'station' })
  .set('Pennsylvania Railroad', {
    name: 'Pennsylvania Railroad',
    color: 'transparent',
    cost: 200,
    position: 15,
    type: 'station'
  })
  .set('B. & O. Railroad', {
    name: 'B. & O. Railroad',
    color: 'transparent',
    cost: 200,
    position: 25,
    type: 'station'
  })
  .set('Short Line', { name: 'Short Line', color: 'transparent', cost: 200, position: 35, type: 'station' })

  .set('Electric Company', {
    name: 'Electric Company',
    color: 'transparent',
    cost: 150,
    position: 12,
    type: 'utility'
  })
  .set('Water Works', { name: 'Water Works', color: 'transparent', cost: 150, position: 28, type: 'utility' })

  .set('First Chance', { name: 'First Chance', color: '#ff80ff', position: 7, type: 'chance' })
  .set('Second Chance', { name: 'Second Chance', color: '#6666ff', position: 22, type: 'chance' })
  .set('Third Chance', { name: 'Third Chance', color: '#ffb84d', position: 36, type: 'chance' })

  .set('First Chest', { name: 'First Chest', color: 'transparent', position: 2, type: 'chest' })
  .set('Second Chest', { name: 'Second Chest', color: 'transparent', position: 17, type: 'chest' })
  .set('Third Chest', { name: 'Third Chest', color: 'transparent', position: 33, type: 'chest' })

  .set('Income Tax', { name: 'Income Tax', color: 'transparent', position: 4, cost: 200, type: 'tax' })
  .set('Luxury Tax', { name: 'Luxury Tax', color: 'transparent', position: 38, cost: 100, type: 'tax' })

  .set('Go', { name: 'Go', type: 'go', position: 0 })
  .set('In Jail', { name: 'In Jail', type: 'jail', position: 10 })
  .set('Free Parking', { name: 'Free Parking', type: 'parking', position: 20 })
  .set('Go to Jail', { name: 'Go to Jail', type: 'police', position: 30 });
