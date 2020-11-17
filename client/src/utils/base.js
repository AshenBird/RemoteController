const isObjEmpty = sample => {
  if (Array.isArray(sample)) return sample.length === 0;
  return Object.keys(sample) === 0;
};

export const isUndef = sample => typeof sample === "undefined";

export const isEmpty = sample => {
  if (!sample) return true;
  if (typeof sample === "object") return isObjEmpty(sample);
  if (sample instanceof Map || sample instanceof Set) return sample.size === 0;
};
