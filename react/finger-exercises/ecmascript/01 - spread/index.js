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

  return isArray(args) ? [...args] : { ...args };
}

export function reverseMerge(arr1, arr2) {
  const mergedArr = [...arr2, ...arr1];
  return mergedArr;
}

export function filterAttribs(args) {
  const { a, b, ...restArgs } = args;
  return restArgs;
}
