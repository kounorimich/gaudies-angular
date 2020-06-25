import {Work} from '../work';


export function dateCompareFunc(a: Work, b: Work): number {
  if (a.releaseDate > b.releaseDate) {
    return -1;
  }
  if (a.releaseDate < b.releaseDate) {
    return 1;
  }
  return 0;
}
