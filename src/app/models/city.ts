export interface City {
  cityQuery: CityQuery;
  first: CityQuery;
  last: CityQuery;
  limit: number;
  next: CityQuery;
  offset: number;
  previous: CityQuery;
  size: number;
  value: CityData[];
  href: string;
  method: string;
  rel: string[];
}

export interface CityQuery {
  value?: CityQueryValue[];
  href: string;
  method: string;
  rel: string[];
}

export interface CityQueryValue {
  label: null;
  maxLength: null;
  minLength: null;
  name: string;
  options: Option[] | null;
  pattern: null | string;
  required: boolean;
  secret: boolean;
  type: string;
  value: null;
}

export interface Option {
  label: string;
  value: string;
}

export interface CityData {
  id: number;
  name: string;
  state: string;
  country: string;
  coord: Coord;
  href: string;
  method: null;
  rel: null;
}

export interface Coord {
  lat: number;
  lon: number;
}
