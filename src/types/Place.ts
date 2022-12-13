export interface Place {
  color?: string;
  name: string;
  cost?: number;
  position: number;
  picture?: string;
  type: PlaceType;
}

export type PlaceType =
  | 'chance'
  | 'chest'
  | 'go'
  | 'jail'
  | 'land'
  | 'parking'
  | 'police'
  | 'station'
  | 'tax'
  | 'utility';
