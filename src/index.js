
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return matrix ? [].concat(...matrix.map((item, i, arr) => i % 2 != 0 ? arr[i].reverse() : arr[i])) : []
}
