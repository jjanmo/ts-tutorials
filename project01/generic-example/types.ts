export type OptionType = 'animal' | 'language';

export interface Option<T> {
  type: T;
  value: string;
  url: string;
  selected: boolean;
}
