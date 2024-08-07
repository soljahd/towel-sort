module.exports = function towelSort(matrix) {
  const towelSortedMatrix = [];

  if (matrix == undefined) return [];
  if (matrix.length === 0) return [];

  matrix.forEach((element, index) => {
    if (index % 2 != 0) element.reverse();
    towelSortedMatrix.push(...element);
  });
  
  return towelSortedMatrix;
}