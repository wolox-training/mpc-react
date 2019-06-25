import { isArray } from './utils';

export function min(...args) {

  if (args.length === 0) {
    return undefined;
  }
  if (args.length > 1) {
    return Math.min(...args);
  }
  if (isArray(args[0])) {
    return Math.min(...args[0]);
  }
  return Math.min(args);
}

export function copy(args) {

  let copy;

  if (isArray(args)) {
    copy = args.slice();
    return copy;
  }

  copy = Object.assign({}, args);

  return copy;
}