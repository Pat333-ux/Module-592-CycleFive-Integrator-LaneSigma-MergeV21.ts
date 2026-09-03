export const integrateSigmaV21 = (matrix) =>
  matrix
    .map(x => x.normalizeV21())
    .sort((a, b) => a.partition.localeCompare(b.partition))
    .reduce((acc, curr) => acc.merge(curr), INIT_SIGMA_STATE);
