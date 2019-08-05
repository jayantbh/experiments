import {
  all,
  append,
  apply,
  both,
  complement,
  compose,
  cond,
  curry,
  equals,
  has,
  ifElse,
  map,
  merge,
  mergeWith,
  objOf,
  prepend,
  reject,
  type,
  useWith,
  values,
} from 'ramda';

// @ts-ignore
const isObject = compose(
  equals('Object'),
  type
);
// @ts-ignore
const allAreObjects = compose(
  all(isObject),
  values
);
const hasLeft = has('left');
const hasRight = has('right');
const hasBoth = both(hasLeft, hasRight);

// @ts-ignore
const isEqual = both(
  hasBoth,
  compose(
    apply(equals),
    values
  )
);

// @ts-ignore
const markAdded = compose(
  append(undefined),
  values
);
// @ts-ignore
const markRemoved = compose(
  prepend(undefined),
  values
);
const isAddition = both(hasLeft, complement(hasRight));
const isRemoval = both(complement(hasLeft), hasRight);

const objectDiff = curry(_diff);
// @ts-ignore
function _diff(l: any, r: any) {
  return compose(
    map(
      cond([
        [isAddition, markAdded],
        [isRemoval, markRemoved],
        [
          hasBoth,
          ifElse(
            allAreObjects,
            // @ts-ignore
            compose(
              apply(objectDiff),
              values
            ),
            values
          ),
        ],
      ])
    ),
    // @ts-ignore
    reject(isEqual),
    useWith(mergeWith(merge), [map(objOf('left')), map(objOf('right'))])
  )(l, r);
}

export default objectDiff;
